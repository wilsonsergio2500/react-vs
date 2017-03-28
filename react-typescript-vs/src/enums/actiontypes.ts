

export class ActionType {

    private value: string;
    constructor(action: string) {
        this.value = action;
    }

    static WEATHER_FETCH_SUCCESS = new ActionType('WEATHER_FETCH_SUCCESS');
    static WEATHER_FETCH_FAILURE = new ActionType('WEATHER_FETCH_FAILURE');

    static BOOK_SELECT = new ActionType('BOOK_SELECT');
}