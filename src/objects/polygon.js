import Mraph from "../app.js";
import Graph from "./graph.js";
import tool from "../tool/tool.js";

/**
 * 多边形
 * @class
 */

class Polygon extends Graph {
    constructor(...args) {
        super(...args);
        this.points = args[0].map(el => {return tool.getPoint(el);});
    }
    draw() {
        if (!this.visible) return;
        
        const ctx = Mraph.ctx2d;
        const points = this.points;
        
        // 设置样式
        ctx.beginPath();
        ctx.lineWidth = this.size;
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.fillColor;
        
        // 绘制
        ctx.moveTo(points[0].x, points[0].y);
        for (const point of points) {
            ctx.lineTo(point.x, point.y);
        }
        
        ctx.closePath();
        ctx.stroke();
        
        return this;
    }
}

Mraph.Polygon = Polygon;