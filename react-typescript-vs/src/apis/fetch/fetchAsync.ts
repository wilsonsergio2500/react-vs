
import * as Promise from 'bluebird';

export function fetchAsync<T>(url: string) : Promise<T> {

    return new Promise<T>((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange =  () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText) as T);
                } else {
                    reject(xhr.statusText);
                }
            }
        }
        
        xhr.open("GET", url, true);
        xhr.send(null);
    });
}

export function fetchAsyncText(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.response);
                }
            }
        }

        xhr.open("GET", url, true);
        xhr.send(null);
}