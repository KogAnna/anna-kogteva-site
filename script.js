document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-toggle');const nav=document.getElementById('navigation');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');menu.textContent=open?'×':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
const contacts=window.SITE_CONTACTS||{};const help=document.getElementById('contact-help');
document.querySelectorAll('.contact-link').forEach(a=>{const type=a.dataset.messenger;const url=contacts[type];if(url&&/^https:\/\//i.test(url)){a.href=url;a.target='_blank';a.rel='noopener noreferrer'}else{a.addEventListener('click',e=>{e.preventDefault();help.textContent='Ссылка на '+(type==='telegram'?'Telegram':'MAX')+' пока настраивается. Контакт появится здесь перед публикацией.'})}});
