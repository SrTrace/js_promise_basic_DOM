function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=document.createElement("div");t.classList.add("message"),n.length>0&&t.classList.add("error-message"),t.textContent=e,document.body.appendChild(t)}new Promise(function(e,n){document.querySelector(".logo").addEventListener("click",function(){return e("Promise was resolved!")})}).then(function(n){return e(n)}),new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)}).catch(function(n){return e(n.message,"error-message")});
//# sourceMappingURL=index.e739fd09.js.map
