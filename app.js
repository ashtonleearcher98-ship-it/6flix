document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.profile-menu');
  const btn=document.querySelector('[data-profile-toggle]');
  if(menu&&btn) btn.addEventListener('click',()=>menu.classList.toggle('open'));
  document.addEventListener('click',e=>{if(menu&&!menu.contains(e.target)) menu.classList.remove('open')});

  document.querySelectorAll('[data-add-list]').forEach(b=>b.addEventListener('click',()=>{
    const title=b.dataset.addList||'Title';
    let list=JSON.parse(localStorage.getItem('sixflixList')||'[]');
    if(!list.includes(title)) list.push(title); else list=list.filter(x=>x!==title);
    localStorage.setItem('sixflixList',JSON.stringify(list));
    b.textContent=list.includes(title)?'✓ In My List':'+ My List';
  }));

  const signup=document.querySelector('#signupForm');
  if(signup) signup.addEventListener('submit',e=>{
    e.preventDefault();
    const email=document.querySelector('#email')?.value||'';
    localStorage.setItem('sixflixUser',JSON.stringify({email,plan:new URLSearchParams(location.search).get('plan')||'Standard'}));
    location.href='profiles.html';
  });

  document.querySelectorAll('[data-plan]').forEach(b=>b.addEventListener('click',()=>{
    location.href='signup.html?plan='+encodeURIComponent(b.dataset.plan);
  }));

  const listMount=document.querySelector('#myListMount');
  if(listMount){
    const list=JSON.parse(localStorage.getItem('sixflixList')||'[]');
    listMount.innerHTML=list.length?list.map((t,i)=>`<article class="card"><div class="art" style="background-image:url('assets/card-${(i%8)+1}.svg')"></div><div class="card-content"><div class="card-title">${t}</div><div class="card-meta"><span>Saved</span><span>6FLIX</span></div></div></article>`).join(''):`<div style="grid-column:1/-1;padding:50px;border:1px dashed #394653;border-radius:16px;text-align:center;color:#9ba6b0">Your list is empty. Add shows, news or GRL content using the “My List” button.</div>`;
  }
});
