export class Product{
    private _id : string;
    private _name: string;
    private _quantity : number;
    private _price:number;

    constructor(id?: string, name?: string, quantity?: number, price?: number) {
        this._id = id;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }

    getId(): string {
        return this._id;
    }

    setId(value: string) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getQuantity(): number {
        return this._quantity;
    }

    setQuantity(value: number) {
        this._quantity = value;
    }

    getPrice(): number {
        return this._price;
    }

    setPrice(value: number) {
        this._price = value;
    }

    loadFile(id: string, name: string, quantity: number, price: number) {
        this._id = id;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }
}