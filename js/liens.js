(function(){var T=TUTOS,$=function(i){return document.getElementById(i)},sel=$("ap"),g=$("tg"),p=$("tp"),n=$("tn");
var SITE={"it-connect.fr":"IT-Connect","malekal.com":"Malekal","learn.microsoft.com":"Microsoft Learn","pve.proxmox.com":"Proxmox VE Wiki","youtube.com":"YouTube","urlz.fr":"IT-Connect (lien raccourci)","fr.wikipedia.org":"Wikipédia","cnil.fr":"CNIL","cyber.gouv.fr":"ANSSI","cybermalveillance.gouv.fr":"Cybermalveillance.gouv.fr","blog.stephane-robert.info":"Stéphane Robert","linuxtricks.fr":"LinuxTricks","docs.openmediavault.org":"OpenMediaVault","doc.ubuntu-fr.org":"Ubuntu-fr","docs.nxlog.co":"NXLog","rdr-it.com":"RDR-IT","neptunet.fr":"Neptunet","blogs.technet.microsoft.com":"TechNet","linux.goffinet.org":"Linux Goffinet"};
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}
function host(u){return u.replace(/^https?:\/\//,"").split("/")[0].replace(/^www\./,"")}
sel.innerHTML='<option value="">— Choisir une AP —</option>'+T.map(function(a){return '<option value="'+a.id+'">'+esc(a.t)+'</option>'}).join("");
function rd(){var a=T.filter(function(x){return x.id===sel.value})[0];g.innerHTML="";
if(!a){p.hidden=false;n.textContent="";return}
p.hidden=true;n.textContent=a.l.length+" liens";
g.innerHTML=a.l.map(function(x,i){var v=x[2]==="v",h=host(x[1]);return '<a class="doc" style="--i:'+i%12+'" href="'+esc(x[1])+'" target="_blank" rel="noopener"><span class="ic">'+(v?"🎬":"📄")+'</span><span><b class="dt">'+esc(x[0])+'</b><span class="desc">'+(SITE[h]||h)+'</span><small>'+(v?"Ouvrir la vidéo":"Ouvrir l’article")+'</small></span></a>'}).join("")}
sel.addEventListener("change",rd);rd();
})();
