import Graph from "../core/graph.js";
import Segment from "./segment.js";
import { copy } from "../utils/utils.js";

export default class NumberLine extends Segment {
    showTicks = true;
    ticksLen = 10;
    
    constructor(p1, p2, unit, config) {
        super(p1, p2, config);
        this.unit = unit;
        copy(this, config);
    }
    
    draw() {
        super.draw();
        
        if (!this.showTicks) return;
        const sin = Math.sin(this.angle);
        const cos = Math.cos(this.angle);
        
        Graph.draw(this, ctx => {
            for (let num = 0; num < this.length; num += this.unit) {
                const x = this.point1.x + cos * num;
                const y = this.point1.y + sin * num;
                
                ctx.moveTo(x, y);
                ctx.lineTo(x + sin * this.ticksLen, y - cos * this.ticksLen);
            }
        });
    }
}