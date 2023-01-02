(()=>{"use strict";var t={69:(t,e,s)=>{s.d(e,{Z:()=>h});var i=s(672);class n{constructor(t){const e=this,s=new Map;this.events=s,this.isStarted=!1,this.isEnded=!1,s.set("start",(function(){t.start&&t.start(),e.isStarted=!0})),s.set("update",(function(e){t.update&&t.update(e)})),s.set("end",(function(){t.end&&t.end(),e.isEnded=!0}))}add(t){return new n({start:()=>{this.events.get("start")(),t.events.get("start")()},update:e=>{this.events.get("update")(e),t.events.get("update")(e)},end:()=>{this.events.get("end")(),t.events.get("end")()}})}}const o={frameList:new Map,start(){const t=+new Date,e=this.startTime,s=this.endTime,n=this.frameList;this.add(e/1e3,s/1e3,{update:()=>{i.Z.background(),i.Z.draw()}}),function i(){const o=+new Date-t;let h;if(o>s&&0===n.size)cancelAnimationFrame(h);else if(o>e){for(let[t,e]of n)o>t[0]&&t[1]>o?e.isStarted?e.events.get("update")((o-t[0])/(t[1]-t[0])):(e.events.get("start")(),e.events.get("update")(0)):o>t[1]&&(e.events.get("update")(1),e.events.get("end")(),n.delete(t));h=requestAnimationFrame(i)}else h=requestAnimationFrame(i)}()},add(t,e,s){const i=[t*=1e3,e*=1e3],o=this.frameList,h=new n(s);o.has(i)?o.set(i,h.add(o.get(i))):o.set(i,h),void 0!==this.startTime?t<this.startTime&&(this.startTime=t):this.startTime=t,void 0!==this.endTime?e>this.endTime&&(this.endTime=e):this.endTime=e},easeIn:(t,e,s)=>(t-e)**2/(s-e)+e,easeOut:(t,e,s)=>(s-t)**2/(e-s)+s,easeInOut(t,e,s){const i=(s+e)/2;return t>=i?this.easeOut(t,i,s):this.easeIn(t,e,i)}};i.Z.animation=o;const h=i.Z.animation},672:(t,e,s)=>{s.d(e,{Z:()=>i}),window.Mraph={elements:[],setup(t,e){const s=document.createElement("canvas");t.appendChild(s),e&&(e.width&&(s.width=3*e.width,s.style.width=e.width+"px"),e.height&&(s.height=3*e.height,s.style.height=e.height+"px")),this.canvas=s},draw(){const t=this.elements;for(const e of t)e.draw()},background(t="white"){this.ctx2d.fillStyle=t;const e=this.canvas.width,s=this.canvas.height;this.ctx2d.fillRect(-e/2,-s/2,e,s)},set canvas(t){this._canvas=t;const e=t.getContext("2d");this.ctx2d=e,e.translate(t.width/2,t.height/2),e.scale(1,-1)},get canvas(){return this._canvas}};const i=Mraph},905:(t,e,s)=>{var i=s(672),n=s(245),o=s(357);class h extends n.Z{constructor(t,e,s){if(super(s),this.size=5,this.color="#F05D11FF",this.fillColor="#F05D1199",this.point1=o.Z.getPoint(t),"[object Number]"==Object.prototype.toString.call(e)){const t=new i.Z.Point(this.point1.x+e,this.point1.y);t.visible=!1,this.point2=t}else this.point2=o.Z.getPoint(e)}draw(){if(!this.visible)return;const t=i.Z.ctx2d;return t.beginPath(),t.strokeStyle=this.color,t.fillStyle=this.fillColor,t.lineWidth=this.size,t.arc(this.point1.x,this.point1.y,this.radius,0,2*Math.PI),t.stroke(),t.fill(),this}get radius(){return Math.hypot(this.point2.x-this.point1.x,this.point2.y-this.point1.y)}}i.Z.Circle=h},245:(t,e,s)=>{s.d(e,{Z:()=>i});const i=class{constructor(...t){this.color="black",this.visible=!0,this.fillColor="rgba(0,0,0,0)",!1!==t[t.length-1]&&Mraph.elements.push(this)}resizeTo(t,e,s){let i,n;Mraph.animation.add(e,s,{start:()=>{i=this.size,n=i*t-i},update:t=>{this.size=i+n*t}})}}},556:(t,e,s)=>{var i=s(672),n=s(750);class o extends n.Z{constructor(...t){super(...t),this.color="#C61C1CFF"}draw(){if(!this.visible)return;const t=i.Z.ctx2d;t.beginPath(),t.lineWidth=this.size,t.strokeStyle=this.color;const e=i.Z.canvas.width,s=i.Z.canvas.height,n=this.point1,o=this.point2;if(o.x-n.x!=0){const s=this.slope;t.moveTo(-e/2,n.y+(-e/2-n.x)*s),t.lineTo(e/2,o.y+(e/2-o.x)*s)}else t.moveTo(n.x,-s/2),t.lineTo(n.x,s/2);return t.stroke(),this}}i.Z.Line=o},670:(t,e,s)=>{var i=s(672),n=s(245),o=s(357);class h extends n.Z{constructor(...t){super(...t),this.size=5,this.closed=!0,this.points=t[0].map((t=>o.Z.getPoint(t)))}draw(){if(!this.visible)return;const t=i.Z.ctx2d,e=this.points;t.beginPath(),t.lineWidth=this.size,t.strokeStyle=this.color,t.fillStyle=this.fillColor,t.moveTo(e[0].x,e[0].y);for(const s of e)t.lineTo(s.x,s.y);return this.closed&&(t.closePath(),t.fill()),t.stroke(),this}}i.Z.Path=h},357:(t,e,s)=>{s.d(e,{Z:()=>r});var i=s(672),n=s(245),o=s(69);class h extends n.Z{constructor(t,e,s){super(s),this.size=10,this.x=t,this.y=e}draw(){if(!this.visible)return;const t=i.Z.ctx2d;return t.beginPath(),t.lineWidth=2*this.size,t.fillStyle=this.color,t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fill(),this}moveTo(t,e,s){let i,n,r,a;const c=this;o.Z.add(e,s,{start:()=>{t=h.getPos(t),i=c.x,n=c.y,r=t[0]-i,a=t[1]-n},update:t=>{t=o.Z.easeInOut(t,0,1),c.x=i+r*t,c.y=n+a*t}})}rotateAround(t,e,s,n){let r,a,c;const l=this;o.Z.add(s,n,{start:()=>{t=h.getPoint(t),r=new i.Z.Segment(t,l,!1),a=r.length,c=r.angle},update:s=>{s=o.Z.easeInOut(s,0,1),l.x=Math.cos(e*s+c)*a+t.x,l.y=Math.sin(e*s+c)*a+t.y}})}static getPoint(t){return t instanceof h?t:new h(...t,!1)}static getPos(t){return t instanceof h?[t.x,t.y]:t}}i.Z.Point=h;const r=h},750:(t,e,s)=>{s.d(e,{Z:()=>r});var i=s(672),n=s(245),o=s(357);class h extends n.Z{constructor(t,e,s){super(s),this.size=5,this.point1=o.Z.getPoint(t),this.point2=o.Z.getPoint(e)}draw(){if(!this.visible)return;const t=i.Z.ctx2d;return t.beginPath(),t.lineWidth=this.size,t.strokeStyle=this.color,t.moveTo(this.point1.x,this.point1.y),t.lineTo(this.point2.x,this.point2.y),t.stroke(),this}get length(){return Math.hypot(this.point2.x-this.point1.x,this.point2.y-this.point1.y)}get slope(){return(this.point2.y-this.point1.y)/(this.point2.x-this.point1.x)}get angle(){return Math.atan2(this.point2.y-this.point1.y,this.point2.x-this.point1.x)}}i.Z.Segment=h;const r=h}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,s),o.exports}s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s(69),s(672),s(905),s(245),s(556),s(670),s(357),s(750)})();