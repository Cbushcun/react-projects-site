import axios from "axios";

// for future use when incorporating background variation
export const clearDayBg = "";
export const clearNightBg = "";
export const partlyCloudyDayBg =
  "https://videos.pexels.com/video-files/5979931/5979931-hd_1920_1080_30fps.mp4";
export const partlyCloudyNightBg = "";
export const cloudyBg = "";
export const rainBg = "";
export const sleetBg = "";
export const snowBg = "";
export const windBg = "";
export const fogBg = "";

const url = "https://api.weatherbit.io/v2.0/current?";
const params = {
  key: import.meta.env.VITE_WEATHER_API,
};

export async function getInfoByCity(city, state = "", country = "") {
  const endpoint = "&city=" + city;
  if (state) {
    endpoint += "," + state;
  } else if (country) {
    endpoint += "&country=" + country;
  }
  axios
    .get(url + endpoint, { params })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      //console.log(error);
    });
}
