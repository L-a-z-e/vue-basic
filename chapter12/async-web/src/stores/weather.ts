import { defineStore } from 'pinia';
import axios from "axios";

export interface City {
    name: string;
    lat: number;
    lon: number;
}

interface State {
    cityList: Map<string, City>;
    selectedCity: City;
    isLoading: boolean;
    weatherDescription: string;
}

export const useWeatherStore = defineStore("weather",{
    state: (): State => {
        return {
            cityList: new Map<string, City>(),
            selectedCity: {
                name: "",
                lat: 0,
                lon: 0
            },
            isLoading: true,
            weatherDescription: ""
        };
    },
    getters: {},
    actions: {
        prepareCityList() :void {
            this.cityList.set("Seoul", {
                name: "서울",
                lat: 5,
                lon: 20,
            });
            this.cityList.set("Daejeon", {
                name: "대전",
                lat: 8,
                lon: 22,
            });
            this.cityList.set("Busan", {
                name: "부산",
                lat: 11,
                lon: 38,
            });

        },
        async recieveWeatherInfo(id: string) {
            this.selectedCity = this.cityList.get(id) as City;

            const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
            const params = {
                lang: "ko",
                lat: this.selectedCity.lat.toString(),
                lon: this.selectedCity.lon.toString(),
                appid: "appid"
            };
            const queryParams = new URLSearchParams(params);
            const fullUrl = `${weatherInfoUrl}?${queryParams}`;
            console.log(fullUrl);
            const response = await axios.get(fullUrl);
            const weatherInfoJSON = response.data;
            console.log(weatherInfoJSON);
            const weatherArray = weatherInfoJSON.weather;
            const weather = weatherArray[0];
            this.weatherDescription = weather.description;
            console.log(this.weatherDescription);
            this.isLoading = false;
        }
    }
})