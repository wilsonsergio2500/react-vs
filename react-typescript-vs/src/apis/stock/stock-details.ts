import { fetchAsyncText } from '../fetch/fetchasync';
import * as Promise from 'bluebird';
import { IStock } from '../../models/stock/stock';

export function GetStockDetails(exchange: string, ticket: string) : Promise<IStock[]>{
    let key = 'AIzaSyABDmm3x6LCQohwMZ7rp4FlyCuXHUIZ4gY';
    let url = `https://crossorigin.me/https://www.google.com/finance/info?q=${exchange}:${ticket}&key=${key}`;

    return new Promise<IStock[]>((resolve, reject) => {
        fetchAsyncText(url).then((x) => {
            let response = x.substr(3);
            resolve(JSON.parse(response));
        }).catch((e) => {
            reject(e);

        });
    });

}