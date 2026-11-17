(function(){
var t=document.querySelector('.navtoggle'),n=document.getElementById('primarynav');
if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');t.setAttribute('aria-expanded','false');t.focus();}});}
var f=document.querySelector('.floatcall'),ft=document.querySelector('footer');
if(f&&ft&&'IntersectionObserver' in window){new IntersectionObserver(function(es){f.classList.toggle('hide',es[0].isIntersecting);}).observe(ft);}
})();
