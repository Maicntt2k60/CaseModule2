"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, bird, address, gender, phone) {
        this._id = id;
        this._name = name;
        this._bird = bird;
        this._address = address;
        this._gender = gender;
        this._phone = phone;
    }
    Employee.prototype.getId = function () {
        return this._id;
    };
    Employee.prototype.setId = function (value) {
        this._id = value;
    };
    Employee.prototype.getName = function () {
        return this._name;
    };
    Employee.prototype.setName = function (value) {
        this._name = value;
    };
    Employee.prototype.getBird = function () {
        return this._bird;
    };
    Employee.prototype.setBird = function (value) {
        this._bird = value;
    };
    Employee.prototype.getAddress = function () {
        return this._address;
    };
    Employee.prototype.setAddress = function (value) {
        this._address = value;
    };
    Employee.prototype.getGender = function () {
        return this._gender;
    };
    Employee.prototype.setGender = function (value) {
        this._gender = value;
    };
    Employee.prototype.getPhone = function () {
        return this._phone;
    };
    Employee.prototype.setPhone = function (value) {
        this._phone = value;
    };
    Employee.prototype.loadData = function (id, name, bird, address, gender, phone) {
        this._id = id;
        this._name = name;
        this._bird = bird;
        this._address = address;
        this._gender = gender;
        this._phone = phone;
    };
    return Employee;
}());
exports.Employee = Employee;
