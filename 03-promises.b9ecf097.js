function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=l);var i=l("7Y9D8");function r(o,t){return new Promise(((n,l)=>{setTimeout((()=>{Math.random()>.3?(n({position:o,delay:t}),e(i).Notify.success(`Promise ${o} fulfilled in ${t}ms`)):(l({position:o,delay:t}),e(i).Notify.failure(`Promise ${o} rejected in ${t}ms`))}),t)}))}document.querySelector(".form").addEventListener("submit",(o=>{o.preventDefault();const t=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]'),s=parseInt(t.value),u=parseInt(n.value),d=parseInt(l.value);let a=s;for(let e=1;e<=d;e++)r(e,a).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),a+=u;e(i).Report.success("All promises fulfilled",`${d} promises fulfilled successfully in total`)}));
//# sourceMappingURL=03-promises.b9ecf097.js.map
