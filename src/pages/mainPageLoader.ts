import {redirect} from "react-router-dom";
import {getFreeCars, getRides} from "../modules/cars/http";

export async function mainLoader() {
    if (!localStorage.getItem("access_token")) {
        return redirect("/auth/login");
    }

    try {
        const freeCars = await getFreeCars();
        const rides = await getRides();
        return {
            freeCars: freeCars.data,
            rides: rides.data,
        }
    } catch (e: any) {
        throw new Response("something_went_wrong", { status: 500 });
    }
}