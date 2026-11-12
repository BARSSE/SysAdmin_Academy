(function(){
var S=[["sisr","🛡️ SISR"],["cejm","⚖️ CEJM"],["mathinfo","🧮 Maths pour l’informatique"],["mathapp","📐 Maths approfondies"]];
var dd=document.getElementById("dd"),b=document.getElementById("ddb"),l=document.getElementById("ddl");
function show(id){
  S.forEach(function(s){document.getElementById(s[0]).classList.toggle("on",s[0]===id)});
  Array.prototype.forEach.call(l.querySelectorAll("button"),function(x){x.setAttribute("aria-current",x.dataset.id===id)});
  dd.classList.remove("open");b.setAttribute("aria-expanded","false");
}
S.forEach(function(s){
  var li=document.createElement("li"),x=document.createElement("button");
  x.textContent=s[1];x.dataset.id=s[0];x.onclick=function(){show(s[0])};
  li.appendChild(x);l.appendChild(li);
});
show("sisr");
b.onclick=function(e){e.stopPropagation();var o=dd.classList.toggle("open");b.setAttribute("aria-expanded",o)};
document.addEventListener("click",function(){dd.classList.remove("open")});
document.addEventListener("keydown",function(e){if(e.key==="Escape")dd.classList.remove("open")});
var c=document.getElementById("rain"),x=c.getContext("2d"),cols,drops,ch="01{}<>/#$ABCDEF0123456789",fs=16,cl=["#8b5cf6","#3b82f6","#10b981"];
function init(){c.width=innerWidth;c.height=innerHeight;cols=Math.ceil(c.width/fs);drops=[];for(var i=0;i<cols;i++)drops[i]=Math.random()*-50}
function draw(){
  x.fillStyle="rgba(11,10,26,.12)";x.fillRect(0,0,c.width,c.height);
  x.font=fs+"px monospace";
  for(var i=0;i<cols;i++){
    x.fillStyle=cl[i%3];
    x.fillText(ch[Math.floor(Math.random()*ch.length)],i*fs,drops[i]*fs);
    if(drops[i]*fs>c.height&&Math.random()>.975)drops[i]=0;
    drops[i]+=.6;
  }
}
init();addEventListener("resize",init);
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)setInterval(draw,60);
})();