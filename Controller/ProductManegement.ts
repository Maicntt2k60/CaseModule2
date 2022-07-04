import {Product} from "../Model/Product";
import * as rsLib from "readline-sync";
import * as fs from "fs";

export class ProductManagement {
    public products: any = [];

    constructor() {
        this.products = this.loadFile();
    }

    loadFile(): Product[]{
        const strData: string = fs.readFileSync("./data.json").toString();
        if (strData === "") return [];
        let res : Product[] = [];
        let arrProduct = JSON.parse(strData);
        for (let i = 0; i < arrProduct.length; i++) {
            const data = arrProduct[i];
            let newProduct = new Product();
            newProduct.loadFile(
                data._id,
                data._name,
                data._quantity,
                data._price
            );
            res.push(newProduct);
        }
        return res;
    }

    saveFile(){
        const str = JSON.stringify(this.products);
        fs.writeFileSync("./data.json",str);
    }

    addProduct() {
        let ProductId = rsLib.question("Nhap id san pham : ");
        let ProductName = rsLib.question("Nhap ten san pham : ");
        let ProductQuantity = +rsLib.question("Nhap so luong san pham : ");
        let ProductPrice = +rsLib.question("Nhap gia san pham : ");

        if (this.findProduct(ProductId) != -1) {
            throw new Error("ID da ton tai");
        }
        else {
            let product = new Product(ProductId, ProductName,
                ProductQuantity, ProductPrice);
            this.products.push(product);
        }
        this.saveFile();
        this.printAllProduct();
    }

    findProduct(id: string):number {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products.at(i)._id === id){
                return i;
            }
        }
        return -1;
    }

    updateProduct() {
        let id = rsLib.question("Nhap id san pham can cap nhat: ");
        let index = this.findProduct(id);

        if( index == -1){
            throw new Error("San pham khong ton tai!");
        }
        else {
            let name = rsLib.question("Nhap ten san pham:");
            let quantity = +rsLib.question("Nhap so luong:");
            let price = +rsLib.question("nhap gia san pham: ");

            this.products[index].setName(name);
            this.products[index].setQuantity(quantity);
            this.products[index].setPrice(price);
        }
        this.saveFile();
        this.printAllProduct();
    }

    deleteProduct(id: string) {
        let vt = this.findProduct(id);
        if (vt === -1) {
            throw new Error("Can not Delete Product");
        } else {
            this.products.splice(vt, 1);
        }
        this.saveFile();
        this.printAllProduct();
    }

    printAllProduct() {
        console.table(this.products);
    }

    printProduct(index:number){
        console.table(this.products.at(index));
    }
}
