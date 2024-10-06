import axios, { AxiosRequestConfig } from "axios";
import { IFourSqurePlaceResponse, IFourSqureService } from "../../interfaces/externalApi/IFourSquare";

export class FourSquareService implements IFourSqureService {
    private readonly baseUrl: string = 'https://api.foursquare.com/v3/places/search'
    private readonly apiKey: string = process.env.FOURSQUARE_KEY || ''

    async getLandmark(lat?: string, lon?: string, city?: string, radius?: string): Promise<IFourSqurePlaceResponse> {
        try {
            if (!this.apiKey) {
                throw new Error("API key is missing. Please provide a valid Foursquare API key.");
            }

            const params: { [key: string]: string } = {};
            if (lat && lon) {
                params.ll = `${lat},${lon}`;
            }
            if (city) {
                params.near = city; 
            }
            if (radius) {
                params.radius = radius; 
            }

            const config: AxiosRequestConfig = {
                headers: {
                    Authorization: this.apiKey
                },
                params
            }
            const response = await axios.get<IFourSqurePlaceResponse>(this.baseUrl, config);
            return response.data;
        } catch (error) {
            throw new Error("Failed to fetch landmarks.")
        }
    }


    getRestaurant(lat?: string, lon?: string, city?: string, radius?: string): Promise<unknown> {
        throw new Error("Method not implemented.");
    }

}