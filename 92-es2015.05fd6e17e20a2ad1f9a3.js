(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{L6id:function(n,t,l){"use strict";l.r(t);var i=l("8Y7J");class o{}var e=l("pMnS"),s=l("MKJQ"),u=l("sZkV"),r=l("SVse"),a=l("HDdC"),c=l("D0XW"),h=l("DH7j");function d(n){return!Object(h.a)(n)&&n-parseFloat(n)+1>=0}var b=l("z+Ro");function p(n=0,t,l){let i=-1;return d(t)?i=Number(t)<1?1:Number(t):Object(b.a)(t)&&(l=t),Object(b.a)(l)||(l=c.a),new a.a(t=>{const o=d(n)?n:+n-l.now();return l.schedule(g,o,{index:0,period:i,subscriber:t})})}function g(n){const{index:t,period:l,subscriber:i}=n;if(i.next(t),!i.closed){if(-1===l)return i.complete();n.index=t+1,this.schedule(n,l)}}class m{constructor(){this.class="",this.backgroundGradient=!1,this.backgroundColor="transparent",this.backgroundGradientStopColor="transparent",this.backgroundOpacity=1,this.backgroundStroke="transparent",this.backgroundStrokeWidth=0,this.backgroundPadding=5,this.percent=0,this.radius=90,this.space=4,this.toFixed=0,this.maxPercent=1e3,this.renderOnClick=!0,this.units="%",this.unitsFontSize="10",this.unitsFontWeight="normal",this.unitsColor="#444444",this.outerStrokeGradient=!1,this.outerStrokeWidth=8,this.outerStrokeColor="#78C000",this.outerStrokeGradientStopColor="transparent",this.outerStrokeLinecap="round",this.innerStrokeColor="#C7E596",this.innerStrokeWidth=4,this.titleFormat=void 0,this.title="auto",this.titleColor="#444444",this.titleFontSize="20",this.titleFontWeight="normal",this.subtitleFormat=void 0,this.subtitle="progress",this.subtitleColor="#A9A9A9",this.subtitleFontSize="10",this.subtitleFontWeight="normal",this.imageSrc=void 0,this.imageHeight=void 0,this.imageWidth=void 0,this.animation=!0,this.animateTitle=!0,this.animateSubtitle=!1,this.animationDuration=500,this.showTitle=!0,this.showSubtitle=!0,this.showUnits=!0,this.showImage=!1,this.showBackground=!0,this.showInnerStroke=!0,this.clockwise=!0,this.responsive=!1,this.startFromZero=!0,this.showZeroOuterStroke=!0,this.lazy=!1}}let f=class{constructor(n,t,l){this.elRef=t,this.document=l,this.onClick=new i.m,this.svgElement=null,this.isInViewport=!1,this.onViewportChanged=new i.m,this._viewportChangedSubscriber=null,this.options=new m,this.defaultOptions=new m,this._lastPercent=0,this._gradientUUID=null,this.render=()=>{this.applyOptions(),this.options.lazy?(null===this.svgElement&&this.draw(this._lastPercent),this.isInViewport&&(this.options.animation&&this.options.animationDuration>0?this.animate(this._lastPercent,this.options.percent):this.draw(this.options.percent),this._lastPercent=this.options.percent)):(this.options.animation&&this.options.animationDuration>0?this.animate(this._lastPercent,this.options.percent):this.draw(this.options.percent),this._lastPercent=this.options.percent)},this.polarToCartesian=(n,t,l,i)=>{let o=i*Math.PI/180;return{x:n+Math.sin(o)*l,y:t-Math.cos(o)*l}},this.draw=n=>{let t=(n=void 0===n?this.options.percent:Math.abs(n))>100?100:n,l=2*this.options.radius+2*this.options.outerStrokeWidth;this.options.showBackground&&(l+=2*this.options.backgroundStrokeWidth+this.max(0,2*this.options.backgroundPadding));let i,o,e={x:l/2,y:l/2},s=e.x,u=e.y-this.options.radius,r=this.polarToCartesian(e.x,e.y,this.options.radius,360*(this.options.clockwise?t:100-t)/100);100===t&&(r.x=r.x+(this.options.clockwise?-.01:.01)),[i,o]=t>50?this.options.clockwise?[1,1]:[1,0]:this.options.clockwise?[0,1]:[0,0];let a=this.options.animateTitle?n:this.options.percent,c=a>this.options.maxPercent?`${this.options.maxPercent.toFixed(this.options.toFixed)}+`:a.toFixed(this.options.toFixed),h=this.options.animateSubtitle?n:this.options.percent,d={x:e.x,y:e.y,textAnchor:"middle",color:this.options.titleColor,fontSize:this.options.titleFontSize,fontWeight:this.options.titleFontWeight,texts:[],tspans:[]};if(void 0!==this.options.titleFormat&&"Function"===this.options.titleFormat.constructor.name){let n=this.options.titleFormat(a);n instanceof Array?d.texts=[...n]:d.texts.push(n.toString())}else"auto"===this.options.title?d.texts.push(c):this.options.title instanceof Array?d.texts=[...this.options.title]:d.texts.push(this.options.title.toString());let b={x:e.x,y:e.y,textAnchor:"middle",color:this.options.subtitleColor,fontSize:this.options.subtitleFontSize,fontWeight:this.options.subtitleFontWeight,texts:[],tspans:[]};if(void 0!==this.options.subtitleFormat&&"Function"===this.options.subtitleFormat.constructor.name){let n=this.options.subtitleFormat(h);n instanceof Array?b.texts=[...n]:b.texts.push(n.toString())}else this.options.subtitle instanceof Array?b.texts=[...this.options.subtitle]:b.texts.push(this.options.subtitle.toString());let p={text:`${this.options.units}`,fontSize:this.options.unitsFontSize,fontWeight:this.options.unitsFontWeight,color:this.options.unitsColor},g=0,m=1;if(this.options.showTitle&&(g+=d.texts.length),this.options.showSubtitle&&(g+=b.texts.length),this.options.showTitle)for(let f of d.texts)d.tspans.push({span:f,dy:this.getRelativeY(m,g)}),m++;if(this.options.showSubtitle)for(let f of b.texts)b.tspans.push({span:f,dy:this.getRelativeY(m,g)}),m++;null===this._gradientUUID&&(this._gradientUUID=this.uuid()),this.svg={viewBox:`0 0 ${l} ${l}`,width:this.options.responsive?"100%":l,height:this.options.responsive?"100%":l,backgroundCircle:{cx:e.x,cy:e.y,r:this.options.radius+this.options.outerStrokeWidth/2+this.options.backgroundPadding,fill:this.options.backgroundColor,fillOpacity:this.options.backgroundOpacity,stroke:this.options.backgroundStroke,strokeWidth:this.options.backgroundStrokeWidth},path:{d:`M ${s} ${u}\n        A ${this.options.radius} ${this.options.radius} 0 ${i} ${o} ${r.x} ${r.y}`,stroke:this.options.outerStrokeColor,strokeWidth:this.options.outerStrokeWidth,strokeLinecap:this.options.outerStrokeLinecap,fill:"none"},circle:{cx:e.x,cy:e.y,r:this.options.radius-this.options.space-this.options.outerStrokeWidth/2-this.options.innerStrokeWidth/2,fill:"none",stroke:this.options.innerStrokeColor,strokeWidth:this.options.innerStrokeWidth},title:d,units:p,subtitle:b,image:{x:e.x-this.options.imageWidth/2,y:e.y-this.options.imageHeight/2,src:this.options.imageSrc,width:this.options.imageWidth,height:this.options.imageHeight},outerLinearGradient:{id:"outer-linear-"+this._gradientUUID,colorStop1:this.options.outerStrokeColor,colorStop2:"transparent"===this.options.outerStrokeGradientStopColor?"#FFF":this.options.outerStrokeGradientStopColor},radialGradient:{id:"radial-"+this._gradientUUID,colorStop1:this.options.backgroundColor,colorStop2:"transparent"===this.options.backgroundGradientStopColor?"#FFF":this.options.backgroundGradientStopColor}}},this.getAnimationParameters=(n,t)=>{let l,i,o,e=this.options.startFromZero?0:n<0?0:n,s=t<0?0:this.min(t,this.options.maxPercent),u=Math.abs(Math.round(s-e));return u>=100?(l=100,i=this.options.animateTitle||this.options.animateSubtitle?Math.round(u/l):1):(l=u,i=1),o=Math.round(this.options.animationDuration/l),o<10&&(o=10,l=this.options.animationDuration/o,i=!this.options.animateTitle&&!this.options.animateSubtitle&&u>100?Math.round(100/l):Math.round(u/l)),i<1&&(i=1),{times:l,step:i,interval:o}},this.animate=(n,t)=>{this._timerSubscription&&!this._timerSubscription.closed&&this._timerSubscription.unsubscribe();let l=this.options.startFromZero?0:n,i=t,{step:o,interval:e}=this.getAnimationParameters(l,i),s=l;this._timerSubscription=l<i?p(0,e).subscribe(()=>{s+=o,s<=i?!this.options.animateTitle&&!this.options.animateSubtitle&&s>=100?(this.draw(i),this._timerSubscription.unsubscribe()):this.draw(s):(this.draw(i),this._timerSubscription.unsubscribe())}):p(0,e).subscribe(()=>{s-=o,s>=i?!this.options.animateTitle&&!this.options.animateSubtitle&&i>=100?(this.draw(i),this._timerSubscription.unsubscribe()):this.draw(s):(this.draw(i),this._timerSubscription.unsubscribe())})},this.emitClickEvent=n=>{this.options.renderOnClick&&this.animate(0,this.options.percent),this.onClick.emit(n)},this.applyOptions=()=>{for(let n of Object.keys(this.options))this.hasOwnProperty(n)&&void 0!==this[n]?this.options[n]=this[n]:this.templateOptions&&void 0!==this.templateOptions[n]&&(this.options[n]=this.templateOptions[n]);this.options.radius=Math.abs(+this.options.radius),this.options.space=+this.options.space,this.options.percent=+this.options.percent>0?+this.options.percent:0,this.options.maxPercent=Math.abs(+this.options.maxPercent),this.options.animationDuration=Math.abs(this.options.animationDuration),this.options.outerStrokeWidth=Math.abs(+this.options.outerStrokeWidth),this.options.innerStrokeWidth=Math.abs(+this.options.innerStrokeWidth),this.options.backgroundPadding=+this.options.backgroundPadding},this.getRelativeY=(n,t)=>(1*(n-t/2)-.18).toFixed(2)+"em",this.min=(n,t)=>n<t?n:t,this.max=(n,t)=>n>t?n:t,this.uuid=()=>{var n=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var l=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"==t?l:3&l|8).toString(16)}))},this.findSvgElement=function(){if(null===this.svgElement){let n=this.elRef.nativeElement.getElementsByTagName("svg");n.length>0&&(this.svgElement=n[0])}},this.checkViewport=()=>{this.findSvgElement();let n=this.isInViewport;this.isInViewport=this.isElementInViewport(this.svgElement),n!==this.isInViewport&&this.onViewportChanged.emit({oldValue:n,newValue:this.isInViewport})},this.onScroll=n=>{this.checkViewport()},this.loadEventsForLazyMode=()=>{if(this.options.lazy){this.document.addEventListener("scroll",this.onScroll,!0),this.window.addEventListener("resize",this.onScroll,!0),null===this._viewportChangedSubscriber&&(this._viewportChangedSubscriber=this.onViewportChanged.subscribe(({newValue:n})=>{n&&this.render()}));let n=p(0,50).subscribe(()=>{null===this.svgElement?this.checkViewport():n.unsubscribe()})}},this.unloadEventsForLazyMode=()=>{this.document.removeEventListener("scroll",this.onScroll,!0),this.window.removeEventListener("resize",this.onScroll,!0),null!==this._viewportChangedSubscriber&&(this._viewportChangedSubscriber.unsubscribe(),this._viewportChangedSubscriber=null)},this.document=l,this.window=this.document.defaultView,Object.assign(this.options,n),Object.assign(this.defaultOptions,n)}isDrawing(){return this._timerSubscription&&!this._timerSubscription.closed}isElementInViewport(n){if(null==n)return!1;let t,l=n.getBoundingClientRect(),i=n.parentNode;do{if(t=i.getBoundingClientRect(),l.top>=t.bottom)return!1;if(l.bottom<=t.top)return!1;if(l.left>=t.right)return!1;if(l.right<=t.left)return!1;i=i.parentNode}while(i!=this.document.body);return!(l.top>=(this.window.innerHeight||this.document.documentElement.clientHeight)||l.bottom<=0||l.left>=(this.window.innerWidth||this.document.documentElement.clientWidth)||l.right<=0)}ngOnInit(){this.loadEventsForLazyMode()}ngOnDestroy(){this.unloadEventsForLazyMode()}ngOnChanges(n){this.render(),"lazy"in n&&(n.lazy.currentValue?this.loadEventsForLazyMode():this.unloadEventsForLazyMode())}};var k;let v=k=class{static forRoot(n={}){return{ngModule:k,providers:[{provide:m,useValue:n}]}}};var x=i.mb({encapsulation:2,styles:[],data:{}});function S(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,2,":svg:linearGradient",[],[[1,"id",0]],null,null,null,null)),(n()(),i.ob(1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(n()(),i.ob(2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.outerLinearGradient.id),n(t,1,0,l.svg.outerLinearGradient.colorStop1,1),n(t,2,0,l.svg.outerLinearGradient.colorStop2,1)}))}function w(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,2,":svg:radialGradient",[],[[1,"id",0]],null,null,null,null)),(n()(),i.ob(1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(n()(),i.ob(2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.radialGradient.id),n(t,1,0,l.svg.radialGradient.colorStop1,1),n(t,2,0,l.svg.radialGradient.colorStop2,1)}))}function y(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.backgroundCircle.cx,l.svg.backgroundCircle.cy,l.svg.backgroundCircle.r,l.svg.backgroundCircle.fill,l.svg.backgroundCircle.fillOpacity,l.svg.backgroundCircle.stroke,l.svg.backgroundCircle.strokeWidth)}))}function C(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.backgroundCircle.cx,l.svg.backgroundCircle.cy,l.svg.backgroundCircle.r,i.sb(1,"url(#",l.svg.radialGradient.id,")"),l.svg.backgroundCircle.fillOpacity,l.svg.backgroundCircle.stroke,l.svg.backgroundCircle.strokeWidth)}))}function F(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),i.db(16777216,null,null,1,null,y)),i.nb(2,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(16777216,null,null,1,null,C)),i.nb(4,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(0,null,null,0))],(function(n,t){var l=t.component;n(t,2,0,!l.options.backgroundGradient),n(t,4,0,l.options.backgroundGradient)}),null)}function z(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.circle.cx,l.svg.circle.cy,l.svg.circle.r,l.svg.circle.fill,l.svg.circle.stroke,l.svg.circle.strokeWidth)}))}function I(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.path.d,l.svg.path.stroke,l.svg.path.strokeWidth,l.svg.path.strokeLinecap,l.svg.path.fill)}))}function W(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.path.d,i.sb(1,"url(#",l.svg.outerLinearGradient.id,")"),l.svg.path.strokeWidth,l.svg.path.strokeLinecap,l.svg.path.fill)}))}function E(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),i.db(16777216,null,null,1,null,I)),i.nb(2,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(16777216,null,null,1,null,W)),i.nb(4,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(0,null,null,0))],(function(n,t){var l=t.component;n(t,2,0,!l.options.outerStrokeGradient),n(t,4,0,l.options.outerStrokeGradient)}),null)}function _(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(n()(),i.Db(1,null,["",""]))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.title.x,l.svg.title.y,t.context.$implicit.dy,l.svg.title.fontSize,l.svg.title.fontWeight,l.svg.title.color),n(t,1,0,t.context.$implicit.span)}))}function D(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),i.db(16777216,null,null,1,null,_)),i.nb(2,278528,null,0,r.h,[i.L,i.I,i.q],{ngForOf:[0,"ngForOf"]},null),(n()(),i.db(0,null,null,0))],(function(n,t){n(t,2,0,t.component.svg.title.tspans)}),null)}function L(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,1,":svg:tspan",[],[[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(n()(),i.Db(1,null,["",""]))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.units.fontSize,l.svg.units.fontWeight,l.svg.units.color),n(t,1,0,l.svg.units.text)}))}function M(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(n()(),i.Db(1,null,["",""]))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.subtitle.x,l.svg.subtitle.y,t.context.$implicit.dy,l.svg.subtitle.fontSize,l.svg.subtitle.fontWeight,l.svg.subtitle.color),n(t,1,0,t.context.$implicit.span)}))}function O(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),i.db(16777216,null,null,1,null,M)),i.nb(2,278528,null,0,r.h,[i.L,i.I,i.q],{ngForOf:[0,"ngForOf"]},null),(n()(),i.db(0,null,null,0))],(function(n,t){n(t,2,0,t.component.svg.subtitle.tspans)}),null)}function P(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,6,":svg:text",[["alignment-baseline","baseline"]],[[1,"x",0],[1,"y",0],[1,"text-anchor",0]],null,null,null,null)),(n()(),i.db(16777216,null,null,1,null,D)),i.nb(2,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(16777216,null,null,1,null,L)),i.nb(4,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(16777216,null,null,1,null,O)),i.nb(6,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,2,0,l.options.showTitle),n(t,4,0,l.options.showUnits),n(t,6,0,l.options.showSubtitle)}),(function(n,t){var l=t.component;n(t,0,0,l.svg.circle.cx,l.svg.circle.cy,l.svg.title.textAnchor)}))}function G(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,0,":svg:image",[["preserveAspectRatio","none"]],[[1,"height",0],[1,"width",0],[1,":xlink:href",0],[1,"x",0],[1,"y",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.image.height,l.svg.image.width,l.svg.image.src,l.svg.image.x,l.svg.image.y)}))}function V(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,15,":svg:svg",[["preserveAspectRatio","xMidYMid meet"],["xmlns","http://www.w3.org/2000/svg"]],[[1,"viewBox",0],[1,"height",0],[1,"width",0],[1,"class",0]],[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==n.component.emitClickEvent(l)&&i),i}),null,null)),(n()(),i.ob(1,0,null,null,4,":svg:defs",[],null,null,null,null,null)),(n()(),i.db(16777216,null,null,1,null,S)),i.nb(3,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(16777216,null,null,1,null,w)),i.nb(5,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(16777216,null,null,1,null,F)),i.nb(7,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(16777216,null,null,1,null,z)),i.nb(9,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(16777216,null,null,1,null,E)),i.nb(11,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(16777216,null,null,1,null,P)),i.nb(13,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.db(16777216,null,null,1,null,G)),i.nb(15,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,3,0,l.options.outerStrokeGradient),n(t,5,0,l.options.backgroundGradient),n(t,7,0,l.options.showBackground),n(t,9,0,l.options.showInnerStroke),n(t,11,0,l.options.percent-0!=0||l.options.showZeroOuterStroke),n(t,13,0,!l.options.showImage&&(l.options.showTitle||l.options.showUnits||l.options.showSubtitle)),n(t,15,0,l.options.showImage)}),(function(n,t){var l=t.component;n(t,0,0,l.svg.viewBox,l.svg.height,l.svg.width,l.options.class)}))}function T(n){return i.Eb(0,[(n()(),i.db(16777216,null,null,1,null,V)),i.nb(1,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,t.component.svg)}),null)}class j{constructor(n){this.sanitizer=n,this.sliderConfig={spaceBetween:0,centeredSlides:!0,slidesPerView:1},this.data={confirmed:0,deaths:0,hospital_isolation:0,house_isolation:0,recovered:0},this.actived=0,this.trunc=!0,this.videos=!1}ngOnInit(){fetch("assets/data.json").then(n=>n.json()).then(n=>{this.data=n,console.log(this.data),this.actived=this.data.confirmed-(this.data.recovered+this.data.deaths)}),setTimeout(()=>this.videos=!0,2e3)}transform(n){return this.sanitizer.bypassSecurityTrustResourceUrl(n)}}var A=l("cUpR"),$=i.mb({encapsulation:0,styles:[[".header[_ngcontent-%COMP%]{background-color:#3002fe!important;color:#fff;border-radius:0 0 2em 2em;border-bottom:none!important}.circles[_ngcontent-%COMP%]{background-color:#3002fe!important;color:#fff;border-radius:2em;border-bottom:none!important}.card[_ngcontent-%COMP%]{position:relative;top:-12em;z-index:1000}.card-trunc[_ngcontent-%COMP%]{height:2em;margin-bottom:2em}.truncate[_ngcontent-%COMP%]{width:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.not-truncate[_ngcontent-%COMP%]{width:auto;height:auto;overflow:auto}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}"]],data:{}});function U(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,14,"ion-slide",[],null,null,null,s.D,s.n)),i.nb(1,49152,null,0,u.kb,[i.h,i.k,i.x],null,null),(n()(),i.ob(2,0,null,0,12,"ion-card",[["style","width: auto;"]],null,null,null,s.w,s.c)),i.nb(3,49152,null,0,u.j,[i.h,i.k,i.x],null,null),(n()(),i.ob(4,0,null,0,7,"ion-card-header",[],null,null,null,s.t,s.e)),i.nb(5,49152,null,0,u.l,[i.h,i.k,i.x],null,null),(n()(),i.ob(6,0,null,0,2,"ion-card-subtitle",[],null,null,null,s.u,s.f)),i.nb(7,49152,null,0,u.m,[i.h,i.k,i.x],null,null),(n()(),i.Db(-1,0,["Video"])),(n()(),i.ob(9,0,null,0,2,"p",[["style","color: black !important;"]],null,null,null,null,null)),(n()(),i.ob(10,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),i.Db(11,null,["",""])),(n()(),i.ob(12,0,null,0,2,"ion-card-content",[["style","padding: 10px;"]],null,null,null,s.s,s.d)),i.nb(13,49152,null,0,u.k,[i.h,i.k,i.x],null,null),(n()(),i.ob(14,0,null,0,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"],["height","144"],["width","240"]],[[8,"src",5]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,11,0,t.context.$implicit.title),n(t,14,0,l.transform(t.context.$implicit.url))}))}function R(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,3,"ion-slides",[],null,null,null,s.E,s.o)),i.nb(1,49152,null,0,u.lb,[i.h,i.k,i.x],{options:[0,"options"]},null),(n()(),i.db(16777216,null,0,1,null,U)),i.nb(3,278528,null,0,r.h,[i.L,i.I,i.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){var l=t.component;n(t,1,0,l.sliderConfig),n(t,3,0,l.data.films)}),null)}function B(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,6,"ion-col",[["size","12"]],null,null,null,s.x,s.h)),i.nb(1,49152,null,0,u.q,[i.h,i.k,i.x],{size:[0,"size"]},null),(n()(),i.ob(2,0,null,0,2,"ion-label",[["class","ion-text-center"]],null,null,null,s.B,s.l)),i.nb(3,49152,null,0,u.K,[i.h,i.k,i.x],null,null),(n()(),i.Db(-1,0,[" Videos "])),(n()(),i.db(16777216,null,0,1,null,R)),i.nb(6,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,1,0,"12"),n(t,6,0,l.videos)}),null)}function q(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,86,"ion-content",[],null,null,null,s.y,s.i)),i.nb(1,49152,null,0,u.r,[i.h,i.k,i.x],{fullscreen:[0,"fullscreen"]},null),(n()(),i.ob(2,0,null,0,12,"ion-header",[["collapse","condense"]],null,null,null,s.A,s.k)),i.nb(3,49152,null,0,u.y,[i.h,i.k,i.x],{collapse:[0,"collapse"]},null),(n()(),i.ob(4,0,null,0,2,"ion-title",[["size","medium"],["style","padding: 2em;"]],null,null,null,s.F,s.p)),i.nb(5,49152,null,0,u.ub,[i.h,i.k,i.x],{size:[0,"size"]},null),(n()(),i.Db(-1,0,["Covid19-Rd"])),(n()(),i.ob(7,0,null,0,7,"ion-grid",[],null,null,null,s.z,s.j)),i.nb(8,49152,null,0,u.x,[i.h,i.k,i.x],null,null),(n()(),i.ob(9,0,null,0,5,"ion-row",[],null,null,null,s.C,s.m)),i.nb(10,49152,null,0,u.db,[i.h,i.k,i.x],null,null),(n()(),i.ob(11,0,null,0,1,"ion-col",[["size","9"]],null,null,null,s.x,s.h)),i.nb(12,49152,null,0,u.q,[i.h,i.k,i.x],{size:[0,"size"]},null),(n()(),i.ob(13,0,null,0,1,"ion-col",[["size","3"]],null,null,null,s.x,s.h)),i.nb(14,49152,null,0,u.q,[i.h,i.k,i.x],{size:[0,"size"]},null),(n()(),i.ob(15,0,null,0,21,"ion-grid",[["style","border-radius: 0em 0em 2em 2em;margin-bottom: 4em;"]],null,null,null,s.z,s.j)),i.nb(16,49152,null,0,u.x,[i.h,i.k,i.x],null,null),(n()(),i.ob(17,0,null,0,9,"ion-row",[],null,null,null,s.C,s.m)),i.nb(18,49152,null,0,u.db,[i.h,i.k,i.x],null,null),(n()(),i.ob(19,0,null,0,3,"ion-col",[["size","6"]],null,null,null,s.x,s.h)),i.nb(20,49152,null,0,u.q,[i.h,i.k,i.x],{size:[0,"size"]},null),(n()(),i.ob(21,0,null,0,1,"circle-progress",[],null,null,null,T,x)),i.nb(22,770048,null,0,f,[m,i.k,r.c],{radius:[0,"radius"],percent:[1,"percent"],maxPercent:[2,"maxPercent"],units:[3,"units"],outerStrokeWidth:[4,"outerStrokeWidth"],outerStrokeColor:[5,"outerStrokeColor"],innerStrokeColor:[6,"innerStrokeColor"],innerStrokeWidth:[7,"innerStrokeWidth"],title:[8,"title"],titleFontSize:[9,"titleFontSize"],subtitle:[10,"subtitle"],subtitleFontSize:[11,"subtitleFontSize"],animation:[12,"animation"],animateTitle:[13,"animateTitle"]},null),(n()(),i.ob(23,0,null,0,3,"ion-col",[["size","6"]],null,null,null,s.x,s.h)),i.nb(24,49152,null,0,u.q,[i.h,i.k,i.x],{size:[0,"size"]},null),(n()(),i.ob(25,0,null,0,1,"circle-progress",[],null,null,null,T,x)),i.nb(26,770048,null,0,f,[m,i.k,r.c],{radius:[0,"radius"],percent:[1,"percent"],maxPercent:[2,"maxPercent"],units:[3,"units"],outerStrokeWidth:[4,"outerStrokeWidth"],outerStrokeColor:[5,"outerStrokeColor"],innerStrokeColor:[6,"innerStrokeColor"],innerStrokeWidth:[7,"innerStrokeWidth"],title:[8,"title"],titleFontSize:[9,"titleFontSize"],subtitle:[10,"subtitle"],subtitleFontSize:[11,"subtitleFontSize"],animation:[12,"animation"],animateTitle:[13,"animateTitle"]},null),(n()(),i.ob(27,0,null,0,9,"ion-row",[],null,null,null,s.C,s.m)),i.nb(28,49152,null,0,u.db,[i.h,i.k,i.x],null,null),(n()(),i.ob(29,0,null,0,3,"ion-col",[["size","6"]],null,null,null,s.x,s.h)),i.nb(30,49152,null,0,u.q,[i.h,i.k,i.x],{size:[0,"size"]},null),(n()(),i.ob(31,0,null,0,1,"circle-progress",[],null,null,null,T,x)),i.nb(32,770048,null,0,f,[m,i.k,r.c],{radius:[0,"radius"],percent:[1,"percent"],maxPercent:[2,"maxPercent"],units:[3,"units"],outerStrokeWidth:[4,"outerStrokeWidth"],outerStrokeColor:[5,"outerStrokeColor"],innerStrokeColor:[6,"innerStrokeColor"],innerStrokeWidth:[7,"innerStrokeWidth"],title:[8,"title"],titleFontSize:[9,"titleFontSize"],subtitle:[10,"subtitle"],subtitleFontSize:[11,"subtitleFontSize"],animation:[12,"animation"],animateTitle:[13,"animateTitle"]},null),(n()(),i.ob(33,0,null,0,3,"ion-col",[["size","6"]],null,null,null,s.x,s.h)),i.nb(34,49152,null,0,u.q,[i.h,i.k,i.x],{size:[0,"size"]},null),(n()(),i.ob(35,0,null,0,1,"circle-progress",[],null,null,null,T,x)),i.nb(36,770048,null,0,f,[m,i.k,r.c],{radius:[0,"radius"],percent:[1,"percent"],maxPercent:[2,"maxPercent"],units:[3,"units"],outerStrokeWidth:[4,"outerStrokeWidth"],outerStrokeColor:[5,"outerStrokeColor"],innerStrokeColor:[6,"innerStrokeColor"],innerStrokeWidth:[7,"innerStrokeWidth"],title:[8,"title"],titleFontSize:[9,"titleFontSize"],subtitle:[10,"subtitle"],subtitleFontSize:[11,"subtitleFontSize"],animation:[12,"animation"],animateTitle:[13,"animateTitle"]},null),(n()(),i.ob(37,0,null,0,49,"ion-grid",[["class","circles"]],null,null,null,s.z,s.j)),i.nb(38,49152,null,0,u.x,[i.h,i.k,i.x],null,null),(n()(),i.ob(39,0,null,0,1,"ion-row",[["style","margin: 2em;"]],null,null,null,s.C,s.m)),i.nb(40,49152,null,0,u.db,[i.h,i.k,i.x],null,null),(n()(),i.ob(41,0,null,0,18,"ion-row",[["class","card-trunc"]],null,null,null,s.C,s.m)),i.nb(42,49152,null,0,u.db,[i.h,i.k,i.x],null,null),(n()(),i.ob(43,0,null,0,16,"ion-card",[["class","card"]],null,null,null,s.w,s.c)),i.nb(44,49152,null,0,u.j,[i.h,i.k,i.x],null,null),(n()(),i.ob(45,0,null,0,7,"ion-card-header",[],null,null,null,s.t,s.e)),i.nb(46,49152,null,0,u.l,[i.h,i.k,i.x],null,null),(n()(),i.ob(47,0,null,0,2,"ion-card-subtitle",[],null,null,null,s.u,s.f)),i.nb(48,49152,null,0,u.m,[i.h,i.k,i.x],null,null),(n()(),i.Db(-1,0,["Detalles"])),(n()(),i.ob(50,0,null,0,2,"ion-card-title",[],null,null,null,s.v,s.g)),i.nb(51,49152,null,0,u.n,[i.h,i.k,i.x],null,null),(n()(),i.Db(-1,0,["M\xe1s informaci\xf3n"])),(n()(),i.ob(53,0,null,0,6,"ion-card-content",[],null,null,null,s.s,s.d)),i.nb(54,49152,null,0,u.k,[i.h,i.k,i.x],null,null),(n()(),i.ob(55,0,null,0,1,"p",[],[[8,"className",0]],null,null,null,null)),(n()(),i.Db(56,null,["",""])),(n()(),i.ob(57,0,null,0,2,"ion-button",[["color","tertiary"],["slot","end"]],null,[[null,"click"]],(function(n,t,l){var i=!0,o=n.component;return"click"===t&&(i=0!=(o.trunc=!o.trunc)&&i),i}),s.r,s.b)),i.nb(58,49152,null,0,u.h,[i.h,i.k,i.x],{color:[0,"color"]},null),(n()(),i.Db(59,0,["",""])),(n()(),i.ob(60,0,null,0,26,"ion-row",[["style","margin-top: .5em;"]],null,null,null,s.C,s.m)),i.nb(61,49152,null,0,u.db,[i.h,i.k,i.x],null,null),(n()(),i.db(16777216,null,0,1,null,B)),i.nb(63,16384,null,0,r.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(n()(),i.ob(64,0,null,0,22,"ion-col",[["size","12"]],null,null,null,s.x,s.h)),i.nb(65,49152,null,0,u.q,[i.h,i.k,i.x],{size:[0,"size"]},null),(n()(),i.ob(66,0,null,0,20,"ion-card",[],null,null,null,s.w,s.c)),i.nb(67,49152,null,0,u.j,[i.h,i.k,i.x],null,null),(n()(),i.ob(68,0,null,0,7,"ion-card-header",[],null,null,null,s.t,s.e)),i.nb(69,49152,null,0,u.l,[i.h,i.k,i.x],null,null),(n()(),i.ob(70,0,null,0,2,"ion-card-subtitle",[],null,null,null,s.u,s.f)),i.nb(71,49152,null,0,u.m,[i.h,i.k,i.x],null,null),(n()(),i.Db(-1,0,["Vital"])),(n()(),i.ob(73,0,null,0,2,"ion-card-title",[],null,null,null,s.v,s.g)),i.nb(74,49152,null,0,u.n,[i.h,i.k,i.x],null,null),(n()(),i.Db(-1,0,["Prevenciones"])),(n()(),i.ob(76,0,null,0,10,"ion-card-content",[],null,null,null,s.s,s.d)),i.nb(77,49152,null,0,u.k,[i.h,i.k,i.x],null,null),(n()(),i.ob(78,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),i.Db(-1,null,["Puede reducir el riesgo de infecci\xf3n:"])),(n()(),i.ob(80,0,null,0,6,"ul",[],null,null,null,null,null)),(n()(),i.ob(81,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),i.Db(-1,null,["Lav\xe1ndose las manos regularmente con agua y jab\xf3n o con desinfectante de manos a base de alcohol"])),(n()(),i.ob(83,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),i.Db(-1,null,["Cubri\xe9ndose la nariz y la boca al toser y estornudar con un pa\xf1uelo de papel desechable o con la parte interna del codo"])),(n()(),i.ob(85,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),i.Db(-1,null,["Evitando el contacto directo (1 metro o 3 pies) con cualquier persona con s\xedntomas de resfriado o gripe (influenza)"]))],(function(n,t){var l=t.component;n(t,1,0,!0),n(t,3,0,"condense"),n(t,5,0,"medium"),n(t,12,0,"9"),n(t,14,0,"3"),n(t,20,0,"6"),n(t,22,1,[100,100,100,"",16,"#C6E4FF","#A9BAE8",8,l.data.confirmed.toString(),"32","Comfirmados","18",!0,!0]),n(t,24,0,"6"),n(t,26,1,[100,100,100,"",16,"#FF0046","#E81B0C",8,l.data.deaths.toString(),"32","Fallecidos","18",!0,!0]),n(t,30,0,"6"),n(t,32,1,[100,100,100,"",16,"#00FFAB","#0CE8DD",8,l.data.recovered.toString(),"32","Recuperados","18",!0,!0]),n(t,34,0,"6"),n(t,36,1,[100,100,100,"",16,"#FF8E00","#E89D0C",8,l.actived.toString(),"32","Activos","18",!0,!0]),n(t,58,0,"tertiary"),n(t,63,0,l.videos),n(t,65,0,"12")}),(function(n,t){var l=t.component;n(t,55,0,i.sb(1,"",l.trunc?"truncate":"not-truncate","")),n(t,56,0,l.data.detail),n(t,59,0,l.trunc?"M\xe1s":"Menos")}))}function H(n){return i.Eb(0,[(n()(),i.ob(0,0,null,null,1,"app-home",[],null,null,null,q,$)),i.nb(1,114688,null,0,j,[A.b],null,null)],(function(n,t){n(t,1,0)}),null)}var N=i.kb("app-home",j,H,{},{},[]),J=l("s7LF"),Y=l("iInd");l.d(t,"HomePageModuleNgFactory",(function(){return Z}));var Z=i.lb(o,[],(function(n){return i.xb([i.yb(512,i.j,i.W,[[8,[e.a,N]],[3,i.j],i.v]),i.yb(4608,r.k,r.j,[i.s,[2,r.r]]),i.yb(4608,J.c,J.c,[]),i.yb(4608,u.a,u.a,[i.x,i.g]),i.yb(4608,u.Ab,u.Ab,[u.a,i.j,i.p]),i.yb(4608,u.Db,u.Db,[u.a,i.j,i.p]),i.yb(1073742336,r.b,r.b,[]),i.yb(1073742336,J.b,J.b,[]),i.yb(1073742336,J.a,J.a,[]),i.yb(1073742336,u.yb,u.yb,[]),i.yb(1073742336,v,v,[]),i.yb(1073742336,Y.n,Y.n,[[2,Y.s],[2,Y.m]]),i.yb(1073742336,o,o,[]),i.yb(256,m,{responsive:!0,radius:100,outerStrokeWidth:16,innerStrokeWidth:8,animationDuration:300,animation:!0},[]),i.yb(1024,Y.k,(function(){return[[{path:"",component:j}]]}),[])])}))},s7LF:function(n,t,l){"use strict";var i=l("8Y7J");l("cUpR"),l("HDdC"),l("DH7j"),l("lJxs"),l("XoHu"),l("Cfvw"),l.d(t,"b",(function(){return s})),l.d(t,"c",(function(){return o})),l.d(t,"a",(function(){return u}));class o{constructor(){this._accessors=[]}add(n,t){this._accessors.push([n,t])}remove(n){for(let t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===n)return void this._accessors.splice(t,1)}select(n){this._accessors.forEach(t=>{this._isSameGroup(t,n)&&t[1]!==n&&t[1].fireUncheck(n.value)})}_isSameGroup(n,t){return!!n[0].control&&n[0]._parent===t._control._parent&&n[1].name===t.name}}const e=new i.o("NgFormSelectorWarning");class s{}class u{static withConfig(n){return{ngModule:u,providers:[{provide:e,useValue:n.warnOnDeprecatedNgFormSelector}]}}}}}]);