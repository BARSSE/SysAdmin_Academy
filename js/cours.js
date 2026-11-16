(function(){
var K="sa-done",D={};try{D=JSON.parse(localStorage.getItem(K)||"{}")}catch(e){}
function sv(){try{localStorage.setItem(K,JSON.stringify(D))}catch(e){}}
function nz(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
var secs=[].slice.call(document.querySelectorAll("section")),hero=document.querySelector(".hero");
var box=document.createElement("div");box.className="srch";
box.innerHTML='<input id="q" type="search" placeholder="🔍 Rechercher une fiche (DHCP, GPO, bash…)" aria-label="Rechercher une fiche"><div class="coef"><p id="gp"></p><div class="bar"><i id="gb"></i></div></div><p class="sub" id="qn"></p><div class="grid" id="qr"></div>';
hero.appendChild(box);
var gp=document.getElementById("gp"),gb=document.getElementById("gb"),qn=document.getElementById("qn"),qr=document.getElementById("qr");
function wrap(a){var w=document.createElement("div");w.className="dw";w.dataset.h=a.getAttribute("href");
var b=document.createElement("button");b.type="button";b.className="chk";b.title="Marquer comme révisée";
b.onclick=function(){var h=w.dataset.h;if(D[h])delete D[h];else D[h]=1;sv();sync()};
if(a.parentNode)a.parentNode.replaceChild(w,a);w.appendChild(a);w.appendChild(b);return w}
function sync(){[].forEach.call(document.querySelectorAll(".dw"),function(w){var o=!!D[w.dataset.h],b=w.lastChild;b.setAttribute("aria-pressed",o);b.textContent=o?"✓":"";w.classList.toggle("done",o)});
var tot=0,dn=0;secs.forEach(function(s){var l=s.querySelectorAll(".grid .dw"),c=0;[].forEach.call(l,function(w){if(D[w.dataset.h])c++});tot+=l.length;dn+=c;
var p=s.querySelector(".rv");if(!p){p=document.createElement("em");p.className="pill rv";s.querySelector("h2").appendChild(p)}p.textContent=c+"/"+l.length+" révisées"});
gp.textContent=dn+" / "+tot+" fiches révisées";gb.style.width=(tot?100*dn/tot:0)+"%"}
var idx=[];secs.forEach(function(s){var t=s.querySelector("h2 span").textContent;[].forEach.call(s.querySelectorAll("a.doc"),function(a){idx.push({a:a,t:nz(a.textContent+" "+t+" "+a.getAttribute("href"))});wrap(a)});
var l=document.createElement("a");l.className="sl";l.href="#"+s.id;l.title="Lien direct vers cette section";l.textContent="🔗";s.querySelector("h2").appendChild(l)});
document.getElementById("q").addEventListener("input",function(){var v=nz(this.value).trim().split(/\s+/).filter(Boolean);qr.innerHTML="";
document.body.classList.toggle("searching",!!v.length);if(!v.length){qn.textContent="";return}
var m=idx.filter(function(i){return v.every(function(k){return i.t.indexOf(k)>-1})});
m.forEach(function(i,n){var c=i.a.cloneNode(true);c.style.setProperty("--i",n);qr.appendChild(wrap(c))});
qn.textContent=m.length?m.length+" fiche"+(m.length>1?"s":"")+" trouvée"+(m.length>1?"s":""):"Aucune fiche trouvée 🙈";sync()});
sync();
function go(id){var b=document.querySelector('#ddl button[data-id="'+id+'"]');if(b)b.click()}
[].forEach.call(document.querySelectorAll("#ddl button"),function(b){b.addEventListener("click",function(){history.replaceState(null,"","#"+b.dataset.id)})});
addEventListener("hashchange",function(){go(location.hash.slice(1))});
if(location.hash)go(location.hash.slice(1));
})();
