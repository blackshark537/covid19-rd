function _createForOfIteratorHelper(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=_unsupportedIterableToArray(n))){var t=0,l=function(){};return{s:l,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,e,i=!0,r=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return i=n.done,n},e:function(n){r=!0,e=n},f:function(){try{i||null==o.return||o.return()}finally{if(r)throw e}}}}function _toConsumableArray(n){return _arrayWithoutHoles(n)||_iterableToArray(n)||_unsupportedIterableToArray(n)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function _arrayWithoutHoles(n){if(Array.isArray(n))return _arrayLikeToArray(n)}function _slicedToArray(n,t){return _arrayWithHoles(n)||_iterableToArrayLimit(n,t)||_unsupportedIterableToArray(n,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(n,t){if(n){if("string"==typeof n)return _arrayLikeToArray(n,t);var l=Object.prototype.toString.call(n).slice(8,-1);return"Object"===l&&n.constructor&&(l=n.constructor.name),"Map"===l||"Set"===l?Array.from(l):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?_arrayLikeToArray(n,t):void 0}}function _arrayLikeToArray(n,t){(null==t||t>n.length)&&(t=n.length);for(var l=0,o=new Array(t);l<t;l++)o[l]=n[l];return o}function _iterableToArrayLimit(n,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var l=[],o=!0,e=!1,i=void 0;try{for(var r,u=n[Symbol.iterator]();!(o=(r=u.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(s){e=!0,i=s}finally{try{o||null==u.return||u.return()}finally{if(e)throw i}}return l}}function _arrayWithHoles(n){if(Array.isArray(n))return n}function _defineProperties(n,t){for(var l=0;l<t.length;l++){var o=t[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,l){return t&&_defineProperties(n.prototype,t),l&&_defineProperties(n,l),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{L6id:function(n,t,l){"use strict";l.r(t);var o=l("8Y7J"),e=function n(){_classCallCheck(this,n)},i=l("pMnS"),r=l("MKJQ"),u=l("sZkV"),s=l("HDdC"),a=l("D0XW"),c=l("DH7j");function d(n){return!Object(c.a)(n)&&n-parseFloat(n)+1>=0}var p=l("z+Ro");function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,l=arguments.length>2?arguments[2]:void 0,o=-1;return d(t)?o=Number(t)<1?1:Number(t):Object(p.a)(t)&&(l=t),Object(p.a)(l)||(l=a.a),new s.a((function(t){var e=d(n)?n:+n-l.now();return l.schedule(h,e,{index:0,period:o,subscriber:t})}))}function h(n){var t=n.index,l=n.period,o=n.subscriber;if(o.next(t),!o.closed){if(-1===l)return o.complete();n.index=t+1,this.schedule(n,l)}}var g,f=function n(){_classCallCheck(this,n),this.class="",this.backgroundGradient=!1,this.backgroundColor="transparent",this.backgroundGradientStopColor="transparent",this.backgroundOpacity=1,this.backgroundStroke="transparent",this.backgroundStrokeWidth=0,this.backgroundPadding=5,this.percent=0,this.radius=90,this.space=4,this.toFixed=0,this.maxPercent=1e3,this.renderOnClick=!0,this.units="%",this.unitsFontSize="10",this.unitsFontWeight="normal",this.unitsColor="#444444",this.outerStrokeGradient=!1,this.outerStrokeWidth=8,this.outerStrokeColor="#78C000",this.outerStrokeGradientStopColor="transparent",this.outerStrokeLinecap="round",this.innerStrokeColor="#C7E596",this.innerStrokeWidth=4,this.titleFormat=void 0,this.title="auto",this.titleColor="#444444",this.titleFontSize="20",this.titleFontWeight="normal",this.subtitleFormat=void 0,this.subtitle="progress",this.subtitleColor="#A9A9A9",this.subtitleFontSize="10",this.subtitleFontWeight="normal",this.imageSrc=void 0,this.imageHeight=void 0,this.imageWidth=void 0,this.animation=!0,this.animateTitle=!0,this.animateSubtitle=!1,this.animationDuration=500,this.showTitle=!0,this.showSubtitle=!0,this.showUnits=!0,this.showImage=!1,this.showBackground=!0,this.showInnerStroke=!0,this.clockwise=!0,this.responsive=!1,this.startFromZero=!0,this.showZeroOuterStroke=!0,this.lazy=!1},m=function(){function n(t,l,e){var i=this;_classCallCheck(this,n),this.elRef=l,this.document=e,this.onClick=new o.m,this.svgElement=null,this.isInViewport=!1,this.onViewportChanged=new o.m,this._viewportChangedSubscriber=null,this.options=new f,this.defaultOptions=new f,this._lastPercent=0,this._gradientUUID=null,this.render=function(){i.applyOptions(),i.options.lazy?(null===i.svgElement&&i.draw(i._lastPercent),i.isInViewport&&(i.options.animation&&i.options.animationDuration>0?i.animate(i._lastPercent,i.options.percent):i.draw(i.options.percent),i._lastPercent=i.options.percent)):(i.options.animation&&i.options.animationDuration>0?i.animate(i._lastPercent,i.options.percent):i.draw(i.options.percent),i._lastPercent=i.options.percent)},this.polarToCartesian=function(n,t,l,o){var e=o*Math.PI/180;return{x:n+Math.sin(e)*l,y:t-Math.cos(e)*l}},this.draw=function(n){var t,l=(n=void 0===n?i.options.percent:Math.abs(n))>100?100:n,o=2*i.options.radius+2*i.options.outerStrokeWidth;i.options.showBackground&&(o+=2*i.options.backgroundStrokeWidth+i.max(0,2*i.options.backgroundPadding));var e,r,u={x:o/2,y:o/2},s=u.x,a=u.y-i.options.radius,c=i.polarToCartesian(u.x,u.y,i.options.radius,360*(i.options.clockwise?l:100-l)/100);100===l&&(c.x=c.x+(i.options.clockwise?-.01:.01)),e=(t=_slicedToArray(l>50?i.options.clockwise?[1,1]:[1,0]:i.options.clockwise?[0,1]:[0,0],2))[0],r=t[1];var d=i.options.animateTitle?n:i.options.percent,p=d>i.options.maxPercent?"".concat(i.options.maxPercent.toFixed(i.options.toFixed),"+"):d.toFixed(i.options.toFixed),b=i.options.animateSubtitle?n:i.options.percent,h={x:u.x,y:u.y,textAnchor:"middle",color:i.options.titleColor,fontSize:i.options.titleFontSize,fontWeight:i.options.titleFontWeight,texts:[],tspans:[]};if(void 0!==i.options.titleFormat&&"Function"===i.options.titleFormat.constructor.name){var g=i.options.titleFormat(d);g instanceof Array?h.texts=_toConsumableArray(g):h.texts.push(g.toString())}else"auto"===i.options.title?h.texts.push(p):i.options.title instanceof Array?h.texts=_toConsumableArray(i.options.title):h.texts.push(i.options.title.toString());var f={x:u.x,y:u.y,textAnchor:"middle",color:i.options.subtitleColor,fontSize:i.options.subtitleFontSize,fontWeight:i.options.subtitleFontWeight,texts:[],tspans:[]};if(void 0!==i.options.subtitleFormat&&"Function"===i.options.subtitleFormat.constructor.name){var m=i.options.subtitleFormat(b);m instanceof Array?f.texts=_toConsumableArray(m):f.texts.push(m.toString())}else i.options.subtitle instanceof Array?f.texts=_toConsumableArray(i.options.subtitle):f.texts.push(i.options.subtitle.toString());var v={text:"".concat(i.options.units),fontSize:i.options.unitsFontSize,fontWeight:i.options.unitsFontWeight,color:i.options.unitsColor},k=0,y=1;if(i.options.showTitle&&(k+=h.texts.length),i.options.showSubtitle&&(k+=f.texts.length),i.options.showTitle){var S,x=_createForOfIteratorHelper(h.texts);try{for(x.s();!(S=x.n()).done;){var w=S.value;h.tspans.push({span:w,dy:i.getRelativeY(y,k)}),y++}}catch(F){x.e(F)}finally{x.f()}}if(i.options.showSubtitle){var C,_=_createForOfIteratorHelper(f.texts);try{for(_.s();!(C=_.n()).done;){var I=C.value;f.tspans.push({span:I,dy:i.getRelativeY(y,k)}),y++}}catch(F){_.e(F)}finally{_.f()}}null===i._gradientUUID&&(i._gradientUUID=i.uuid()),i.svg={viewBox:"0 0 ".concat(o," ").concat(o),width:i.options.responsive?"100%":o,height:i.options.responsive?"100%":o,backgroundCircle:{cx:u.x,cy:u.y,r:i.options.radius+i.options.outerStrokeWidth/2+i.options.backgroundPadding,fill:i.options.backgroundColor,fillOpacity:i.options.backgroundOpacity,stroke:i.options.backgroundStroke,strokeWidth:i.options.backgroundStrokeWidth},path:{d:"M ".concat(s," ").concat(a,"\n        A ").concat(i.options.radius," ").concat(i.options.radius," 0 ").concat(e," ").concat(r," ").concat(c.x," ").concat(c.y),stroke:i.options.outerStrokeColor,strokeWidth:i.options.outerStrokeWidth,strokeLinecap:i.options.outerStrokeLinecap,fill:"none"},circle:{cx:u.x,cy:u.y,r:i.options.radius-i.options.space-i.options.outerStrokeWidth/2-i.options.innerStrokeWidth/2,fill:"none",stroke:i.options.innerStrokeColor,strokeWidth:i.options.innerStrokeWidth},title:h,units:v,subtitle:f,image:{x:u.x-i.options.imageWidth/2,y:u.y-i.options.imageHeight/2,src:i.options.imageSrc,width:i.options.imageWidth,height:i.options.imageHeight},outerLinearGradient:{id:"outer-linear-"+i._gradientUUID,colorStop1:i.options.outerStrokeColor,colorStop2:"transparent"===i.options.outerStrokeGradientStopColor?"#FFF":i.options.outerStrokeGradientStopColor},radialGradient:{id:"radial-"+i._gradientUUID,colorStop1:i.options.backgroundColor,colorStop2:"transparent"===i.options.backgroundGradientStopColor?"#FFF":i.options.backgroundGradientStopColor}}},this.getAnimationParameters=function(n,t){var l,o,e,r=i.options.startFromZero?0:n<0?0:n,u=t<0?0:i.min(t,i.options.maxPercent),s=Math.abs(Math.round(u-r));return s>=100?(l=100,o=i.options.animateTitle||i.options.animateSubtitle?Math.round(s/l):1):(l=s,o=1),(e=Math.round(i.options.animationDuration/l))<10&&(e=10,l=i.options.animationDuration/e,o=!i.options.animateTitle&&!i.options.animateSubtitle&&s>100?Math.round(100/l):Math.round(s/l)),o<1&&(o=1),{times:l,step:o,interval:e}},this.animate=function(n,t){i._timerSubscription&&!i._timerSubscription.closed&&i._timerSubscription.unsubscribe();var l=i.options.startFromZero?0:n,o=t,e=i.getAnimationParameters(l,o),r=e.step,u=e.interval,s=l;i._timerSubscription=l<o?b(0,u).subscribe((function(){(s+=r)<=o?!i.options.animateTitle&&!i.options.animateSubtitle&&s>=100?(i.draw(o),i._timerSubscription.unsubscribe()):i.draw(s):(i.draw(o),i._timerSubscription.unsubscribe())})):b(0,u).subscribe((function(){(s-=r)>=o?!i.options.animateTitle&&!i.options.animateSubtitle&&o>=100?(i.draw(o),i._timerSubscription.unsubscribe()):i.draw(s):(i.draw(o),i._timerSubscription.unsubscribe())}))},this.emitClickEvent=function(n){i.options.renderOnClick&&i.animate(0,i.options.percent),i.onClick.emit(n)},this.applyOptions=function(){for(var n=0,t=Object.keys(i.options);n<t.length;n++){var l=t[n];i.hasOwnProperty(l)&&void 0!==i[l]?i.options[l]=i[l]:i.templateOptions&&void 0!==i.templateOptions[l]&&(i.options[l]=i.templateOptions[l])}i.options.radius=Math.abs(+i.options.radius),i.options.space=+i.options.space,i.options.percent=+i.options.percent>0?+i.options.percent:0,i.options.maxPercent=Math.abs(+i.options.maxPercent),i.options.animationDuration=Math.abs(i.options.animationDuration),i.options.outerStrokeWidth=Math.abs(+i.options.outerStrokeWidth),i.options.innerStrokeWidth=Math.abs(+i.options.innerStrokeWidth),i.options.backgroundPadding=+i.options.backgroundPadding},this.getRelativeY=function(n,t){return(1*(n-t/2)-.18).toFixed(2)+"em"},this.min=function(n,t){return n<t?n:t},this.max=function(n,t){return n>t?n:t},this.uuid=function(){var n=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var l=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"==t?l:3&l|8).toString(16)}))},this.findSvgElement=function(){if(null===this.svgElement){var n=this.elRef.nativeElement.getElementsByTagName("svg");n.length>0&&(this.svgElement=n[0])}},this.checkViewport=function(){i.findSvgElement();var n=i.isInViewport;i.isInViewport=i.isElementInViewport(i.svgElement),n!==i.isInViewport&&i.onViewportChanged.emit({oldValue:n,newValue:i.isInViewport})},this.onScroll=function(n){i.checkViewport()},this.loadEventsForLazyMode=function(){if(i.options.lazy){i.document.addEventListener("scroll",i.onScroll,!0),i.window.addEventListener("resize",i.onScroll,!0),null===i._viewportChangedSubscriber&&(i._viewportChangedSubscriber=i.onViewportChanged.subscribe((function(n){n.newValue&&i.render()})));var n=b(0,50).subscribe((function(){null===i.svgElement?i.checkViewport():n.unsubscribe()}))}},this.unloadEventsForLazyMode=function(){i.document.removeEventListener("scroll",i.onScroll,!0),i.window.removeEventListener("resize",i.onScroll,!0),null!==i._viewportChangedSubscriber&&(i._viewportChangedSubscriber.unsubscribe(),i._viewportChangedSubscriber=null)},this.document=e,this.window=this.document.defaultView,Object.assign(this.options,t),Object.assign(this.defaultOptions,t)}return _createClass(n,[{key:"isDrawing",value:function(){return this._timerSubscription&&!this._timerSubscription.closed}},{key:"isElementInViewport",value:function(n){if(null==n)return!1;var t,l=n.getBoundingClientRect(),o=n.parentNode;do{if(t=o.getBoundingClientRect(),l.top>=t.bottom)return!1;if(l.bottom<=t.top)return!1;if(l.left>=t.right)return!1;if(l.right<=t.left)return!1;o=o.parentNode}while(o!=this.document.body);return!(l.top>=(this.window.innerHeight||this.document.documentElement.clientHeight)||l.bottom<=0||l.left>=(this.window.innerWidth||this.document.documentElement.clientWidth)||l.right<=0)}},{key:"ngOnInit",value:function(){this.loadEventsForLazyMode()}},{key:"ngOnDestroy",value:function(){this.unloadEventsForLazyMode()}},{key:"ngOnChanges",value:function(n){this.render(),"lazy"in n&&(n.lazy.currentValue?this.loadEventsForLazyMode():this.unloadEventsForLazyMode())}}]),n}(),v=g=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"forRoot",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:g,providers:[{provide:f,useValue:n}]}}}]),n}(),k=l("SVse"),y=o.mb({encapsulation:2,styles:[],data:{}});function S(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,2,":svg:linearGradient",[],[[1,"id",0]],null,null,null,null)),(n()(),o.ob(1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(n()(),o.ob(2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.outerLinearGradient.id),n(t,1,0,l.svg.outerLinearGradient.colorStop1,1),n(t,2,0,l.svg.outerLinearGradient.colorStop2,1)}))}function x(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,2,":svg:radialGradient",[],[[1,"id",0]],null,null,null,null)),(n()(),o.ob(1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(n()(),o.ob(2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.radialGradient.id),n(t,1,0,l.svg.radialGradient.colorStop1,1),n(t,2,0,l.svg.radialGradient.colorStop2,1)}))}function w(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.backgroundCircle.cx,l.svg.backgroundCircle.cy,l.svg.backgroundCircle.r,l.svg.backgroundCircle.fill,l.svg.backgroundCircle.fillOpacity,l.svg.backgroundCircle.stroke,l.svg.backgroundCircle.strokeWidth)}))}function C(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.backgroundCircle.cx,l.svg.backgroundCircle.cy,l.svg.backgroundCircle.r,o.sb(1,"url(#",l.svg.radialGradient.id,")"),l.svg.backgroundCircle.fillOpacity,l.svg.backgroundCircle.stroke,l.svg.backgroundCircle.strokeWidth)}))}function _(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),o.db(16777216,null,null,1,null,w)),o.nb(2,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(16777216,null,null,1,null,C)),o.nb(4,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(0,null,null,0))],(function(n,t){var l=t.component;n(t,2,0,!l.options.backgroundGradient),n(t,4,0,l.options.backgroundGradient)}),null)}function I(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.circle.cx,l.svg.circle.cy,l.svg.circle.r,l.svg.circle.fill,l.svg.circle.stroke,l.svg.circle.strokeWidth)}))}function F(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.path.d,l.svg.path.stroke,l.svg.path.strokeWidth,l.svg.path.strokeLinecap,l.svg.path.fill)}))}function z(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.path.d,o.sb(1,"url(#",l.svg.outerLinearGradient.id,")"),l.svg.path.strokeWidth,l.svg.path.strokeLinecap,l.svg.path.fill)}))}function W(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),o.db(16777216,null,null,1,null,F)),o.nb(2,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(16777216,null,null,1,null,z)),o.nb(4,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(0,null,null,0))],(function(n,t){var l=t.component;n(t,2,0,!l.options.outerStrokeGradient),n(t,4,0,l.options.outerStrokeGradient)}),null)}function E(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(n()(),o.Db(1,null,["",""]))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.title.x,l.svg.title.y,t.context.$implicit.dy,l.svg.title.fontSize,l.svg.title.fontWeight,l.svg.title.color),n(t,1,0,t.context.$implicit.span)}))}function A(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),o.db(16777216,null,null,1,null,E)),o.nb(2,278528,null,0,k.h,[o.L,o.I,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.db(0,null,null,0))],(function(n,t){n(t,2,0,t.component.svg.title.tspans)}),null)}function L(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,1,":svg:tspan",[],[[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(n()(),o.Db(1,null,["",""]))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.units.fontSize,l.svg.units.fontWeight,l.svg.units.color),n(t,1,0,l.svg.units.text)}))}function O(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(n()(),o.Db(1,null,["",""]))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.subtitle.x,l.svg.subtitle.y,t.context.$implicit.dy,l.svg.subtitle.fontSize,l.svg.subtitle.fontWeight,l.svg.subtitle.color),n(t,1,0,t.context.$implicit.span)}))}function T(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),o.db(16777216,null,null,1,null,O)),o.nb(2,278528,null,0,k.h,[o.L,o.I,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.db(0,null,null,0))],(function(n,t){n(t,2,0,t.component.svg.subtitle.tspans)}),null)}function M(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,6,":svg:text",[["alignment-baseline","baseline"]],[[1,"x",0],[1,"y",0],[1,"text-anchor",0]],null,null,null,null)),(n()(),o.db(16777216,null,null,1,null,A)),o.nb(2,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(16777216,null,null,1,null,L)),o.nb(4,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(16777216,null,null,1,null,T)),o.nb(6,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,2,0,l.options.showTitle),n(t,4,0,l.options.showUnits),n(t,6,0,l.options.showSubtitle)}),(function(n,t){var l=t.component;n(t,0,0,l.svg.circle.cx,l.svg.circle.cy,l.svg.title.textAnchor)}))}function P(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,0,":svg:image",[["preserveAspectRatio","none"]],[[1,"height",0],[1,"width",0],[1,":xlink:href",0],[1,"x",0],[1,"y",0]],null,null,null,null))],null,(function(n,t){var l=t.component;n(t,0,0,l.svg.image.height,l.svg.image.width,l.svg.image.src,l.svg.image.x,l.svg.image.y)}))}function D(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,15,":svg:svg",[["preserveAspectRatio","xMidYMid meet"],["xmlns","http://www.w3.org/2000/svg"]],[[1,"viewBox",0],[1,"height",0],[1,"width",0],[1,"class",0]],[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.emitClickEvent(l)&&o),o}),null,null)),(n()(),o.ob(1,0,null,null,4,":svg:defs",[],null,null,null,null,null)),(n()(),o.db(16777216,null,null,1,null,S)),o.nb(3,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(16777216,null,null,1,null,x)),o.nb(5,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(16777216,null,null,1,null,_)),o.nb(7,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(16777216,null,null,1,null,I)),o.nb(9,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(16777216,null,null,1,null,W)),o.nb(11,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(16777216,null,null,1,null,M)),o.nb(13,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null),(n()(),o.db(16777216,null,null,1,null,P)),o.nb(15,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,3,0,l.options.outerStrokeGradient),n(t,5,0,l.options.backgroundGradient),n(t,7,0,l.options.showBackground),n(t,9,0,l.options.showInnerStroke),n(t,11,0,l.options.percent-0!=0||l.options.showZeroOuterStroke),n(t,13,0,!l.options.showImage&&(l.options.showTitle||l.options.showUnits||l.options.showSubtitle)),n(t,15,0,l.options.showImage)}),(function(n,t){var l=t.component;n(t,0,0,l.svg.viewBox,l.svg.height,l.svg.width,l.options.class)}))}function G(n){return o.Eb(0,[(n()(),o.db(16777216,null,null,1,null,D)),o.nb(1,16384,null,0,k.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,t.component.svg)}),null)}var j=function(){function n(){_classCallCheck(this,n),this.data={confirmed:0,deaths:0,hospital_isolation:0,house_isolation:0,recovered:0},this.actived=0}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;fetch("assets/data.json").then((function(n){return n.json()})).then((function(t){n.data=t,console.log(n.data),n.actived=n.data.confirmed-(n.data.recovered+n.data.deaths)}))}}]),n}(),V=o.mb({encapsulation:0,styles:[[".header[_ngcontent-%COMP%]{background-color:#3002fe!important;color:#fff;border-radius:0 0 2em 2em;border-bottom:none!important;height:10vh}.circles[_ngcontent-%COMP%]{background-color:#3002fe!important;color:#fff;border-radius:2em;border-bottom:none!important;height:80vh}.card[_ngcontent-%COMP%]{position:absolute;top:27em;z-index:1000}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}"]],data:{}});function H(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,53,"ion-content",[],null,null,null,r.u,r.h)),o.nb(1,49152,null,0,u.r,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(n()(),o.ob(2,0,null,0,12,"ion-header",[["class","header"],["collapse","condense"]],null,null,null,r.x,r.k)),o.nb(3,49152,null,0,u.y,[o.h,o.k,o.x],{collapse:[0,"collapse"]},null),(n()(),o.ob(4,0,null,0,2,"ion-title",[["color","light"],["size","medium"]],null,null,null,r.z,r.m)),o.nb(5,49152,null,0,u.ub,[o.h,o.k,o.x],{color:[0,"color"],size:[1,"size"]},null),(n()(),o.Db(-1,0,["Covid19-Rd"])),(n()(),o.ob(7,0,null,0,7,"ion-grid",[],null,null,null,r.w,r.j)),o.nb(8,49152,null,0,u.x,[o.h,o.k,o.x],null,null),(n()(),o.ob(9,0,null,0,5,"ion-row",[],null,null,null,r.y,r.l)),o.nb(10,49152,null,0,u.db,[o.h,o.k,o.x],null,null),(n()(),o.ob(11,0,null,0,1,"ion-col",[["size","9"]],null,null,null,r.t,r.g)),o.nb(12,49152,null,0,u.q,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.ob(13,0,null,0,1,"ion-col",[["size","3"]],null,null,null,r.t,r.g)),o.nb(14,49152,null,0,u.q,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.ob(15,0,null,0,21,"ion-grid",[["style","border-radius: 0em 0em 2em 2em;margin-bottom: 4em;"]],null,null,null,r.w,r.j)),o.nb(16,49152,null,0,u.x,[o.h,o.k,o.x],null,null),(n()(),o.ob(17,0,null,0,9,"ion-row",[],null,null,null,r.y,r.l)),o.nb(18,49152,null,0,u.db,[o.h,o.k,o.x],null,null),(n()(),o.ob(19,0,null,0,3,"ion-col",[["size","6"]],null,null,null,r.t,r.g)),o.nb(20,49152,null,0,u.q,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.ob(21,0,null,0,1,"circle-progress",[],null,null,null,G,y)),o.nb(22,770048,null,0,m,[f,o.k,k.c],{radius:[0,"radius"],percent:[1,"percent"],maxPercent:[2,"maxPercent"],units:[3,"units"],outerStrokeWidth:[4,"outerStrokeWidth"],outerStrokeColor:[5,"outerStrokeColor"],innerStrokeColor:[6,"innerStrokeColor"],innerStrokeWidth:[7,"innerStrokeWidth"],title:[8,"title"],titleFontSize:[9,"titleFontSize"],subtitle:[10,"subtitle"],subtitleFontSize:[11,"subtitleFontSize"],animation:[12,"animation"],animateTitle:[13,"animateTitle"]},null),(n()(),o.ob(23,0,null,0,3,"ion-col",[["size","6"]],null,null,null,r.t,r.g)),o.nb(24,49152,null,0,u.q,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.ob(25,0,null,0,1,"circle-progress",[],null,null,null,G,y)),o.nb(26,770048,null,0,m,[f,o.k,k.c],{radius:[0,"radius"],percent:[1,"percent"],maxPercent:[2,"maxPercent"],units:[3,"units"],outerStrokeWidth:[4,"outerStrokeWidth"],outerStrokeColor:[5,"outerStrokeColor"],innerStrokeColor:[6,"innerStrokeColor"],innerStrokeWidth:[7,"innerStrokeWidth"],title:[8,"title"],titleFontSize:[9,"titleFontSize"],subtitle:[10,"subtitle"],subtitleFontSize:[11,"subtitleFontSize"],animation:[12,"animation"],animateTitle:[13,"animateTitle"]},null),(n()(),o.ob(27,0,null,0,9,"ion-row",[],null,null,null,r.y,r.l)),o.nb(28,49152,null,0,u.db,[o.h,o.k,o.x],null,null),(n()(),o.ob(29,0,null,0,3,"ion-col",[["size","6"]],null,null,null,r.t,r.g)),o.nb(30,49152,null,0,u.q,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.ob(31,0,null,0,1,"circle-progress",[],null,null,null,G,y)),o.nb(32,770048,null,0,m,[f,o.k,k.c],{radius:[0,"radius"],percent:[1,"percent"],maxPercent:[2,"maxPercent"],units:[3,"units"],outerStrokeWidth:[4,"outerStrokeWidth"],outerStrokeColor:[5,"outerStrokeColor"],innerStrokeColor:[6,"innerStrokeColor"],innerStrokeWidth:[7,"innerStrokeWidth"],title:[8,"title"],titleFontSize:[9,"titleFontSize"],subtitle:[10,"subtitle"],subtitleFontSize:[11,"subtitleFontSize"],animation:[12,"animation"],animateTitle:[13,"animateTitle"]},null),(n()(),o.ob(33,0,null,0,3,"ion-col",[["size","6"]],null,null,null,r.t,r.g)),o.nb(34,49152,null,0,u.q,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.ob(35,0,null,0,1,"circle-progress",[],null,null,null,G,y)),o.nb(36,770048,null,0,m,[f,o.k,k.c],{radius:[0,"radius"],percent:[1,"percent"],maxPercent:[2,"maxPercent"],units:[3,"units"],outerStrokeWidth:[4,"outerStrokeWidth"],outerStrokeColor:[5,"outerStrokeColor"],innerStrokeColor:[6,"innerStrokeColor"],innerStrokeWidth:[7,"innerStrokeWidth"],title:[8,"title"],titleFontSize:[9,"titleFontSize"],subtitle:[10,"subtitle"],subtitleFontSize:[11,"subtitleFontSize"],animation:[12,"animation"],animateTitle:[13,"animateTitle"]},null),(n()(),o.ob(37,0,null,0,16,"ion-grid",[["class","header circles"]],null,null,null,r.w,r.j)),o.nb(38,49152,null,0,u.x,[o.h,o.k,o.x],null,null),(n()(),o.ob(39,0,null,0,14,"ion-row",[],null,null,null,r.y,r.l)),o.nb(40,49152,null,0,u.db,[o.h,o.k,o.x],null,null),(n()(),o.ob(41,0,null,0,12,"ion-card",[["class","card"]],null,null,null,r.s,r.b)),o.nb(42,49152,null,0,u.j,[o.h,o.k,o.x],null,null),(n()(),o.ob(43,0,null,0,7,"ion-card-header",[],null,null,null,r.p,r.d)),o.nb(44,49152,null,0,u.l,[o.h,o.k,o.x],null,null),(n()(),o.ob(45,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.q,r.e)),o.nb(46,49152,null,0,u.m,[o.h,o.k,o.x],null,null),(n()(),o.Db(-1,0,["Mas informacion"])),(n()(),o.ob(48,0,null,0,2,"ion-card-title",[],null,null,null,r.r,r.f)),o.nb(49,49152,null,0,u.n,[o.h,o.k,o.x],null,null),(n()(),o.Db(-1,0,["Detalles"])),(n()(),o.ob(51,0,null,0,2,"ion-card-content",[],null,null,null,r.o,r.c)),o.nb(52,49152,null,0,u.k,[o.h,o.k,o.x],null,null),(n()(),o.Db(53,0,[" "," "])),(n()(),o.ob(54,0,null,null,3,"ion-footer",[["style","z-index: 1; text-align: center;"]],null,null,null,r.v,r.i)),o.nb(55,49152,null,0,u.w,[o.h,o.k,o.x],null,null),(n()(),o.ob(56,0,null,0,1,"small",[],null,null,null,null,null)),(n()(),o.Db(-1,null,["Developed by berlinsantoscruz@gmail.com"]))],(function(n,t){var l=t.component;n(t,1,0,!0),n(t,3,0,"condense"),n(t,5,0,"light","medium"),n(t,12,0,"9"),n(t,14,0,"3"),n(t,20,0,"6"),n(t,22,1,[100,100,100,"",16,"#C6E4FF","#A9BAE8",8,l.data.confirmed.toString(),"32","Comfirmados","18",!0,!0]),n(t,24,0,"6"),n(t,26,1,[100,100,100,"",16,"#FF0046","#E81B0C",8,l.data.deaths.toString(),"32","Muertes","18",!0,!0]),n(t,30,0,"6"),n(t,32,1,[100,100,100,"",16,"#00FFAB","#0CE8DD",8,l.data.recovered.toString(),"32","Recuperados","18",!0,!0]),n(t,34,0,"6"),n(t,36,1,[100,100,100,"",16,"#FF8E00","#E89D0C",8,l.actived.toString(),"32","Activos","18",!0,!0])}),(function(n,t){n(t,53,0,t.component.data.detail)}))}var R=o.kb("app-home",j,(function(n){return o.Eb(0,[(n()(),o.ob(0,0,null,null,1,"app-home",[],null,null,null,H,V)),o.nb(1,114688,null,0,j,[],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),U=l("s7LF"),B=l("iInd");l.d(t,"HomePageModuleNgFactory",(function(){return q}));var q=o.lb(e,[],(function(n){return o.xb([o.yb(512,o.j,o.W,[[8,[i.a,R]],[3,o.j],o.v]),o.yb(4608,k.k,k.j,[o.s,[2,k.r]]),o.yb(4608,U.c,U.c,[]),o.yb(4608,u.a,u.a,[o.x,o.g]),o.yb(4608,u.Ab,u.Ab,[u.a,o.j,o.p]),o.yb(4608,u.Db,u.Db,[u.a,o.j,o.p]),o.yb(1073742336,k.b,k.b,[]),o.yb(1073742336,U.b,U.b,[]),o.yb(1073742336,U.a,U.a,[]),o.yb(1073742336,u.yb,u.yb,[]),o.yb(1073742336,v,v,[]),o.yb(1073742336,B.n,B.n,[[2,B.s],[2,B.m]]),o.yb(1073742336,e,e,[]),o.yb(256,f,{responsive:!0,radius:100,outerStrokeWidth:16,innerStrokeWidth:8,animationDuration:300,animation:!0},[]),o.yb(1024,B.k,(function(){return[[{path:"",component:j}]]}),[])])}))},s7LF:function(n,t,l){"use strict";var o=l("8Y7J");l("cUpR"),l("HDdC"),l("DH7j"),l("lJxs"),l("XoHu"),l("Cfvw"),l.d(t,"b",(function(){return r})),l.d(t,"c",(function(){return e})),l.d(t,"a",(function(){return u}));var e=function(){function n(){_classCallCheck(this,n),this._accessors=[]}return _createClass(n,[{key:"add",value:function(n,t){this._accessors.push([n,t])}},{key:"remove",value:function(n){for(var t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===n)return void this._accessors.splice(t,1)}},{key:"select",value:function(n){var t=this;this._accessors.forEach((function(l){t._isSameGroup(l,n)&&l[1]!==n&&l[1].fireUncheck(n.value)}))}},{key:"_isSameGroup",value:function(n,t){return!!n[0].control&&n[0]._parent===t._control._parent&&n[1].name===t.name}}]),n}(),i=new o.o("NgFormSelectorWarning"),r=function n(){_classCallCheck(this,n)},u=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"withConfig",value:function(t){return{ngModule:n,providers:[{provide:i,useValue:t.warnOnDeprecatedNgFormSelector}]}}}]),n}()}}]);