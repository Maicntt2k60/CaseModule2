"use strict";
exports.__esModule = true;
exports.Bill = void 0;
var Bill = /** @class */ (function () {
    function Bill(id, nameEmployee, date, nameCustomer, Total, listProduct) {
        this._id = id;
        this._nameEmployee = nameEmployee;
        this._date = date;
        this._nameCustomer = nameCustomer;
        this._Total = Total;
        this._listProduct = listProduct;
    }
    Bill.prototype.getListProduct = function () {
        return this._listProduct;
    };
    Bill.prototype.setListProduct = function (value) {
        this._listProduct = value;
    };
    Bill.prototype.getId = function () {
        return this._id;
    };
    Bill.prototype.setId = function (value) {
        this._id = value;
    };
    Bill.prototype.getNameEmployee = function () {
        return this._nameEmployee;
    };
    Bill.prototype.setNameEmployee = function (value) {
        this._nameEmployee = value;
    };
    Bill.prototype.getDate = function () {
        return this._date;
    };
    Bill.prototype.setDate = function (value) {
        this._date = value;
    };
    Bill.prototype.getNameCustomer = function () {
        return this._nameCustomer;
    };
    Bill.prototype.setNameCustomer = function (value) {
        this._nameCustomer = value;
    };
    Bill.prototype.getTotal = function () {
        return this._Total;
    };
    Bill.prototype.setTotal = function (value) {
        this._Total = value;
    };
    return Bill;
}());
exports.Bill = Bill;
