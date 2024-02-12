
$(function () {
    modals.init();
});

$(document).on('shown.bs.modal', '.modal', function () {
    let zIndex = Math.max.apply(null, Array.prototype.map.call(document.querySelectorAll('*'), function(el) {
		return + el.style.zIndex;
	})) + 1;
    $(this).css('z-index', zIndex);
    setTimeout(function() {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
	}, 0);
});

var modals = new function () {
	"use strict";
	let obj = this;
	let wait = null;
	let confirm = null;
	this.tmpl = null;
	this.init = function () {
		if(wait === null){
            var o = new obj.ModalObj("pleasewait-modal");
            o.title = "Please Wait";
            o.color = "primary";
            o.icon = "";
            o.size = "modal-md"
            o.buttons = [];
            wait = new obj.MakeModal(o);
            wait.modal.css('z-index', 3000);
            $("#pleasewait-modal-Body").html('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:100%"> Processing... </div>');
		}
		$(document).ajaxStart(function () {
			modals.Wait("show");
		});
		$(document).ajaxStop(function () {
			modals.Wait("hide");
		});
	}
	this.Wait = function (action) {
		if(action === "show"){
			wait.modal.modal('show');
			wait.modal.modal().on('show.bs.modal', function () {
				obj.tmpl = setTimeout(function () {
					clearTimeout(obj.tmpl);
					$('#pleaseWaitDialog .modal-header button').hide();
					if ($('#pleaseWaitDialog').hasClass('show'))
						$('#pleaseWaitDialog .modal-header button').show();
				}, 5000);
			});
			wait.modal.modal().on('hide.bs.modal', function (e) {
				clearTimeout(obj.tmpl);
			});
		}
		if(action === "show"){
			setTimeout(function () {
				wait.modal.modal('hide');
			}, 500);
		}
	};
	this.Confirm = function (text, title, yescallback, nocallback) {
		if(confirm === null){
			var o = new obj.ModalObj("confirm-modal");
			o.title = "Confirm Action";
			o.color = "primary";
			o.icon = "fa-question-circle";
			o.size = "modal-md";
			o.bodyid = 'confirm-modal-Body';
			o.buttons = [{
							class: "btn-success",
							dismiss: true,
							text: "Confirm",
							action: function () {}
						},
						{
							class: "btn-danger",
							dismiss: true,
							text: "Cancel",
							action: function () {}
						}];
			confirm = new obj.MakeModal(o);
			$("#confirm-modal-Body").html('<div class="alert alert-info"><p class="col-md-offset-1 lead"></p></div>');
		}
		$(confirm.modal).find("p").css("word-wrap", "break-word").html(text);
		if (!title) title = "Confirm Action";
		$(confirm.modal).find("h4.modal-title span.modal-title").html(title);
		confirm.modal.modal('show');
		$(confirm.modal).find(".modal-footer button.btn-success").unbind("click").one("click", function (e) {
			if (typeof yescallback === "function") yescallback.apply();
		});
		$(confirm.modal).find(".modal-footer button.btn-danger").unbind("click").one("click", function (e) {
			if (typeof nocallback === "function") nocallback.apply();
		});
	};
	this.Info = function (type, text, title, showcallback, closecallback) {
		let o = new obj.ModalObj("info-modal");
		o.size = "modal-md";
		let info = new obj.MakeModal(o).modal;
		$("#info-modal-Body").html('<div class="alert alert-info"><p class="col-md-offset-1"></p></div>');
		
		$("#info-modal-Body").find("p").css("word-wrap", "break-word").html(text);
		if (title)
			$(info).find("h4.modal-title span.modal-title").html(title);
		if (type === "error"){
			let styles = {
				"#info-modal h4": "modal-title text-danger",
				"#info-modal h4 span.fa": "fa fa-warning",
				"#info-modal .modal-body .alert": "alert alert-danger",
				"#info-modal .btn": "btn btn-danger"
			}
			$.each(styles, function (key, value) {
				$(key).removeClass().addClass(value);
			});
		}
		info.on('shown.bs.modal', function () {
			if (typeof showcallback === "function") showcallback.apply();
		}).on('hidden.bs.modal', function (e) {
			if (typeof closecallback === "function") closecallback.apply();
		});
		info.modal('show');
	};
	this.resizeModal = function (modal, size) {
		this.w = 1200;
		var o = this;
		var maxHeight = $(window).height() * .95;
		if (!size)
			this.w = $(window).width() * .75;
		if (size === "full")
			this.w = $(window).width() * .99;
		else
			this.w = $(window).width() >= size ? size : $(window).width() * .95;
		if ($(modal).hasClass('show')) {
			var tmp = $(modal).find('.modal-body');

			var dif = parseInt(tmp.get(0).scrollHeight) - parseInt(tmp.innerHeight());
			var tmph = $(modal).find('.modal-content').height() + dif;
			var mh = maxHeight;
			if (tmph <= maxHeight)
				mh = tmph;
			$(modal).find('.modal-content').css({
				width: o.w + 'px',
				height: mh + 20 + 'px',
				'max-height': mh + 20 + 'px',
				overflow: 'auto'
			});
			var nh = $(modal).find('.modal-content').height() - $(modal).find('.modal-header').outerHeight() - $(modal).find('.modal-footer').outerHeight() + 20;
			$(modal).find('.modal-body').css({
				height: 'auto',
				'max-height': nh + 'px',
				overflow: 'auto'
			});
			$(modal).find('.modal-content').css({
				height: 'auto'
			});
		} else {
			$(modal).on('show.bs.modal', function () {
				var mw = ($(window).width() - o.w) / 2;
				if (mw < 0) mw = 0;
				$(this).find('.modal-content').css({
					width: o.w + 'px',
					height: 'auto',
					'max-height': maxHeight + 'px',
					overflow: 'auto'
				});
				$(this).find('.modal-dialog').css({
					margin: '30px ' + mw + 'px'
				});
			}).on('shown.bs.modal', function () {
				try{
					$(this).draggable({
						handle: ".modal-header"
					});
				}
				catch (err) {
					console.log(err);
				}
				$(this).find('.modal-body').css({
					'max-height': ($(this).find('.modal-content').height() - $(this).find('.modal-header').outerHeight() - $(this).find('.modal-footer').outerHeight()) + 'px',
					overflow: 'auto'
				});
			}).on('hidden.bs.modal', function () {
				$(this).removeData();
				$(this).css({
					left: 0,
					top: 0
				});
				$(this).find('.modal-body,.modal-content').removeAttr('style');
				//$(this).find('.modal-content').removeAttr('style')
			});
		}
		return modal;
	}
	this.ModalObj = function (id) {
		this.id = id || "Dynamic-Modal";
		this.bodyid = this.id + "-Body";
		this.title = "Info";
		this.icon = "fa-info-circle";
		this.size = "modal-lg";
		this.color = "info";
		this.buttons = [{
			class: "btn-info",
			dismiss: true,
			text: "Close",
			action: function () { }
		}];
	};

	this.MakeModal = function (o) {
		if (!o) o = new obj.ModalObj();
		var mod = this;
		$("#" + o.id).remove();
		this.modal = $('<div class="modal" role="dialog"></div>').attr("id", o.id).appendTo("body");
		var dialog = $('<div class="modal-dialog"></div>').addClass(o.size);
		var content = $('<div class="modal-content"></div>');
		var header = $('<div class="modal-header"></div>');
		var title = $('<h4 class="modal-title text-' + o.color + '"> <span class="fa ' + o.icon + '" aria-hidden="true"></span> <span class="modal-title"> ' + o.title + ' </span> </h4>');
		var close = $('<span class="btn btn-sm close text-danger" data-dismiss="modal">&times;</span>');
		this.body = $('<div class="modal-body"></div>').attr("id", o.bodyid);
		this.footer = $('<div class="modal-footer"></div>');
		$(o.buttons).each(function (i, e) {
			$(mod.footer).append(
				$('<button type="button" class="btn">' + this.text + '</button>').addClass(this.class || "btn-" + o.color).attr("data-dismiss", function () {
					if (e.dismiss) return "modal";
					return "";
				}).click(function () {
					if (typeof e.action === "function") e.action.apply(null)
				})
			);
		});
		mod.modal.append(dialog.append(content.append(header.append(title).append(close)).append(mod.body).append(mod.footer)));
		return this;
	}
};