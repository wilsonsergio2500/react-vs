
interface IBookVM {
    title: string;
    IsBestSeller: boolean;
}

export class BookVm implements IBookVM {
    constructor(public title : string, public IsBestSeller: boolean = false) {

    }

}