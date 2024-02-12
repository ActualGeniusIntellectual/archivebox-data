
$(function () {
    // Add amCharts 4 license
    am4core.addLicense("CH79605139");
    // Add Maps license
    am4core.addLicense("MP79605139");
    statemap.init();
    countymap.init();
    msamap.init();
});
const statemap = new function () {
    "use strict";
    const obj = this;
    this.map;
    this.mapdiv = "mapdiv";
    this.init = function () {
        obj.map = new AmCharts.AmMap();
        obj.map.pathToImages = "js/ammap/images/";
        obj.map.areasSettings = {
            autoZoom: false,
            selectable: true,
            color: "#ffffff",
            outlineColor: "#2D3338",
            outlineThickness: .3,
            rollOverColor: "#DC5F13",
            rollOverOutlineColor: "#DC5F13",
            rollOverOutlineThickness: .3,
            selectedColor: "#DC5F13",
            selectedOutlineColor: "#DC5F13"
        };


        obj.map.addListener("init", function () {
            setTimeout(function () {
                // iterate through areas and put a label over center of each
                obj.map.dataProvider.images = [];
                for (let x in obj.map.dataProvider.areas) {
                    let area = obj.map.dataProvider.areas[x];
                    let image = new AmCharts.MapImage();
                    image.latitude = obj.map.getAreaCenterLatitude(area);
                    image.longitude = obj.map.getAreaCenterLongitude(area);
                    image.label = area.label.split('-').pop();
                    //image.title = area.title;
                    //image.linkToObject = area;
                    obj.map.dataProvider.images.push(image);
                }
                obj.map.validateData();
                console.log(obj.map.dataProvider);
            }, 100);
        });

        obj.map.imagesSettings.labelPosition = "middle";
        obj.map.zoomControl.zoomControlEnabled = false;
        obj.map.zoomControl.panControlEnabled = false;

        obj.map.addListener("clickMapObject", function (event) {
            bearfacts.GetData(event.mapObject.id, 3);
        });
    }
    /*this.SetDataProvider = function () {
        let dataProvider = {
            map: "UsState",
            getAreasFromMap: true,
            areas: JSON.parse(JSON.stringify(bearfacts.data.GetStateAreaTitles()));
        };
        obj.map.dataProvider = dataProvider;
    }*/
    this.SetDataProvider = function (areaid) {
        let areas = JSON.parse(JSON.stringify(bearfacts.data.GetStateAreaTitles()));
        if (areaid)
            for (let i = 0; i < areas.length; i++) {
                if (areas[i].id === areaid) {
                    areas[i].showAsSelected = true;
                    break;
                }
            }
        let dataProvider = {
            map: "UsState",
            getAreasFromMap: true,
            areas: areas
        };
        obj.map.dataProvider = dataProvider;
    }
    this.WriteMap = function () {
        $("#" + obj.mapdiv).height($(window).height() * .6);
        setTimeout(function () { obj.map.write(obj.mapdiv); }, 100)
    }
};
const countymap = new function () {
    "use strict";
    const obj = this;
    this.map;
    this.mapdiv = "mapdiv";
    this.init = function () {
        obj.map = new AmCharts.AmMap();
        obj.map.pathToImages = "js/ammap/images/";
        obj.map.areasSettings = {
            autoZoom: false,
            selectable: true,
            color: "#fff",
            outlineColor: "#000000",
            outlineThickness: .3,
            rollOverColor: "#DC5F13",
            rollOverOutlineColor: "#000000",
            rollOverOutlineThickness: .3,
            selectedColor: "#DC5F13",
            selectedOutlineColor: "#000000"
        };

        obj.map.addListener("init", function () {
            setTimeout(function () {
                // iterate through areas and put a label over center of each
                obj.map.dataProvider.images = [];
                for (let x in obj.map.dataProvider.areas) {
                    let area = obj.map.dataProvider.areas[x];
                    let image = new AmCharts.MapImage();
                    image.latitude = obj.map.getAreaCenterLatitude(area);
                    image.longitude = obj.map.getAreaCenterLongitude(area);
                    image.label = area.label.split('-').pop();
                    //image.title = area.title;
                    //image.linkToObject = area;

                    obj.map.dataProvider.images.push(image);
                }

                obj.map.validateData();
                console.log(obj.map.dataProvider);
            }, 100)
        });

        obj.map.imagesSettings.labelPosition = "middle";
        obj.map.zoomControl.buttonFillColor = "#004C97";
        obj.map.zoomControl.buttonRollOverColor = "#ffcc00";
        obj.map.zoomControl.maxZoomLevel = 10;
        obj.map.zoomDuration = 0.2;

        obj.map.addListener("clickMapObject", function (event) {
            bearfacts.GetData(event.mapObject.id, 4);
        });
    }
    this.ZoomToState = function (id) {
        setTimeout(function () {
            obj.map.zoomToGroup(id);
        }, 500);
        
    }
    this.SetDataProvider = function (areaid) {
        let areas = JSON.parse(JSON.stringify(bearfacts.data.GetCountyAreaTitles()));
        if (areaid)
            for (let i = 0; i < areas.length; i++) {
                if (areas[i].id === areaid) {
                    areas[i].showAsSelected = true;
                    break;
                }
            }
        let dataProvider = {
            map: "UsCounty",
            getAreasFromMap: false,
            areas: areas
        };
        obj.map.dataProvider = dataProvider;
    }
/*
    this.SetDataProvider = function () {
        let dataProvider = {
            map: "UsCounty",
            getAreasFromMap: true,
            areas: bearfacts.data.GetCountyAreaTitles()
        };
        obj.map.dataProvider = dataProvider;
    }*/
    this.WriteMap = function () {
        $("#" + obj.mapdiv).height($(window).height() * .6);
        setTimeout(function () { obj.map.write(obj.mapdiv); }, 100)
    }
};
const msamap = new function () {
    "use strict";
    const obj = this;
    this.map;
    this.mapdiv = "mapdiv";
    this.init = function () {
        obj.map = new AmCharts.AmMap();
        obj.map.pathToImages = "js/ammap/images/";

        obj.map.areasSettings = {
            autoZoom: false,
            selectable: true,
            color: "#D86018",
            outlineColor: "#D3D3D3",
            outlineThickness: .3,
            rollOverColor: "#004C97",
            rollOverOutlineColor: "#004C97",
            rollOverOutlineThickness: .3,
            selectedColor: "#004C97",
            selectedOutlineColor: "#004C97",
            unlistedAreasColor: "#ccc",
            unlistedAreasOutlineColor: "#000000"
        };

        obj.map.zoomControl.buttonFillColor = "#004C97";
        obj.map.zoomControl.buttonRollOverColor = "#ffcc00";
        obj.map.zoomControl.maxZoomLevel = 3;

        obj.map.addListener("clickMapObject", function (event) {
            bearfacts.GetData(event.mapObject.id, 5);
        });
    }
    this.SetDataProvider = function (areaid) {
        let areas = JSON.parse(JSON.stringify(bearfacts.data.GetMsaAreaTitles()));
        if (areaid)
            for (let i = 0; i < areas.length; i++) {
                if (areas[i].id === areaid) {
                    areas[i].showAsSelected = true;
                    break;
                }
            }
        let dataProvider = {
            map: "MSAOnly",
            getAreasFromMap: false,
            areas: areas
        };
        obj.map.dataProvider = dataProvider;
    }
    /*this.SetDataProvider = function () {
        let dataProvider = {
            map: "MSAOnly",
            getAreasFromMap: false,
            areas: bearfacts.data.GetMsaAreaTitles()
        };
        obj.map.dataProvider = dataProvider;
    }*/
    this.WriteMap = function () {
        $("#" + obj.mapdiv).height($(window).height() * .6);
        setTimeout(function () { obj.map.write(obj.mapdiv); }, 100)
    }
};
const pcpicharts = new function () {
    this.MakeColumnChart = function (div, data) {
        let chart = am4core.create(div, am4charts.XYChart);
        //chart.responsive.enabled = true;
        chart.data = data;
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.minGridDistance = 5;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.labels.template.rotation = 0;
        categoryAxis.renderer.labels.template.marginBottom = -20;
        categoryAxis.renderer.labels.template.paddingBottom = 0;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
        valueAxis.title.text = "dollars";
        valueAxis.title.fontWeight = "bold";
        valueAxis.renderer.line.strokeOpacity = 1;
        valueAxis.renderer.line.strokeWidth = 1;

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "name";
        series.dataFields.valueY = "DataValue";
        series.columns.template.tooltipText = "{valueY.value}"
        series.columns.template.strokeOpacity = 1;
        series.columns.template.column.cornerRadiusTopRight = 1;
        series.columns.template.column.cornerRadiusTopLeft = 1;

        series.columns.template.fill = am4core.color("#D86018");
        chart.zoomOutButton.disabled = true;
        SetChartOptions(chart);
        return chart;
    }
    this.MakeLineChart = function (div, data, legend) {
        let chart = am4core.create(div, am4charts.XYChart);
        chart.data = data;
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "Year";
        categoryAxis.renderer.minGridDistance = 50;
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.startLocation = 0.5;
        categoryAxis.endLocation = 0.5;
        categoryAxis.renderer.labels.template.rotation = 0;
        categoryAxis.renderer.labels.template.marginBottom = -10;
        categoryAxis.renderer.labels.template.paddingBottom = 0;
        categoryAxis.numberFormatter = new am4core.NumberFormatter();
        categoryAxis.numberFormatter.numberFormat = "#";

        //categoryAxis.renderer.inversed = true;
        //categoryAxis.renderer.grid.template.disabled = false;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.extraMax = 0.1;
        valueAxis.title.text = "percent";
        valueAxis.title.fontWeight = "bold";
        valueAxis.renderer.line.strokeOpacity = 1;
        valueAxis.renderer.line.strokeWidth = 1;

        let series = chart.series.push(new am4charts.LineSeries());
        series.name = legend ? legend[0] : "";
        series.dataFields.categoryX = "Year";
        series.dataFields.valueY = "DataValue";
        series.strokeWidth = 2;
        series.minBulletDistance = 0;
        series.stroke = am4core.color("#004C97");

        // Make bullets grow on hover
        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;

        bullet.tooltipText = "{categoryX} : {valueY.value}";
        bullet.circle.fill = am4core.color("#fff");
        chart.zoomOutButton.disabled = true;

        let bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.3;

        if (legend) {
            let series2 = chart.series.push(new am4charts.LineSeries());
            series2.name = legend[1];
            series2.dataFields.categoryX = "Year";
            series2.dataFields.valueY = "StateValue";
            series2.strokeWidth = 2;
            series2.minBulletDistance = 0;
            series2.stroke = am4core.color("#D86018");

            // Make bullets grow on hover
            let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
            bullet2.circle.strokeWidth = 2;
            bullet2.circle.radius = 4;

            bullet2.tooltipText = "{categoryX} : {valueY.value}";
            bullet2.circle.fill = am4core.color("#fff");

            let bullethover2 = bullet2.states.create("hover");
            bullethover2.properties.scale = 1.3;
        /*
            chart.legend = new am4charts.Legend();
            chart.legend.position = "left";
           // $("#" + div).apped($('<div id="legenddiv" class="w-100"></div>'));

            var legendContainer = am4core.create("legenddiv", am4core.Container);
            legendContainer.width = am4core.percent(100);
            legendContainer.height = am4core.percent(20);
            chart.legend.parent = legendContainer;*/
        }
        SetChartOptions(chart);
        return chart;
    }
}
const piecharts = new function () {
    this.MakeChart = function (container, data, valcol, catcol) {
        let chart = am4core.create(container, am4charts.PieChart);
        chart.radius = am4core.percent(95);
        //chart.responsive.enabled = true;
        chart.data = data;
        valcol = !valcol ? "DataValue": valcol;
        catcol = !catcol ? "statistic" : catcol;

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = valcol;
        pieSeries.dataFields.category = catcol;
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeOpacity = 1;

        pieSeries.colors.list = [
            am4core.color("#004C97"),
            am4core.color("#D86018"),
            am4core.color("#9EA2A2"),
            am4core.color("#2DCCD3"),
            am4core.color("#6CACE4"),
            am4core.color("#F2A900")
        ];

        pieSeries.ticks.template.disabled = true;
        pieSeries.alignLabels = false;
        pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
        pieSeries.slices.template.tooltipText = "{category}: {value.percent.formatNumber('#.0')}%";
        pieSeries.labels.template.fontSize = 12;
        pieSeries.labels.template.radius = am4core.percent(-30);
        pieSeries.labels.template.fill = am4core.color("white");

        // This creates initial animation
        /*pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        chart.hiddenState.properties.radius = am4core.percent(0);*/
        SetChartOptions(chart);
        return chart;
    }
}

const SetChartOptions = async function (chart) {
    chart.exporting.useWebFonts = false;
    var options = await chart.exporting.getFormatOptions("png"); 
    options.scale = 1;
    await chart.exporting.setFormatOptions("png", options);
}