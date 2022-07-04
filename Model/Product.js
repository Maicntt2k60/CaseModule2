"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, quantity, price) {
        this._id = id;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }
    Product.prototype.getId = function () {
        return this._id;
    };
    Product.prototype.setId = function (value) {
        this._id = value;
    };
    Product.prototype.getName = function () {
        return this._name;
    };
    Product.prototype.setName = function (value) {
        this._name = value;
    };
    Product.prototype.getQuantity = function () {
        return this._quantity;
    };
    Product.prototype.setQuantity = function (value) {
        this._quantity = value;
    };
    Product.prototype.getPrice = function () {
        return this._price;
    };
    Product.prototype.setPrice = function (value) {
        this._price = value;
    };
    Product.prototype.loadFile = function (id, name, quantity, price) {
        this._id = id;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    };
    return Product;
}());
exports.Product = Product;
