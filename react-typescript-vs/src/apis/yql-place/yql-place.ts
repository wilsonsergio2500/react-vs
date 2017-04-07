

import * as Promise from 'bluebird';
import { fetchAsync } from '../fetch/fetchasync';

export function fetchYQLPlace<T>(city: string, state: string) : Promise<T> {
    let query = encodeURI(`select * from geo.places where text="${city}, ${state}" AND placeTypeName.code = 7`);
    let url = `https://query.yahooapis.com/v1/public/yql?format=json&diagnostics=true&q=${query}`;

    return fetchAsync<T>(url);
}