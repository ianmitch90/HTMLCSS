/* Loaded ONLY on pages with a live lab: a tiny example of per-page JavaScript.
   Each experiment changes CSS custom properties on an existing HTML element.
   The DOM structure stays declarative, inspectable and accessible. */
const labs = {
  grid: { columns: 3, gap: 12, render: ({columns,gap}) => `display: grid;\ngrid-template-columns: repeat(${columns}, 1fr);\ngap: ${gap}px;`, apply: (demo, v) => { demo.style.setProperty('--columns',v.columns);demo.style.setProperty('--gap',v.gap+'px'); } },
  flex: { direction: 'row', justify: 'center', gap: 12, render: ({direction,justify,gap}) => `display: flex;\nflex-direction: ${direction};\njustify-content: ${justify};\ngap: ${gap}px;`, apply: (demo,v) => { demo.style.setProperty('--direction',v.direction);demo.style.setProperty('--justify',v.justify);demo.style.setProperty('--gap',v.gap+'px'); } },
  color: { hue: 172, render: ({hue}) => `--brand: hsl(${hue} 55% 46%);\n--tint: color-mix(in oklch, var(--brand) 65%, white);`, apply: (demo,v) => demo.style.setProperty('--hue',v.hue) },
  spatial: { rotate: 25, render: ({rotate}) => `perspective: 700px;\ntransform: rotateY(${rotate}deg) rotateX(8deg);`, apply: (demo,v) => demo.style.setProperty('--rotate',v.rotate+'deg') },
  effects: { blur: 0, clip: 50, render: ({blur,clip}) => `filter: blur(${blur}px);\nclip-path: circle(${clip}% at center);\nmix-blend-mode: multiply;`, apply: (demo,v) => {demo.style.setProperty('--blur',v.blur+'px');demo.style.setProperty('--clip',v.clip+'%');} }
};
for (const lab of document.querySelectorAll('[data-lab]')) {
  const kind = lab.dataset.lab;
  const definition = labs[kind];
  if (!definition) continue;
  const values = Object.fromEntries(Object.entries(definition).filter(([key]) => !['render','apply'].includes(key)));
  const demo = lab.querySelector('[data-demo]');
  const controls = [...lab.querySelectorAll('[data-property]')];
  const code = lab.querySelector('[data-code]');
  function draw() {
    definition.apply(demo,values);
    code.textContent = definition.render(values);
    for (const control of controls) {
      const readout = lab.querySelector('[data-value="'+control.dataset.property+'"]');
      if (readout) readout.textContent = String(values[control.dataset.property]) + (control.dataset.unit || '');
    }
  }
  controls.forEach(control => control.addEventListener('input',() => {
    const prop=control.dataset.property;
    values[prop] = control.type === 'range' ? Number(control.value) : control.value;
    draw();
  }));
  lab.querySelector('[data-reset]')?.addEventListener('click', () => {
    for (const [key,value] of Object.entries(definition)) {
      if (key !== 'render' && key !== 'apply') values[key] = value;
    }
    controls.forEach(control => {control.value = String(values[control.dataset.property]);});
    draw();
  });
  draw();
}
const openDialog = document.querySelector('[data-dialog-open]');
const dialog = document.querySelector('#native-dialog');
openDialog?.addEventListener('click', () => dialog?.showModal());