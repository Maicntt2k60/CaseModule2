"use strict";
exports.__esModule = true;
exports.EmployeeManagement = void 0;
var employee_1 = require("../Model/employee");
var rsLib = require("readline-sync");
var fs = require("fs");
var EmployeeManagement = /** @class */ (function () {
    function EmployeeManagement() {
        this.Employees = [];
        this.Employees = this.loadFile();
    }
    EmployeeManagement.prototype.loadFile = function () {
        var str = fs.readFileSync("./employee.json").toString();
        if (str === "")
            return [];
        var res = [];
        var arrEmployee = JSON.parse(str);
        for (var i = 0; i < arrEmployee.length; i++) {
            var obj = arrEmployee[i];
            var newEmployee = new employee_1.Employee(obj._id, obj._name, obj._bird, obj._address, obj._gender, obj._phone);
            res.push(newEmployee);
        }
        return res;
    };
    EmployeeManagement.prototype.saveFile = function () {
        var str = JSON.stringify(this.Employees);
        fs.writeFileSync("./employee.json", str);
    };
    EmployeeManagement.prototype.addEmployee = function () {
        var id = rsLib.question("Nhap id nhan vien : ");
        var name = rsLib.question("Nhap ten nhan vien: ");
        var bird = rsLib.question("Nhap ngay sinh nhan vien: ");
        var address = rsLib.question("Nhap dia chi nhan vien: ");
        var gender = rsLib.question("Nhap gioi tinh nhan vien: ");
        var phone = rsLib.question("Nhap so dien thoai nhan vien: ");
        var employee = new employee_1.Employee(id, name, bird, address, gender, phone);
        if (this.check(id) != -1) {
            throw new Error("ID da ton tai.");
        }
        else {
            this.Employees.push(employee);
        }
        this.saveFile();
        this.printAllEmployee();
    };
    EmployeeManagement.prototype.findEmployee = function (name) {
        var flag = -1;
        for (var j = 0; j < this.Employees.length; j++) {
            if (this.Employees.at(j)._name === name) {
                console.log("nhan vien can tim la: ");
                console.table(this.Employees.at(j));
                flag = j;
                break;
            }
        }
        if (flag == -1) {
            throw new Error("Khong co nhan vien ten la: " + name);
        }
    };
    EmployeeManagement.prototype.updateEmployee = function () {
        var id = rsLib.question("Nhap id nhan vien can sua: ");
        var index = this.check(id);
        if (index == -1) {
            throw new Error("Id khong ton tai");
        }
        else {
            var name_1 = rsLib.question("Nhap ten nhan vien: ");
            var bird = rsLib.question("Nhap ngay sinh: ");
            var address = rsLib.question("Nhap dia chi: ");
            var gender = rsLib.question("Nhap gioi tinh nhan vien: ");
            var phone = rsLib.question("Nhap so dien thoai: ");
            this.Employees[index].setName(name_1);
            this.Employees[index].setBird(bird);
            this.Employees[index].setAddress(address);
            this.Employees[index].setGender(gender);
            this.Employees[index].setPhone(phone);
        }
        this.saveFile();
        this.printAllEmployee();
    };
    EmployeeManagement.prototype.check = function (id) {
        var index = -1;
        this.Employees.forEach(function (item, i) {
            if (item.getId() == id) {
                index = i;
            }
        });
        return index;
    };
    EmployeeManagement.prototype.deleteEmployee = function (id) {
        for (var i = 0; i < this.Employees.length; i++) {
            if (this.Employees.at(i)._id === id) {
                this.Employees.splice(i, 1);
                console.log("Xoa thanh cong");
                break;
            }
        }
        this.saveFile();
        this.printAllEmployee();
    };
    EmployeeManagement.prototype.printAllEmployee = function () {
        console.table(this.Employees);
    };
    return EmployeeManagement;
}());
exports.EmployeeManagement = EmployeeManagement;
