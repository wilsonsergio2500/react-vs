
import { ActionType } from '../../../enums/actiontypes';
import { WeatherAPI } from '../../../apis/weather/weather-api';
import { IActionProducer } from '../../../models/action/iactionproducer';
import { Dispatch } from "redux";


export function LoadCurses(url: string) {
    return (dispatch : Dispatch<IActionProducer>) => {
        return WeatherAPI(url).then((item) => {
            dispatch(item);
        })
    }
}