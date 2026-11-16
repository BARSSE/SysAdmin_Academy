(function(){
var tt=document.getElementById("tt"),cm=["cat referentiel_2025 | grep blocs","./liste_epreuves.sh --option SISR","echo $((12*100/22))% de pro","sudo apt install diplome-bts"],k=0;
BG.set("sisr");
(function nx(){BG.type(tt,cm[k%cm.length]);k++;setTimeout(nx,6500)})();
Array.prototype.forEach.call(document.querySelectorAll("[data-n]"),function(e){
  var n=+e.dataset.n,s=null;if(BG.rm){e.textContent=n;return}
  requestAnimationFrame(function f(ts){if(!s)s=ts;var p=Math.min((ts-s)/1400,1);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)});
});
document.addEventListener("pointermove",function(e){var a=e.target.closest&&e.target.closest("a.doc");if(a){var r=a.getBoundingClientRect();a.style.setProperty("--mx",(e.clientX-r.left)+"px");a.style.setProperty("--my",(e.clientY-r.top)+"px")}});
})();
