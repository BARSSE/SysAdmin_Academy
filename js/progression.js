(function(){
function LS(k){try{return JSON.parse(localStorage.getItem(k)||"null")}catch(e){return null}}
var N={sisr:"🛡️ SISR",cejm:"⚖️ CEJM",mathinfo:"🧮 Maths info",mathapp:"📐 Maths approf.",exam:"⏱️ Mode examen",retry:"🔁 Questions ratées"};
function bt(c){try{return+localStorage.getItem("sa-best-"+c)||0}catch(e){return 0}}
var done=Object.keys(LS("sa-done")||{}).length,H=LS("sa-hist")||[],M=Object.keys(LS("sa-miss")||{}).length,best=0;
["sisr","cejm","mathinfo","mathapp"].forEach(function(c){best=Math.max(best,bt(c))});
function stat(n,l){return '<div><em data-n="'+n+'">0</em><span>'+l+'</span></div>'}
document.getElementById("st").innerHTML=stat(done,"fiches révisées")+stat(H.length,"quiz terminés")+stat(M,"questions à refaire")+stat(bt("exam"),"meilleur examen /20");
document.getElementById("gp").textContent=done+" / 31 fiches révisées";document.getElementById("gb").style.width=Math.min(100,100*done/31)+"%";
document.getElementById("hn").textContent=H.length+" quiz";
function dt(t){var d=new Date(t);return d.toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})+" "+d.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}
document.getElementById("hb").innerHTML=H.length?H.slice(-30).reverse().map(function(x,i){var p=x.n?Math.round(100*x.s/x.n):0;return '<tr style="--i:'+i%12+'"><td>'+dt(x.d)+'</td><td>'+(N[x.c]||x.c)+'</td><td><em class="pill">'+x.s+' / '+x.n+' · '+p+' %</em></td><td>'+(x.m?Math.floor(x.m/60)+" min "+("0"+x.m%60).slice(-2)+" s":"–")+'</td></tr>'}).join(""):'<tr><td colspan="4">Aucun quiz terminé pour l’instant : lance un QCM ou le mode examen 🚀</td></tr>';
document.getElementById("rz").onclick=function(){if(confirm("Effacer tout l’historique des scores ?")){try{localStorage.removeItem("sa-hist")}catch(e){}location.reload()}};
Array.prototype.forEach.call(document.querySelectorAll("[data-n]"),function(e){var n=+e.dataset.n,s=null;if(BG.rm){e.textContent=n;return}
requestAnimationFrame(function f(ts){if(!s)s=ts;var p=Math.min((ts-s)/1200,1);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})});
})();
