!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=document.querySelector(".container"),r=(document.querySelector("#taskName"),document.querySelector("#save"));document.querySelector("#reset");let o=[];function u(e,t,n){this.name=e,this.description=t,this.date=n}r.addEventListener("click",(function(){let e=document.querySelector("#taskName").value,t=document.querySelector("#description").value,r=document.querySelector('input[type="date"]').value,c=new u(e,t,function(e){let t=e.split("-");t.shift();t=t.reverse(),"01"===t[1]?t[1]="Jan":"02"===t[1]?t[1]="Feb":"03"===t[1]?t[1]="Mar":"04"===t[1]?t[1]="Apr":"05"===t[1]?t[1]="May":"06"===t[1]?t[1]="Jun":"07"===t[1]?t[1]="Jul":"08"===t[1]?t[1]="Aug":"09"===t[1]?t[1]="Sep":"10"===t[1]?t[1]="Oct":"11"===t[1]?t[1]="Nov":"12"===t[1]?t[1]="Dec":console.log("problem");return t=t.join(" "),t}(r));o=[],o.push(c),document.querySelector("#taskName").value="",document.querySelector("#description").value="",document.querySelector('input[type="date"]').value="",function(){for(let e=0;e<o.length;e++){const t=document.createElement("li");t.classList.add("task"),t.innerText=o[e].name;const r=document.createElement("p");r.innerText=o[e].description;let u=document.createElement("p");u.innerText=o[e].date,t.appendChild(r),t.appendChild(u),n.appendChild(t)}}()}))}]);