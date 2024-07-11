import {CarProps, FilterProps} from "@/types";

export async function fetchCars(filters: FilterProps) {
    const {manufacturer,limit,fuel,model, year} = filters;

    // https://rapidapi.com/apininjas/api/cars-by-api-ninjas

    // https://rapidapi.com/apininjas/api/cars-by-api-ninjas/playground/apiendpoint_751d3e33-1f5a-4a8b-afda-f78ffa2219c2


    const headers = {
        'X-RapidAPI-Key': process.env.XRapidAPIKey,
        'X-RapidAPI-Host': process.env.XRapidAPIHost
    }   
    
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&limit=${limit}&fuel_type=${fuel}&model=${model}`, {headers: headers});
    const result = await response.json()
    return result

}


// export const generateCarImageUrl(car:CarProps, angel?: string) {
// https://www.imagin.studio/car-image-api
//
// }

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams=(type:String, value:string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(type) {
      searchParams.set(type, value);
    } else {
      searchParams.delete(type);
    }
    
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    return newPathname
} 

