import { fabric } from "fabric";
import Vue from "vue";
var canvas = new fabric.Canvas(Vue.$refs.zz);
 fabric.Image.fromURL("./assets/logo.png", function (da) {
    da.scale(0.1);
    canvas.add(da)
})