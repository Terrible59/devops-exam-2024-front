import React, {useEffect} from 'react';
import {useLoaderData} from "react-router-dom";
import {Car} from "../models/Car.ts";
import {Ride} from "../models/Ride.ts";
import {Card, ProgressCircle} from "@tremor/react";

type Response = {
    freeCars: Car[],
    rides: Ride[],
}
const stringToDateString = (dateString: string) :string => {
    let date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {day: '2-digit', month: '2-digit', year: 'numeric' }) + " " + date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}
function MainPage() {
    const response:Response = useLoaderData() as Response;

    return (
        <div className="mt-8">
            <div className="text-lg font-bold mb-4">Свободные машины</div>
            <div className="grid grid-cols-4">
                {response.freeCars.map((el, i) => {
                    return <Card key={i} className="flex items-center">
                        <ProgressCircle value={el.fuel_level} size="md" color="cyan" className="mr-6">
                            <span className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center text-xs text-cyan-500 font-medium" style={{fontSize: 8}}>
                              Топливо
                            </span>
                        </ProgressCircle>
                        <div>
                            <div className="text-md font-bold mb-2">{el.model}</div>
                            <div className="text-sm text-slate-500">{el.registration_number}</div>
                        </div>
                    </Card>
                })}
            </div>

            <div className="mt-8">
                <div className="text-lg font-bold mb-4">Последние поездки</div>
                <div className="grid grid-cols-4">
                    {response.rides.map((el, i) => {
                        return <Card key={i} className="">
                            <div className="text-sm text-slate-500 mb-4">Дата: {stringToDateString(el.created_at)}</div>
                            <div className="flex items-center">
                                <ProgressCircle value={el.fuel_level} size="md" color="cyan" className="mr-6">
                                    <span className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center text-xs text-cyan-500 font-medium" style={{fontSize: 8}}>
                                      Топливо
                                    </span>
                                </ProgressCircle>
                                <div>
                                    <div className="text-md font-bold mb-2">{el.model}</div>
                                    <div className="text-sm text-slate-500">{el.registration_number}</div>
                                </div>
                            </div>
                        </Card>
                    })}
                </div>
            </div>
        </div>
    );
}

export default MainPage;