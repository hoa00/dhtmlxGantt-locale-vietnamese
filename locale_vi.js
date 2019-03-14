/*
@license

dhtmlxGantt v.6.1.1 Standard
This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/codebase/sources/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/locale/locale.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sources/locale/locale.js":
/*!**********************************!*\
  !*** ./sources/locale/locale.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (gantt) {
	gantt.locale = {
		date: {
			month_full: ["Tháng một", "Tháng hai", "Tháng ba", "Tháng tư", "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai"],
			month_short: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
			day_full: ["Chủ Nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
			day_short: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"]
		},
		labels: {
			new_task: "Việc mới",
			icon_save: "Lưu",
			icon_cancel: "Hủy",
			icon_details: "Chi tiết",
			icon_edit: "Sửa",
			icon_delete: "Xóa",
			confirm_closing: "Thay đổi của bạn sẽ không được lưu lại, bạn có chắc chắn?",//Your changes will be lost, are you sure?
			confirm_deleting: "Việc này sẽ bị xóa, bạn có chắc chắn?",
			section_description: "Mô tả",
			section_time: "Khoảng thời gian",
			section_type: "Kiểu",

			/* grid columns */
			column_wbs: "WBS",
			column_text: "Tên việc",
			column_start_date: "Thời gian bắt đầu",
			column_duration: "Thời lượng",
			column_add: "",

			/* link confirmation */
			link: "Liên kết",
			confirm_link_deleting: "sẽ bị xóa",
			link_start: " (bắt đầu)",
			link_end: " (kết thúc)",

			type_task: "Việc",
			type_project: "Dự án",
			type_milestone: "Cột mốc",

			minutes: "Phút",
			hours: "Giờ",
			days: "Ngày",
			weeks: "Tuần",
			months: "Tháng",
			years: "Năm",

			/* message popup */
			message_ok: "Đồng ý",
			message_cancel: "Hủy",

			/* constraints */
			section_constraint: "Ràng buộc",
			constraint_type: "Loại ràng buộc",
			constraint_date: "Ngày ràng buộc",
			asap: "Sớm nhất có thể",
			alap: "Muộn nhất có thể",
			snet: "Bắt đầu không sớm hơn",
			snlt: "Bắt đầu không muộn hơn",
			fnet: "Kết thúc không sớm hơn",
			fnlt: "Kết thúc không muộn hơn",
			mso: "Phải bắt đầu lúc",
			mfo: "Phải kết thúc lúc",

			/* resource control */
			resources_filter_placeholder: "kiểu đẽ lọc",
			resources_filter_label: "ẩn cột trống"
		}
	};
};



/***/ })

/******/ });
});