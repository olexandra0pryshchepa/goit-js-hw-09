!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=null;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.2dc7ca49.js.map
