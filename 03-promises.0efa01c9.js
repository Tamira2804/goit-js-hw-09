!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON");function i(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}var a={form:document.querySelector(".form"),delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]')};a.form.addEventListener("submit",(function(n){n.preventDefault();for(var t=parseInt(a.delayInput.value),o=parseInt(a.stepInput.value),r=parseInt(a.amountInput.value),c=[],l=0;l<r;l+=1)c.push(i(l+1,t+l*o));c.forEach((function(n){n.then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}))}))}();
//# sourceMappingURL=03-promises.0efa01c9.js.map
