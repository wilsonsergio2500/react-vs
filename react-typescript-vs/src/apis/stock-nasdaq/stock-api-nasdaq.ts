import axios from 'axios';
import { AxiosPromise, Promise, AxiosError } from 'axios';
import { ActionType } from '../../enums/actiontypes';
import { IActionProducer } from "../../models/action/iactionproducer";

export function GetStockPrice(ticket: string){
    let key = 'AIzaSyABDmm3x6LCQohwMZ7rp4FlyCuXHUIZ4gY';
    let url = `https://www.google.com/finance/info?q=NASDAQ:${ticket}&key=${key}`;

    return axios.get(url).then((r) => {
        // becuase payload bellow was an string..
       return <IActionProducer>{ type: ActionType.WEATHER_FETCH_SUCCESS, payload: JSON.parse((r.data as string).substr(3)) };
    }, (e: AxiosError) => {
        return <IActionProducer>{ type: ActionType.WEATHER_FETCH_FAILURE, error: e};
        });

}