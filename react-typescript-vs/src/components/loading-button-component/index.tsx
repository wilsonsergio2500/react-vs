// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import { LoadingButtonComponent } from './loadingbuttoncomponent';
import { ButtonMessage } from './message-component/buttonmessage';
import { ButtonLoadingMessage } from './loading-message-component/buttonloadingmessage';



    export const LoadingButton = LoadingButtonComponent;
    export const BtnMesage = ButtonMessage;
    export const BtnLoadingMessage = ButtonLoadingMessage;
 
