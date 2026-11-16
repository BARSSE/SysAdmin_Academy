(function(){var d=document,r=d.documentElement,K="sa-theme",t;try{t=localStorage.getItem(K)}catch(e){}
if(t)r.setAttribute("data-theme",t);
function cur(){return r.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme:light)").matches?"light":"dark")}
d.addEventListener("DOMContentLoaded",function(){
var tl=d.querySelector(".tools"),b=d.createElement("button");b.className="themebtn";b.type="button";
function ic(){var l=cur()==="light";b.textContent=l?"🌙 Sombre":"☀️ Clair";b.setAttribute("aria-label",l?"Passer au thème sombre":"Passer au thème clair")}
b.onclick=function(){var n=cur()==="light"?"dark":"light";r.setAttribute("data-theme",n);try{localStorage.setItem(K,n)}catch(e){}ic();if(window.BG&&BG.refresh)BG.refresh()};
ic();if(tl)tl.appendChild(b);
var u=d.createElement("button");u.className="totop";u.type="button";u.textContent="↑";u.setAttribute("aria-label","Retour en haut");
u.onclick=function(){scrollTo({top:0,behavior:"smooth"})};d.body.appendChild(u);
addEventListener("scroll",function(){u.classList.toggle("show",scrollY>400)},{passive:true});
if(window.BG&&BG.refresh)BG.refresh()})})();
