

import * as React from 'react';

import { ActionType } from '../../enums/actiontypes';
import { IActionProducer } from '../../models/action/iactionproducer';

export function ActiveBookReducer(state: any = null, action : IActionProducer) {
    if (action.type == ActionType.BOOK_SELECT) {
        return action.payload;
    }

    return state;
    
}