(function(){
var tt=document.getElementById("tt"),cm=["sudo apt install reussite-bts","cat code_civil | grep contrat","python3 -c \"print(0b1011)\"","echo \"f'(x)\" | derive --tvi"],ms=["sisr","cejm","mathinfo","mathapp"],k=0;
(function nx(){BG.type(tt,cm[k%4]);BG.set(ms[k%4]);k++;setTimeout(nx,6500)})();
Array.prototype.forEach.call(document.querySelectorAll("[data-n]"),function(e){
  var n=+e.dataset.n,s=null;if(BG.rm){e.textContent=n;return}
  requestAnimationFrame(function f(ts){if(!s)s=ts;var p=Math.min((ts-s)/1400,1);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)});
});
Array.prototype.forEach.call(document.querySelectorAll(".bigbtn"),function(b){
  if(BG.rm)return;
  b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
    b.style.setProperty("--rx",((.5-py)*10)+"deg");b.style.setProperty("--ry",((px-.5)*10)+"deg");b.style.setProperty("--mx",(px*100)+"%");b.style.setProperty("--my",(py*100)+"%")});
  b.addEventListener("pointerleave",function(){b.style.setProperty("--rx","0deg");b.style.setProperty("--ry","0deg")});
});
})();