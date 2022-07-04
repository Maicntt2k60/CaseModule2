import {Bill} from "../Model/Bill";
import {Product} from "../Model/Product";
import {Employee} from "../Model/employee";
import * as fs from "fs";
import * as rsLib from "readline-sync";
export class BillManagement {
    ArrBill: Bill[] = [];

    constructor() {
        this.ArrBill = this.loadFile();
    }
    loadFile():Bill[]{
         const StrData : string = fs.readFileSync("./backupdata.json").toString();
        if (StrData === "") return [];
        let result : Bill[] =[];
        let arrBill = JSON.parse(StrData);
        for (let i = 0; i < arrBill.length; i++) {
            const obj = arrBill[i];
            let newBill = new Bill(
                obj._id,
                obj._nameEmployee,
                obj._date,
                obj._nameCustomer,
                obj._Total,
                obj._listProduct
            );
            result.push(newBill);
        }
        return result;
    }

    saveFile(){
        const str = JSON.stringify(this.ArrBill);
        fs.writeFileSync("./backupdata.json",str);
    }

    addBills() {
        let id = rsLib.question("Nhap id cho hoa don: ");
        let nameEmployee = rsLib.question("Nhap ten nhan vien ban: ");
        let date = rsLib.question("Nhap ngay ban cho hoa don: ");
        let nameCustomer = rsLib.question("Nhap ten khach hang mua : ");
        console.log("Nhap danh sach hang hoa mua: ");
        let n = +rsLib.question("Nhap so luong hang hoa: ");
        let list: Product[] = [];
        let Total = 0;
        for (let i = 0; i < n; i++){
            let id = rsLib.question("Nhap id san pham " + (i + 1) + " :");
            let name = rsLib.question("Nhap ten san pham " + (i + 1) + " :");
            let quantity = +rsLib.question("Nhap so luong san pham " + (i + 1) + " :");
            let price = +rsLib.question("Nhap gia san pham thu " + (i + 1) + " :");
            list[i] = new Product(id, name, quantity, price);
            //list.push(new Product());
            Total += quantity * price;
        }
        let bill = new Bill(id, nameEmployee, date, nameCustomer, Total, list);
        this.ArrBill.push(bill);
        this.saveFile();
        this.printAllBill();
    }

    updateBill() {
        let id = rsLib.question("Nhap id hoa don can update: ");
        console.log("Ban muon sua: ");
        console.log("1.Ten nhan vien ban hang.");
        console.log("2.Ngay gio xuat hoa don.");
        console.log("3.Ten khach hang.");
        console.log("4.San pham trong hoa don.");
        let Answer = parseInt(rsLib.question("Lua chon cua ban la : "));
        let index = this.findBill(id);
        switch (Answer){
            case 1:
                let name = rsLib.question("Nhap ten nhan vien can thay doi: ");
                this.ArrBill[index].setNameEmployee(name);
                break;
            case 2:
                let date = rsLib.question("Nhap ngay gio can thay doi: ");
                this.ArrBill[index].setDate(date);
                break;
            case 3:
                let nameCustomer = rsLib.question("Nhap ten khach hang: ");
                this.ArrBill[index].setNameCustomer(nameCustomer);
                break;
            case 4:
                let n = +rsLib.question("Nhap so luong hang hoa: ");
                let list: Product[];
                let Total = 0;
                for (let i = 0; i < n; i++) {
                    let id = rsLib.question("Nhap id san pham " + (i+1) + " : ");
                    let name = rsLib.question("Nhap ten san pham " + (i+1) + " : ");
                    let quantity = +rsLib.question("Nhap so luong san pham " + (i+1) + " : ");
                    let price = +rsLib.question("Nhap gia san pham thu " + (i+1) + " : ");
                    list[i] = new Product(id, name, quantity, price);
                    Total += quantity * price;
                }
                this.ArrBill[index].setListProduct(list);
                this.ArrBill[index].setTotal(Total);
                break;
        }
        this.saveFile();
        this.printAllBill();
    }

    findBill(id : string){
        let i = -1;
        this.ArrBill.forEach((bill: any, index: number) => {
            if (bill.getId() == id) {
                i = index;
            }
        });
        return i;
    }

    deleteBill(){
        let id = rsLib.question("Nhap id hoa don can xoa: ");
        let i = 0;
        for(i = 0;i < this.ArrBill.length;i++){
            if (this.ArrBill[i].getId() === id) {
                this.ArrBill.splice(i,1);
                break;
            }
        }
        this.saveFile();
        this.printAllBill();
    }

    printAllBill(){
        console.log("So hoa don la : " + this.ArrBill.length);
        for (let i = 0; i < this.ArrBill.length; i++) {
            let item = this.ArrBill.at(i);
            console.log("Hoa don thu " + (i+1));
            console.log(`Id: ${item.getId() } 
            NameEmployee: ${item.getNameEmployee()} 
            Date: ${item.getDate()}
            NameCustomer: ${item.getNameCustomer()} 
            Total: ${item.getTotal()}`);
            console.log("List Product: ");
            let list = item.getListProduct();
            console.table(list);
        }
    }

    printBill(index:number){
        let item = this.ArrBill.at(index);
        console.log(`Id: ${item.getId() } 
            NameEmployee: ${item.getNameEmployee()} 
            Date: ${item.getDate()}
            NameCustomer: ${item.getNameCustomer()} 
            Total: ${item.getTotal()}`);
        console.log("List Product: ");
        let list = item.getListProduct();
        console.table(list);
    }
}