import Graph from "../core/graph.js";
import Point from "./point.js";
import NumberLine from "./number_line.js";

export default class NumberPlane extends Graph{
    xRange = [0, 500, 100];
    yRange = [0, 500, 100];
    
    constructor(origin) {
        super();
        this.origin = Point.getPoint(origin);
        this.xAxis = new NumberLine(origin, 
            [origin.x + this.xRange[1], origin.y], this.xRange[2], {ticksLen: -10});
        this.yAxis = new NumberLine(origin, 
            [origin.x, origin.y + this.yRange[1]], this.yRange[2]);
    }
    
    draw() {
        this.xAxis.draw();
        this.yAxis.draw();
    }
    
    set layer(val) {
        this._layer = val;
        this.xAxis.layer = this.yAxis.layer = val;
    }
    get layer() {
        return this._layer;
    }
}