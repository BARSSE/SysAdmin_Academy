(function(){
var tt=document.getElementById("tt"),cm=["sudo apt install reussite-bts","cat code_civil | grep contrat","python3 -c \"print(0b1011)\"","echo \"f'(x)\" | derive --tvi"],ms=["sisr","cejm","mathinfo","mathapp"],k=0;
(function nx(){BG.type(tt,cm[k%4]);BG.set(ms[k%4]);k++;setTimeout(nx,6500)})();
Array.prototype.forEach.call(document.querySelectorAll("[data-n]"),function(e){
  var n=+e.dataset.n,s=null;if(BG.rm){e.textContent=n;return}
  requestAnimationFrame(function f(ts){if(!s)s=ts;var p=Math.min((ts-s)/1400,1);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)});
});
})();