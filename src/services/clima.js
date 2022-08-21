import axios from 'axios'

export const apiClima = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather?key=43b4ce44&user_ip=remote',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization", 
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    "Content-Type": "application/json;charset=UTF-8"   
  }
})  

export default apiClima

