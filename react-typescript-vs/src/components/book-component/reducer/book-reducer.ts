


import { BookVm } from "../../../models/book/book-model";

export class BookReducer {

    static ReducerFunction() : Array<BookVm> {

        let books = Array<BookVm>();
        books.push(new BookVm('The greates Salesman in The World', true));
        books.push(new BookVm('The Undoing Project', true));
        books.push(new BookVm('Burro Genious'));
        books.push(new BookVm('Flash Boys', true));
        books.push(new BookVm('Chaos Monkeys', true));

      
        return books;
    }

}