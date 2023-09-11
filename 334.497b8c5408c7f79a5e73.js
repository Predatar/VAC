"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[334],{2576:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),r={btn:"tix8M3CTrkeUnH8GPf3w",btnDisable:"U_qys_v0Ksd1xaNRV5vV"},c=e=>{let{children:t,onClick:a,disabled:c,wx:n,wm:s,ws:i}=e;return c?l.createElement("div",{className:`${r.btn}  ${r.btnDisable}`,style:{"--width":`${n}px`,"--widthM":`${s||n}px`,"--widthS":`${"auto"==i?"100%":`${i||s||n}px`}`}},t):l.createElement("div",{className:r.btn,onClick:a,style:{"--width":`${n}px`,"--widthM":`${s||n}px`,"--widthS":`${"auto"==i?"100%":`${i||s||n}px`}`}},t)}},9013:function(e,t,a){var l=a(7294),r=a(6226);t.Z=e=>{let{mtX:t,mtM:a,mtS:c}=e,[n,s]=(0,l.useState)(1),[i,o]=(0,l.useState)(1e4),[m,d]=(0,l.useState)(1),C=e=>{let t=e.target.value,a=t/e.target.max*100;e.target.style.background=`linear-gradient(to right, #7481FF ${a}%, #ccc ${a}%)`};return l.createElement("div",{className:"calculator",style:{"--mtX":`${t}px`,"--mtM":`${a||t}px`,"--mtS":`${c||a||t}px`}},l.createElement("div",{className:"container"},l.createElement("div",{className:"calculator__header"},l.createElement("div",{className:"calculator__title"},"Let’s figure out how much you can afford"),l.createElement("div",{className:"calculator__subtitle"},"Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.")),l.createElement("div",{className:"calculator__wrapper"},l.createElement("div",{className:"calculator__select"},l.createElement("div",{className:"calculator__tabs",onClick:e=>{let{target:t}=e;if(t.classList.contains("calculator__tab")){let e=t.parentNode;e.childNodes.forEach(e=>{e.classList.contains("calculator__tab_active")&&e.classList.remove("calculator__tab_active")}),t.classList.add("calculator__tab_active"),s(+t.getAttribute("datatype"))}}},l.createElement("div",{className:"calculator__tab calculator__tab_active",datatype:"1"},"Poor"),l.createElement("div",{className:"calculator__tab",datatype:"2"},"Average"),l.createElement("div",{className:"calculator__tab",datatype:"3"},"Good")),l.createElement("div",{className:"calculator__range"},l.createElement("div",{className:"calculator__range-wrapper"},l.createElement("div",{className:"calculator__range-title"},"Loan Amount"),l.createElement("div",{className:"calculator__range-count"},"$ ",i*n)),l.createElement("input",{type:"range",name:"amount",id:"amount",className:"calculator__input",min:1e4,max:1e6,step:1e3,value:i,onChange:e=>{o(e.target.value),C(e)}})),l.createElement("div",{className:"calculator__range"},l.createElement("div",{className:"calculator__range-wrapper"},l.createElement("div",{className:"calculator__range-title"},"Loan Duration"),l.createElement("div",{className:"calculator__range-count"},m," ",l.createElement("span",null,"month"))),l.createElement("input",{type:"range",name:"duration",id:"duration",className:"calculator__input",min:1,max:36,value:m,step:1,onChange:e=>{d(e.target.value),C(e)}}))),l.createElement("div",{className:"calculator__price"},l.createElement("div",{className:"calculator__biweek"},l.createElement("div",{className:"calculator__price-title"},"Bi-Weekly Payment"),l.createElement("div",{className:"calculator__price-count calculator__price-count_big"},"$ ",Math.floor(i*n/m/2))),l.createElement("div",{className:"calculator__month"},l.createElement("div",{className:"calculator__price-title"},"Monthly Payment"),l.createElement("div",{className:"calculator__price-count"},"$ ",Math.floor(i*n/m))),l.createElement("div",{className:"calculator__week"},l.createElement("div",{className:"calculator__price-title"},"Weekly Payment"),l.createElement("div",{className:"calculator__price-count"},"$ ",Math.floor(i*n/m/4))),l.createElement(r.Z,{to:"/quiz",wx:250,ws:"auto"},"request a car")))))}},2044:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(7294),r=a(6869),c=a(4217),n=a.p+"assets/car1.jpg",s=()=>{let[e,t]=(0,l.useState)(null);return l.createElement(l.Fragment,null,l.createElement(r.tq,{loop:!0,spaceBetween:10,thumbs:{swiper:e},modules:[c.Rv,c.o3],className:"mySwiper"},l.createElement(r.o5,null,l.createElement("img",{src:n,loading:"lazy"}),l.createElement("div",{className:"mySwiper__text"},l.createElement("div",{className:"mySwiper__prev"},l.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M14 20L6 12L14 4",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))),l.createElement("div",{className:"mySwiper__360"},l.createElement("svg",{width:"38",height:"49",viewBox:"0 0 38 49",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("g",{filter:"url(#filter0_d_1081_4136)"},l.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.7912 9.32864C12.5112 9.06593 13.9317 9.2268 14.3067 10.0268C14.6262 10.7086 14.9007 11.8584 14.9157 11.6134C14.9517 11.0688 14.8797 9.89098 15.1212 9.27551C15.2967 8.82683 15.6417 8.40471 16.1502 8.25564C16.5777 8.12871 17.0802 8.08443 17.5242 8.17446C17.9937 8.26892 18.4872 8.59806 18.6717 8.91095C19.2147 9.83046 19.2237 11.7138 19.2492 11.6134C19.3452 11.2119 19.3542 9.79947 19.6737 9.27551C19.8852 8.92867 20.4192 8.61872 20.7042 8.56854C21.1452 8.49179 21.6882 8.46817 22.1502 8.55673C22.5237 8.62905 23.0292 9.06445 23.1657 9.27551C23.4942 9.78323 23.6787 11.2178 23.7342 11.7226C23.7582 11.9307 23.8452 11.1426 24.1737 10.6363C24.7827 9.6932 26.9397 9.51018 27.0207 11.5794C27.0597 12.5447 27.0507 12.5004 27.0507 13.1498C27.0507 13.9114 27.0327 14.3719 26.9907 14.9239C26.9457 15.5128 26.8167 16.8485 26.6292 17.495C26.5002 17.9393 26.0727 18.9385 25.6497 19.5377C25.6497 19.5377 24.0387 21.3826 23.8632 22.2121C23.6877 23.043 23.7462 23.0489 23.7102 23.6364C23.6757 24.2253 23.8917 24.9987 23.8917 24.9987C23.8917 24.9987 22.6902 25.1522 22.0407 25.0488C21.4542 24.9573 20.7282 23.8091 20.5407 23.4578C20.2827 22.9737 19.7322 23.0667 19.5177 23.4238C19.1817 23.9891 18.4542 25.0031 17.9427 25.0665C16.9392 25.1905 14.8602 25.1108 13.2327 25.0961C13.2327 25.0961 13.5102 23.6039 12.8922 23.0917C12.4347 22.708 11.6472 21.9346 11.1762 21.5273L9.92824 20.1679C9.50374 19.6366 8.42524 18.7968 8.06374 17.2382C7.74424 15.8567 7.77574 15.1793 8.11924 14.6258C8.46724 14.0634 9.12424 13.7565 9.40024 13.7033C9.71224 13.6413 10.4382 13.6458 10.7127 13.7948C11.0472 13.9764 11.1822 14.0295 11.4447 14.3719C11.7897 14.825 11.9127 15.0449 11.7642 14.5505C11.6502 14.1638 11.2812 13.6723 11.1132 13.1188C10.9497 12.586 10.5117 11.727 10.5432 10.8666C10.5552 10.5404 10.6977 9.72862 11.7912 9.32864Z",fill:"white"}),l.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.7912 9.32864C12.5112 9.06593 13.9317 9.2268 14.3067 10.0268C14.6262 10.7086 14.9007 11.8584 14.9157 11.6134C14.9517 11.0688 14.8797 9.89098 15.1212 9.27551C15.2967 8.82683 15.6417 8.40471 16.1502 8.25564C16.5777 8.12871 17.0802 8.08443 17.5242 8.17446C17.9937 8.26892 18.4872 8.59806 18.6717 8.91095C19.2147 9.83046 19.2237 11.7138 19.2492 11.6134C19.3452 11.2119 19.3542 9.79947 19.6737 9.27551C19.8852 8.92867 20.4192 8.61872 20.7042 8.56854C21.1452 8.49179 21.6882 8.46817 22.1502 8.55673C22.5237 8.62905 23.0292 9.06445 23.1657 9.27551C23.4942 9.78323 23.6787 11.2178 23.7342 11.7226C23.7582 11.9307 23.8452 11.1426 24.1737 10.6363C24.7827 9.6932 26.9397 9.51018 27.0207 11.5794C27.0597 12.5447 27.0507 12.5004 27.0507 13.1498C27.0507 13.9114 27.0327 14.3719 26.9907 14.9239C26.9457 15.5128 26.8167 16.8485 26.6292 17.495C26.5002 17.9393 26.0727 18.9385 25.6497 19.5377C25.6497 19.5377 24.0387 21.3826 23.8632 22.2121C23.6877 23.043 23.7462 23.0489 23.7102 23.6364C23.6757 24.2253 23.8917 24.9987 23.8917 24.9987C23.8917 24.9987 22.6902 25.1522 22.0407 25.0488C21.4542 24.9573 20.7282 23.8091 20.5407 23.4578C20.2827 22.9737 19.7322 23.0667 19.5177 23.4238C19.1817 23.9891 18.4542 25.0031 17.9427 25.0665C16.9392 25.1905 14.8602 25.1108 13.2327 25.0961C13.2327 25.0961 13.5102 23.6039 12.8922 23.0917C12.4347 22.708 11.6472 21.9346 11.1762 21.5273L9.92824 20.1679C9.50374 19.6366 8.42524 18.7968 8.06374 17.2382C7.74424 15.8567 7.77574 15.1793 8.11924 14.6258C8.46724 14.0634 9.12424 13.7565 9.40024 13.7033C9.71224 13.6413 10.4382 13.6458 10.7127 13.7948C11.0472 13.9764 11.1822 14.0295 11.4447 14.3719C11.7897 14.825 11.9127 15.0449 11.7642 14.5505C11.6502 14.1638 11.2812 13.6723 11.1132 13.1188C10.9497 12.586 10.5117 11.727 10.5432 10.8666C10.5552 10.5404 10.6977 9.72862 11.7912 9.32864Z",stroke:"black","stroke-width":"0.75","stroke-linejoin":"round"}),l.createElement("path",{d:"M22.2812 20.691V15.5857",stroke:"black","stroke-width":"0.75","stroke-linecap":"round"}),l.createElement("path",{d:"M19.2574 20.7081L19.2334 15.5822",stroke:"black","stroke-width":"0.75","stroke-linecap":"round"}),l.createElement("path",{d:"M16.2637 15.6289L16.2952 20.6854",stroke:"black","stroke-width":"0.75","stroke-linecap":"round"}),l.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.7565 14.5505C11.6095 13.997 11.4625 13.3003 11.1475 12.2598C10.897 11.4377 10.6345 10.992 10.4425 10.44C10.21 9.76843 9.988 9.37583 9.6985 8.6969C9.49 8.21131 9.1525 7.15012 9.013 6.57155C8.8345 5.8203 9.0625 5.20778 9.379 4.79157C9.7585 4.29123 10.822 4.06836 11.4145 4.27352C11.971 4.46539 12.5305 5.0292 12.7885 5.43655C13.2205 6.11549 13.324 6.36935 13.864 7.71245C14.4535 9.17658 14.71 10.5433 14.7805 11.0053L14.908 11.6724C14.9065 11.6133 14.8435 10.0164 14.842 9.95735C14.7895 8.43861 14.752 7.26672 14.785 5.61957C14.788 5.4336 14.881 4.7532 14.911 4.56428C15.028 3.82631 15.3685 3.38353 15.9205 3.11934C16.5385 2.82267 17.3095 2.80201 18.022 3.09424C18.6565 3.34958 18.961 3.90601 19.0525 4.60265C19.0735 4.76353 19.1935 6.0594 19.192 6.23651C19.1725 7.74935 19.201 8.65852 19.2145 9.4452C19.2205 9.78614 19.219 11.8436 19.24 11.6133C19.3315 10.6451 19.381 6.90659 19.756 5.79521C19.972 5.15613 20.3635 4.69416 20.947 4.42406C21.5935 4.12445 22.6165 4.32075 23.053 4.78272C23.4805 5.23288 23.722 5.80406 23.776 6.48447C23.824 7.08222 23.7475 7.80838 23.746 8.32201C23.746 9.60165 23.7145 10.2761 23.6905 11.4525C23.689 11.5086 23.668 11.8923 23.725 11.7211C23.866 11.3078 24.007 10.9211 24.124 10.6215C24.1975 10.437 24.4855 9.71529 24.6625 9.35369C24.8335 9.00832 24.979 8.80907 25.285 8.33824C25.585 7.87628 25.9075 7.67703 26.287 7.51024C27.097 7.1634 27.9505 7.67555 28.2385 8.38252C28.3675 8.69985 28.252 9.43486 28.1965 10.0134C28.105 10.9684 27.8155 11.941 27.6685 12.4458C27.4765 13.1055 27.2575 14.2686 27.1585 14.8087C27.0505 15.3903 26.8075 16.8485 26.62 17.495C26.491 17.9392 26.0635 18.9384 25.642 19.5376C25.642 19.5376 24.031 21.3826 23.854 22.212C23.6785 23.043 23.737 23.0489 23.7025 23.6363C23.6665 24.2252 23.884 24.9986 23.884 24.9986C23.884 24.9986 22.681 25.1521 22.033 25.0488C21.4465 24.9573 20.7205 23.8075 20.533 23.4577C20.275 22.9736 19.7245 23.0666 19.51 23.4238C19.1725 23.9891 18.4465 25.003 17.9335 25.0665C16.9315 25.1905 14.8525 25.1108 13.225 25.096C13.225 25.096 13.5025 23.6038 12.8845 23.0917C12.427 22.708 11.6395 21.9346 11.1685 21.5272L9.9205 20.1679C9.4945 19.6365 8.977 18.5547 8.056 17.2381C7.534 16.4943 6.5155 15.6367 6.13 14.9076C5.7955 14.2804 5.6335 13.4996 5.845 12.952C6.1825 12.0753 6.8575 11.6281 7.888 11.724C8.6665 11.7978 9.16 12.0281 9.745 12.5166C10.0825 12.797 10.6045 13.3048 10.87 13.6206C11.1145 13.9084 11.1745 14.028 11.4355 14.3719C11.7805 14.825 11.8885 15.0493 11.7565 14.5505Z",fill:"white"}),l.createElement("path",{d:"M11.7565 14.5505C11.6095 13.997 11.4625 13.3003 11.1475 12.2598C10.897 11.4377 10.6345 10.992 10.4425 10.44C10.21 9.76843 9.988 9.37583 9.6985 8.6969C9.49 8.21131 9.1525 7.15012 9.013 6.57155C8.8345 5.8203 9.0625 5.20778 9.379 4.79157C9.7585 4.29123 10.822 4.06836 11.4145 4.27352C11.971 4.46539 12.5305 5.0292 12.7885 5.43655C13.2205 6.11549 13.324 6.36935 13.864 7.71245C14.4535 9.17658 14.71 10.5433 14.7805 11.0053L14.908 11.6724C14.9065 11.6133 14.8435 10.0164 14.842 9.95735C14.7895 8.43861 14.752 7.26672 14.785 5.61957C14.788 5.4336 14.881 4.7532 14.911 4.56428C15.028 3.82631 15.3685 3.38353 15.9205 3.11934C16.5385 2.82267 17.3095 2.80201 18.022 3.09424C18.6565 3.34958 18.961 3.90601 19.0525 4.60265C19.0735 4.76353 19.1935 6.0594 19.192 6.23651C19.1725 7.74935 19.201 8.65852 19.2145 9.4452C19.2205 9.78614 19.219 11.8436 19.24 11.6133C19.3315 10.6451 19.381 6.90659 19.756 5.79521C19.972 5.15613 20.3635 4.69416 20.947 4.42406C21.5935 4.12445 22.6165 4.32075 23.053 4.78272C23.4805 5.23288 23.722 5.80406 23.776 6.48447C23.824 7.08222 23.7475 7.80838 23.746 8.32201C23.746 9.60165 23.7145 10.2761 23.6905 11.4525C23.689 11.5086 23.668 11.8923 23.725 11.7211C23.866 11.3078 24.007 10.9211 24.124 10.6215C24.1975 10.437 24.4855 9.71529 24.6625 9.35369C24.8335 9.00832 24.979 8.80907 25.285 8.33825C25.585 7.87628 25.9075 7.67703 26.287 7.51024C27.097 7.1634 27.9505 7.67555 28.2385 8.38252C28.3675 8.69985 28.252 9.43487 28.1965 10.0134C28.105 10.9684 27.8155 11.941 27.6685 12.4458C27.4765 13.1055 27.2575 14.2686 27.1585 14.8087C27.0505 15.3903 26.8075 16.8485 26.62 17.495C26.491 17.9392 26.0635 18.9384 25.642 19.5376C25.642 19.5376 24.031 21.3826 23.854 22.212C23.6785 23.043 23.737 23.0489 23.7025 23.6363C23.6665 24.2252 23.884 24.9986 23.884 24.9986C23.884 24.9986 22.681 25.1521 22.033 25.0488C21.4465 24.9573 20.7205 23.8075 20.533 23.4577C20.275 22.9736 19.7245 23.0666 19.51 23.4238C19.1725 23.9891 18.4465 25.003 17.9335 25.0665C16.9315 25.1905 14.8525 25.1108 13.225 25.096C13.225 25.096 13.5025 23.6039 12.8845 23.0917C12.427 22.708 11.6395 21.9346 11.1685 21.5272L9.9205 20.1679C9.4945 19.6365 8.977 18.5547 8.056 17.2381C7.534 16.4943 6.5155 15.6367 6.13 14.9076C5.7955 14.2804 5.6335 13.4996 5.845 12.952C6.1825 12.0753 6.8575 11.6281 7.888 11.724C8.6665 11.7978 9.16 12.0281 9.745 12.5166C10.0825 12.797 10.6045 13.3048 10.87 13.6206C11.1145 13.9084 11.1745 14.028 11.4355 14.3719C11.7805 14.825 11.8885 15.0493 11.7565 14.5505",stroke:"black","stroke-width":"0.75","stroke-linecap":"round","stroke-linejoin":"round"}),l.createElement("path",{d:"M22.2725 20.6907V15.5855",stroke:"black","stroke-width":"0.75","stroke-linecap":"round"}),l.createElement("path",{d:"M19.2496 20.708L19.2256 15.582",stroke:"black","stroke-width":"0.75","stroke-linecap":"round"}),l.createElement("path",{d:"M16.2549 15.6286L16.2864 20.6851",stroke:"black","stroke-width":"0.75","stroke-linecap":"round"}),l.createElement("path",{d:"M7.06106 38.434C7.95706 38.5513 8.69306 38.898 9.26906 39.474C9.85573 40.0393 10.1491 40.7913 10.1491 41.73C10.1491 42.7966 9.78106 43.6393 9.04506 44.258C8.31973 44.866 7.4344 45.17 6.38906 45.17C5.55706 45.17 4.81573 44.978 4.16506 44.594C3.5144 44.21 3.05573 43.6606 2.78906 42.946L3.71706 42.402C3.8984 42.9566 4.22373 43.378 4.69306 43.666C5.1624 43.9433 5.72773 44.082 6.38906 44.082C7.15706 44.082 7.7864 43.8793 8.27706 43.474C8.7784 43.058 9.02906 42.4766 9.02906 41.73C9.02906 40.9833 8.7784 40.4073 8.27706 40.002C7.7864 39.586 7.15706 39.378 6.38906 39.378V39.362L6.37306 39.378H6.06906L5.58906 38.642L8.37306 34.834H3.10906V33.778H9.66906V34.834L7.06106 38.434ZM15.3534 37.778C16.4521 37.778 17.3534 38.1246 18.0574 38.818C18.7614 39.5006 19.1134 40.386 19.1134 41.474C19.1134 42.562 18.7614 43.4526 18.0574 44.146C17.3534 44.8286 16.4521 45.17 15.3534 45.17C14.2548 45.17 13.3534 44.8286 12.6494 44.146C11.9454 43.4526 11.5934 42.562 11.5934 41.474C11.5934 40.6313 11.8228 39.8846 12.2814 39.234L15.9454 33.778H17.2094L14.4574 37.874C14.7454 37.81 15.0441 37.778 15.3534 37.778ZM13.4334 43.362C13.9241 43.842 14.5641 44.082 15.3534 44.082C16.1428 44.082 16.7774 43.842 17.2574 43.362C17.7481 42.882 17.9934 42.2526 17.9934 41.474C17.9934 40.6953 17.7481 40.066 17.2574 39.586C16.7774 39.106 16.1428 38.866 15.3534 38.866C14.5641 38.866 13.9241 39.106 13.4334 39.586C12.9534 40.066 12.7134 40.6953 12.7134 41.474C12.7134 42.2526 12.9534 42.882 13.4334 43.362ZM28.0778 43.602C27.3418 44.6473 26.3018 45.17 24.9578 45.17C23.6138 45.17 22.5685 44.6473 21.8218 43.602C21.0858 42.546 20.7178 41.138 20.7178 39.378C20.7178 37.618 21.0858 36.2153 21.8218 35.17C22.5685 34.114 23.6138 33.586 24.9578 33.586C26.3018 33.586 27.3418 34.114 28.0778 35.17C28.8245 36.2153 29.1978 37.618 29.1978 39.378C29.1978 41.138 28.8245 42.546 28.0778 43.602ZM22.6538 42.85C23.2085 43.6713 23.9765 44.082 24.9578 44.082C25.9391 44.082 26.7018 43.6713 27.2458 42.85C27.8005 42.0286 28.0778 40.8713 28.0778 39.378C28.0778 37.8846 27.8005 36.7273 27.2458 35.906C26.7018 35.0846 25.9391 34.674 24.9578 34.674C23.9765 34.674 23.2085 35.0846 22.6538 35.906C22.1098 36.7273 21.8378 37.8846 21.8378 39.378C21.8378 40.8713 22.1098 42.0286 22.6538 42.85ZM32.6071 36.818C31.9137 36.818 31.3324 36.5886 30.8631 36.13C30.3937 35.6606 30.1591 35.09 30.1591 34.418C30.1591 33.746 30.3937 33.1806 30.8631 32.722C31.3324 32.2526 31.9137 32.018 32.6071 32.018C33.3004 32.018 33.8817 32.2526 34.3511 32.722C34.8204 33.1806 35.0551 33.746 35.0551 34.418C35.0551 35.09 34.8257 35.6606 34.3671 36.13C33.9084 36.5886 33.3217 36.818 32.6071 36.818ZM31.5831 35.442C31.8497 35.7193 32.1911 35.858 32.6071 35.858C33.0231 35.858 33.3644 35.7193 33.6311 35.442C33.8977 35.1646 34.0311 34.8233 34.0311 34.418C34.0311 34.0126 33.8977 33.6713 33.6311 33.394C33.3644 33.1166 33.0231 32.978 32.6071 32.978C32.1911 32.978 31.8497 33.1166 31.5831 33.394C31.3164 33.6713 31.1831 34.0126 31.1831 34.418C31.1831 34.8233 31.3164 35.1646 31.5831 35.442Z",fill:"white"})),l.createElement("defs",null,l.createElement("filter",{id:"filter0_d_1081_4136",x:"0.189063",y:"0.910624",width:"37.4656",height:"49.6893",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"},l.createElement("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),l.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),l.createElement("feOffset",{dy:"1"}),l.createElement("feGaussianBlur",{stdDeviation:"1.3"}),l.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"}),l.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1081_4136"}),l.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1081_4136",result:"shape"}))))),l.createElement("div",{className:"mySwiper__next"},l.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M10 4.00001L18 12L10 20",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})))),l.createElement("div",{className:"mySwiper__wrapper"},l.createElement("div",{className:"mySwiper__select mySwiper__select_active"},"Exterior"),l.createElement("div",{className:"mySwiper__select"},"Interior")),l.createElement("div",{className:"mySwiper__share"},l.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M11 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V13",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),l.createElement("path",{d:"M15.5 1H22.5M22.5 1V8.5M22.5 1L12.5 11",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})))),l.createElement(r.o5,null,l.createElement("img",{src:"https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1-porsche-panamera-e-hybrid-2020-uk-fd-hero-front.jpg",loading:"lazy"})),l.createElement(r.o5,null,l.createElement("img",{src:"https://hips.hearstapps.com/hmg-prod/images/2023-porsche-panamera-sport-turismo-e-hybrid-103-1673277927.jpg?crop=0.468xw:0.351xh;0.402xw,0.459xh&resize=1200:*",loading:"lazy"})),l.createElement(r.o5,null,l.createElement("img",{src:"https://porsche.autoua.net/media/catalog/2/1/p1754121-1478618673.jpg",loading:"lazy"})),l.createElement(r.o5,null,l.createElement("img",{src:"https://hips.hearstapps.com/hmg-prod/images/2023-porsche-panamera-101-1671132898.jpg?crop=0.633xw:0.712xh;0.175xw,0.173xh&resize=640:*",loading:"lazy"}))),l.createElement(r.tq,{onSwiper:t,loop:!0,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:[c.Rv,c.W_,c.o3],navigation:!0,className:"mySwiper2"},l.createElement(r.o5,null,l.createElement("img",{src:n}),l.createElement("div",{className:"mySwiper2__text"},"360\xb0")),l.createElement(r.o5,null,l.createElement("img",{src:"https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1-porsche-panamera-e-hybrid-2020-uk-fd-hero-front.jpg",loading:"lazy"})),l.createElement(r.o5,null,l.createElement("img",{src:"https://hips.hearstapps.com/hmg-prod/images/2023-porsche-panamera-sport-turismo-e-hybrid-103-1673277927.jpg?crop=0.468xw:0.351xh;0.402xw,0.459xh&resize=1200:*",loading:"lazy"})),l.createElement(r.o5,null,l.createElement("img",{src:"https://porsche.autoua.net/media/catalog/2/1/p1754121-1478618673.jpg",loading:"lazy"})),l.createElement(r.o5,null,l.createElement("img",{src:"https://hips.hearstapps.com/hmg-prod/images/2023-porsche-panamera-101-1671132898.jpg?crop=0.633xw:0.712xh;0.175xw,0.173xh&resize=640:*",loading:"lazy"}))))},i=a(2576),o=a(9013),m={section:"qhgDSaJhUZR7fq8DmBy0",title:"qJT2JIaREPPdHvSuQ6nS",subtitle:"yx7rFyEY2cUdaz8Q6w79",wrapper:"s8XvzaaWFiEc8igGpO1u",preview:"FRlqzczlyLHJIS3Hbh9X",swiperBtn:"OWbkKg7SVcu7UqPQTKzM",info:"vdJ_hiCV47dEoCblt9tB",price:"fdA8xUueFygy1cnH6fgL",group:"RMrLg0nGw9OBv3uGmBFw",item:"xVteDHEWWqa1kGeoVsNg",divider:"rAiTWqpPITG88h1jUSiY",detailTitle:"s7DS7RIIi8bWCKInmmoD",detailGroup:"oSWXk47jWlnmFHFWE0DZ",detailItem:"BOaDrbhmooajfoBjcFc8",descrTitle:"zwP1KjQzomxxb6wI9ehf",descrText:"EVZjFKkM393jzMNTYRCN",btn:"wZMMhwbWQQ2cMAcJxu_u",calc:"dKF5x0JIsoEuiMq30vot"},d=()=>l.createElement("div",{className:m.section},l.createElement("div",{className:"container"},l.createElement("div",{className:m.title},"Porsche Panamera 4S"),l.createElement("div",{className:m.subtitle},"Watching now 8 people"),l.createElement("div",{className:m.wrapper},l.createElement("div",{className:m.preview},l.createElement(s,null),l.createElement("div",{className:m.swiperBtn},l.createElement(i.Z,{ws:"auto"},"apply for this vehicle"))),l.createElement("div",{className:m.info},l.createElement("div",{className:m.price},l.createElement("span",null,"Price"),l.createElement("span",null,"34 000 $")),l.createElement("div",{className:m.group},l.createElement("div",{className:m.item},l.createElement("span",null,"Body"),l.createElement("span",null,"Sedan")),l.createElement("div",{className:m.item},l.createElement("span",null,"Year"),l.createElement("span",null,"2018")),l.createElement("div",{className:m.item},l.createElement("span",null,"Transmission"),l.createElement("span",null,"Automatic")),l.createElement("div",{className:m.item},l.createElement("span",null,"Kilometres "),l.createElement("span",null,"20 000"))),l.createElement("div",{className:m.divider}),l.createElement("div",{className:m.detail},l.createElement("div",{className:m.detailTitle},"Detail"),l.createElement("div",{className:m.detailGroup},l.createElement("div",{className:m.detailItem},l.createElement("span",null,"Rear wheel drive"),l.createElement("span",null,"2500-4000 rpm")),l.createElement("div",{className:m.detailItem},l.createElement("span",null,"6 cylinders"),l.createElement("span",null,"0-100 in 2.7 s.")),l.createElement("div",{className:m.detailItem},l.createElement("span",null,"11 l. per 100 km."),l.createElement("span",null,"Power steering")),l.createElement("div",{className:m.detailItem},l.createElement("span",null,"Rear wheel drive"),l.createElement("span",null,"2500-4000 rpm")))),l.createElement("div",{className:m.divider}),l.createElement("div",{className:m.descr},l.createElement("div",{className:m.descrTitle},"Description"),l.createElement("div",{className:m.descrText},"Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day. ",l.createElement("br",null),"The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.")),l.createElement("div",{className:m.btn},l.createElement(i.Z,{wx:280,ws:247},"Request more information"))))),l.createElement("div",{className:m.calc},l.createElement(o.Z,null)))}}]);