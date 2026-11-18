(function(){var D=DATA,F=D.F,MAT={sisr:"SISR",cejm:"CEJM",mathinfo:"Maths pour l’informatique",mathapp:"Maths approfondies"};
var $=function(i){return document.getElementById(i)},g=$("gl"),df=$("df"),sel=$("mat"),p=$("pt"),q=$("q"),n=$("qn"),md=$("md"),last=null;
function nz(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function card(cls,i,k,x,t){return '<button type="button" class="gc'+cls+'" style="--i:'+i%12+'" '+k+'="'+i+'" data-t="'+nz(t)+'"><b>'+esc(x[0])+'</b>'+(cls?'':'<span>'+esc(x[1])+'</span>')+'<small>'+esc(cls?x[1]:x[2])+'</small><em class="hint">📚 Voir les cours →</em></button>'}
g.innerHTML=D.G.map(function(x,i){return card("",i,"data-g",x,x.slice(0,3).join(" "))}).join("");
p.innerHTML=D.P.map(function(x,i){return '<tr style="--i:'+i%12+'" data-t="'+nz(x.join(" "))+'"><td><em class="pill">'+x[0]+'</em></td><td>'+x[1]+'</td><td><b>'+x[2]+'</b></td><td>'+x[3]+'</td></tr>'}).join("");
function li(i){var f=F[i];return '<li><a href="'+f[1]+'" target="_blank" rel="noopener">📄 '+esc(f[0])+'<small>'+esc(f[2])+'</small></a></li>'}
function pop(t,sub,def,c,inf){$("mt").textContent=t;$("mn").textContent=sub||"";$("mdf").textContent=def;var h="";
if(c.length)h+="<h4>📚 Apparaît dans "+(c.length>1?"ces "+c.length+" cours":"ce cours")+"</h4><ul>"+c.map(li).join("")+"</ul>";
if(inf&&inf.length)h+="<h4>🎓 Cité dans les fiches infos BTS</h4><ul>"+inf.map(li).join("")+"</ul>";
if(!h)h='<p class="none">Ce terme n’apparaît dans aucune fiche pour l’instant.</p>';
$("ml").innerHTML=h;last=document.activeElement;md.hidden=false;$("mx").focus()}
function close(){md.hidden=true;if(last&&last.focus)last.focus()}
g.addEventListener("click",function(e){var b=e.target.closest(".gc");if(!b)return;var x=D.G[+b.dataset.g];pop(x[0],x[1],x[2],x[3],x[4])});
df.addEventListener("click",function(e){var b=e.target.closest(".gc");if(!b)return;var x=D.D[sel.value][+b.dataset.d];pop(x[0],MAT[sel.value],x[1],x[2],[])});
$("mx").onclick=close;md.addEventListener("click",function(e){if(e.target===md)close()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!md.hidden)close()});
function filt(){var v=nz(q.value).trim().split(/\s+/).filter(Boolean),c=0;
Array.prototype.forEach.call(document.querySelectorAll("[data-t]"),function(e){var ok=v.every(function(k){return e.dataset.t.indexOf(k)>-1});e.hidden=!ok;if(ok)c++});
n.textContent=v.length?c+" résultat"+(c>1?"s":""):""}
function rd(){var L=D.D[sel.value];df.innerHTML=L.map(function(x,i){return card(" def",i,"data-d",x,x[0]+" "+x[1])}).join("");$("dn").textContent=L.length+" mots";filt()}
sel.addEventListener("change",rd);q.addEventListener("input",filt);rd();
var h=location.hash.slice(1);if(h==="definitions"||h==="ports"||h==="glossaire"){var s=$(h);if(s)setTimeout(function(){s.scrollIntoView()},50)}
})();
