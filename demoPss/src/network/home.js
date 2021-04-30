import Vue from "vue";
import request from "./axios"

export default function reauest(url){
    return request(url)
}