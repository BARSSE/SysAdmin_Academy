(function(){
var S=[["sisr","🛡️ SISR","sudo apt install reussite-bts"],["cejm","⚖️ CEJM","cat code_civil | grep contrat"],["mathinfo","🧮 Maths pour l’informatique","python3 -c \"print(matrice)\""],["mathapp","📐 Maths approfondies","echo \"f'(x)\" | derive --tvi"]];
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var dd=document.getElementById("dd"),b=document.getElementById("ddb"),l=document.getElementById("ddl"),tt=document.getElementById("tt"),tm;
function type(s){clearTimeout(tm);if(rm){tt.textContent=s;return}tt.textContent="";var i=0;(function n(){if(i<=s.length){tt.textContent=s.slice(0,i++);tm=setTimeout(n,55)}})()}
function show(id){
  S.forEach(function(s){var e=document.getElementById(s[0]);e.classList.remove("on");if(s[0]===id){void e.offsetWidth;e.classList.add("on");type(s[2])}});
  Array.prototype.forEach.call(l.querySelectorAll("button"),function(x){x.setAttribute("aria-current",x.dataset.id===id)});
  dd.classList.remove("open");b.setAttribute("aria-expanded","false");
  mode=id;setup();
}
S.forEach(function(s){var li=document.createElement("li"),x=document.createElement("button");x.textContent=s[1];x.dataset.id=s[0];x.onclick=function(){show(s[0])};li.appendChild(x);l.appendChild(li)});
b.onclick=function(e){e.stopPropagation();var o=dd.classList.toggle("open");b.setAttribute("aria-expanded",o)};
document.addEventListener("click",function(){dd.classList.remove("open")});
document.addEventListener("keydown",function(e){if(e.key==="Escape")dd.classList.remove("open")});
document.addEventListener("pointermove",function(e){var a=e.target.closest&&e.target.closest("a.doc");if(a){var r=a.getBoundingClientRect();a.style.setProperty("--mx",(e.clientX-r.left)+"px");a.style.setProperty("--my",(e.clientY-r.top)+"px")}});
var c=document.getElementById("bg"),x=c.getContext("2d"),W,H,mode="sisr",st={},t=0,bgc="#0b0a1a",cl=["#8b5cf6","#3b82f6","#10b981"];
function R(a){return Math.random()*a}
function setup(){
  x.clearRect(0,0,W,H);bgc=getComputedStyle(document.body).backgroundColor;var i;
  if(mode==="sisr"){st.d=[];for(i=0;i<Math.ceil(W/16);i++)st.d[i]=R(-50)}
  else if(mode==="cejm"){st.p=[];var G=["§","⚖","€","%","¶","©","$","✒"];for(i=0;i<36;i++)st.p.push({x:R(W),y:R(H),s:18+R(30),v:.3+R(.7),a:R(6),g:G[i%8],c:cl[i%3]})}
  else if(mode==="mathinfo"){st.n=26;st.cols=Math.ceil(W/26);st.rows=Math.ceil(H/26);st.g=[];for(i=0;i<st.cols*st.rows;i++)st.g.push({v:R(1)<.5?0:1,b:R(1)})}
  else{st.m=[];var M=["Σ","∫","π","√","∞","θ","f′(x)","lim","Δ","∑"];for(i=0;i<16;i++)st.m.push({x:R(W),y:R(H),s:18+R(22),v:.2+R(.5),g:M[i%10],c:cl[i%3]})}
}
function draw(){
  var i,p;
  if(mode==="sisr"){
    x.globalAlpha=.12;x.fillStyle=bgc;x.fillRect(0,0,W,H);x.globalAlpha=1;x.font="16px monospace";
    var ch="01{}<>/#$ABCDEF23456789";
    for(i=0;i<st.d.length;i++){x.fillStyle=cl[i%3];x.fillText(ch[Math.floor(R(ch.length))],i*16,st.d[i]*16);if(st.d[i]*16>H&&R(1)>.975)st.d[i]=0;st.d[i]+=.35}
  }else if(mode==="cejm"){
    x.clearRect(0,0,W,H);
    for(i=0;i<st.p.length;i++){p=st.p[i];p.y-=p.v;p.a+=.012;if(p.y<-40){p.y=H+40;p.x=R(W)}
      x.save();x.translate(p.x,p.y);x.rotate(Math.sin(p.a)*.45);x.globalAlpha=.55;x.fillStyle=p.c;x.font=p.s+"px serif";x.fillText(p.g,0,0);x.restore()}
  }else if(mode==="mathinfo"){
    x.clearRect(0,0,W,H);x.font="16px monospace";
    for(i=0;i<st.g.length;i++){p=st.g[i];if(R(1)<.012){p.v=1-p.v;p.b=1}p.b*=.975;
      x.globalAlpha=.1+.9*p.b;x.fillStyle=cl[(i+Math.floor(i/st.cols))%3];x.fillText(p.v,(i%st.cols)*st.n,Math.floor(i/st.cols)*st.n+18)}
    x.globalAlpha=1;
  }else{
    x.clearRect(0,0,W,H);x.lineWidth=1;x.strokeStyle=cl[1];x.globalAlpha=.14;x.beginPath();
    for(i=0;i<W;i+=50){x.moveTo(i,0);x.lineTo(i,H)}for(i=0;i<H;i+=50){x.moveTo(0,i);x.lineTo(W,i)}x.stroke();
    x.globalAlpha=.5;x.beginPath();x.moveTo(0,H/2);x.lineTo(W,H/2);x.moveTo(W/2,0);x.lineTo(W/2,H);x.stroke();
    x.globalAlpha=.9;x.lineWidth=2.5;
    for(var k=0;k<3;k++){x.strokeStyle=cl[k];x.beginPath();for(var px=0;px<=W;px+=6){var y=H/2+Math.sin(px*.008*(k+1)+t*(.8+k*.5))*(70+k*35);px?x.lineTo(px,y):x.moveTo(px,y)}x.stroke()}
    for(i=0;i<st.m.length;i++){p=st.m[i];p.x+=p.v;if(p.x>W+60)p.x=-60;x.globalAlpha=.45;x.fillStyle=p.c;x.font=p.s+"px serif";x.fillText(p.g,p.x,p.y+Math.sin(t+i)*10)}
    x.globalAlpha=1;
  }
}
var bw=document.getElementById("bits"),bs=[],bvv,lb=-1;
if(bw){for(var q=0;q<8;q++){var e=document.createElement("span");e.className="bit";bw.appendChild(e);bs.push(e)}bvv=document.createElement("span");bvv.className="bv";bw.appendChild(bvv)}
function bits(n){if(n===lb||!bw)return;lb=n;for(var q=0;q<8;q++){var on=(n>>(7-q))&1;bs[q].textContent=on;bs[q].className="bit"+(on?" on":"")}bvv.textContent="= "+n+" = 0x"+n.toString(16).toUpperCase().padStart(2,"0")}
var cp=document.getElementById("cp"),ct=document.getElementById("ct"),cd=document.getElementById("cd");
function fx(u){return 52-34*Math.sin(u/48)*Math.cos(u/130)}
if(cp){var dd2="";for(var u=0;u<=600;u+=4)dd2+=(u?"L":"M")+u+" "+fx(u).toFixed(1);cp.setAttribute("d",dd2)}
function curve(u){if(!cd)return;u=((u%640)+640)%640-20;var y=fx(u),m=(fx(u+1)-fx(u-1))/2;cd.setAttribute("cx",u);cd.setAttribute("cy",y);ct.setAttribute("x1",u-48);ct.setAttribute("y1",y-48*m);ct.setAttribute("x2",u+48);ct.setAttribute("y2",y+48*m)}
function init(){W=c.width=innerWidth;H=c.height=innerHeight;setup()}
addEventListener("resize",init);init();
var last=0;
function loop(ts){requestAnimationFrame(loop);if(ts-last<33)return;last=ts;t+=.033;draw();if(mode==="mathinfo")bits(Math.floor(t*1.4)&255);else if(mode==="mathapp")curve(t*45)}
if(!rm)requestAnimationFrame(loop);else{draw();bits(13);curve(220)}
show("sisr");
})();