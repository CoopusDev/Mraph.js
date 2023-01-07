import Mraph from "../app.js";
import Graph from "./graph.js";
import Point from "./point.js";

/**
 * 路径
 * @class
 */

class Path extends Graph {
    constructor(...args) {
        super(...args);
        this.size = 5;
        this.closed = true;
        
        this.points = (args[0].map(el => {
            return Point.getPoint(el);
        })) ?? [];
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
        
        if (this.closed) {
            ctx.closePath();
        }
        ctx.fill();
        ctx.stroke();
        
        return this;
    }
}

Mraph.Path = Path;