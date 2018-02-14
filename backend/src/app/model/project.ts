export class Project{
    id:number;
    title:string;
    short_title:string;
    description:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}