(function(){var D=DATA,decks={sig:D.G.map(function(x){return[x[0]+" ?",x[1]+" — "+x[2]]}),
por:D.P.map(function(x){return["Port de "+x[2]+" ?",x[0]+" / "+x[1]+" — "+x[3]]}),
cmd:D.C.map(function(x){return[x[0],"<code>"+x[1].replace(/<\/?code>/g,"")+"</code>"]})};
decks.all=[].concat(decks.sig,decks.por,decks.cmd);
var fc=document.getElementById("fc"),fq=document.getElementById("fq"),fa=document.getElementById("fa"),cnt=document.getElementById("cnt"),bar=document.getElementById("pb"),cur=[],k=0;
function show(){var c=cur[k];fc.classList.remove("flip");fq.textContent=c[0];fa.innerHTML=c[1];cnt.textContent=(k+1)+" / "+cur.length;bar.style.width=(100*(k+1)/cur.length)+"%"}
function pick(id){cur=decks[id].slice();k=0;[].forEach.call(document.querySelectorAll(".chip"),function(b){b.setAttribute("aria-pressed",b.dataset.id===id)});show()}
function flip(){fc.classList.toggle("flip")}
function nx(d){k=(k+d+cur.length)%cur.length;show()}
function sh(){for(var i=cur.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=cur[i];cur[i]=cur[j];cur[j]=t}k=0;show()}
[].forEach.call(document.querySelectorAll(".chip"),function(b){b.onclick=function(){pick(b.dataset.id)}});
document.getElementById("fl").onclick=flip;fc.onclick=flip;document.getElementById("pv").onclick=function(){nx(-1)};document.getElementById("nx").onclick=function(){nx(1)};document.getElementById("sh").onclick=sh;
document.addEventListener("keydown",function(e){if(e.key==="ArrowRight")nx(1);else if(e.key==="ArrowLeft")nx(-1);else if(e.key===" "){e.preventDefault();flip()}});
pick("sig")})();
