import {Employee} from "../Model/employee";
import * as rsLib from "readline-sync";
import * as fs from "fs";

export class EmployeeManagement{
    public Employees:any=[];
    constructor() {
        this.Employees = this.loadFile();
    }

    loadFile():Employee[]{
        const str:string = fs.readFileSync("./employee.json").toString();
        if (str === "") return [];
        let res:Employee[] = [];
        let arrEmployee = JSON.parse(str);
        for (let i = 0; i < arrEmployee.length; i++) {
            const obj = arrEmployee[i];
            let newEmployee = new Employee(
                obj._id,
                obj._name,
                obj._bird,
                obj._address,
                obj._gender,
                obj._phone
            );
            res.push(newEmployee);
        }
        return res;
    }
    
    saveFile(){
        const str =  JSON.stringify(this.Employees);
        fs.writeFileSync("./employee.json",str);
    }

    addEmployee (){
        let id = rsLib.question("Nhap id nhan vien : ");
        let name = rsLib.question("Nhap ten nhan vien: ");
        let bird = rsLib.question("Nhap ngay sinh nhan vien: ");
        let address = rsLib.question("Nhap dia chi nhan vien: ");
        let gender = rsLib.question("Nhap gioi tinh nhan vien: ");
        let phone = rsLib.question("Nhap so dien thoai nhan vien: ");

        let employee = new Employee(id,name,bird,address,gender,phone);

        if(this.check(id) != -1){
            throw new Error("ID da ton tai.");
        }
        else {
            this.Employees.push(employee);
        }
        this.saveFile();
        this.printAllEmployee();
    }

    findEmployee(name : string){
        let flag = -1;
        for (let j = 0; j < this.Employees.length; j++) {
            if (this.Employees.at(j)._name === name){
                console.log("nhan vien can tim la: ");
                console.table(this.Employees.at(j));
                flag = j;
                break;
            }
        }
        if(flag == -1){
            throw new Error("Khong co nhan vien ten la: " + name);
        }
    }

    updateEmployee(){
        let id = rsLib.question("Nhap id nhan vien can sua: ");
        let index = this.check(id);
        if(index == -1){
            throw new Error("Id khong ton tai");
        }
        else {
            let name = rsLib.question("Nhap ten nhan vien: ");
            let bird = rsLib.question("Nhap ngay sinh: ");
            let address = rsLib.question("Nhap dia chi: ");
            let gender = rsLib.question("Nhap gioi tinh nhan vien: ");
            let phone = rsLib.question("Nhap so dien thoai: ");

            this.Employees[index].setName(name);
            this.Employees[index].setBird(bird);
            this.Employees[index].setAddress(address);
            this.Employees[index].setGender(gender);
            this.Employees[index].setPhone(phone);
        }
        this.saveFile();
        this.printAllEmployee();
    }

    check(id:string){
        let index = -1;
        this.Employees.forEach(function (item : Employee,i :number) {
            if (item.getId() == id) {
                index = i;
            }
        });
        return index;
    }

    deleteEmployee(id:string){
        for (let i = 0; i < this.Employees.length ; i++) {
            if (this.Employees.at(i)._id === id){
                this.Employees.splice(i,1);
                console.log("Xoa thanh cong");
                break;
            }
        }
        this.saveFile();
        this.printAllEmployee();
    }

    printAllEmployee(){
        console.table(this.Employees);
    }
}