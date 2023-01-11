import axios from "axios";
import React from "react";
const http=axios.create({
        baseURL:'http://127.0.0.1:8000/api/',
        headers:{
            'X-Requested-With':'XMLHttpRequest',
            "Content-Type": "aplication/json" ,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        responseType:'json',
        withCredentials:true
        
    });
export  default http ;                   
