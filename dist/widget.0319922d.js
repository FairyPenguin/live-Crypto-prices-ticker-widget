parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FFi8":[function(require,module,exports) {
function n(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=t(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var o=0,c=function(){};return{s:c,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){s=!0,i=n},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function t(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin%2Ccardano%2Ctether&vs_currencies=usd&include_24hr_change=true").then(function(n){return n.json()}).then(function(t){var e,r=document.querySelector(".container"),o=n(Object.getOwnPropertyNames(t));try{for(o.s();!(e=o.n()).done;){var c=e.value,i=t["".concat(c)],a=i.usd,s=i.usd_24h_change.toFixed(5);r.innerHTML+='\n                <div class="coin '.concat(s<0?"falling":"rising",'">\n                    <div class="coin-logo">\n                        <img src="images/').concat(c,'.png">\n                    </div>\n                    <div class="coin-name">\n                        <h3>').concat(c,'</h3>\n                        <span>/USD</span>\n                    </div>\n                    <div class="coin-price">\n                        <span class="price">$').concat(a,'</span>\n                        <span class="change">').concat(s,"</span>\n                    </div>\n                </div>\n            ")}}catch(u){o.e(u)}finally{o.f()}});
},{}]},{},["FFi8"], null)
//# sourceMappingURL=/widget.0319922d.js.map