const t=2147483647,n=/[^\0-\x7F]/,o=/[\x2E\u3002\uFF0E\uFF61]/g,e={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},r=Math.floor,s=String.fromCharCode;function c(t){throw new RangeError(e[t])}const u=function(t,n){return t+22+75*(t<26)-((0!=n)<<5)},f=function(t,n,o){let e=0;for(t=o?r(t/700):t>>1,t+=r(t/n);t>455;e+=36)t=r(t/35);return r(e+36*t/(t+38))},i={toASCII:function(e){return function(t,n){const e=t.split("@");let r="";e.length>1&&(r=e[0]+"@",t=e[1]);const s=function(t,n){const o=[];let e=t.length;for(;e--;)o[e]=n(t[e]);return o}((t=t.replace(o,".")).split("."),n).join(".");return r+s}(e,(function(o){return n.test(o)?"xn--"+function(n){const o=[];n=function(t){const n=[];let o=0;const e=t.length;for(;o<e;){const r=t.charCodeAt(o++);if(r>=55296&&r<=56319&&o<e){const e=t.charCodeAt(o++);56320==(64512&e)?n.push(((1023&r)<<10)+(1023&e)+65536):(n.push(r),o--)}else n.push(r)}return n}(n);const e=n.length;let i=128,l=0,h=72;for(const t of n)t<128&&o.push(s(t));const p=o.length;let a=p;for(p&&o.push("-");a<e;){let e=t;for(const t of n)t>=i&&t<e&&(e=t);const g=a+1;e-i>r((t-l)/g)&&c("overflow"),l+=(e-i)*g,i=e;for(const e of n)if(e<i&&++l>t&&c("overflow"),e===i){let t=l;for(let n=36;;n+=36){const e=n<=h?1:n>=h+26?26:n-h;if(t<e)break;const c=t-e,f=36-e;o.push(s(u(e+c%f,0))),t=r(c/f)}o.push(s(u(t,0))),h=f(l,g,a===p),l=0,++a}++l,++i}return o.join("")}(o):o}))}};export{i as punycode};