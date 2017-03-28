
import axios from 'axios';
import { AxiosPromise, Promise } from 'axios';
import { ActionType } from '../../enums/actiontypes';
import { IActionProducer } from "../../models/action/iactionproducer";


export function WeatherAPI(url: string) : Promise<IActionProducer> {
        

   return axios.get(url).then((r) => {
       return <IActionProducer>{ type: ActionType.WEATHER_FETCH_SUCCESS, payload: r.data };
    }, (e) => {
        return <IActionProducer>{ type: ActionType.WEATHER_FETCH_FAILURE, error: e.error};
        });
};