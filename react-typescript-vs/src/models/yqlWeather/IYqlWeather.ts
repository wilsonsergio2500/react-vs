export interface IYqlWeather {
    query: IyqlWeatherResults;
}
interface IyqlWeatherResults {
    results: IyqlWeatherChannel;
}
interface IyqlWeatherChannel {
    channel: IyqlWeatherItem
}
interface IyqlWeatherItem {
    item: IyqlForecast
}
interface IyqlForecast {
    forecast: IyqlForecastItem[];
}
export interface IyqlForecastItem {
    code: string;
    date: string;
    day: string;
    high: string;
    low: string;
    text: string;
}