


import { BookVm } from '../models/book/book-model';
import { ActionType } from '../enums/actiontypes';
export function SelectBook(book: BookVm) {

    console.log(book);
    return {
        type: ActionType.BOOK_SELECT,
        payload: book
    }
}