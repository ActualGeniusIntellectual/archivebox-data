$(function () {
    app.init();
    bearfacts.init();
});
const app = new function(){
	"use strict";
    const obj = this;
    this.template = '';
    this.init = function () {
        const p = window.location.pathname.replace('/', '').split('/');
        obj.template = p.pop().split('.')[0];
        obj.template = obj.template !== '' ? obj.template : 'index';
        obj.path = p.length === 0 ? '/' : `/${p.join('/')}/`;
        obj.URLPath = window.location.hostname == "localhost" ? "https://localhost:44349" : '/regionalcore';
    }
};

var bearfacts = new function(){
	"use strict";
    const obj = this;
    this.state = "type";
    this.data = new function () {
        const dobj = this;
        let AreaType = "";
        let Area = "";
        let AppInfo = null;
        let StateList = [];
        let CountyList = [];
        let MsaList = [];
        let StateAreaTitles = [];
        let CountyAreaTitles = [];
        let MsaAreaTitles = [];
        let RelatedAreas = [];
        let GeoType;
        let CountyName;
        let ChartData;
        let GSPData;
        let GDPLocalData;
        let Fips;
        let charts = {};
        let TI;
        
        this.init = function () {
            dobj.SetAppInfo();
            dobj.SetStateList();
            dobj.SetMsaList();
            dobj.SetAreaTitles();
            dobj.urlparams = utils.getUrlParams();
            if (!isNaN(parseInt(dobj.urlparams.f)) && !isNaN(parseInt(dobj.urlparams.a)))
            {
                dobj.InitCallBack();
            }
        }
        this.InitCallBack = function () {
            clearTimeout(TI);
            if (AppInfo !== null && StateList.length !== 0 && MsaList.length !== 0) {
                let areatype = parseInt(dobj.urlparams.a);
                areatype = isNaN(areatype) ? 4 : areatype;
                let fips = dobj.urlparams.f;
                obj.ChangeAreaType();
                obj.GetData(fips, areatype);
            }
            else
                TI = setTimeout(function () { dobj.InitCallBack() }, 10);
        }
        this.SetFips = function (fips) {
            Fips = fips;
        };
        this.GetFips = function () {
            return Fips;
        }
        this.SetGeoType = function (type) {
            GeoType = parseInt(type);
        };
        this.GetGeoType = function () {
            return GeoType;
        }
        this.SetAreaType = function (type) {
            AreaType = type;
        };
        this.GetAreaType = function () {
            return AreaType;
        }
        /*this.SetArea = function (area) {
            Area = area;
        };
        this.GetArea = function () {
            return Area;
        }*/
        this.SetAppInfo = function () {
            $.ajax({
                url: `${app.URLPath}/data/appinfo`,
                success: function (data) {
                    let r = $.parseJSON(data);
                    AppInfo = {};
                    Object.keys(r).forEach(function (k, i) {
                        AppInfo[k] = r[k].Table[0];
                    });
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
        }
        this.GetAppInfo = function () {
            return AppInfo;
        }
        this.GetBaseYear = function (yearGeo) {
            // return yearGeo === 3 ? statebaseyear : countybaseyear
            return yearGeo === 3 ? 2022 : 2022;
        }
        this.SetStateList = function () {
            $.ajax({
                url: `${app.URLPath}/data/StateList`,
                success: function (data) {
                    StateList = $.parseJSON(data).Table;
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
        }
        this.GetStateList = function () {
            return StateList;
        }
        this.SetCountyList = function (areatype, callback) {
            $.ajax({
                url: `${app.URLPath}/data/CountyList?areatype=${areatype}`,
                success: function (data) {
                    CountyList = $.parseJSON(data).Table;
                    callback.call();
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
        }
        this.GetCountyList = function () {
            return CountyList;
        }
        this.SetMsaList = function () {
            $.ajax({
                url: `${app.URLPath}/data/CountyList?areatype=msa`,
                success: function (data) {
                    MsaList = $.parseJSON(data).Table;
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
        }
        this.GetMsaList = function () {
            return MsaList;
        }
        this.SetAreaTitles = function () {
            $.ajax({
                url: `${app.URLPath}/data/AreaTitles?geotype=3`,
                success: function (data) {
                    StateAreaTitles = $.parseJSON(data);
                    statemap.SetDataProvider();
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
            $.ajax({
                url: `${app.URLPath}/data/AreaTitles?geotype=4`,
                success: function (data) {
                    CountyAreaTitles = $.parseJSON(data);
                    countymap.SetDataProvider();
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
            $.ajax({
                url: `${app.URLPath}/data/AreaTitles?geotype=5`,
                success: function (data) {
                    MsaAreaTitles = $.parseJSON(data);
                    msamap.SetDataProvider();
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
        }
        this.GetStateAreaTitles = function () { return StateAreaTitles }
        this.GetCountyAreaTitles = function () { return CountyAreaTitles }
        this.GetMsaAreaTitles = function () { return MsaAreaTitles }
        this.SetRelatedAreas = function (fips, callback) {
            $.ajax({
                url: `${app.URLPath}/data/RelatedAreas?fips=${fips}`,
                success: function (data) {
                    RelatedAreas = $.parseJSON(data).Table;
                    callback.call();
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
        }
        this.GetRelatedAreas = function () { return RelatedAreas }
        this.GetLastPublishedIncomeDate = function () {
            return GeoType === 3 ? AppInfo.spi.ReleaseDate : AppInfo.lapi.ReleaseDate;
        }
        this.GetLastPublishedGDPDate = function () {
            return GeoType === 3 ? AppInfo.gsp.ReleaseDate : AppInfo.gmp.ReleaseDate;
        }
        this.SetCountyName = function (fips, year, mtype) {
            CountyName = null; 
            $.ajax({
                url: `${app.URLPath}/data/CountyName`,
                data: {"fips": fips, "year": year, "mtype": mtype},
                success: function (data) {
                    CountyName = $.parseJSON(data).Table[0];
                    // e.g. {"countyname":"Arkansas","numcounties":null,"statename":"United States","myarea":"","myareanolink":""}]
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
        }
        this.GetCountyName = function () { return CountyName }
        this.SetChartData = function (fips, year, mtype) {
            CountyName = null;
            $.ajax({
                url: `${app.URLPath}/data/ChartData`,
                data: { "fips": fips, "year": year, "mtype": mtype },
                success: function (data) {
                    ChartData = $.parseJSON(data);
                    // e.g. {"countyname":"Arkansas","numcounties":null,"statename":"United States","myarea":"","myareanolink":""}]
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
        }
        this.GetChartData = function () { return ChartData }
        this.SetGSPData = function (fips, year) {
            CountyName = null;
            $.ajax({
                url: `${app.URLPath}/data/GSPData`,
                data: { "fips": fips, "year": year },
                success: function (data) {
                    GSPData = $.parseJSON(data);
                    // e.g. {"countyname":"Arkansas","numcounties":null,"statename":"United States","myarea":"","myareanolink":""}]
                },
                error: function (data) {
                    modals.Info('error', 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
        }
        this.GetGSPData = function () { return GSPData }
        this.SetGDPLocalData = function (fips, year, mtype) {
            CountyName = null;
            $.ajax({
                url: `${app.URLPath}/data/GDPLocalData`,
                data: { "fips": fips, "year": year, "mtype": mtype },
                success: function (data) {
                    GDPLocalData = $.parseJSON(data).Table[0];
                    // e.g. {"countyname":"Arkansas","numcounties":null,"statename":"United States","myarea":"","myareanolink":""}]
                },
                error: function (data) {
                        // modals.Info('error', fips === "02063" ? 'This area has recently been redefined and BEARFACTS is unavailable.' : 'Request failed. Please try again later. ');
                },
                complete: function (data) {
                    //alert('complete');
                }
            });
        }
        this.GetGDPLocalData = function () { return GDPLocalData }
        this.GetData = function () {
            ChartData = null;
            GSPData = null;
            GDPLocalData = null;
            CountyName = null;
            dobj.SetChartData(Fips, dobj.GetBaseYear(GeoType), GeoType);

            if (GeoType === 3)
                dobj.SetGSPData(Fips, dobj.GetBaseYear(GeoType));
            else 
                dobj.SetGDPLocalData(Fips, dobj.GetBaseYear(GeoType), GeoType);

            dobj.SetCountyName(Fips, dobj.GetBaseYear(GeoType), GeoType);
            dobj.GetDataCallback()
        }
        this.GetDataCallback = function () {
            clearTimeout(TI);
            if (ChartData !== null && (GSPData !== null || GDPLocalData !== null) && CountyName !== null) {
                obj.ParseData();
            }
            else
                TI = setTimeout(function () { dobj.GetDataCallback() }, 10);
        }
        this.GetNumCounties = function () {
            let num = 51;
            if (GeoType === 5)
                num = 384;
            else if (GeoType === 4)
                num = CountyName.numcounties;
            return num;
        }
        this.GetCharts = function () {
            return charts;
        }
        this.SetCharts = function (key, chart, reset) {
            charts = reset ? {} : charts;
            charts[key] = chart;    
        }
    }
    this.init = function () {
        obj.ManageTabs();
        obj.data.init();
    }
    this.ChangeAreaType = function (geotype) {
        obj.state = "area";
        obj.data.SetGeoType(geotype);
        obj.ParseArea();
        obj.ManageTabs();
    }
    this.GetData = function (id, geotype) {
        obj.state = "data";
        let fips = obj.data.GetFips();
        if (id !== fips) {
            obj.data.SetFips(id);
            if (geotype === 3) {
                statemap.init();
                statemap.SetDataProvider(id);
            }
            if (geotype === 4) {
                countymap.init();
                countymap.SetDataProvider(id);
            }
            if (geotype === 5) {
                msamap.init();
                msamap.SetDataProvider(id);
            }
            $('#Area-tab').one('shown.bs.tab', function (e) {
                obj.ParseArea(id);
            });
        }
        obj.data.SetGeoType(geotype);
        $("#RelatedAreasListContainer").empty();
        obj.data.SetRelatedAreas(id, obj.ParseRelatedAreas);
        obj.ManageTabs();
        obj.data.GetData();
        
    }
    this.ManageTabs = function () {   
        obj.state === "data" ? $("#Data-tab").parent().removeClass("d-none") : $("#Data-tab").parent().addClass("d-none");
        obj.state === "area" || obj.state === "data" ? $("#Area-tab").parent().removeClass("d-none") : $("#Area-tab").parent().addClass("d-none");

        obj.state === "data" ? $("#Data-tab").tab("show") : obj.state === "area" ? $("#Area-tab").tab("show") : $("#AreaType-tab").tab("show");
    }
    this.ParseArea = function (fips) {
        let info = obj.data.GetAppInfo();
        let geotype = obj.data.GetGeoType();
        obj.data.SetGeoType(geotype);
        $("#mapdiv,#AreaText,#AreaFilterForm").empty();
        if (geotype === 3) {
            $("#AreaTitle").html("State");
            $("#AreaText").html('<p class="col-sm-12">State BEARFACTS are based on the state estimates published on ' + obj.data.GetLastPublishedIncomeDate() + ' for personal income and ' + obj.data.GetLastPublishedGDPDate() + ' for GDP by state.</p>');
            $("#AreaFilterForm").append($('<label>Select State:</label>'));
            let sel = $('<select id="stateselect" class="form-control mx-2"><option value="">Select State</option></select>').appendTo("#AreaFilterForm");
            obj.data.GetStateList().forEach(function (state) {
                $('<option value="' + state.fips_code + '">' + state.name + '</option>').prop('selected', fips === state.fips_code).appendTo(sel);
            });
            let btn = $('<button class="btn btn-sm btn-primary">Display</button>').click(function () {
                obj.GetData(sel.val(), 3);
            }).appendTo("#AreaFilterForm");
            $('<span class="mx-4">...or click on the map below.</span>').appendTo("#AreaFilterForm");
            sel.change(function () {
                btn.prop("disabled", sel.val() === "");
            }).change();
            statemap.WriteMap();
        }
        else if (geotype === 4) {
            $("#AreaTitle").html("County");
            $("#AreaText").html('<p class="col-sm-12">County BEARFACTS are based on the county estimates published on ' + obj.data.GetLastPublishedIncomeDate() + ' for personal income and ' + obj.data.GetLastPublishedGDPDate() + ' for Local Area GDP.</p>');
            $("#AreaFilterForm").append($('<label>Select State:</label>'));
            let sel = $('<select id="stateselect" class="form-control mx-2"><option value="">Select State</option></select>').appendTo("#AreaFilterForm");
            let statefips = fips ? fips.toString().substr(0, 2) + '000' : "";
            obj.data.GetStateList().forEach(function (state) {
                $('<option value="' + state.fips_code + '">' + state.name + '</option>').prop('selected', statefips === state.fips_code).appendTo(sel);
            });
            $("#AreaFilterForm").append($('<label class="ml-4">Select County:</label>'));
            let cntsel = $('<select id="countyselect" class="form-control mx-2" style="min-width: 200px;"><option value="">Select County</option></select>').appendTo("#AreaFilterForm");
            let btn = $('<button class="btn btn-sm btn-primary">Display</button>').click(function () {
                obj.GetData($(cntsel).val(),4);
            }).appendTo("#AreaFilterForm");
            $('<span class="mx-4">...or click on the map below.</span>').appendTo("#AreaFilterForm");
            countymap.WriteMap();
            sel.change(function () {
                let el = $("#countyselect").empty().html('<option value="">Select County</option>');
                if ($(this).val() != "") {
                    obj.data.SetCountyList($(this).val(), function () {
                        obj.data.GetCountyList().forEach(function (county, index) {
                            if (index > 0) $('<option value="' + county.fips_code + '">' + county.name + '</option>').prop('selected', fips === county.fips_code).appendTo(el);
                        });
                    });
                    countymap.ZoomToState($(this).val());
                }
                else
                    setTimeout(function () {
                        countymap.map.goHome();
                    },100)
                cntsel.prop("disabled", sel.val() === "").change();
            }).change();
            cntsel.change(function () {
                btn.prop("disabled", cntsel.val() === "");
            }).change();
        }
        else if (geotype === 5) {
            $("#AreaTitle").html("Metro Area");
            $("#AreaText").html('<p class="col-sm-12">Metropolitan Statistical Areas (MSAs) are defined (geographically delineated) by the Office of Management and Budget bulletin no. 20-01 issued March 6, 2020.</p>' + '<p class="col-sm-12"> Metropolitan Statistical Areas BEARFACTS are based on the county estimates published on ' + obj.data.GetLastPublishedIncomeDate() + ' for personal income and ' + obj.data.GetLastPublishedGDPDate() + ' for Local Area GDP.</p > ');
            $("#AreaFilterForm").append($('<label>Select Metropolitan Statistical Area:</label>'));
            let sel = $('<select id="msaselect" class="form-control mx-2"></select>').appendTo("#AreaFilterForm");
            obj.data.GetMsaList().forEach(function (msa) {
                $('<option value="' + msa.fips_code + '">' + msa.name + '</option>').prop('selected', fips === msa.fips_code).appendTo(sel);
            });
            let btn = $('<span class="btn btn-sm btn-primary">Display</span>').click(function () {
                obj.GetData(sel.val(),5);
            }).appendTo("#AreaFilterForm");
            $('<span class="mx-4">...or click on the map below.</span>').appendTo("#AreaFilterForm");
            msamap.WriteMap();
        }
    }
    this.ParseRelatedAreas = function () {
        $("#RelatedAreasListContainer").empty();
        let ra = obj.data.GetRelatedAreas();
        ra.forEach(function (area) {
            $('<li class="list-group-item btn-default pointable border"></li>').html(area.Name).appendTo("#RelatedAreasListContainer").click(function () { obj.GetData(area.Fips, area.GeoType) });
        })
    }
    this.DisposeCharts = function () {
        let charts = obj.data.GetCharts();
        for (var prop in charts) {
            if (Object.prototype.hasOwnProperty.call(charts, prop)) {
                charts[prop].dispose();
            }
        }
    }
    this.ParseData = function () {
        obj.DisposeCharts();
        let data = obj.data.GetChartData();
        let cn = obj.data.GetCountyName(); //this is smallname in cf
        let geotype = obj.data.GetGeoType();
        let baseyear = parseInt(obj.data.GetBaseYear(geotype));
        let prevyear = baseyear - 1;
        let oldyear = baseyear - 10;
        let sqlerror = 10001;
        let rpd_statebaseyear = 2022;
        let rpd_countybaseyear = 2022;
        let rpd_stateoldyear = rpd_statebaseyear - 10;
        let rpd_stateprevyear = rpd_statebaseyear - 1;
        let rpd_countyoldyear = rpd_countybaseyear - 10;
        let rpd_countyprevyear = rpd_countybaseyear - 1;

        let geninfoincome = $("#incomegeninfocontainer").empty();
        let pcpi = $("#pcpicontainer").empty();
        let pi = $("#picontainer").empty();
        let cpi = $("#cpicontainer").empty();
        let geninfogdp = $("#gdpgeninfocontainer").empty();
        let gdps = $("#gdpscontainer").empty();
        let gdpsi = $("#gdpsicontainer").empty();
        let gdpla = $("#gdplacontainer").empty();
        let gdpic = $("#gdpiccontainer").empty();


        let fips = obj.data.GetFips();
        let bfdataRID = data.bfdataRID[0];
        let areabrand = geotype === 4 ? '<span definitiontype="county" title="definition of counties">counties</span>' : geotype === 5 ? 'Metropolitan Statistical Areas (<span definitiontype="Metropolitan Areas" title="definition of metropolitan areas">MSAs</span>)' : "states";
        let largerarea = geotype == 4 ? "the state" : "the <span class='text-nowrap'>United States</span>";

        let censusnote = "<p><i class='col-sm-10 m-0 p-0'><b>Note</b>: Census Bureau midyear population estimate. BEA produced intercensal annual state population statistics for 2010 to 2019 that are tied to the Census Bureau decennial counts for 2010 and 2020 to create a consistent population time series. BEA used the Census Bureau Das Gupta method to produce the intercensal population figures that will be used until the Census Bureau releases its official intercensal population data.</i></p>";
        let censusnote2 = "<p><i class='col-sm-10 m-0 p-0'><b>Note</b>: Per capita personal income is total personal income divided by total midyear population.</i></p>";

        let censuslocalnote = "<p><i class='col-sm-10 m-0 p-0'><b>Note</b>: Census Bureau midyear population estimate. BEA produced intercensal annual state population statistics for 2010 to 2019 that are tied to the Census Bureau decennial counts for 2010 and 2020 to create a consistent population time series. BEA used the Census Bureau Das Gupta method to produce the intercensal population figures that will be used until the Census Bureau releases its official intercensal population data.</i></p>";
        let censuslocalnote2 = "<p><i class='col-sm-10 m-0 p-0'><b>Note</b>: Per capita personal income is total personal income divided by total midyear population.</i></p>";


        $('#PersonalIncome-tab').tab('show');
        $("#MoreDetailIncomeLink").attr("href", function () {
            return geotype === 3 ? "/itable/?ReqID=70&step=1" : "/itable/?ReqID=70&step=1"
        });
        $("#MoreDetailProductLink").attr("href", function () {
            return geotype === 3 ? "/itable/?ReqID=70&step=1" : "/itable/?ReqID=70&step=1"
        });
        $("#GDP-tab").html(function () {
            return geotype === 3 ? "Gross Domestic Product" : "Gross Domestic Product";
        });
        obj.doc = {
            income: {
                geninfo: {},
                pcpi: {},
                pi: {},
                cpi: {
                    charts: {}
                }
            },
            gdp: {
                geninfo: {} , 
                gdps: {},
                gdpsi: {
                    charts: {}
                },
                gdpla: {},
                gdpic: {}      
            }
        };

        this.ParseGenInfoIncome = function () {
            let con = $('<div class="col-sm-12"></div>').appendTo(geninfoincome);
            let gi = obj.doc.income.geninfo;
            gi.publishedon = 'Personal income last published on ' + obj.data.GetLastPublishedIncomeDate();
            gi.title = 'Economic Profile for ' + cn.countyname;
            $('<i class="col-sm-12 m-0 p-0"></i>').html(gi.publishedon).appendTo(con);
            $('<h2 class="hideonprint">' + gi.title + '</h2>').appendTo(con);

            let subt = $('<p></p>').appendTo(con);
            if (geotype === 3) {
                gi.population = 'The <span definitiontype="population" title = "definition of population" >population</span> of ' +
                    cn.countyname + ' in ' + baseyear + ' was ' + Number(bfdataRID.mypop).toLocaleString('en') + '. ' + ((bfdataRID.pop_rank != "" && bfdataRID.pop_rank != null) ? ('Its rank was ' + bfdataRID.pop_rank + ' in the nation. ') : '');
                gi.population += censusnote;
            }
            else {
                let str = cn.countyname + ' is one of ' + obj.data.GetNumCounties() + ' ' + areabrand + ' in ';
                let newfips = fips.substr(0, 2).trim() + "000";
                str += geotype === 4 ? '<span class="btn-link pointable" onclick="bearfacts.GetData(' + newfips.trim() + ', 3)">' +
                    cn.statename + '</span>. ' : ' the nation. ';
                str += geotype === 4 ? cn.myarea + ". " : "";
                str += 'Its ' + baseyear + ' <span definitiontype="population" title="definition of population">population</span> ' +
                    (bfdataRID.pop_rank !== "" ? (' of ' + Number(bfdataRID.mypop).toLocaleString('en') + ' ranked ' + bfdataRID.pop_rank + ' in ' + (geotype === 4 ? largerarea : ' the nation')) : ' was ' + Number(bfdataRID.mypop).toLocaleString('en')) + '. '
                str += censuslocalnote;
                gi.population = str;
            }
            subt.html(gi.population);
        }
        this.ParsePCPI = function () {
            let docstruct = obj.doc.income.pcpi;
            let text = $('<div class="col-sm-4 py-2"></div>').appendTo(pcpi);
            let chrt = $('<div class="col-sm-8 py-4"></div>').appendTo(pcpi);
            docstruct.title = 'Per Capita Personal Income';
            $('<h3>' + docstruct.title + '</h3>').appendTo(text);
            let txt = $('<p></p>').appendTo(text);
            this.ParseText = function () {
                let str = 'In ' + baseyear + ', ' + cn.countyname + ' had a per capita personal income (<span definitiontype="per capita personal income" title = "per capita personal income" >PCPI</span>) ';
                str += ' of $' + Number(bfdataRID.mypcpi).toLocaleString('en') + '. ';
                str += (bfdataRID.pcpi_rank !== "" && bfdataRID.pcpi_rank !== null) ? ' This PCPI ranked ' + bfdataRID.pcpi_rank + ' in ' + largerarea + ' and was ' : ' This PCPI was ';
                if (geotype === 4) {
                    str += utils.Round(bfdataRID.state_pcpi_pct, 1) + ' percent of the state average, $' + Number(bfdataRID.state_pcpi).toLocaleString('en') + ', and ';
                }
                str += utils.Round(bfdataRID.us_pcpi_pct, 1) + ' percent of the national average, $' + Number(bfdataRID.us_pcpi).toLocaleString('en') + '. ';
                str += ' The ' + baseyear + ' PCPI ';

                let mypcpi_pctch = Math.abs(Number(bfdataRID.mypcpi_pctch));
                if (mypcpi_pctch < 0.05)
                    str += ' remained unchanged ';
                if (Number(bfdataRID.mypcpi_pctch) <= -0.05)
                    str += ' reflected a decrease of ' + utils.Round(mypcpi_pctch, 1) + ' percent ';
                else
                    str += ' reflected an increase of ' + utils.Round(mypcpi_pctch, 1) + ' percent ';
                str += ' from ' + prevyear + '. ';
                str += ' The ' + prevyear + `\u2013` + baseyear + (geotype === 4 ? ' state change was ' : "");

                if (Math.abs(Number(bfdataRID.state_pcpi_pctch)) < 0.05)
                    str += ' unchanged '
                else
                    str += (geotype === 4 ? ' <span class="nobr">' + utils.Round(bfdataRID.state_pcpi_pctch, 1) + '</span> percent and the ' : "");

                str += ' national change was ';

                if (Math.abs(Number(bfdataRID.us_pcpi_pctch)) < 0.05)
                    str += ' unchanged. '
                else
                    str += ' <span class="nobr">' + utils.Round(bfdataRID.us_pcpi_pctch, 1) + '</span> percent. ';

                if (Number(bfdataRID.oldpcpi) !== sqlerror) {
                    str += ' In ' + oldyear + ', the PCPI of ' + cn.countyname + ' was $' + Number(bfdataRID.oldpcpi).toLocaleString('en');
                    str += (bfdataRID.oldpcpi_rank != "" && fips !== "11000") ? ' and ranked ' + bfdataRID.oldpcpi_rank + ' in ' + largerarea + '. ' : '. ';
                    str += ' The ' + oldyear + `\u2013` + baseyear + ' compound annual growth rate of PCPI';
                    str += Number(bfdataRID.mypcpi_aagr) === sqlerror ? ' is not available. ' : Math.abs(Number(bfdataRID.mypcpi_aagr)) < 0.05 ? ' was near zero. ' : '<span class="nobr"> was ' + Number(utils.Round(bfdataRID.mypcpi_aagr, 1)).toLocaleString('en') + '</span> percent. ';
                    str += ' The compound annual growth rate ';

                    if (geotype == 4)
                        str += ' for the state was <span class="nobr">' + utils.Round(bfdataRID.state_pcpi_aagr, 1) + '</span> percent and ';

                    str += ' for the nation was <span class="nobr">' + utils.Round(bfdataRID.us_pcpi_aagr, 1) + '</span> percent. ';
                }

                str += geotype === 3 ? censusnote2 : censuslocalnote2;

                docstruct.text = str;
                txt.html(docstruct.text);
            }();

            this.parseChrt = function () {

                let docstruct = obj.doc.income.pcpi;
                let c1 = new obj.Card();
                let c2 = new obj.Card(geotype === 4);
                chrt.append(c1.GetCard()).append(c2.GetCard());
                docstruct.c1title = 'Per Capita Personal Income, ' + baseyear;
                docstruct.c2title = 'Per Capita Income as a Percent of the United States';
                c1.SetHeader('<h4 class="p-0 m-0 text-center">' + docstruct.c1title + '</h4>');
                c2.SetHeader('<h4 class="p-0 m-0 text-center">' + docstruct.c2title + '</h4>');

                $('<div id="pcpi_c1"></div>').height(200).width(function () { return geotype === 4 ? 650 : 500 }).appendTo(c1.GetBody().addClass("align-self-center"));
                $('<div id="pcpi_c2"></div>').height(200).width(function () { return geotype === 4 ? 650 : 500 }).appendTo(c2.GetBody().addClass("align-self-center"));

                obj.data.SetCharts('pcpi_c1', pcpicharts.MakeColumnChart("pcpi_c1", data.bfBarData), true);

                let linedata = data.bfLinedata;
                if (geotype === 4) {
                    linedata.forEach(function (d) {
                        let sdp = data.bfLinedataState.filter(function (a) {
                            return a.year === d.Year;
                        });
                        if (sdp.length > 0) {
                            d.StateValue = sdp[0].DataValue;
                        };
                    })
                    //pcpicharts.MakeLineChart("pcpi_c2", linedata, [cn.countyname, cn.statename]);
                    let f = c2.GetFooter().addClass('text-center');
                    f.append(obj.MakeLegend("#004C97", cn.countyname));
                    f.append(obj.MakeLegend("#D86018", cn.statename));
                }
                
                obj.data.SetCharts('pcpi_c2', pcpicharts.MakeLineChart("pcpi_c2", linedata, [cn.countyname,cn.statename]));
                
            }();
        }
        this.ParsePI = function () {
            let docstruct = obj.doc.income.pi;
            let text = $('<div class="col-sm-4 py-2"></div>').appendTo(pi);
            let table = $('<div class="col-sm-8 py-4"></div>').appendTo(pi);
            docstruct.title = 'Personal Income';
            $('<h3>' + docstruct.title + '</h3>').appendTo(text); 

            let txt = $('<p></p>').appendTo(text);
            this.ParseText = function () {
                let str = 'In ' + baseyear + ', ' + cn.countyname + ' had a <span definitiontype="personal income" >personal income</span> of ';
                str += (geotype === 3 ? utils.Round(bfdataRID.mytpi, 1).toLocaleString('en') : utils.Round(bfdataRID.mytpi).toLocaleString('en')) + '. ';
                if (bfdataRID.tpi_rank != "") {
                    str += (fips === "11000" ? "" : 'This personal income ranked ' + bfdataRID.tpi_rank + ' in ' + largerarea);
                    if (geotype !== 4)
                        str += (fips === "11000" ? '' : '. ');
                    else {
                        str += ' and ';
                        if (Math.abs(Number(bfdataRID.state_tpi_pct)) < 0.05) {
                            str += 'was less than 0.1 percent of the state total. '
                        }
                        else {
                            str += 'accounted for ' + utils.Round(bfdataRID.state_tpi_pct, 1) + ' percent of the state total. '
                        }
                    }
                    if (Number(bfdataRID.oldtpi) !== sqlerror) {
                        str += 'In ' + oldyear + ', the personal income of ' + cn.countyname + ' was ' +
                            (geotype === 3 ? utils.Round(bfdataRID.oldtpi, 1).toLocaleString('en') : utils.Round(bfdataRID.oldtpi).toLocaleString('en'));
                        str +=  (fips === "11000" ? '. ' : ' and ranked ' + bfdataRID.oldtpi_rank + ' in ' + largerarea + '. ');
                    }
                }
                else {
                    if (geotype === 4) {
                        if (Math.abs(Number(bfdataRID.state_tpi_pct)) < 0.05) {
                            str += 'This personal income was less than 0.1 percent of the state total. '
                        }
                        else {
                            str += 'This personal income accounted for ' + utils.Round(bfdataRID.state_tpi_pct, 1) + ' percent of the state total. '
                        }
                    }
                    if (Number(bfdataRID.oldtpi) !== sqlerror) {
                        str += 'In ' + oldyear + ', the personal income of ' + cn.countyname + ' was ' +
                            (geotype === 3 ? utils.Round(bfdataRID.oldtpi, 1).toLocaleString('en') : utils.Round(bfdataRID.oldtpi).toLocaleString('en')) + '. ';
                    }
                }
                docstruct.text = str;
                txt.html(docstruct.text);
                docstruct.footnote = '<sup>*</sup><em>Personal income estimates are in ' + (geotype == 3 ? 'millions' : 'thousands') + ' of dollars, not adjusted for inflation.</em>';
                txt.append($('<p class="note">' + docstruct.footnote + '</p>'));
            }();
            this.ParseTable = function () {

                docstruct.tabletitle = 'Percent Change';
                docstruct.tablefooter = 'CAGR: compound annual growth rate';
                docstruct.table = {
                    style: 'table',
                    headerRows: 1,
                    widths: ['*', 'auto', '*'],
                    body: []
                }

                let crd = new obj.Card(true);
                crd.SetHeader(`<h4 class="p-0 m-0 text-center">${docstruct.tabletitle}</h4>`);
                table.append(crd.GetCard());
                /*let c = crd.GetCard();
                c.find('.card-header').addClass('d-none');
                table.append(c);*/
                let tbl = $('<table class="w-100 table table-boder reis"></table>').appendTo(crd.GetBody());
                let thead = $('<thead>Personal Income</thead>').appendTo(tbl);
                let tbody = $('<tbody></tbody>').appendTo(tbl);
                /*let tfoot = $(`<tfoot>
                  <tr>
                    <td colspan="3" class="deliniate-top solid note"></td>
                  </tr>
                </tfoot>`).appendTo(tbl);*/
                let f = crd.GetFooter();
                f.html(`<label class="font-italic font-weight-light">${docstruct.tablefooter}</label>`);
                docstruct.table.body.push(['', { text: `${prevyear}\u2013${baseyear}`, style: 'tableHeader' }, { text: `${oldyear}\u2013${baseyear}`, style: 'tableHeader' }]);
                $(`<tr class="deliniate-bottom solid text-center">
                    <th class="text-center"> </th >
                    <th class="text-center">${prevyear}\u2013${baseyear} percent change</th>
                    <th class="text-center">${oldyear}\u2013${baseyear} CAGR</th>
                  </tr>`).appendTo(thead);
                //docstruct.table.body.push();
                let row = [{ text: cn.countyname, style: 'tableStub' },
                    { text: Number(bfdataRID.mytpi_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.mytpi_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.mytpi_pctch, 1).toFixed(1) + '%', style: 'tableCell'  },
                    { text: Number(bfdataRID.mytpi_aagr) === sqlerror ? 'NM' : utils.Round(bfdataRID.mytpi_aagr, 1).toFixed(1) + '%', style: 'tableCell' }
                ];
                docstruct.table.body.push(row);
                $(`<tr class="deliniate-bottom solid text-center">
                    <th class="text-center"> ${row[0].text} </th >
                    <td>${row[1].text}</td>
                    <td>${row[2].text}</td>
                  </tr>`).appendTo(tbody);
                if (geotype === 4) {
                    let row1 = [{ text: cn.statename, style: 'tableStub' },
                        { text: Number(bfdataRID.state_tpi_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.state_tpi_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.state_tpi_pctch, 1).toFixed(1) + '%', style: 'tableCell' },
                        { text: Number(bfdataRID.state_tpi_aagr) === sqlerror ? 'NM' : utils.Round(bfdataRID.state_tpi_aagr, 1).toFixed(1) + '%', style: 'tableCell' }
                    ];
                    docstruct.table.body.push(row1);
                    $(`<tr class="deliniate-bottom solid text-center">
                        <th class="text-center"> ${row1[0].text} </th >
                        <td>${row1[1].text}</td>
                        <td>${row1[2].text}</td>
                      </tr>`).appendTo(tbody);
                }
                let row2 = [{ text: 'U.S.', style: 'tableStub' },
                    { text: Number(bfdataRID.us_tpi_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.us_tpi_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.us_tpi_pctch, 1).toFixed(1) + '%', style: 'tableCell' },
                    { text: Number(bfdataRID.us_tpi_aagr) === sqlerror ? 'NM' : utils.Round(bfdataRID.us_tpi_aagr, 1).toFixed(1) + '%', style: 'tableCell' }
                ];
                docstruct.table.body.push(row2);
                $(`<tr class="deliniate-bottom solid text-center">
                    <th class="text-center"> ${row2[0].text}</th >
                    <td> ${row2[1].text}</td>
                    <td> ${row2[2].text}</td>
                  </tr>`).appendTo(tbody);
            }();
        }
        this.ParseCPI = function () {
            let docstruct = obj.doc.income.cpi;
            let text = $('<div class="col-sm-4 py-2"></div>').appendTo(cpi);
            let table = $('<div class="col-sm-8 py-4"></div>').appendTo(cpi);
            docstruct.title = 'Components of Personal Income';
            $('<h3>' + docstruct.title + '</h3>').appendTo(text);
            let txt = $('<p></p>').appendTo(text);
            let str = `Personal income includes <span definitiontype="Net earnings by place of residence">net earnings by place of residence</span>; <span definitiontype="dividends, interest, and rent" >dividends, interest, and rent</span>; and <span definitiontype="personal current transfer receipts" >personal current transfer receipts</span> received by the residents of ${cn.countyname}.`;
            docstruct.text = str;
            txt.html(docstruct.text);
            this.ParseTables = function () {
                let ParseTable1 = function () {
                    docstruct.table1title = `${prevyear}\u2013${baseyear} Percent Change`;
                    docstruct.table1 = {
                        style: 'table',
                        headerRows: 1,
                        widths: geotype === 4 ?  ['*', 'auto', '*', 50] : ['*', 'auto', 50],
                        body: []
                    }
                    let crd = new obj.Card();
                    crd.SetHeader(`<h4 class="p-0 m-0 text-center">${docstruct.table1title}</h4>`);
                    table.append(crd.GetCard());
                    let tbl = $('<table class="w-100 table table-boder reis"></table>').appendTo(crd.GetBody());
                    let thead = $('<thead></thead>').appendTo(tbl);
                    let tbody = $('<tbody></tbody>').appendTo(tbl);

                    let hrow = [{ text: ' ', style: 'tableHeader' }, { text: cn.countyname, style: 'tableHeader' }]
                    docstruct.table1.body.push(hrow);    
                    if (geotype === 4) hrow.push({ text: cn.statename, style: 'tableHeader' });
                    hrow.push({ text: 'U.S.', style: 'tableHeader' });
                    let trh = $(`<tr class="deliniate-bottom solid text-center"></tr>`).appendTo(thead);
                    hrow.forEach(function (item) {
                        $(`<th class="text-center">${item.text}</th>`).appendTo(trh);
                    });
                    let row = [{ text: 'Net earnings', style: 'tableStub' },
                        { text: Number(bfdataRID.earn_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.earn_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.earn_pctch, 1).toFixed(1) + '%', style: 'tableCell' }
                    ]
                    if (geotype === 4) row.push({ text: Number(bfdataRID.state_earn_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.state_earn_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.state_earn_pctch, 1).toFixed(1) + '%', style: 'tableCell' });
                    row.push({ text: Number(bfdataRID.US_earn_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.US_earn_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.US_earn_pctch, 1).toFixed(1) + '%', style: 'tableCell' });
                    
                    docstruct.table1.body.push(row);
                    $(` <tr class="deliniate-bottom solid text-center">
                        <th class="text-center">${row[0].text}</th>
                        <td>${row[1].text}</td>
                        ${geotype === 4 ? ('<td>' + row[2].text + '</td>') : ''}
                        <td>${row[geotype === 4 ? 3 : 2].text}</td>
                    </tr>`).appendTo(tbody);

                    let row1 = [{ text: 'Dividends, interest, and rent', style: 'tableStub' },
                        { text: Number(bfdataRID.dir_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.dir_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.dir_pctch, 1).toFixed(1) + '%', style: 'tableCell' }
                    ]
                    if (geotype === 4) row1.push({ text: Number(bfdataRID.state_dir_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.state_dir_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.state_dir_pctch, 1).toFixed(1) + '%', style: 'tableCell' });
                    row1.push({ text: Number(bfdataRID.US_dir_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.US_dir_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.US_dir_pctch, 1).toFixed(1) + '%', style: 'tableCell' });
                    docstruct.table1.body.push(row1);

                    $(` <tr class="deliniate-bottom solid text-center">
                        <th class="text-center">${row1[0].text}</th>
                        <td>${row1[1].text}</td>
                        ${geotype === 4 ? `<td>${row1[2].text}</td>` : ''}
                        <td>${geotype === 4 ? row1[3].text : row1[2].text}</td>
                    </tr>`).appendTo(tbody);

                    let row2 = [{ text: 'Personal current transfer receipts', style: 'tableStub' },
                        { text: Number(bfdataRID.tran_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.tran_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.tran_pctch, 1).toFixed(1) + '%', style: 'tableCell' }
                        ]
                    if (geotype === 4) row2.push({ text: Number(bfdataRID.state_tran_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.state_tran_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.state_tran_pctch, 1).toFixed(1) + '%', style: 'tableCell' });
                    row2.push({ text: Number(bfdataRID.US_tran_pctch) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.US_tran_pctch)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.US_tran_pctch, 1).toFixed(1) + '%', style: 'tableCell'});
                    docstruct.table1.body.push(row2);

                    $(` <tr class="deliniate-bottom solid text-center">
                        <th class="text-center">${row2[0].text}</th>
                        <td>${row2[1].text}</td>
                        ${geotype === 4 ? `<td>${row2[2].text}</td>` : ''}
                        <td>${geotype === 4 ? row2[3].text : row2[2].text}</td>
                    </tr>`).appendTo(tbody);
                }();
                let ParseTable2 = function () {
                    docstruct.table2title = `${oldyear}\u2013${baseyear} CAGR`;
                    docstruct.table2 = {
                        style: 'table',
                        headerRows: 1,
                        widths: geotype === 4 ? ['*', 'auto', '*', 50] : ['*', 'auto', 50],
                        body: []
                    }
                    let crd = new obj.Card(true);
                    crd.SetHeader(`<h4 class="p-0 m-0 text-center">${oldyear}\u2013${baseyear} CAGR</h4>`);
                    table.append(crd.GetCard());
                    let tbl = $('<table class="w-100 table table-boder reis"></table>').appendTo(crd.GetBody());
                    let thead = $('<thead></thead>').appendTo(tbl);
                    let tbody = $('<tbody></tbody>').appendTo(tbl);


                    let hrow = [{ text: ' ', style: 'tableHeader' }, { text: cn.countyname, style: 'tableHeader' }]
                    docstruct.table2.body.push(hrow);
                    if (geotype === 4) hrow.push({ text: cn.statename, style: 'tableHeader' });
                    hrow.push({ text: 'U.S.', style: 'tableHeader' });
                    let trh = $(`<tr class="deliniate-bottom solid text-center"></tr>`).appendTo(thead);
                    hrow.forEach(function (item) {
                        $(`<th class="text-center">${item.text}</th>`).appendTo(trh);
                    });
                    let row = [{ text: 'Net earnings', style: 'tableStub' },
                        { text: Number(bfdataRID.earn_aagr) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.earn_aagr)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.earn_aagr, 1).toFixed(1) + '%', style: 'tableCell' }
                    ]
                    if (geotype === 4) row.push({ text: Number(bfdataRID.state_earn_aagr) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.state_earn_aagr)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.state_earn_aagr, 1).toFixed(1) + '%', style: 'tableCell' });
                    row.push({ text: Number(bfdataRID.US_earn_aagr) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.US_earn_aagr)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.US_earn_aagr, 1).toFixed(1) + '%', style: 'tableCell' });
                    docstruct.table2.body.push(row);

                    $(` <tr class="deliniate-bottom solid text-center">
                        <th class="text-center">${row[0].text}</th>
                        <td>${row[1].text}</td>
                        ${geotype === 4 ? `<td>${row[2].text}</td>` : ''}
                        <td>${geotype === 4 ?  row[3].text  :  row[2].text}</td>
                    </tr>`).appendTo(tbody);

                    let row1 = [{ text: 'Dividends, interest, and rent', style: 'tableStub' },
                        { text: Number(bfdataRID.dir_aagr) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.dir_aagr)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.dir_aagr, 1).toFixed(1) + '%', style: 'tableCell' }
                    ]
                    if (geotype === 4) row1.push({ text: Number(bfdataRID.state_dir_aagr) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.state_dir_aagr)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.state_dir_aagr, 1).toFixed(1) + '%', style: 'tableCell' });
                    row1.push({ text: Number(bfdataRID.US_dir_aagr) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.US_dir_aagr)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.US_dir_aagr, 1).toFixed(1) + '%', style: 'tableCell' });
                    docstruct.table2.body.push(row1);

                    $(` <tr class="deliniate-bottom solid text-center">
                        <th class="text-center">${row1[0].text}</th>
                        <td>${row1[1].text}</td>
                        ${geotype === 4 ? `<td>${row1[2].text}</td>` : ''}
                        <td>${geotype === 4 ? row1[3].text : row1[2].text}</td>
                    </tr>`).appendTo(tbody);

                    let row2 = [{ text: 'Personal current transfer receipts', style: 'tableStub' },
                        { text: Number(bfdataRID.tran_aagr) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.tran_aagr)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.tran_aagr, 1).toFixed(1) + '%', style: 'tableCell' }
                    ]
                    if (geotype === 4) row2.push({ text: Number(bfdataRID.state_tran_aagr) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.state_tran_aagr)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.state_tran_aagr, 1).toFixed(1) + '%', style: 'tableCell' });
                    row2.push({ text: Number(bfdataRID.US_tran_aagr) === sqlerror ? 'NM' : Math.abs(Number(bfdataRID.US_tran_aagr)) < 0.05 ? 'unchanged' : utils.Round(bfdataRID.US_tran_aagr, 1).toFixed(1) + '%', style: 'tableCell' });
                    docstruct.table2.body.push(row2);

                    $(` <tr class="deliniate-bottom solid text-center">
                        <th class="text-center">${row2[0].text}</th>
                        <td>${row2[1].text}</td>
                        ${geotype === 4 ? `<td>${row2[2].text}</td>` : ''}
                        <td>${geotype === 4 ? row2[3].text : row2[2].text}</td>
                    </tr>`).appendTo(tbody);
                    docstruct.table2footnote = 'CAGR: compound annual growth rate';
                    let f = crd.GetFooter();
                    f.html(`<label class="font-italic font-weight-light">${docstruct.table2footnote}</label>`);

                }();
                let ParseCharts = function () {
                    let charts = docstruct.charts;
                    charts.title = 'Percent Contribution to Personal Income';
                    charts.cols = geotype === 4 ? ['', cn.countyname, cn.statename, 'U.S.'] : ['', cn.countyname, 'U.S.'];
                    charts.rows = [oldyear, baseyear];
                    let crd = new obj.Card(true);
                    crd.SetHeader(`<h4 class="p-0 m-0 text-center">${charts.title}</h4>`);
                    table.append(crd.GetCard());
                    let tbl = $('<table class="w-100 table table-boder reis"></table>').appendTo(crd.GetBody());
                    let thead = $('<thead></thead>').appendTo(tbl);
                    let tbody = $('<tbody></tbody>').appendTo(tbl);
                    $(`<tr class="deliniate-bottom solid text-center"> 
                    <th class="text-center"> </th>
                    <th class="text-center">${cn.countyname}</th>
                    ${geotype === 4 ? '<th class="text-center">' + cn.statename + '</th>' : ''}
                    <th class="text-center">U.S.</th>
                   </tr>`).appendTo(thead);
                    $(` <tr class="deliniate-bottom solid text-center">
                        <th class="text-center align-middle">${oldyear}</th>
                        <td id="bfPiedataOld-chart"></td>
                        ${geotype === 4 ? ('<td id="bfPieDataOldState-chart"></td>') : ''}
                        <td id="bfPieDataOldUS-chart"></td>
                    </tr>`).appendTo(tbody);
                    $(` <tr class="deliniate-bottom solid text-center">
                        <th class="text-center align-middle">${baseyear}</th>
                        <td id="bfPieData-chart"  style="height:10%;"></td>
                        ${geotype === 4 ? ('<td id="bfPieDataState-chart"></td>') : ''}
                        <td id="bfPieDataUS-chart"></td>
                    </tr>`).appendTo(tbody);

                    let f = crd.GetFooter().addClass('text-center');
                 /*   f.append(obj.MakeLegend("#004C97", "Net earnings by place of residence"));
                    f.append(obj.MakeLegend("#D86018", "Dividends, interest, and rent"));
                    f.append(obj.MakeLegend("#9EA2A2", "Personal current transfer receipts"));*/
                    charts.legend = [{ color: "#004C97", text: "Net earnings by place of residence" }, { color: "#D86018", text: "Dividends, interest, and rent" }, { color: "#9EA2A2", text: "Personal current transfer receipts" }];
                    charts.legend.forEach(function (item) {
                        f.append(obj.MakeLegend(item.color,item.text));
                    })
                    // obj.data.SetCharts('pcpi_c2', pcpicharts.MakeLineChart("pcpi_c2", linedata), true);

                    obj.data.SetCharts('bfPiedataOld', piecharts.MakeChart("bfPiedataOld-chart", data.bfPiedataOld));
                    obj.data.SetCharts('bfPieDataOldUS', piecharts.MakeChart("bfPieDataOldUS-chart", data.bfPiedataOldUS));
                    obj.data.SetCharts('bfPieData', piecharts.MakeChart("bfPieData-chart", data.bfPiedata));
                    obj.data.SetCharts('bfPieDataUS', piecharts.MakeChart("bfPieDataUS-chart", data.bfPiedataUS));
                    if (geotype === 4) {
                        obj.data.SetCharts('bfPieDataOldState', piecharts.MakeChart("bfPieDataOldState-chart", data.bfPiedataOldState));
                        obj.data.SetCharts('bfPieDataState', piecharts.MakeChart("bfPieDataState-chart", data.bfPiedataState));
                    }
                }();
            }();
        }

        this.ParseGenInfoGdp = function () {
            let gi = obj.doc.gdp.geninfo;
            gi.publishedon = 'GDP last published on ' + obj.data.GetLastPublishedGDPDate();
            let con = $('<div class="col-sm-12"></div>').appendTo(geninfogdp);
            $('<i class="col-sm-12 m-0 p-0"></i>').html(gi.publishedon).appendTo(con);
            $('<h2>Economic Profile for ' + cn.countyname + '</h2>').appendTo(con);
        }
        this.ParseGDPS = function () {
            let docstruct = obj.doc.gdp.gdps;
            docstruct.title = 'Gross Domestic Product (GDP) by State';
            docstruct.text = [];
            let text = $('<div class="col-sm-12 py-2"></div>').appendTo(gdps);
            $('<h3>' + docstruct.title + '</h3>').appendTo(text);
            let txt = $('<p></p>').appendTo(text);
            let gspdata = obj.data.GetGSPData();
            let bfPdata = gspdata.bfPdata[0];
            let statename = bfPdata.statename;
            statename = fips === "00000" ? 'the <span class="text-nowrap">United States</span>' : fips === "11000" ? 'DC' : fips.substr(0, 1) === "9" ? 'the ' + statename + ' region' : statename;
            let yearspan = !bfPdata.realgdp_delta || !bfPdata.oldgdp || bfPdata.oldgdp === 0 ? 'no' : 'no';
            if (fips !== "00000" && fips.substr(0, 1) !== "9") {
                let str = `In ${rpd_statebaseyear}, ${bfPdata.statename} <span definitiontype="Gross domestic product (GDP) by state">current-dollar GDP</span> was ${utils.Round(bfPdata.gdp, 1).toLocaleString('en')} million`;
                str += fips !== '11000' ? ` and ranked ${bfPdata.gdp_rank} in the <span class="text-nowrap">United States</span>.` : '. ';
                if (yearspan === 'yes') {
                    str += ` In ${rpd_stateoldyear}, ${bfPdata.statename} GDP was ${utils.Round(bfPdata.oldgdp, 1).toLocaleString('en')} million`;
                    str += fips !== '11000' ? ` and ranked ${bfPdata.oldgdp_rank} in the <span class="text-nowrap">United States</span>.` : '. ';   
                }
                docstruct.text.push(str);
                txt.html(str);
                let str2 = `In ${rpd_statebaseyear}, ${bfPdata.statename} <span definitiontype="Real GDP by state">real GDP</span> `;
                str2 += bfPdata.realgdp_delta > 0 ? ` grew ${utils.Round(bfPdata.realgdp_delta, 1).toLocaleString('en')} percent` : bfPdata.realgdp_delta < 0 ? ` contracted ${Math.abs(utils.Round(bfPdata.realgdp_delta, 1)).toLocaleString('en')} percent` : ' remained flat';
                str2 += `; the ${rpd_stateprevyear}\u2013${rpd_statebaseyear} national change was ${utils.Round(bfPdata.realusgdp_delta, 1).toLocaleString('en')} percent. `;
                if (yearspan === 'yes') {
                    str2 += `The  ${rpd_stateoldyear}\u2013${rpd_statebaseyear} <span definitiontype="Compound annual growth rate"> compound annual growth rate</span>  for ${bfPdata.statename} real GDP was ${utils.Round(bfPdata.realgdp_aagr, 1).toLocaleString('en')} percent;
                                the compound annual growth rate for the nation was ${utils.Round(bfPdata.realusgdp_aagr, 1).toLocaleString('en')} percent. `;
                    /*if (rpd_statebaseyear > 2006 && rpd_statebaseyear != (rpd_stateoldyear + 1)) {
                        //Do not show ten year change if baseyear is between 1997 and 2006
                    }*/
                }
                docstruct.text.push(str2);
                $('<p></p>').html(str2).appendTo(text);

                let gdpstatenote = "<p><i class='col-sm-10 m-0 p-0'><b>Note</b>: Annual GDP by state statistics for 2017 through 2022 reflecting the 2023 Comprehensive Update of the Regional Economic Accounts have been incorporated. Annual GDP by state prior to 2017 will be <a href=\'https://www.bea.gov/information-updates-national-economic-accounts\'>forthcoming</a>.</i></p>";
                docstruct.text.push(gdpstatenote);
                $('<p></p>').html(gdpstatenote).appendTo(text);
            }
        }
        this.ParseGDPSI = function () {
            let docstruct = obj.doc.gdp.gdpsi;
            docstruct.title = 'GDP by State for Industries';
            docstruct.text = [];
            let gspdata = obj.data.GetGSPData();
            let bfPdata = gspdata.bfPdata[0];
            let text = $('<div class="col-sm-4 py-2"></div>').appendTo(gdpsi);
            let chrt = $('<div class="col-sm-8 py-4"></div>').appendTo(gdpsi);
            $('<h3>' + docstruct.title + '</h3>').appendTo(text); 
            this.ParseText = function () {
                let str = `In ${rpd_statebaseyear}, the largest industry in ${bfPdata.statename} was ${bfPdata.industry1.toLowerCase()}.  This industry accounted for ${utils.Round(bfPdata.industry1_pct, 1)} percent of `;
                str += (fips === '00000' ? " U.S." : bfPdata.statename) + ' GDP';
                if (rpd_statebaseyear !== 1997 && bfPdata.industry1_delta != null) {
                    str += ` and ` + (bfPdata.industry1_delta > 0 ? ` had ${utils.Round(bfPdata.industry1_delta, 1)} percent real growth` : bfPdata.industry1_delta < 0 ? ` had a ${Math.abs(utils.Round(bfPdata.industry1_delta, 1))} percent real decline` : ' did not have any growth');
                }
                str += '. ';
                str += `The second largest industry was ${bfPdata.industry2.toLowerCase()}, which accounted for ${utils.Round(bfPdata.industry2_pct, 1)} percent of `;
                str += (fips === '00000' ? " U.S." : bfPdata.statename) + ' GDP';
                if (rpd_statebaseyear !== 1997 && bfPdata.industry2_delta != null) {
                    str += ` and ` + (bfPdata.industry2_delta > 0 ? ` had ${utils.Round(bfPdata.industry2_delta, 1)} percent real growth` : bfPdata.industry2_delta < 0 ? ` had a ${Math.abs(utils.Round(bfPdata.industry2_delta, 1))} percent real decline` : ' did not have any growth');
                }
                str += '. ';
                docstruct.text.push(str);
                $('<p></p>').html(str).appendTo(text);

                if (rpd_statebaseyear != 1997) {
                    let str2 = "";
                    if (bfPdata.industryCTG1_CTG > 0 && bfPdata.industryCTG2_CTG > 0) {
                        str2 += `The largest contributor to real GDP growth in ${bfPdata.statename} was ${bfPdata.industryCTG1.toLowerCase()}. This industry accounted for `;
                        str2 += `${utils.Round(bfPdata.industryCTG1_CTG, 2).toFixed(2)} percentage ` + (bfPdata.industryCTG1_CTG >= 1 ? ' points ' : ` point `) + 'of the total growth in real GDP. ';

                        str2 += `The second largest contributor to real GDP growth was ${bfPdata.industryCTG2.toLowerCase()}. This industry accounted for `;
                        str2 += `${utils.Round(bfPdata.industryCTG2_CTG, 2).toFixed(2)} percentage ` + (bfPdata.industryCTG2_CTG >= 1 ? ' points ' : ` point `) + 'of the total growth in real GDP. * ';
                    }
                    else {
                        if (bfPdata.industryCTG1 && bfPdata.industryCTG1 !== "") {
                            str2 += `The industry that subtracted the most from real GDP growth in ${bfPdata.statename} was ${bfPdata.industryCTG1.toLowerCase()}. This industry subtracted `;
                            str2 += `${Math.abs(utils.Round(bfPdata.industryCTG1_CTG, 2)).toFixed(2)} percentage `+ (Math.abs(bfPdata.industryCTG1_CTG) >  1 ? ' points ' : ' point ');
                            str2 += `from the growth rate of real GDP.
                                    The second largest industry to subtract from growth was ${bfPdata.industryCTG2.toLowerCase()}. This industry subtracted `;
                            str2 += `${Math.abs(utils.Round(bfPdata.industryCTG2_CTG, 2)).toFixed(2)} percentage ` + (Math.abs(bfPdata.industryCTG2_CTG) > 1 ? ' points ' : ' point ') + ' from the growth rate of real GDP. * ';
                        }
                    }
                    if (str2 !== "") {
                        docstruct.text.push(str2);
                        $('<p></p>').html(str2).appendTo(text);
                    }
                }
                docstruct.footnote = '<em><sup>*</sup>The industry contributions, or sum thereof, may be larger than 100 percent (and the percentage points larger than the percent change) because growing and declining industries offset one another.</em>';
                $(`<p class="note">${docstruct.footnote}</p>`).appendTo(text);
            }();
            this.parseChrt = function () {
                if (gspdata.bfPPiedata[0].PercentGDP === 'suppressed') {
                    docstruct.charts.title = 'Top Five State Industries as a Percent of Total GDP, ' + rpd_statebaseyear;
                    //console.log(gspdata.bfPPiedata[0].PercentGDP);
                    let crd = new obj.Card(true);
                    chrt.append(crd.GetCard());
                    crd.SetHeader('<h4 class="p-0 m-0 text-center">' + docstruct.charts.title + '</h4>');

                    let tbl = $('<table class="w-100 table table-boder reis"></table>').appendTo(crd.GetBody());
                    let thead = $('<thead></thead>').appendTo(tbl);
                    let tbody = $('<tbody></tbody>').appendTo(tbl);

                    $(`<tr class="deliniate-bottom solid text-center"> 
                    <th class="text-center">${cn.countyname}</th>
                    <th class="text-center">United States</th>
                   </tr>`).appendTo(thead);
                    $(` <tr class="deliniate-bottom solid text-center">
                        <td id="GDPbfPiedataOld-chart" style="height:300px;" colspan=2><em>These charts are unavailable because underlying industry data is suppressed to preserve confidentiality.</em></td>
                    </tr>`).appendTo(tbody);
                }
                else {
                    docstruct.charts.title = 'Top Five State Industries as a Percent of Total GDP, ' + rpd_statebaseyear;
                    docstruct.charts.cols = [cn.countyname, cn.statename];
                    let crd = new obj.Card(true);
                    chrt.append(crd.GetCard());
                    crd.SetHeader('<h4 class="p-0 m-0 text-center">' + docstruct.charts.title + '</h4>');

                    let tbl = $('<table class="w-100 table table-boder reis"></table>').appendTo(crd.GetBody());
                    let thead = $('<thead></thead>').appendTo(tbl);
                    let tbody = $('<tbody></tbody>').appendTo(tbl);
                    $(`<tr class="deliniate-bottom solid text-center"> 
                    <th class="text-center">${cn.countyname}</th>
                    ${geotype === 4 ? '<th class="text-center">' + cn.statename + '</th>' : ''}
                    <th class="text-center">United States</th>
                   </tr>`).appendTo(thead);
                    $(` <tr class="deliniate-bottom solid text-center">
                        <td id="GDPbfPiedataOld-chart" style="height:300px;"></td>
                        <td id="GDPbfPieDataOldUS-chart" style="height:300px;"></td>
                    </tr>`).appendTo(tbody);
                    //let td = $('<td class="pt-5" colspan="2"></td>').appendTo($('<tr class= "deliniate-bottom solid text-center"></tr>').appendTo($('<tfoot></tfoot>').appendTo(tbl)));

                    docstruct.charts.legend = [];
                    let f = crd.GetFooter().addClass('text-center');
                    gspdata.bfPPiedataDesc.forEach(function (d) {
                        f.append(obj.MakeLegend("#" + d.color, d.IndustryName));
                        docstruct.charts.legend.push({ color: "#" + d.color, text: d.IndustryName });
                        //$(`<label class="mx-4"> <i class="fas fa-circle" style="color:#${d.color}"></i> ${d.IndustryName} </label>`).appendTo(td);
                    });

                    docstruct.charts.c1 = piecharts.MakeChart("GDPbfPiedataOld-chart", gspdata.bfPPiedata, "PercentGDP", "IndustryName");
                    docstruct.charts.c2 = piecharts.MakeChart("GDPbfPieDataOldUS-chart", gspdata.bfPPiedataUS, "PercentGDP", "IndustryName");

                    $('#GDP-tab').one('shown.bs.tab', function (e) {
                        docstruct.charts.c1.invalidateData();
                        docstruct.charts.c2.invalidateData();
                        //c2.deepInvalidate();
                    });
                }
            }();
        }
        this.ParseGDPLA = function () {
            let docstruct = obj.doc.gdp.gdpla;
            docstruct.title = 'Gross Domestic Product (GDP) by Local Area';
            docstruct.text = [];
            let text = $('<div class="col-sm-12 py-2"></div>').appendTo(gdps);
            $('<h3>' + docstruct.title + '</h3>').appendTo(text);
            let txt = $('<p></p>').appendTo(text);
            let gdplocalpdata = obj.data.GetGDPLocalData();

            let txt1 = geotype == 4 ? "in the state" : "among MSAs";
            let txt2 = geotype == 4 ? "state" : "U.S. metropolitan portion";


            let txt3 = $(`<p>In ${rpd_countybaseyear}, ${cn.countyname} produced ${utils.Round(gdplocalpdata.gdp).toLocaleString('en')} in 
            <span definitiontype="Gross domestic product (GDP) by county and metropolitan area">current-dollar total GDP</span><sup>*</sup>.
            This GDP ranked ${gdplocalpdata.gdp_rank} ${txt1} and accounted for ${gdplocalpdata.gdp_share.toFixed(1)} percent of the ${txt2} total.
            </p>`).appendTo(text).html();
            //In ${rpd_countyoldyear}, the total GDP of ${cn.countyname} was ${utils.Round(gdplocalpdata.oldgdp).toLocaleString('en')} and ranked ${gdplocalpdata.oldgdp_rank} ${txt1}.
            docstruct.text.push(txt3);


            let txt4 = $(`<p>In ${rpd_countybaseyear}, ${cn.countyname} real GDP 
            ${gdplocalpdata.gdp_delta >= .05 ? 'grew ' + gdplocalpdata.gdp_delta + ' percent' : gdplocalpdata.gdp_delta < -0.05 ? 'fell ' + Math.abs(gdplocalpdata.gdp_delta).toFixed(1) + ' percent' : 'remained unchanged'};
            the ${rpd_countyprevyear}\u2013${rpd_countybaseyear} ${txt2} change was ${gdplocalpdata.gdp_state_delta.toFixed(1)} percent. </p>`).appendTo(text).html();
            //The ${rpd_countyoldyear}\u2013${rpd_countybaseyear} compound annual growth rate for ${ cn.countyname } real GDP was ${ gdplocalpdata.county_aagr.toFixed(1) } percent; the compound annual growth rate for the ${ txt2 } was ${ gdplocalpdata.state_aagr.toFixed(1) } percent.
            docstruct.text.push(txt4);

            docstruct.footnote = '<sup>*</sup>GDP estimates are in thousands of dollars.'
            $(`<p class="note"><sup>*</sup>GDP estimates are in thousands of dollars.</p >`).appendTo(text);

            let gdpcountynote = "<p><i class='col-sm-10 m-0 p-0'><b>Note</b>: Annual GDP by local area statistics for 2017 through 2022 reflecting the 2023 Comprehensive Update of the Regional Economic Accounts have been incorporated. Annual GDP by local area prior to 2017 will be <a href=\'https://www.bea.gov/information-updates-national-economic-accounts\'>forthcoming</a>.</i></p>";
            docstruct.text.push(gdpcountynote);
            $('<p></p>').html(gdpcountynote).appendTo(text);
        }
        this.ParseGDPIC = function () {
            let docstruct = obj.doc.gdp.gdpic;
            docstruct.title = 'Industry Composition';
            docstruct.text = [];

            let gdplocalpdata = obj.data.GetGDPLocalData();
            let text = $('<div class="col-sm-12 py-6"></div>').appendTo(gdpic);
            /*let table = $('<div class="col-sm-8 py-4"></div>').appendTo(gdpic);*/
            $('<h3>' + docstruct.title + '</h3>').appendTo(text);
            this.ParseText = function () {
                docstruct.text =  $(`<p>Goods- and services-producing industries and government comprise total GDP.  
                    Industry statistics reflect the value of goods and services produced by each of those industries located in ${cn.countyname} . 
                    In ${rpd_countybaseyear}, ${gdplocalpdata.industry1} produced the largest portion of GDP, while ${gdplocalpdata.industry2} and ${gdplocalpdata.industry3} produced 
                    the second and third largest portion of GDP, respectively.</p>`).appendTo(text).html();
            }();

            /*this.ParseTable = function () {
                docstruct.table1title = 'Real Gross Domestic Product';
 

                docstruct.table = {
                    style: 'table',
                    headerRows: 1,
                    widths: ['*', 'auto', 'auto'],
                    body: []
                }
                let crd = new obj.Card();
                crd.SetHeader(`<h4 class="p-0 m-0 text-center">${docstruct.table1title}</h4>`);
                table.append(crd.GetCard());
                let tbl = $('<table class="w-100 table table-boder reis"></table>').appendTo(crd.GetBody());
                let thead = $('<thead></thead>').appendTo(tbl);
                let tbody = $('<tbody></tbody>').appendTo(tbl);

                let hrow = [{ text: ' ', style: 'tableHeader' }, { text: `${rpd_countyprevyear}\u2013${rpd_countybaseyear} percent change`, style: 'tableHeader' }, { text: `${rpd_countyoldyear}\u2013${rpd_countybaseyear} CAGR`, style: 'tableHeader' }];
                docstruct.table.body.push(hrow);
                
                let trh = $(`<tr class="deliniate-bottom solid text-center"></tr>`).appendTo(thead);
                hrow.forEach(function (item) {
                    $(`<th class="text-center">${item.text}</th>`).appendTo(trh);
                });

                let row = [{ text: cn.countyname, style: 'tableStub' },
                    { text: gdplocalpdata.gdp_delta.toFixed(1) + '  %', style: 'tableCell' },
                    { text: gdplocalpdata.county_aagr.toFixed(1) + '  %', style: 'tableCell' }];
                docstruct.table.body.push(row);

                $(`<tr class="deliniate-bottom solid text-center">
                    <th class="text-center">${row[0].text}</th>
                    <td>${row[1].text}</td>
                    <td>${row[2].text}</td>
                </tr>`).appendTo(tbody);

                let row1 = [{ text: geotype == 4 ? cn.statename : 'U.S. Metropolitan Portion', style: 'tableStub' },
                    { text: gdplocalpdata.gdp_state_delta.toFixed(1) + '  %', style: 'tableCell' },
                    { text: gdplocalpdata.state_aagr.toFixed(1) + '  %', style: 'tableCell' }];
                docstruct.table.body.push(row1);

                $(`<tr class="deliniate-bottom solid text-center">
                    <th class="text-center">${row1[0].text}</th>
                    <td>${row1[1].text}</td>
                    <td>${row1[2].text}</td>
                </tr>`).appendTo(tbody);

                let row2 = [{ text: 'U.S.', style: 'tableStub' },
                    { text: gdplocalpdata.gdp_us_delta.toFixed(1) + '  %', style: 'tableCell' },
                    { text: gdplocalpdata.us_aagr.toFixed(1) + '  %', style: 'tableCell' }];
                docstruct.table.body.push(row2);
                $(`<tr class="deliniate-bottom solid text-center">
                    <th class="text-center">${row2[0].text}</th>
                    <td>${row2[1].text}</td>
                    <td>${row2[2].text}</td>
                </tr>`).appendTo(tbody);

                docstruct.tablefooter = 'CAGR: compound annual growth rate';
                $(`<tfoot>
                  <tr>
                    <td colspan="3" class="deliniate-top solid note">${docstruct.tablefooter}</td>
                  </tr>
                </tfoot>`).appendTo(tbody); 

            }();*/

        }
        
        this.ParseGenInfoIncome();
        this.ParseGenInfoGdp();
        this.ParsePCPI();
        this.ParsePI();
        this.ParseCPI();

        if (geotype === 3) {
            this.ParseGDPS();
            this.ParseGDPSI();
        }
        else {
            obj.doc.gdp.gdps = null;
            obj.doc.gdp.gdpsi = null;
            if (fips !== "00000" && fips.substr(0, 1) !== "9") this.ParseGDPLA();
            else obj.doc.gdp.gdpla = null;
            this.ParseGDPIC();
        }
        obj.ParseDefinitions();
    }
    this.ParseDefinitions = function () {
        $("span[definitiontype]").addClass("btn-link pointable").each(function () {
            let def = $(this).attr("definitiontype");
            $(this).attr("title", function () {
                if (!$(this).attr("title"))
                    return def;
            })
            $(this).click(function () {
                $.ajax({
                    url: `${app.URLPath}/data/Definition`,
                    data: { "term": def},
                    success: function (data) {
                        let r = $.parseJSON(data).Table[0];
                        let title = r.TermName ? r.TermName : def;
                        let defintion = r.TermDefinition ? r.TermDefinition : "Error. Definition not found for this term";
                        obj.DefinitionModal.render(title, defintion);
                        setTimeout(function () { obj.DefinitionModal.show(); }, 500);
                    },
                    error: function (data) {
                        modals.Info('error', 'Request failed. Please try again later. ');
                    },
                    complete: function (data) {
                        //alert('complete');
                    }
                });
            });
        });
    }
    this.DefinitionModal = new function () {
        const def = this;
        const o = new modals.ModalObj("definition-modal");
        o.icon = "fa-info-circle text-info mr-2";
        o.size = "modal-xl";
        const DefinitionsModal = new modals.MakeModal(o).modal;
        $(DefinitionsModal).find("h4.modal-title span.modal-title").html("Definitions").css("font-size", ".8em");
        $(DefinitionsModal).on('shown.bs.modal', function () {
        }).on('hidden.bs.modal', function () {
            def.reset();
        });
        this.show = function () {
            DefinitionsModal.modal('show');
        };
        this.render = function (title, defstr) {
            def.reset();
            def.setTitle(title);
            def.addContent($(`<div>${defstr}</div>`));
        };
        this.setTitle = function (title) {
            $(DefinitionsModal).find("h4.modal-title span.modal-title").html("What is " + title + "?");
        };
        this.getBody = function () {
            return $("#definition-modal-Body");
        };
        this.reset = function () {
            $(DefinitionsModal).find("h4.modal-title span.modal-title").html("Definitions");
            $("#definition-modal-Body").html("");
        };
        this.addContent = function (el) {
            $("#definition-modal-Body").append(el);
        };
    };
    this.OptionsModal = new function () {
        const opt = this;
        const o = new modals.ModalObj("options-modal");
        o.icon = "fa-cogs text-danger mr-2";
        o.size = "modal-xl";
        o.title = "Modify Selections";
        o.buttons = [{
            class: "btn-info",
            dismiss: true,
            text: "Apply Selections",
            action: function () {
                let geotype = obj.data.GetGeoType();
                let fips = $("#BearfactsOptionsSelect").val();
                obj.GetData(fips, geotype);
            }
        },
        {
            class: "btn-info",
            dismiss: true,
            text: "Close",
            action: function () { }
        }];

        const om = new modals.MakeModal(o).modal;
        om.on('shown.bs.modal', function () {
            // alert();
        }).on('hidden.bs.modal', function () {
            opt.reset();
        });
        this.show = function () {
            opt.render();
            om.modal('show');
        };
        this.render = function () {
            let geotype = obj.data.GetGeoType();
            let fips = obj.data.GetFips();
            opt.reset();
            const form = $('<div id="BearfactsOptionsForm" class="container-fluid form-inline"></div>');
            opt.addContent(form);
            //var r = renderers.init(o, form);
            if (geotype === 3) {
                form.append($('<label class="col-sm-4">Select State:</label>'));
                let sel = $('<select id="BearfactsOptionsSelect" class="form-control col-sm-8"></select>').appendTo(form);
                obj.data.GetStateList().forEach(function (state) {
                    $(`<option value="${state.fips_code}">${state.name}</option>`).prop('selected', fips === state.fips_code).appendTo(sel);
                });
            }
            else if (geotype === 4) {
                form.append($('<label class="col-sm-4 my-3">Select State:</label>'));
                let sel = $('<select class="form-control col-sm-8 my-3"></select>').appendTo(form);
                let statefips = fips ? fips.toString().substr(0, 2) + '000' : "";
                obj.data.GetStateList().forEach(function (state) {
                    $('<option value="' + state.fips_code + '">' + state.name + '</option>').prop('selected', statefips === state.fips_code).appendTo(sel);
                });
                form.append($('<label class="col-sm-4 my-3">Select County:</label>'));
                let cntsel = $('<select id="BearfactsOptionsSelect" class="form-control col-sm-8 my-3"></select>').appendTo(form);
                sel.change(function () {
                    cntsel.empty();
                    obj.data.SetCountyList($(this).val(), function () {
                        obj.data.GetCountyList().forEach(function (county, index) {
                            if (index > 0) $('<option value="' + county.fips_code + '">' + county.name + '</option>').prop('selected', fips === county.fips_code).appendTo(cntsel);
                        });
                    });
                }).change();

            }
            else {
                form.append($('<label class="col-sm-4">Select MSA:</label>'));
                let sel = $('<select id="BearfactsOptionsSelect" class="form-control col-sm-8"></select>').appendTo(form);
                obj.data.GetMsaList().forEach(function (msa) {
                    $(`<option value="${msa.fips_code}">${msa.name}</option>`).prop('selected', fips === msa.fips_code).appendTo(sel);
                });
            }
        };
        this.getBody = function () {
            return $("#options-modal-Body");
        };
        this.reset = function () {
            $("#options-modal-Body").html("");
        };
        this.addContent = function (el) {
            $("#options-modal-Body").append(el);
        };
    };
    this.Card = function (hasFooter) {
        let card = $('<div class="card"></div>');
        let header = $('<div class="card-header"></div>').appendTo(card);
        let body = $('<div class="card-body"></div>').appendTo(card);
        let footer = hasFooter ? $('<div class="card-footer text-muted"></div>').appendTo(card) : null;
        this.GetCard = function () { return card };
        this.SetHeader = function (txt) { header.html(txt) };
        this.GetBody = function () { return body };
        this.GetFooter = function () { return footer };
    }
    this.ModifySelections = function () {
        obj.OptionsModal.show();
    }
    this.MakeLegend = function (color, text) {
        let w = 16;
        let r = w / 2;        
        let label = $(`<label class="mx-4 text-center">  ${text}</label>`);
        let canvas = $(`<canvas r="${r}" color="${color}" width="${w}px" height="${w}px" class="mx-2 align-middle"></canvas>`).prependTo(label);
        obj.DrawCircle(canvas);
        return label;
    }
    this.DrawCircle = function (canvas) {
        let color = canvas.attr("color");
        let r = parseInt(canvas.attr("r"));
        let cvx = canvas[0];
        let context = cvx.getContext("2d");
        let rect = cvx.getBoundingClientRect();
        context.fillStyle = color;
        context.beginPath();
        context.arc(r, r, r, 0, 2 * Math.PI);
        context.fill();
    }
    this.Share = function () {
        const o = new modals.ModalObj("share-modal");
        o.icon = "fa-share-alt text-info mr-2";
        o.size = "modal-xl";
        o.title = "Share";
        let sharemodal = new modals.MakeModal(o).modal;
        let loc = window.location;
        let url = `${loc.protocol}://${loc.host}${loc.pathname}?f=${obj.data.GetFips()}&a=${obj.data.GetGeoType()}`;
        let txtArea = $(`<textarea class="w-100" readonly="true">${url}</textarea>`);
        $("#share-modal-Body").append(txtArea);
        txtArea.select();
        sharemodal.modal('show');
    }
    this.Print = async function () {
        $("#GDP-tab").tab("show");
        $("#PersonalIncome-panel").css('display', 'block');
        printToPdf(obj.doc);
        setTimeout(function () {
            $("#PersonalIncome-panel").removeAttr('style');
            $("#PersonalIncome-tab").tab("show");
        }, 100);
        return;
    }
    this.somefunction = function () {
        $("#GDP-tab").tab("show");
        $("#PersonalIncome-panel").css('display', 'block');
        setTimeout(async function () {
            let divContents = $("#Data-panel").html();
            let printWindow = window.open('', '', 'height=800,width=1400');
            let doc = printWindow.document;
            doc.write(`<html><head><title>DIV Contents</title>
                        <link href="css/print.css" rel="stylesheet" />
                        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
                        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>


            `);
            doc.write(`<style>
                            .dot {
                                  height: 25px;
                                  width: 25px;
                                  border-radius: 50%;
                                  display: inline-block;
                                }
                            .hideonprint {  display: none; }
                            @page { size:  auto; margin: 50px; }
                        </style>`);

            doc.write(`</head><body>`);
            let container = $('<div></div>');
            let tbl = $(`<table class="w-100"></table>`).appendTo(container);
            let trh = $(`<tr></tr>`).appendTo(tbl);
            let tr2 = $(`<td colspan="2"></td>`).appendTo($(`<tr></tr>`).appendTo(tbl));
            trh.append($(`<td align="left" width="210"><img src="https://apps.bea.gov/regional/bearfacts/_images/bea_logo.png"/></td>`));
            trh.append($(`<td class="text-center" style="text-align:center; font-size: 24px; font-weight: bold; vertical-align: middle;"><h1>${$('#incomegeninfocontainer > div > h2').text()}</h1></td>`));
            let div = $(`<div class="w-100 mt-2"></div>`).appendTo(tr2);
            let left = $(`<div class="w-50 float-left">${$("#incomegeninfocontainer > div > i").parent().html()}</div>`).appendTo(div);
            left.find("i.m-0").replaceWith(function () { return $(`<p>${$(this).html()}</p>`) }).addClass('mb-3');
            let right = $(`<div style="width:50%;" class="float-right p-2">${$("#pcpicontainer > div.col-sm-8.py-4").html()}</div>`).appendTo(div);
            /*
                        let SetChartOptions = async function (chart) {
                            var options = await chart.exporting.getFormatOptions("png");
                            options.minWidth = 300;
                            options.minHeight = 250;
                            options.maxWidth = 400;
                            options.maxHeight = 300;
                            await chart.exporting.setFormatOptions("png", options);
                        }*/

            let charts = obj.data.GetCharts();
            let pcpi_c1 = charts.pcpi_c1;
            //await SetChartOptions(pcpi_c1)

            let imgData = await pcpi_c1.exporting.getImage("png");
            $(`<div class="w-100">${$("#pcpicontainer > div.col-sm-4.py-2").html()}</div>`).appendTo(left);
            right.find("#pcpi_c1").parent().html(`<img class="mb-5" src="${imgData}"/>`);

            let pcpi_c2 = charts.pcpi_c2;
            //await SetChartOptions(pcpi_c2)

            let imgData2 = await pcpi_c2.exporting.getImage("png");
            right.find("#pcpi_c2").parent().html(`<img class="mb-5" src="${imgData2}"/>`);

            let tr3 = $(`<td colspan="2"></td>`).appendTo($(`<tr></tr>`).appendTo(tbl));
            $(`<div class="w-100 mt-2">${$("#picontainer").html()}</div>`).appendTo(tr3);
            tr3.find('.col-sm-4, .col-sm-8').removeClass().addClass('w-100');

            let tr4 = $(`<td colspan="2"></td>`).appendTo($(`<tr></tr>`).appendTo(tbl));
            $(`<div class="w-100 mt-2">${$("#cpicontainer").html()}</div>`).appendTo(tr4);
            tr4.find('.col-sm-4, .col-sm-8').removeClass().addClass('w-100');



            let bfPiedataOld = charts.bfPiedataOld;
            //await SetChartOptions(bfPiedataOld)
            tr4.find("#bfPiedataOld-chart").html(`<img class="mb-5" src="${await bfPiedataOld.exporting.getImage("png")}"/>`);

            let bfPieDataOldUS = charts.bfPieDataOldUS;
            //await SetChartOptions(bfPieDataOldUS)
            tr4.find("#bfPieDataOldUS-chart").html(`<img class="mb-5" src="${await bfPieDataOldUS.exporting.getImage("png")}"/>`);

            let bfPieData = charts.bfPieData;
            //await SetChartOptions(bfPieData)
            tr4.find("#bfPieData-chart").html(`<img class="mb-5" src="${await bfPieData.exporting.getImage("png")}"/>`);

            let bfPieDataUS = charts.bfPieDataUS;
            //await SetChartOptions(bfPieDataUS)
            tr4.find("#bfPieDataUS-chart").html(`<img class="mb-5" src="${await bfPieDataUS.exporting.getImage("png")}"/>`);

            if (obj.data.GetGeoType() === 4) {
                let bfPieDataOldState = charts.bfPieDataOldState;
                //await SetChartOptions(bfPieDataOldState)
                tr4.find("#bfPieDataOldState-chart").html(`<img class="mb-5" src="${await bfPieDataOldState.exporting.getImage("png")}"/>`);
                let bfPieDataState = charts.bfPieDataState;
                //await SetChartOptions(bfPieDataState)
                tr4.find("#bfPieDataState-chart").html(`<img class="mb-5" src="${await bfPieDataState.exporting.getImage("png")}"/>`);

            }

            /*obj.data.SetCharts('bfPiedataOld', piecharts.MakeChart("bfPiedataOld-chart", data.bfPiedataOld));
            obj.data.SetCharts('bfPieDataOldUS', piecharts.MakeChart("bfPieDataOldUS-chart", data.bfPiedataOldUS));
            obj.data.SetCharts('bfPieData', piecharts.MakeChart("bfPieData-chart", data.bfPiedata));
            obj.data.SetCharts('bfPieDataUS', piecharts.MakeChart("bfPieDataUS-chart", data.bfPiedataUS));
            if (geotype === 4) {
                obj.data.SetCharts('bfPieDataOldState', piecharts.MakeChart("bfPieDataOldState-chart", data.bfPiedataOldState));
                obj.data.SetCharts('bfPieDataState', piecharts.MakeChart("bfPieDataState-chart", data.bfPiedataState));
            }*/



            doc.write(`<div id="content">${container.html()}</div>`);
            doc.write(`<div id="elementH"></div>`);
            $(doc).find('canvas').each(function () {
                obj.DrawCircle($(this));
            })

            doc.write(`<script>
                 setTimeout(function () {
                     printToPdf();
                }, 1000);
                </script>`);
            doc.write('</body></html>');
            //doc.getElementsByClassName("hideonprint").style.display = "none";
            printWindow.document.close();
            /*setTimeout(function () {
                printWindow.print();
            }, 500);*/

            //window.print();
            $("#PersonalIncome-panel").removeAttr('style');
            $("#PersonalIncome-tab").tab("show");
        }, 100);
    }
};
