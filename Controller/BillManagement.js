"use strict";
exports.__esModule = true;
exports.BillManagement = void 0;
var Bill_1 = require("../Model/Bill");
var Product_1 = require("../Model/Product");
var fs = require("fs");
var rsLib = require("readline-sync");
var BillManagement = /** @class */ (function () {
    function BillManagement() {
        this.ArrBill = [];
        this.ArrBill = this.loadFile();
    }
    BillManagement.prototype.loadFile = function () {
        var StrData = fs.readFileSync("./backupdata.json").toString();
        if (StrData === "")
            return [];
        var result = [];
        var arrBill = JSON.parse(StrData);
        for (var i = 0; i < arrBill.length; i++) {
            var obj = arrBill[i];
            var newBill = new Bill_1.Bill(obj._id, obj._nameEmployee, obj._date, obj._nameCustomer, obj._Total, obj._listProduct);
            result.push(newBill);
        }
        return result;
    };
    BillManagement.prototype.saveFile = function () {
        var str = JSON.stringify(this.ArrBill);
        fs.writeFileSync("./backupdata.json", str);
    };
    BillManagement.prototype.addBills = function () {
        var id = rsLib.question("Nhap id cho hoa don: ");
        var nameEmployee = rsLib.question("Nhap ten nhan vien ban: ");
        var date = rsLib.question("Nhap ngay ban cho hoa don: ");
        var nameCustomer = rsLib.question("Nhap ten khach hang mua : ");
        console.log("Nhap danh sach hang hoa mua: ");
        var n = +rsLib.question("Nhap so luong hang hoa: ");
        var list = [];
        var Total = 0;
        for (var i = 0; i < n; i++) {
            var id_1 = rsLib.question("Nhap id san pham " + (i + 1) + " :");
            var name_1 = rsLib.question("Nhap ten san pham " + (i + 1) + " :");
            var quantity = +rsLib.question("Nhap so luong san pham " + (i + 1) + " :");
            var price = +rsLib.question("Nhap gia san pham thu " + (i + 1) + " :");
            list[i] = new Product_1.Product(id_1, name_1, quantity, price);
            //list.push(new Product());
            Total += quantity * price;
        }
        var bill = new Bill_1.Bill(id, nameEmployee, date, nameCustomer, Total, list);
        this.ArrBill.push(bill);
        //  this.saveFile();
        this.printAllBill();
    };
    BillManagement.prototype.updateBill = function () {
        var id = rsLib.question("Nhap id hoa don can update: ");
        console.log("Ban muon sua: ");
        console.log("1.Ten nhan vien ban hang.");
        console.log("2.Ngay gio xuat hoa don.");
        console.log("3.Ten khach hang.");
        console.log("4.San pham trong hoa don.");
        var Answer = parseInt(rsLib.question("Lua chon cua ban la : "));
        var index = this.findBill(id);
        switch (Answer) {
            case 1:
                var name_2 = rsLib.question("Nhap ten nhan vien can thay doi: ");
                this.ArrBill[index].setNameEmployee(name_2);
                break;
            case 2:
                var date = rsLib.question("Nhap ngay gio can thay doi: ");
                this.ArrBill[index].setDate(date);
                break;
            case 3:
                var nameCustomer = rsLib.question("Nhap ten khach hang: ");
                this.ArrBill[index].setNameCustomer(nameCustomer);
                break;
            case 4:
                var n = +rsLib.question("Nhap so luong hang hoa: ");
                var list = void 0;
                var Total = 0;
                for (var i = 0; i < n; i++) {
                    var id_2 = rsLib.question("Nhap id san pham " + (i + 1) + " : ");
                    var name_3 = rsLib.question("Nhap ten san pham " + (i + 1) + " : ");
                    var quantity = +rsLib.question("Nhap so luong san pham " + (i + 1) + " : ");
                    var price = +rsLib.question("Nhap gia san pham thu " + (i + 1) + " : ");
                    list[i] = new Product_1.Product(id_2, name_3, quantity, price);
                    Total += quantity * price;
                }
                this.ArrBill[index].setListProduct(list);
                this.ArrBill[index].setTotal(Total);
                break;
        }
        // this.saveFile();
        this.printAllBill();
    };
    BillManagement.prototype.findBill = function (id) {
        var i = -1;
        this.ArrBill.forEach(function (bill, index) {
            if (bill.getId() == id) {
                i = index;
            }
        });
        return i;
    };
    BillManagement.prototype.deleteBill = function () {
        var id = rsLib.question("Nhap id hoa don can xoa: ");
        var i = 0;
        for (i = 0; i < this.ArrBill.length; i++) {
            if (this.ArrBill[i].getId() === id) {
                this.ArrBill.splice(i, 1);
                break;
            }
        }
        // this.saveFile();
        this.printAllBill();
    };
    BillManagement.prototype.printAllBill = function () {
        console.log("So hoa don la : " + this.ArrBill.length);
        for (var i = 0; i < this.ArrBill.length; i++) {
            var item = this.ArrBill.at(i);
            console.log("Hoa don thu " + (i + 1));
            console.log("Id: ".concat(item.getId(), " \n            NameEmployee: ").concat(item.getNameEmployee(), " \n            Date: ").concat(item.getDate(), "\n            NameCustomer: ").concat(item.getNameCustomer(), " \n            Total: ").concat(item.getTotal()));
            console.log("List Product: ");
            var list = item.getListProduct();
            console.table(list);
        }
    };
    BillManagement.prototype.printBill = function (index) {
        var item = this.ArrBill.at(index);
        console.log("Id: ".concat(item.getId(), " \n            NameEmployee: ").concat(item.getNameEmployee(), " \n            Date: ").concat(item.getDate(), "\n            NameCustomer: ").concat(item.getNameCustomer(), " \n            Total: ").concat(item.getTotal()));
        console.log("List Product: ");
        var list = item.getListProduct();
        console.table(list);
    };
    return BillManagement;
}());
exports.BillManagement = BillManagement;
