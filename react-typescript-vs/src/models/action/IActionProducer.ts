import { Action } from 'redux';
import {  AxiosError } from 'axios';
export interface IActionProducer extends Action{
    payload?: any;
    error?: AxiosError;
}