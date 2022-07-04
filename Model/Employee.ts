export class Employee {
    private _id:string;
    private _name : string;
    private _bird : string;
    private _address:string;
    private _gender: string;
    private _phone:string;

    constructor(id?: string, name?: string, bird?: string, address?: string, gender?: string, phone?: string) {
        this._id = id;
        this._name = name;
        this._bird = bird;
        this._address = address;
        this._gender = gender;
        this._phone = phone;
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

    getBird(): string {
        return this._bird;
    }

    setBird(value: string) {
        this._bird = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getGender(): string {
        return this._gender;
    }

    setGender(value: string) {
        this._gender = value;
    }

    getPhone(): string {
        return this._phone;
    }

    setPhone(value: string) {
        this._phone = value;
    }

    loadData(id: string, name: string, bird: string, address: string, gender: string, phone: string){
        this._id = id;
        this._name = name;
        this._bird = bird;
        this._address = address;
        this._gender = gender;
        this._phone = phone;
    }
}