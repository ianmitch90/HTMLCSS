/* Progressive enhancement for the responsive Grid composition.
   Real browser viewport: an iframe has a CSS layout width independent of the
   parent's actual physical screen. We ONLY scale its visible output to fit.
   Native @media queries inside preview.html handle the reflow.
   This script does not place any of the Grid tiles itself. */
const viewer=document.querySelector('[data-grid-viewer]');
if(viewer){
  const tablist=viewer.querySelector('[data-grid-tabs]');
  const tabs=[...viewer.querySelectorAll('[role="tab"]')];
  const panels=[...viewer.querySelectorAll('[role="tabpanel"]')];
  const stages=[...viewer.querySelectorAll('[data-grid-stage]')];
  const slider=viewer.querySelector('#grid-desktop-width');
  const output=viewer.querySelector('#grid-desktop-output');
  function fit(stage){
    if(stage.hidden || stage.closest('[hidden]'))return;
    const mount=stage.querySelector('[data-grid-mount]');
    const frame=stage.querySelector('[data-grid-frame]');
    const iframe=stage.querySelector('iframe');
    const width=Number(stage.dataset.viewportWidth);
    const height=Number(stage.dataset.viewportHeight);
    const borders=parseFloat(getComputedStyle(frame).borderLeftWidth)+parseFloat(getComputedStyle(frame).borderRightWidth);
    frame.style.width=(width+borders)+'px';
    iframe.style.width=width+'px';
    iframe.style.height=height+'px';
    const computed=getComputedStyle(stage);
    const usable=Math.max(1,stage.clientWidth-parseFloat(computed.paddingLeft)-parseFloat(computed.paddingRight)-4);
    const scale=Math.min(1,usable/frame.offsetWidth);
    mount.style.width=Math.ceil(frame.offsetWidth*scale)+'px';
    mount.style.height=Math.ceil(frame.offsetHeight*scale)+'px';
    frame.style.transform='scale('+scale+')';
    stage.parentElement.querySelector('[data-scaled-note]').textContent=scale<.999?'Scaled to '+Math.round(scale*100)+'% to fit the available space.':'Shown at full size.';
  }
  function select(tab,focus=false){
    for(const item of tabs){
      const active=item===tab;
      item.setAttribute('aria-selected',String(active));
      item.tabIndex=active?0:-1;
      viewer.querySelector('#'+item.getAttribute('aria-controls')).hidden=!active;
    }
    if(focus)tab.focus();
    requestAnimationFrame(()=>stages.forEach(fit));
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>select(tab));
    tab.addEventListener('keydown',e=>{
      let next;
      if(e.key==='ArrowRight')next=(index+1)%tabs.length;
      else if(e.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;
      else if(e.key==='Home')next=0;
      else if(e.key==='End')next=tabs.length-1;
      else return;
      e.preventDefault();
      select(tabs[next],true);
    });
  });
  slider?.addEventListener('input',()=>{
    const width=Number(slider.value);
    output.value=width+'px';
    output.textContent=width+'px';
    const desktop=viewer.querySelector('[data-device="desktop"]');
    desktop.dataset.viewportWidth=String(width);
    viewer.querySelector('[data-width-label="desktop"]').textContent=width+'px';
    fit(desktop);
  });
  if('ResizeObserver' in window){
    const observer=new ResizeObserver(()=>stages.forEach(fit));
    stages.forEach(stage=>observer.observe(stage));
  }else{
    window.addEventListener('resize',()=>stages.forEach(fit),{passive:true});
  }
  tablist.hidden=false;
  select(tabs[0]);
}
