
 export interface IFourSqureService {
    getLandmark(lat?: string, lon?: string, city?: string, radius?: string): Promise<IFourSqurePlaceResponse>
    getRestaurant(lat?: string, lon?: string, city?: string, radius?: string): Promise<unknown>
}


 export interface IFourSqurePlaceResponse {
    results: Result[];
    context: Context;
}

 interface Context {
    geo_bounds: GeoBounds;
}

 interface GeoBounds {
    circle: Circle;
}

 interface Circle {
    center: Center;
    radius: number;
}

 interface Center {
    latitude:  number;
    longitude: number;
}

 interface Result {
    fsq_id:         string;
    categories:     Category[];
    chains:         any[];
    closed_bucket:  string;
    distance:       number;
    geocodes:       Geocodes;
    link:           string;
    location:       Location;
    name:           string;
    related_places: RelatedPlaces;
    timezone:       string;
}

 interface Category {
    id:          number;
    name:        string;
    short_name:  string;
    plural_name: string;
    icon:        Icon;
}

 interface Icon {
    prefix: string;
    suffix: string;
}

 interface Geocodes {
    main:  Center;
    roof?: Center;
}

 interface Location {
    admin_region:      string;
    country:           string;
    cross_street?:     string;
    formatted_address: string;
    locality:          string;
    postcode:          string;
    region:            string;
    address?:          string;
}

 interface RelatedPlaces {
    children?: Parent[];
    parent?:   Parent;
}

 interface Parent {
    fsq_id:     string;
    categories: Category[];
    name:       string;
}
