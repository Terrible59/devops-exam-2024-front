import $api from "../../../http";
import {AxiosResponse} from "axios";
import {Car} from "../../../models/Car.ts";
import {Ride} from "../../../models/Ride.ts";

export function getRides(): Promise<AxiosResponse<Ride[]>> {
    return $api.get<Ride[]>('rides');
}

export function getFreeCars(): Promise<AxiosResponse<Car[]>> {
    return $api.get<Car[]>('cars/free');
}
