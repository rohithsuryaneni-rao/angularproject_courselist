import { provideCloudflareLoader } from "@angular/common";
export class courseslist
{
    public id:number;
    public name:string;
    public description:string;
    public price:number
    public isavailable:boolean
    public courseimage:string;
    constructor(id:number,name:string,description:string,price:number,isavailable:boolean,courseimage:string)
    {
        this.id=id;
        this.name=name
        this.description=description
        this.price=price
        this.isavailable=isavailable
        this.courseimage=courseimage
    }
}