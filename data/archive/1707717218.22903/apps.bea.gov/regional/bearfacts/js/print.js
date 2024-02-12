function convertToPdf() {
    var doc = new jsPDF();
    var elementHTML = $('#content').html();
    var specialElementHandlers = {
        '#elementH': function (element, renderer) {
            return true;
        }
    };
    doc.fromHTML(elementHTML, 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });

    // Save the PDF
    doc.save('sample-document.pdf');
}

async function printToPdf(doc) {
	// playground requires you to assign document definition to a variable called dd
	this.getBase64ImageFromURL = function(url) {
		return new Promise((resolve, reject) => {
			var img = new Image();
			img.setAttribute("crossOrigin", "anonymous");
			img.onload = () => {
				var canvas = document.createElement("canvas");
				canvas.width = img.width;
				canvas.height = img.height;
				var ctx = canvas.getContext("2d");
				ctx.drawImage(img, 0, 0);
				var dataURL = canvas.toDataURL("image/png");
				resolve(dataURL);
			};
			img.onerror = error => {
				reject(error);
			};
			img.src = url;
		});
	}
	this.cleanStr = function(str) {
		str = str.replace(/<\/?span.*?>|<\/?.*?>/gi, "");
		str = str.replace(/\s+/gi, " ");
		return str;
	}
	this.MakeLegendImage = function (color) {
		return {
			type: 'ellipse',
			x: 5, y: 5,
			color: color,
			fillOpacity: 1,
			r1: 5, r2: 5
		}
    }
	let charts = bearfacts.data.GetCharts();
	let pcpi_c1 = charts.pcpi_c1;
	let pcpi_c2 = charts.pcpi_c2;

	//await SetChartOptions(pcpi_c1)
	let chartlegend = pcpi_c2.series.length < 2 ? null : {
		margin: [30, 0, 0, 0],
		columns: [
			{
				columnGap: 0,
				width: 10,
				canvas: [this.MakeLegendImage(pcpi_c2.series.getIndex(0).stroke.hex)]
			},
			{text: pcpi_c2.series.getIndex(0).name, color: pcpi_c2.series.getIndex(0).stroke.hex, alignment: 'left', margin: [-5, -1, 0, 0] },
			{
				columnGap: 0,
				width: 10,
				canvas: [this.MakeLegendImage(pcpi_c2.series.getIndex(1).stroke.hex)]
			},
			{ text: pcpi_c2.series.getIndex(1).name, color: pcpi_c2.series.getIndex(1).stroke.hex, alignment: 'left', margin: [-5, -1, 0, 0] },
		]
	}
	let GetImage = async function (chart, w) {
		let width = !w ? 150 : w;
		let img;
		//chart.exporting.dispatchImmediately("exportstarted");
		img = {
			image: await chart.exporting.getImage("png"),
			width: width,
			alignment: "center"
			/*height: height*/
		}
		//chart.exporting.dispatchImmediately("exportfinished");
		return img;
	}
	let GetCPICharts = async function (data) {
		let bfPiedataOld = charts.bfPiedataOld;
		let bfPieDataOldState = charts.bfPieDataOldState;
		let bfPieDataOldUS = charts.bfPieDataOldUS;

		let bfPieData = charts.bfPieData;
		let bfPieDataState = charts.bfPieDataState;
		let bfPieDataUS = charts.bfPieDataUS;

		let table = {
			style: 'table',
			headerRows: 1,
			widths: data.cols.length === 4 ? [50, '*', '*', '*'] : [50, '*', '*'],
			body: []
		}
		let hrow = data.cols.length === 4 ? ['', { text: data.cols[1], style: 'tableHeader' }, { text: data.cols[2], style: 'tableHeader' }, { text: data.cols[3], style: 'tableHeader' }] : ['', { text: data.cols[1], style: 'tableHeader' }, { text: data.cols[2], style: 'tableHeader' }];
		table.body.push(hrow)
		
		let row1 = [{ text: data.rows[0], style: 'tableHeader' }];
		let w = data.cols.length === 4 ? 150 : 230;
		row1.push(await GetImage(bfPiedataOld, w));
		data.cols.length === 4 ? row1.push(await GetImage(bfPieDataOldState, w)) : null;
		row1.push(await GetImage(bfPieDataOldUS, w));

		let row2 = [{ text: data.rows[1], style: 'tableHeader' }];
		row2.push(await GetImage(bfPieData, w));
		data.cols.length === 4 ? row2.push(await GetImage(bfPieDataState, w)) : null;
		row2.push(await GetImage(bfPieDataUS, w));

		table.body.push(row1);
		table.body.push(row2);

		let columns = [];
		data.legend.forEach(function (item) {
			columns.push({
				columnGap: 0,
				width: 10,
				canvas: [this.MakeLegendImage(item.color)]
			});
			columns.push({ text: item.text, color: item.color, alignment: 'left', margin: [-5, -1, 0, 0] });
		})
		row3 = [{ columns: columns, colSpan: data.cols.length, alignment: 'center' }];
		table.body.push(row3);
		
		return table;
    }
	let GetGDP = async function (data) {
		let stack = [];
		if (data.gdps) {
			stack.push({ text: data.gdps.title, style: 'subheader' });
			data.gdps.text.forEach(function (text) {
				stack.push(`${this.cleanStr(text)}\n\n`,)
			});

			stack.push({ text: data.gdpsi.title, style: 'subheader' });
			data.gdpsi.text.forEach(function (text,i) {
				stack.push(`${this.cleanStr(text)}\n${i < data.gdpsi.text.length - 1 ? '\n' : ''}`)
			});
			stack.push({ text: this.cleanStr(data.gdpsi.footnote), style: 'footnote', columnGap: 0, });
			stack.push({ text: data.gdpsi.charts.title, style: 'tableTitle' });
			let table = {
				style: 'table',
				alignment: "center",
				headerRows: 1,
				widths: ['*', '*'],
				heights: [20, 120],
				body: []
			}

			let hrow = [{ text: data.gdpsi.charts.cols[0], style: 'tableHeader' }, { text: data.gdpsi.charts.cols[1], style: 'tableHeader' }];
			table.body.push(hrow)

			let row1 = [];
			row1.push(await GetImage(data.gdpsi.charts.c1, 220));
			row1.push(await GetImage(data.gdpsi.charts.c2, 220));

			table.body.push(row1);
			let columns = [];
			data.gdpsi.charts.legend.forEach(function (item) {
				columns.push({
					columnGap: 0,
					width: 10,
					canvas: [this.MakeLegendImage(item.color)]
				});
				columns.push({ text: item.text, color: item.color, alignment: 'left', margin: [-5, -1, 0, 0] });
			})
			row3 = [{ columns: columns, colSpan: data.gdpsi.charts.cols.length, alignment: 'center' }];
			table.body.push(row3);
			stack.push({ layout: GetCustomHorizontalLayout(), "table": table });
		}
		else {
			if (data.gdpla) {
				stack.push({ text: data.gdpla.title, style: 'subheader' });
				data.gdpla.text.forEach(function (text, i) {
					stack.push(`${this.cleanStr(text)}\n${i < data.gdpla.text.length - 1 ? '\n' : ''}`)
				});
				stack.push({ text: this.cleanStr(data.gdpla.footnote), style: 'footnote', columnGap: 0, });
			}
			stack.push({ text: data.gdpic.title, style: 'subheader' });
			stack.push(`${this.cleanStr(data.gdpic.text)}\n\n`);
			stack.push({ text: data.gdpic.table1title, style: 'tableTitle' });
			stack.push({ layout: GetCustomHorizontalLayout(), table: data.gdpic.table });
			stack.push({ text: data.gdpic.tablefooter, style: 'footnote' })
		}
		return stack;
	}



	function findInlineHeight(cell, maxWidth, usedWidth = 0) {
		let calcLines = (inlines) => {
			if (inlines == undefined)
				return {
					height: 0,
					width: 0,
				};
			let currentMaxHeight = 0;
			for (const currentNode of inlines) {
				usedWidth += currentNode.width;
				if (usedWidth > maxWidth) {
					currentMaxHeight += currentNode.height;
					usedWidth = currentNode.width;
				} else {
					currentMaxHeight = Math.max(currentNode.height, currentMaxHeight);
				}
			}
			return {
				height: currentMaxHeight,
				width: usedWidth,
			};
		}
		if (cell._offsets) {
			usedWidth += cell._offsets.total;
		}
		if (cell._inlines && cell._inlines.length) {
			return calcLines(cell._inlines);
		} else if (cell.stack && cell.stack[0]) {
			return cell.stack.map(item => {
				return calcLines(item._inlines);
			}).reduce((prev, next) => {
				return {
					height: prev.height + next.height,
					width: Math.max(prev.width + next.width)
				};
			});
		} else if (cell.table) {
			let currentMaxHeight = 0;
			for (const currentTableBodies of cell.table.body) {
				const innerTableHeights = currentTableBodies.map((innerTableCell) => {
					const findInlineHeight = this.findInlineHeight(
						innerTableCell,
						maxWidth,
						usedWidth
					);

					usedWidth = findInlineHeight.width;
					return findInlineHeight.height;
				});
				currentMaxHeight = Math.max(...innerTableHeights, currentMaxHeight);
			}
			return {
				height: currentMaxHeight,
				width: usedWidth,
			};
		} else if (cell._height) {
			usedWidth += cell._width;
			return {
				height: cell._height,
				width: usedWidth,
			};
		}

		return {
			height: null,
			width: usedWidth,
		};
	}

	function applyVerticalAlignment(node, rowIndex, align) {
		const allCellHeights = node.table.body[rowIndex].map(
			(innerNode, columnIndex) => {
				const mFindInlineHeight = findInlineHeight(
					innerNode,
					node.table.widths[columnIndex]._calcWidth
				);
				return mFindInlineHeight.height;
			}
		);
		const maxRowHeight = Math.max(...allCellHeights);
		node.table.body[rowIndex].forEach((cell, ci) => {
			//console.log(cell, maxRowHeight, allCellHeights[ci])
			if (allCellHeights[ci] && maxRowHeight > allCellHeights[ci]) {
				let topMargin = 20;
				if (align === 'bottom') {
					topMargin = maxRowHeight - allCellHeights[ci];
				} else if (align === 'center') {
					topMargin = (maxRowHeight - allCellHeights[ci]) / 2;
				}
				if (cell._margin) {
					cell._margin[1] = topMargin;
				} else {
					cell._margin = [0, topMargin, 0, 2];
				}
			}
			else 
				cell._margin = [0, 2, 0, 0];
		});
	}

	let GetCustomHorizontalLayout = function(){
		return {
				paddingTop: function (index, node) {
					applyVerticalAlignment(node, index, 'center');
					return 0;
				},
				hLineWidth: function (i, node) {
					return (i <= 1 || i === node.table.body.length) ? 2 : .5;
				},
				vLineWidth: function (i, node) {
					return 0;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
			};
    }
	var dd = {
		// a string or { width: number, height: number }
		pageSize: 'LETTER',
		// by default we use portrait, you can change it to landscape if you wish
		//pageOrientation: 'landscape',
		// [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
		pageMargins: [30, 55, 30, 55],
		content: [
			{
				columns: [
					{
						image: await this.getBase64ImageFromURL("images/bea_logo.png"),
						style: 'headerimg',
						width: 210,
					},
					{
						text: doc.income.geninfo.title,
						width: 330,
						style: 'header',
						y: 30

					}
				]
			},
			{
				text: doc.income.geninfo.publishedon,
				style: 'publishedon'
			},
			{
				columns: [
					{
						stack: [
							`${this.cleanStr(doc.income.geninfo.population)}\n`,
							{ text: doc.income.pcpi.title, style: 'subheader' },
							`${this.cleanStr(doc.income.pcpi.text)}\n`,

						]
					},
					{
						stack: [
							{ text: doc.income.pcpi.c1title, style: 'charttitle' },
							{
								// if you specify both width and height - image will be stretched
								image: await pcpi_c1.exporting.getImage("png"),
								width: 250,
								height: 100,
								margin: [0, 10, 0, 10]
							},
							{ text: doc.income.pcpi.c2title, style: 'charttitle' },
							{
								// if you specify both width and height - image will be stretched
								image: await pcpi_c2.exporting.getImage("png"),
								width: 250,
								height: 100,
								margin: [0, 10, 0, 10]
							},
							chartlegend
						]
					}
				]
			},
			{
				margin: [0,20,0,10],
				columns: [
					{
						stack: [
							{ text: doc.income.pi.title, style: 'subheader' },
							`${this.cleanStr(doc.income.pi.text)}\n`,								
							{ text: this.cleanStr(doc.income.pi.footnote), width: 'auto', style: 'footnote', columnGap: 0, }
							
						]
					},
					{
						margin: [0, 40, 0, 0],
						stack: [
							{
								table: doc.income.pi.table, 
								layout: GetCustomHorizontalLayout()
								//layout: 'lightHorizontalLines' // optional
							},
							{ text: doc.income.pi.tablefooter, style:'footnote' }
						]
					}
				], 
				pageBreak: "after"
			},
			{ text: doc.income.cpi.title, style: 'subheader' },
			`${this.cleanStr(doc.income.cpi.text)}\n`,
			{
				columns: [
					{
						stack: [
							{ text: doc.income.cpi.table1title, style: 'tableTitle' },
							{
								layout: GetCustomHorizontalLayout(),
								table: doc.income.cpi.table1
							},
						]
					},
					{
						stack: [
							{ text: doc.income.cpi.table2title, style: 'tableTitle' },
							{
								layout: GetCustomHorizontalLayout(),
								table: doc.income.cpi.table2
							},
							{ text: this.cleanStr(doc.income.cpi.table2footnote), width: 'auto', style: 'footnote', columnGap: 0, }

						]
					}
				]
			},
			{ text: doc.income.cpi.charts.title, style: 'tableTitle' },
			{
				layout: GetCustomHorizontalLayout(),
				table: await GetCPICharts(doc.income.cpi.charts),
				pageBreak: "after"
			},
			{
				text: doc.gdp.geninfo.publishedon,
				style: 'publishedon'
			},
			{
				stack: await GetGDP(doc.gdp)
			},
			
			//`${this.cleanStr(doc.income.geninfo.population)}\n\n`,
		],
		styles: {
			header: {
				fontSize: 20,
				bold: true,
				alignment: 'center',
				margin: [-10, 10, 0, 0],
				color: '#004C97'
			},
			headerimg: {
				width: 100,
				height: 50,
				alignment: 'left',
				margin: [-10, -30, 0, 0]
			},
			subheader: {
				fontSize: 14,
				margin: [-5, 10, 0, 10],
				bold: true
			},
			publishedon: {
				fontSize: 9,
				italics: true,
				margin: [0, 10, 0, 10]
			},
			charttitle: {
				fontSize: 12,
				alignment: 'center',
				margin: [20, 5, 20, -5]
			},
			quote: {
				italics: true
			},
			small: {
				fontSize: 6
			}, 
			footnote: {
				fontSize: 9,
				italics: true,
				margin: [0, 7, 0, 5],
				alignment: 'left'
			},
			tableTitle: {
				bold: true,
				fontSize: 13,
				color: '#004C97',
				alignment: 'center',
				margin: [10, 10, 10, 0]
			},
			table: {
				fontSize: 9,
			},
			tableHeader: {
				bold: true,
				color: 'black',
				alignment: 'center'
			},
			tableStub: {
				bold: true,
				alignment: 'left'
			},
			tableCell: {
				alignment: 'center',
			}
		},
		defaultStyle: {
			columnGap: 10,
			fontSize: 10,
			lineHeight: 1.1,
			alignment: 'justify',
		}
	}
	pdfMake.createPdf(dd).download('bearfacts');
}
