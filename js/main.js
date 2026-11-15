(function(){
var S=[["sisr","🛡️ SISR","sudo apt install reussite-bts"],["cejm","⚖️ CEJM","cat code_civil | grep contrat"],["mathinfo","🧮 Maths pour l’informatique","python3 -c \"print(0b1011)\""],["mathapp","📐 Maths approfondies","echo \"f'(x)\" | derive --tvi"]];
var dd=document.getElementById("dd"),b=document.getElementById("ddb"),l=document.getElementById("ddl"),tt=document.getElementById("tt");
function show(id){
  S.forEach(function(s){var e=document.getElementById(s[0]);e.classList.remove("on");if(s[0]===id){void e.offsetWidth;e.classList.add("on");BG.type(tt,s[2])}});
  Array.prototype.forEach.call(l.querySelectorAll("button"),function(x){x.setAttribute("aria-current",x.dataset.id===id)});
  dd.classList.remove("open");b.setAttribute("aria-expanded","false");BG.set(id);
}
S.forEach(function(s){var li=document.createElement("li"),x=document.createElement("button");x.textContent=s[1];x.dataset.id=s[0];x.onclick=function(){show(s[0])};li.appendChild(x);l.appendChild(li)});
b.onclick=function(e){e.stopPropagation();var o=dd.classList.toggle("open");b.setAttribute("aria-expanded",o)};
document.addEventListener("click",function(){dd.classList.remove("open")});
document.addEventListener("keydown",function(e){if(e.key==="Escape")dd.classList.remove("open")});
document.addEventListener("pointermove",function(e){var a=e.target.closest&&e.target.closest("a.doc");if(a){var r=a.getBoundingClientRect();a.style.setProperty("--mx",(e.clientX-r.left)+"px");a.style.setProperty("--my",(e.clientY-r.top)+"px")}});
show("sisr");
})();