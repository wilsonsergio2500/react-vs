export interface IYqlQuery {
    query: IYqlResult;
}
interface IYqlResult {
    results: IYqlPlace;
}
interface IYqlPlace {
    place: IYqlPlaceResults;
}
 interface IYqlPlaceResults {
    locality1: ILocality;
    boundingBox: IBoundingBox;
}
 interface IBoundingBox {
    northEast: IGeoLoaction;
    southWest: IGeoLoaction;
}
 interface IGeoLoaction {
    latitude: string;
    longitude: string;
}
 interface ILocality {
    content: string;
    type: string;
    woeid: string;
}