"use strict";
exports.__esModule = true;
exports.ProductManagement = void 0;
var Product_1 = require("../Model/Product");
var rsLib = require("readline-sync");
var fs = require("fs");
var ProductManagement = /** @class */ (function () {
    function ProductManagement() {
        this.products = [];
        this.products = this.loadFile();
    }
    ProductManagement.prototype.loadFile = function () {
        var strData = fs.readFileSync("./data.json").toString();
        if (strData === "")
            return [];
        var res = [];
        var arrProduct = JSON.parse(strData);
        for (var i = 0; i < arrProduct.length; i++) {
            var data = arrProduct[i];
            var newProduct = new Product_1.Product();
            newProduct.loadFile(data._id, data._name, data._quantity, data._price);
            res.push(newProduct);
        }
        return res;
    };
    ProductManagement.prototype.saveFile = function () {
        var str = JSON.stringify(this.products);
        fs.writeFileSync("./data.json", str);
    };
    ProductManagement.prototype.addProduct = function () {
        var ProductId = rsLib.question("Nhap id san pham : ");
        var ProductName = rsLib.question("Nhap ten san pham : ");
        var ProductQuantity = +rsLib.question("Nhap so luong san pham : ");
        var ProductPrice = +rsLib.question("Nhap gia san pham : ");
        if (this.findProduct(ProductId) != -1) {
            throw new Error("ID da ton tai");
        }
        else {
            var product = new Product_1.Product(ProductId, ProductName, ProductQuantity, ProductPrice);
            this.products.push(product);
        }
        this.saveFile();
        this.printAllProduct();
    };
    ProductManagement.prototype.findProduct = function (id) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products.at(i)._id === id) {
                return i;
            }
        }
        return -1;
    };
    ProductManagement.prototype.updateProduct = function () {
        var id = rsLib.question("Nhap id san pham can cap nhat: ");
        var index = this.findProduct(id);
        if (index == -1) {
            throw new Error("San pham khong ton tai!");
        }
        else {
            var name_1 = rsLib.question("Nhap ten san pham:");
            var quantity = +rsLib.question("Nhap so luong:");
            var price = +rsLib.question("nhap gia san pham: ");
            this.products[index].setName(name_1);
            this.products[index].setQuantity(quantity);
            this.products[index].setPrice(price);
        }
        this.saveFile();
        this.printAllProduct();
    };
    ProductManagement.prototype.deleteProduct = function (id) {
        var vt = this.findProduct(id);
        if (vt === -1) {
            throw new Error("Can not Delete Product");
        }
        else {
            this.products.splice(vt, 1);
        }
        this.saveFile();
        this.printAllProduct();
    };
    ProductManagement.prototype.printAllProduct = function () {
        console.table(this.products);
    };
    ProductManagement.prototype.printProduct = function (index) {
        console.table(this.products.at(index));
    };
    return ProductManagement;
}());
exports.ProductManagement = ProductManagement;
