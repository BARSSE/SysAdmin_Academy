(function(){var D=DATA,g=document.getElementById("gl"),p=document.getElementById("pt"),q=document.getElementById("q"),n=document.getElementById("qn");
function nz(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
g.innerHTML=D.G.map(function(x,i){return '<div class="gc" style="--i:'+i%12+'" data-t="'+nz(x.join(" "))+'"><b>'+x[0]+'</b><span>'+x[1]+'</span><small>'+x[2]+'</small></div>'}).join("");
p.innerHTML=D.P.map(function(x,i){return '<tr style="--i:'+i%12+'" data-t="'+nz(x.join(" "))+'"><td><em class="pill">'+x[0]+'</em></td><td>'+x[1]+'</td><td><b>'+x[2]+'</b></td><td>'+x[3]+'</td></tr>'}).join("");
q.addEventListener("input",function(){var v=nz(q.value).trim().split(/\s+/).filter(Boolean),c=0;
[].forEach.call(document.querySelectorAll("[data-t]"),function(e){var ok=v.every(function(k){return e.dataset.t.indexOf(k)>-1});e.hidden=!ok;if(ok)c++});
n.textContent=v.length?c+" résultat"+(c>1?"s":""):""})})();
