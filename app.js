const qs=s=>document.querySelector(s), qsa=s=>[...document.querySelectorAll(s)];
function openModal(id){qs('#'+id)?.classList.add('open')} function closeModal(id){qs('#'+id)?.classList.remove('open')}
qsa('[data-close]').forEach(b=>b.addEventListener('click',()=>closeModal(b.dataset.close)));
qsa('.floating').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')}));
qsa('[data-watch]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openModal('watchModal')}));
qsa('[data-info]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openModal('infoModal')}));
qsa('[data-search]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openModal('searchModal');setTimeout(()=>qs('#searchInput')?.focus(),80)}));
const si=qs('#searchInput'); if(si) si.addEventListener('input',()=>{const term=si.value.trim();qs('#searchHint').textContent=term?`Showing results for “${term}”`:'Search 6FLIX';});
