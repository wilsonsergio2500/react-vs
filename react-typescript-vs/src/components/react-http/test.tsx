// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { ReactHttp, IReactHttpComponentState } from './react-http-component';
import { LoadingPanelComponent } from '../loading-panel-component/loadingpanelcomponent';
import { IYqlWeather, IyqlForecastItem } from '../../models/yqlweather/iyqlweather';
import { ReactRepeater } from '../repeater-component/reactrepeatercomponent';

export class ReactHttpComponentExample extends React.Component<any, any> {

     RegionWoeid = {
        Omaha: 2465512
    }

    componentWillMount() {

        this.setState({ RegionWoeid: this.RegionWoeid.Omaha });
        
     }

    repeatHandler(item: IyqlForecastItem, index: number) {
        return (
            <div className="col-md-12" key={index}>
                <div className="col-md-3">Date: {item.date}</div>
                <div className="col-md-3">Day: {item.day}</div>
                <div className="col-md-3">High: {item.high}</div>
                <div className="col-md-3">Low: {item.low}</div>
            </div>
            )
    }

    render() {
        let CurrentWoeid = this.state.RegionWoeid;

        let query = encodeURI(`select * from weather.forecast where woeid=${CurrentWoeid}`);
        return (
            <div className="col-md-12">
                <ReactHttp url="https://query.yahooapis.com/v1/public/yql?format=json&diagnostics=true&q={0}" queryProps={[query]}>
                {
                        (state: IReactHttpComponentState<IYqlWeather>) => {
                            if (state.IsLoading) {
                                return (<LoadingPanelComponent>
                                    Loading Weather Foreacst...
                                </LoadingPanelComponent>);
                            }
                            if (state.resolved) {
                                return (
                                    <div className="col-md-12">
                                        <div className="col-md-12">
                                            <h2>Omaha Weather Forecast:</h2>
                                        </div>
                                        <div className="col-md-12">
                                            <ReactRepeater array={state.resolved.query.results.channel.item.forecast}
                                                ParentTag="div"
                                                ParentTagClass="row"
                                                RepeatItemHandler={this.repeatHandler}></ReactRepeater>
                                        </div>
                                    </div>
                                    )
                            }
                     }
                }
                </ReactHttp>
            </div>

        );
    }
}