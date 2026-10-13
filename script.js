// Mejoras progresivas: el contenido sigue visible sin JavaScript.
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const text = (selector, value) => { $(selector).textContent = value; };
const press = (selector, active) => $$(selector).forEach(button => {
  button.setAttribute('aria-pressed', String(button === active));
});
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .04 });
  $$('.concept-card, .diagram, .section-heading').forEach(element => {
    element.classList.add('will-reveal'); observer.observe(element);
  });
}
// Un solo tokenizador preserva el texto y evita insertar HTML del código fuente.
const token = /(\/\/[^\n]*|#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:const|let|await|async|import|from|return|if|else|new|true|false|try|catch|while)\b|\b\d+(?:\.\d+)?\b)/g;
$$('code[data-language]').forEach(element => {
  const source = element.textContent, fragment = document.createDocumentFragment();
  let cursor = 0;
  for (const match of source.matchAll(token)) {
    fragment.append(document.createTextNode(source.slice(cursor, match.index)));
    const span = document.createElement('span');
    const value = match[0];
    span.className = 'syntax-' + (/^(\/\/|#)/.test(value) ? 'comment' : /^["']/.test(value) ? 'string' : /^\d/.test(value) ? 'number' : 'keyword');
    span.textContent = value; fragment.append(span); cursor = match.index + value.length;
  }
  fragment.append(document.createTextNode(source.slice(cursor))); element.replaceChildren(fragment);
});


const safety = '10492 87361 20548 39170 64285 01936\n75104 28693 43017 96258 10374 58620';
let changed = false, transport = false, stage = 0;
text('#safety-a', safety); text('#safety-b', safety);
$('#safety-change').addEventListener('click', () => {
  changed = !changed; text('#safety-b', changed ? safety.replace('58620', '58621') : safety);
  $('#safety-b').classList.toggle('changed', changed);
  $('#safety-change').setAttribute('aria-pressed', String(changed));
  text('#safety-change', changed ? 'Restaurar número de prueba' : 'Mostrar cambio de claves');
  text('#safety-result', 'Estado de prueba cambiado; podemos comparar ambas vistas.');
});
$('#safety-compare').addEventListener('click', () => {
  const equal = $('#safety-a').textContent === $('#safety-b').textContent;
  text('#safety-result', equal ? 'Coinciden los números ficticios. En Signal real confirmaríamos identidad por un canal confiable; este ejemplo no verifica a un contacto.' : 'No coinciden. Antes de enviar información sensible reconfirmamos identidad y contexto del cambio por un canal confiable.');
});
$('#message-layer').addEventListener('click', () => {
  transport = !transport; $('#message-layer').setAttribute('aria-pressed', String(transport));
  text('#message-layer', transport ? 'Ver perspectiva del receptor' : 'Ver perspectiva del transporte');
  text('#payload-view', transport ? 'Vista de transporte: [payload E2EE opaco · ilustración]\nTiempos, volumen y conexiones pueden ser observables según el actor.' : 'Vista del receptor: «Documento de prueba recibido.»');
});
const states = [
  ['Sin sesión', 'Las claves públicas identifican peers; las privadas permanecen en cada dispositivo.'],
  ['Inicio / UDP', 'A inicia el handshake hacia el endpoint autorizado de B. El tráfico exterior revela endpoints y tiempos.'],
  ['Respuesta autenticada', 'B responde; el diseño deriva claves de sesión y autentica el peer. Esta es una etapa conceptual, no captura real.'],
  ['Transporte cifrado', 'Paquetes IP viajan encapsulados en UDP. AllowedIPs asigna destinos y valida orígenes; los peers ven paquetes al descifrarlos.']
];
function renderHandshake() {
  text('#tunnel-state', states[stage][0]); text('#handshake-output', states[stage][1]);
  $$('.handshake-stages span').forEach((element, index) => element.classList.toggle('active', index <= stage));
  $('#tunnel-state').classList.toggle('established', stage === 3);
  $('#handshake-next').disabled = stage === 3;
  text('#handshake-next', stage === 3 ? 'Transporte activo / modelo' : 'Avanzar handshake');
}
$('#handshake-next').addEventListener('click', () => { stage = Math.min(stage + 1, 3); renderHandshake(); });
$('#handshake-reset').addEventListener('click', () => { stage = 0; renderHandshake(); });
renderHandshake();