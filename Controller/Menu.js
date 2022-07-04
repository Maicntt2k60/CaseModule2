"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var ProductManegement_1 = require("./ProductManegement");
var EmployeeManagement_1 = require("./EmployeeManagement");
var BillManagement_1 = require("./BillManagement");
var rsLib = require("readline-sync");
var Menu = /** @class */ (function () {
    function Menu() {
        this.ArrProduct = new ProductManegement_1.ProductManagement();
        this.ArrEmployee = new EmployeeManagement_1.EmployeeManagement();
        this.ArrBill = new BillManagement_1.BillManagement();
    }
    Menu.prototype.solve = function (res) {
        // console.log(res);
        switch (res) {
            case 1:
                this.ArrEmployee.printAllEmployee();
                break;
            case 2:
                this.ArrEmployee.addEmployee();
                break;
            case 3:
                this.ArrEmployee.updateEmployee();
                break;
            case 4:
                var id = rsLib.question("Nhap id nhan vien can xoa: ");
                this.ArrEmployee.deleteEmployee(id);
                break;
            case 5:
                var name_1 = rsLib.question("Nhap ten nhan vien can tim: ");
                this.ArrEmployee.findEmployee(name_1);
                break;
            case 6:
                this.ArrProduct.printAllProduct();
                break;
            case 7:
                this.ArrProduct.addProduct();
                break;
            case 8:
                this.ArrProduct.updateProduct();
                break;
            case 9:
                var idex = rsLib.question("Nhap id san pham can xoa: ");
                this.ArrProduct.deleteProduct(idex);
                break;
            case 10:
                var index = rsLib.question("Nhap id cua san pham can tim kiem: ");
                console.log("San pham can tim la:");
                var i = this.ArrProduct.findProduct(index);
                this.ArrProduct.printProduct(i);
                break;
            case 11:
                this.ArrBill.addBills();
                break;
            case 12:
                this.ArrBill.updateBill();
                break;
            case 13:
                var idBill = rsLib.question("Nhap id hoa don can tim: ");
                var indexBill = this.ArrBill.findBill(idBill);
                this.ArrBill.printBill(indexBill);
                break;
            case 14:
                this.ArrBill.deleteBill();
                break;
            case 15:
                this.ArrBill.printAllBill();
                break;
        }
    };
    Menu.prototype.showMenu = function () {
        //console.clear();
        console.log("Menu: ");
        console.log("1. Hien thi toan bo nhan vien"); //
        console.log("2. Them 1 nhan vien"); //
        console.log("3. Sua thong tin nhan vien"); //
        console.log("4. Xoa nhan vien"); //
        console.log("5. Tim nhan vien"); //
        console.log("6. Hien thi toan bo thong tin san pham"); //
        console.log("7. Them san pham "); //
        console.log("8. Sua thong tin san pham"); //
        console.log("9. Xoa san pham"); //
        console.log("10. Tim kiem san pham");
        console.log("11. Them hoa don"); //
        console.log("12. Cap nhat hoa don");
        console.log("13. Tim hoa don"); //
        console.log("14. Xoa hoa don"); //
        console.log("15. Hien thi toan bo thong tin hoa don"); //
    };
    return Menu;
}());
exports.Menu = Menu;
