/// <reference path="../../../helpers/mergeobject.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { IStock } from '../../../models/stock/stock';
import * as classNames from 'classnames';
import { Helpers } from '../../../helpers/mergeobject';


export class StockViews {

    static GetView(stock: IStock) {

        let IsUp = (stock.c.charAt(0) == '+');
        let colorStatus = {
            'text-success': IsUp,
            'text-danger': !IsUp
        }
        
      
        let containerClasses = classNames({
            'bs-callout': true,
            'bs-callout-success': IsUp,
            'bs-callout-danger': !IsUp
        });
        
        let iconClasses = classNames(
            Helpers.MergeObject(
            {
            'fa': true,
            'fa-arrow-up': IsUp,
            'fa-arrow-down' : !IsUp
            }, colorStatus)
        );

        let statusClass = classNames(colorStatus);

        
        let changeIcon = <i className={iconClasses}></i>

        return (<div className="col-md-12">

            <div className={containerClasses}>
                <h4>{stock.e}:{stock.t}- {stock.lt}</h4>
               
                
                <span>{stock.l_cur} USD </span>
                <span className="small"></span>
                {changeIcon}
                <span className={statusClass}>
                    <strong>{stock.c_fix}({stock.cp}%)</strong>
                </span>
            </div>

           
          
            </div>);
    }

}