document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear();});

// Keep the final-year MSc performance consistent with the verified CV record.
document.querySelectorAll('.edu-metric strong').forEach(el=>{
  if(el.textContent.trim()==='7.8 / 8.0') el.textContent='7.6 / 8.0';
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.1,rootMargin:'0px 0px -30px'});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Keep disclosure interaction calm: only one development item opens at a time.
document.querySelectorAll('.timeline-clean details').forEach(item=>{
  item.addEventListener('toggle',()=>{
    if(!item.open)return;
    document.querySelectorAll('.timeline-clean details[open]').forEach(other=>{
      if(other!==item)other.open=false;
    });
  });
});
