// JavaScript Document
$(function () {
	utils.init();
});
var utils = new(function (window, $) {
	"use strict";
	var obj = this;
	this.init = function () {

	}
	this.isInt = function (n) {
		return typeof n === 'number' && n % 1 == 0;
	}
	this.testForArray = function (obj, len, type) {
		if (!obj) {
			if (len) {
				var arr = [];
				var s = function (type) {
					var t = this;
					if (type)
						$(type).each(function (key, value) {
							t[key] = value;
						});
				}
				for (var i = 0; i < len; i++) {
					arr.push(new s(type));
				}
				return arr;
			}
			return [];
		}
		return obj = [].concat(obj);
	}
	this.isValidPrdName = function (val, allowEmpty) {
		var pattern = (allowEmpty ? "^$|" : "") + "^(19|20){1}[0-9]{2}$|^(19|20){1}[0-9]{2}q[1-4]$|^(19|20){1}[0-9]{2}m(0[1-9]|1[0-2])$";
		/* 
		var pat = /^(19|20){1}[0-9]{2}$|^(19|20){1}[0-9]{2}q[1-4]$|^(19|20){1}[0-9]{2}m(0[1-9]|1[0-2])$/i;
		if (allowEmpty)
			pat = /^$|^(19|20){1}[0-9]{2}$|^(19|20){1}[0-9]{2}q[1-4]$|^(19|20){1}[0-9]{2}m(0[1-9]|1[0-2])$/i; */
		var regexp = new RegExp(pattern, "i");
		var res = val.match(regexp);
		if (!res || res[0] != val) {
			return false;
		}
		return true;
	}
	this.getUrlParams = function(){
		var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

		var urlParams = {};
		while (match = search.exec(query))
		   urlParams[decode(match[1]).toLowerCase()] = decode(match[2]);
		return urlParams;
	}
	this.InArray = function(item, array, attr){
		if(!item)
			return -1;
		if(!array)
			return -1;
		if(!attr)
			return array.indexOf(item);
		for (var i = 0; i < array.length; i++)
			if (array[i][attr] == item[attr])
				return i;
		return -1;
	}
	this.ArrToMap = function(arr,hashfunction){
		var map = {};
		for (var i = 0; i < arr.length; i++)
			map[hashfunction(arr[i])] = arr[i];
		return map;
	}
	this.Round = function (value, precision) {
		let val = Number(value);
		var multiplier = Math.pow(10, precision || 0);
		return Math.round(val * multiplier) / multiplier;
	}
})(window, jQuery);
//# sourceURL=utils.js
