import $api from "../../../http";
import {AxiosResponse} from "axios";
import {Car} from "../../../models/Car.ts";
import {Ride} from "../../../models/Ride.ts";

export function getRides(): Promise<AxiosResponse<Incident[]>> {
    return $api.get<Ride[]>('rides');
}

export function getFreeCars(): Promise<AxiosResponse<Incident[]>> {
    return $api.get<Car[]>('cars/free');
}
