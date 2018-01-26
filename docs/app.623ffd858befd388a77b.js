webpackJsonp([0],{162:function(t,e,n){var r=n(461);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(58)(r,i);r.locals&&(t.exports=r.locals)},459:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(460),i=document.getElementById("app-container");new r.App(i)},460:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(162),n(463);var r=n(39),i=n(465).version,s=n(466),o=n(469),a=function(){function t(t){t.innerHTML=o,this.setupUI(),this.setupGame()}return t.prototype.setupUI=function(){var t=this;this.score=document.getElementById("score"),r.Observable.fromEvent(document.getElementById("startButton"),"click").subscribe(function(e){t.startGame()}),document.getElementById("app-version").innerHTML=i},t.prototype.setupGame=function(){var t=this,e=document.getElementById("board");this.game=new s.Snake(e),this.game.score.subscribe(function(e){return t.score.innerHTML=String(e)}),this.game.state.subscribe(function(e){return t.gameState=e}),this.game.reset()},t.prototype.startGame=function(){this.gameState!=this.game.GAME_STATES.ready&&this.gameState!=this.game.GAME_STATES.ended||this.game.start()},t}();e.App=a},461:function(t,e,n){e=t.exports=n(57)(!1),e.push([t.i,"html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  background: #eee; }\n\n#app-container {\n  width: 100%;\n  height: 100%;\n  --color-background: #7ca256;\n  --color-background-dark: #6d8e4b;\n  --color-snake: #212121; }\n",""])},462:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var s;return s=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(s)+")"})}},463:function(t,e,n){var r=n(464);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(58)(r,i);r.locals&&(t.exports=r.locals)},464:function(t,e,n){e=t.exports=n(57)(!1),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=VT323);",""]),e.push([t.i,".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  font-family: 'VT323', monospace; }\n  .container .score-container {\n    text-transform: uppercase; }\n    .container .score-container #score {\n      font-size: 2em;\n      font-weight: 300; }\n  .container .board-container {\n    border-radius: 5px;\n    padding: 20px;\n    box-shadow: 9px 7px 30px -6px rgba(0, 0, 0, 0.25);\n    background-image: radial-gradient(farthest-corner at 10px 10px, var(--color-background) 0%, var(--color-background-dark) 100%); }\n    .container .board-container #board {\n      border-radius: inherit;\n      border: solid 1px var(--color-snake); }\n",""])},465:function(t,e){t.exports={name:"simple-snake",version:"1.0.2",description:"",main:"index.js",scripts:{start:"webpack-dev-server --inline --progress --port 3000",build:"rimraf docs && webpack --config config/webpack.prod.js --progress --profile --bail"},repository:{type:"git",url:"git+https://github.com/steveg3003/simple-snake.git"},keywords:[],author:"",license:"ISC",bugs:{url:"https://github.com/steveg3003/simple-snake/issues"},homepage:"https://github.com/steveg3003/simple-snake#readme",dependencies:{"@types/core-js":"^0.9.36",rxjs:"^5.5.6"},devDependencies:{fs:"0.0.1-security","html-loader":"^0.5.4","html-webpack-plugin":"^2.30.1",rimraf:"^2.6.2","style-loader":"^0.19.1","webpack-dev-server":"^2.10.0","webpack-merge":"^4.1.1","awesome-typescript-loader":"^3.4.1","css-loader":"^0.28.8","extract-text-webpack-plugin":"^3.0.2","file-loader":"^1.1.6","node-sass":"^4.7.2","sass-loader":"^6.0.6",typescript:"^2.6.2","url-loader":"^0.6.2",webpack:"^3.10.0"}}},466:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(162),n(467);var r=n(39),i=function(){function t(t){var e=this;this.SETTINGS={grid:{size:10,rows:20,columns:28},game:{scoreIncrement:10},snake:{startLength:3,startSpeed:300,speedIncrement:10,minSpeed:100,growBy:2}},this.DIRECTION={up:{name:"up",x:0,y:-1},down:{name:"down",x:0,y:1},left:{name:"left",x:-1,y:0},right:{name:"right",x:1,y:0}},this.GAME_STATES={ready:"READY",playing:"PLAYING",ended:"ENDED",paused:"PAUSED"},this.states={direction:this.DIRECTION.up,nextDirection:this.DIRECTION.up,speed:0,game:this.GAME_STATES.ready,timeStamp:0,snakeLength:0,score:0},this.grid=[],this.snake=[],this.state=new r.Subject,this.score=new r.Subject,this.board=t,this.board.style.setProperty("--grid-size",String(this.SETTINGS.grid.size)),this.board.style.setProperty("--grid-columns",String(this.SETTINGS.grid.columns)),this.board.style.setProperty("--grid-rows",String(this.SETTINGS.grid.rows));for(var n=this.SETTINGS.grid.columns*this.SETTINGS.grid.rows,i=0;i<n;i++){var s=document.createElement("div");this.grid.push(s),this.board.appendChild(s)}this.keyPress=r.Observable.fromEvent(document,"keydown").filter(function(t){return["arrowright","arrowleft","arrowup","arrowdown"].indexOf(t.key.toLowerCase())>=0}).map(function(t){return t.key.toLowerCase().replace("arrow","")}),this.keyPressSubscription=this.keyPress.subscribe(function(t){e.states.game==e.GAME_STATES.playing&&e.setDirection(e.DIRECTION[t])})}return t.prototype.setDirection=function(t){this.states.direction.x!=t.x&&this.states.direction.y!=t.y&&(this.states.nextDirection=t)},t.prototype.reset=function(){this.updateGameState(this.GAME_STATES.ready),this.snake=[],this.states.direction=this.states.nextDirection=this.DIRECTION.up,this.states.snakeLength=this.SETTINGS.snake.startLength,this.updateScore(0);for(var t={x:Math.round(this.SETTINGS.grid.columns/2),y:Math.round(this.SETTINGS.grid.rows/2)},e=0;e<this.states.snakeLength;e++){var n={position:{x:t.x,y:t.y+1*e},direction:this.DIRECTION.up};this.snake.unshift(n)}this.placeFood(),this.draw()},t.prototype.draw=function(){for(var t=0;t<this.grid.length;t++)this.grid[t].className="";for(var t=0;t<this.snake.length;t++){var e=["snake"];this.states.game==this.GAME_STATES.ended&&e.push("dead"),0==t&&e.push("tail"),t==this.snake.length-1&&e.push("head");var n=this.snake[t],r=this.snake[t+1]?this.snake[t+1]:null;r&&n.direction.name!=r.direction.name&&e.push("turn-"+r.direction.name),0==t&&r?e.push(r.direction.name):e.push(n.direction.name);var i=this.getIndexFromPosition(n.position);this.grid[i].className=e.join(" ")}this.grid[this.getIndexFromPosition(this.food)].className="food"},t.prototype.getIndexFromPosition=function(t){return t.x+t.y*this.SETTINGS.grid.columns},t.prototype.getPositionFromIndex=function(t){var e=Math.floor(t/this.SETTINGS.grid.columns);return{x:Math.floor(t%this.SETTINGS.grid.columns),y:e}},t.prototype.eatFood=function(){this.addScore(),this.states.snakeLength+=this.SETTINGS.snake.growBy,this.states.speed-=this.SETTINGS.snake.speedIncrement,this.states.speed<this.SETTINGS.snake.minSpeed&&(this.states.speed=this.SETTINGS.snake.minSpeed),this.placeFood()},t.prototype.updateGameState=function(t){this.states.game=t,this.state.next(this.states.game)},t.prototype.addScore=function(){this.updateScore(this.states.score+this.SETTINGS.game.scoreIncrement)},t.prototype.updateScore=function(t){this.states.score=t,this.score.next(this.states.score)},t.prototype.placeFood=function(){for(var t=[],e=0;e<this.snake.length;e++){var n=this.getIndexFromPosition(this.snake[e].position);t.push(n)}for(var r=[],i=0;i<this.grid.length;i++)t.indexOf(i)<0&&r.push(i);var s=Math.floor(Math.random()*r.length);this.food=this.getPositionFromIndex(r[s])},t.prototype.tick=function(t){var e=this;if(this.states.game==this.GAME_STATES.playing){if(!this.states.timeStamp||t-this.states.timeStamp>this.states.speed){this.states.timeStamp=t,this.states.direction=this.states.nextDirection;var n=this.snake[this.snake.length-1],r={x:n.position.x+this.states.direction.x,y:n.position.y+this.states.direction.y};if(r.x<0||r.x>this.SETTINGS.grid.columns-1||r.y<0||r.y>this.SETTINGS.grid.rows-1)return this.end();for(var i=0;i<this.snake.length;i++)if(this.snake[i].position.x==r.x&&this.snake[i].position.y==r.y)return this.end();var s={position:r,direction:this.DIRECTION[this.states.direction.name]};for(this.snake.push(s);this.snake.length>this.states.snakeLength;)this.snake.shift();s.position.x==this.food.x&&s.position.y==this.food.y&&this.eatFood(),this.draw()}window.requestAnimationFrame(function(t){return e.tick(t)})}},t.prototype.start=function(){this.reset(),this.states.speed=this.SETTINGS.snake.startSpeed,this.updateGameState(this.GAME_STATES.playing),this.tick(0)},t.prototype.end=function(){console.warn("GAME OVER"),this.updateGameState(this.GAME_STATES.ended),this.draw()},t}();e.Snake=i},467:function(t,e,n){var r=n(468);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(58)(r,i);r.locals&&(t.exports=r.locals)},468:function(t,e,n){e=t.exports=n(57)(!1),e.push([t.i,"@keyframes flash {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; } }\n\n#board {\n  --grid-columns: 0;\n  --grid-rows: 0;\n  --grid-size: 0;\n  width: calc(var(--grid-size) * var(--grid-columns) * 1px);\n  height: calc(var(--grid-size) * var(--grid-rows) * 1px);\n  display: grid;\n  grid-template-columns: repeat(var(--grid-columns), 1fr);\n  grid-template-rows: repeat(var(--grid-rows), 1fr);\n  grid-gap: 1px; }\n  #board > div {\n    background-color: transparent; }\n    #board > div.food, #board > div.snake {\n      box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.1); }\n    #board > div.food {\n      background-color: var(--color-snake);\n      border-radius: 50%;\n      margin: 1px; }\n    #board > div.snake {\n      background-color: var(--color-snake); }\n      #board > div.snake.head.up {\n        border-top-left-radius: 50%;\n        border-top-right-radius: 50%; }\n      #board > div.snake.head.down {\n        border-bottom-left-radius: 50%;\n        border-bottom-right-radius: 50%; }\n      #board > div.snake.head.left {\n        border-top-left-radius: 50%;\n        border-bottom-left-radius: 50%; }\n      #board > div.snake.head.right {\n        border-top-right-radius: 50%;\n        border-bottom-right-radius: 50%; }\n      #board > div.snake.tail.up {\n        border-bottom-left-radius: 50% 100%;\n        border-bottom-right-radius: 50% 100%; }\n      #board > div.snake.tail.down {\n        border-top-left-radius: 50% 100%;\n        border-top-right-radius: 50% 100%; }\n      #board > div.snake.tail.right {\n        border-bottom-left-radius: 100% 50%;\n        border-top-left-radius: 100% 50%; }\n      #board > div.snake.tail.left {\n        border-bottom-right-radius: 100% 50%;\n        border-top-right-radius: 100% 50%; }\n      #board > div.snake.turn-left.up {\n        border-top-right-radius: 50%; }\n      #board > div.snake.turn-left.down {\n        border-bottom-right-radius: 50%; }\n      #board > div.snake.turn-right.up {\n        border-top-left-radius: 50%; }\n      #board > div.snake.turn-right.down {\n        border-bottom-left-radius: 50%; }\n      #board > div.snake.turn-up.left {\n        border-bottom-left-radius: 50%; }\n      #board > div.snake.turn-up.right {\n        border-bottom-right-radius: 50%; }\n      #board > div.snake.turn-down.left {\n        border-top-left-radius: 50%; }\n      #board > div.snake.turn-down.right {\n        border-top-right-radius: 50%; }\n      #board > div.snake.dead {\n        animation: flash 0.3s steps(1) infinite; }\n",""])},469:function(t,e){t.exports='<div class="container">\n    <button id="startButton">Start</button>\n    <div class="board-container"><div id="board"></div></div>\n    <div class="score-container">Score: <span id="score">0</span></div>\n    <div id="app-version"></div>\n</div>\n\n'},57:function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var s=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},58:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=f[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(u(r.parts[s],e))}else{for(var o=[],s=0;s<r.parts.length;s++)o.push(u(r.parts[s],e));f[r.id]={id:r.id,refs:1,parts:o}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],o=e.base?s[0]+e.base:s[0],a=s[1],d=s[2],c=s[3],u={css:a,media:d,sourceMap:c};r[o]?r[o].parts.push(u):n.push(r[o]={id:o,parts:[u]})}return n}function s(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=m(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function o(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),s(t,e),e}function d(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),s(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,r,i,s;if(e.transform&&t.css){if(!(s=e.transform(t.css)))return function(){};t.css=s}if(e.singleton){var c=v++;n=b||(b=a(e)),r=p.bind(null,n,c,!1),i=p.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=d(e),r=l.bind(null,n,e),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=h.bind(null,n),i=function(){o(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function p(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=k(e,i);else{var s=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function h(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function l(t,e,n){var r=n.css,i=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||s)&&(r=S(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var f={},g=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(n){if(void 0===e[n]){var r=t.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[n]=r}return e[n]}}(function(t){return document.querySelector(t)}),b=null,v=0,y=[],S=n(462);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=g()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var s=[],o=0;o<n.length;o++){var a=n[o],d=f[a.id];d.refs--,s.push(d)}if(t){r(i(t,e),e)}for(var o=0;o<s.length;o++){var d=s[o];if(0===d.refs){for(var c=0;c<d.parts.length;c++)d.parts[c]();delete f[d.id]}}}};var k=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}},[459]);