(function(){var T=TUTOS,$=function(i){return document.getElementById(i)},sel=$("ap"),g=$("tg"),p=$("tp"),n=$("tn");
var SITE={"it-connect.fr":"IT-Connect","malekal.com":"Malekal","learn.microsoft.com":"Microsoft Learn","pve.proxmox.com":"Proxmox VE Wiki","youtube.com":"YouTube","urlz.fr":"IT-Connect (lien raccourci)","fr.wikipedia.org":"Wikipédia","cnil.fr":"CNIL","cyber.gouv.fr":"ANSSI","cybermalveillance.gouv.fr":"Cybermalveillance.gouv.fr","blog.stephane-robert.info":"Stéphane Robert","linuxtricks.fr":"LinuxTricks","docs.openmediavault.org":"OpenMediaVault","doc.ubuntu-fr.org":"Ubuntu-fr","docs.nxlog.co":"NXLog","rdr-it.com":"RDR-IT","neptunet.fr":"Neptunet","blogs.technet.microsoft.com":"TechNet","linux.goffinet.org":"Linux Goffinet"};
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}
function nz(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
function host(u){return u.replace(/^https?:\/\//,"").split("/")[0].replace(/^www\./,"")}
function card(x,i,desc){var v=x[2]==="v";return '<a class="doc" style="--i:'+i%12+'" href="'+esc(x[1])+'" target="_blank" rel="noopener"><span class="ic">'+(v?"🎬":"📄")+'</span><span><b class="dt">'+esc(x[0])+'</b><span class="desc">'+esc(desc)+'</span><small>'+(v?"Ouvrir la vidéo":"Ouvrir l’article")+'</small></span></a>'}
sel.innerHTML='<option value="">— Choisir une AP —</option>'+T.map(function(a){return '<option value="'+a.id+'">'+esc(a.t)+'</option>'}).join("");
function rd(){var a=T.filter(function(x){return x.id===sel.value})[0];g.innerHTML="";
if(!a){p.hidden=false;n.textContent="";return}
p.hidden=true;n.textContent=a.l.length+" liens";
g.innerHTML=a.l.map(function(x,i){var h=host(x[1]);return card(x,i,SITE[h]||h)}).join("")}
sel.addEventListener("change",rd);rd();
/* recherche par mots-clés : sites officiels + tutos de toutes les AP */
var idx=[];
Array.prototype.forEach.call(document.querySelectorAll("section:not(#tuto) a.doc"),function(a){idx.push({h:a.outerHTML,t:nz(a.textContent+" "+a.getAttribute("href"))})});
T.forEach(function(a){var ap=a.t.split(" · ")[0];a.l.forEach(function(x){var h=host(x[1]),s=SITE[h]||h;idx.push({tuto:1,x:x,d:s+" · "+ap,t:nz(x[0]+" "+s+" "+a.t+" "+x[1]+(x[2]==="v"?" video":" article tuto tutoriel"))})})});
var hero=document.querySelector(".hero"),box=document.createElement("div");box.className="srch";
box.innerHTML='<input id="q" type="search" placeholder="🔍 Rechercher un lien (ANSSI, FSMO, rsyslog, RGPD…)" aria-label="Rechercher un lien"><p class="sub" id="qn"></p><div class="grid" id="qr"></div>';
hero.appendChild(box);var q=$("q"),qn=$("qn"),qr=$("qr");
q.addEventListener("input",function(){var v=nz(q.value).trim().split(/\s+/).filter(Boolean);qr.innerHTML="";
document.body.classList.toggle("searching",!!v.length);if(!v.length){qn.textContent="";return}
var m=idx.filter(function(i){return v.every(function(k){return i.t.indexOf(k)>-1})});
qr.innerHTML=m.map(function(i,k){return i.tuto?card(i.x,k,i.d):i.h}).join("");
qn.textContent=m.length?m.length+" lien"+(m.length>1?"s":"")+" trouvé"+(m.length>1?"s":""):"Aucun lien trouvé 🙈"});
})();
