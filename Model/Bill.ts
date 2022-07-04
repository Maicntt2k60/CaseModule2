import {Product} from "./Product";
export class Bill{
    private _id:string;
    private _nameEmployee:string;
    private _date:string;
    private _nameCustomer:string;
    private _Total:number;
    private _listProduct:Product[];

    constructor(id: string, nameEmployee: string, date: string, nameCustomer: string, Total: number, listProduct: Product[]) {
        this._id = id;
        this._nameEmployee = nameEmployee;
        this._date = date;
        this._nameCustomer = nameCustomer;
        this._Total = Total;
        this._listProduct = listProduct;
    }

    getListProduct(): Product[] {
        return this._listProduct;
    }

    setListProduct(value: Product[]) {
        this._listProduct = value;
    }

    getId(): string {
        return this._id;
    }

    setId(value: string) {
        this._id = value;
    }

    getNameEmployee(): string {
        return this._nameEmployee;
    }

    setNameEmployee(value: string) {
        this._nameEmployee = value;
    }

    getDate(): string {
        return this._date;
    }

    setDate(value: string) {
        this._date = value;
    }

    getNameCustomer(): string {
        return this._nameCustomer;
    }

    setNameCustomer(value: string) {
        this._nameCustomer = value;
    }

    getTotal(): number {
        return this._Total;
    }

    setTotal(value: number) {
        this._Total = value;
    }

}