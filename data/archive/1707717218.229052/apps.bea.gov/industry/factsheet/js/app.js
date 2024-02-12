$(function () {
    app.init();
});
const app = new (function () {
    "use strict";
    var obj = this;
    this.TEMPLATE = "";
    this.init = function () {
        $.ajax({
            dataType: "json",
            url: "js/config.json",
            success: function (data) {
                for (var prop in data) {
                    if (data.hasOwnProperty(prop)) {
                        app[prop] = data[prop];
                    }
                }

                var p = window.location.pathname.replace("/", "").split("/");
                app.TEMPLATE = p.pop().split(".")[0];
                app.TEMPLATE = app.TEMPLATE !== "" ? app.TEMPLATE : "index";
                app.PATH = p.length === 0 ? "/" : "/" + p.join("/") + "/";
                app.REQUIRED.push(["modules/" + app.TEMPLATE, app.TEMPLATE]);
                if (app.NAME === "TEMPLATE")
                    alert("Invalid APP Name - TEMPLATE");

                // Load required js files - need to be on specific path $AppRoot$/js/. This is done so the path can be determined dynamically.
                $(app.REQUIRED).each(function () {
                    app.require(this);
                });

                const intervalVal = setInterval(() => {
                    if (modals) {
                        // console.log('in app - modals loaded event');
                        $(document).trigger("App-Loaded");
                        clearInterval(intervalVal);
                    }
                }, 250);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // alert(textStatus + "--" + errorThrown);
                console.log(textStatus + "--" + errorThrown);
            },
        });
    };
    this.require = function (file) {
        let path, name;
        if (Array.isArray(file)) {
            path = file[0];
            name = file[1];
        }
        var src = obj.PATH + "js/" + path + ".js";
        if ($('script[src^="' + src + '"]').length === 0) {
            $(
                '<script src="' + src + "?" + Date.now() + '"></script>'
            ).appendTo("body");
        }

        var count = 0;
        while ($('script[src^="' + src + '"]').length === 0) {
            count++;
        }
        return window[name];
    };
})();
