import { environment } from '../../environments/environment';

export const MOVIE_LIST =  environment.gatewayURL;
export class Constants {

    public static get ITEM_URL(): string { return MOVIE_LIST; }
}