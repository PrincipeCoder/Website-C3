const fs = require('fs');

const files = [
  'C3Conf.jsx', 'C3TF.jsx', 'Contacto.jsx', 'Directors.jsx', 'Events.jsx', 'Home.jsx', 'Login.jsx', 'Nosotros.jsx', 
  'Banner.jsx', 'SemesterCard.jsx', '../organisms/StaticNavbar.jsx'
];
const paths = files.map(f => {
  if (f === 'Banner.jsx' || f === 'SemesterCard.jsx' || f.includes('Navbar')) return 'src/components/organisms/' + f.replace('../organisms/', '');
  return 'src/components/pages/' + f;
});

for (let p of paths) {
  if (!fs.existsSync(p)) continue;
  let content = fs.readFileSync(p, 'utf8');

  content = content.replace(/Ǹ/g, 'é');
  content = content.replace(/ǭ/g, 'á');
  content = content.replace(/ǧ/g, 'ú');
  content = content.replace(/\uFFFD"N/g, 'IÓN');
  content = content.replace(/\uFFFD"C/g, 'ÓC');
  content = content.replace(/\uFFFDsnete/g, 'Únete');
  content = content.replace(/\uFFFD\?O/g, '❌');
  content = content.replace(/\uFFFDo\./g, '👀.');
  content = content.replace(/M\uFFFD\?S/g, 'MÁS');
  content = content.replace(/RESE\uFFFD'AS/g, 'RESEÑAS');
  content = content.replace(/QU\uFFFD%/g, 'QUÉ');
  
  content = content.replace(/\uFFFD\?re/g, 'Áre');
  content = content.replace(/\uFFFDre/g, 'Áre');
  content = content.replace(/\uFFFD\?E/g, '¿E');
  content = content.replace(/\uFFFD\?Q/g, '¿Q');
  content = content.replace(/\uFFFDQ/g, '¿Q');
  
  content = content.replace(/\uFFFD\?/g, '¿');
  content = content.replace(/\uFFFD!/g, '¡');
  
  content = content.replace(/cci\uFFFDn/g, 'cción');
  content = content.replace(/aci\uFFFDn/g, 'ación');
  content = content.replace(/esi\uFFFDn/g, 'esión');
  content = content.replace(/usi\uFFFDn/g, 'usión');
  content = content.replace(/isi\uFFFDn/g, 'isión');
  content = content.replace(/c\uFFFDn/g, 'ción');
  content = content.replace(/r\uFFFDn/g, 'rón');
  
  content = content.replace(/f\uFFFDa/g, 'fía');
  content = content.replace(/g\uFFFDa/g, 'gía');
  content = content.replace(/r\uFFFDa/g, 'ría');
  content = content.replace(/m\uFFFDa/g, 'mía');
  content = content.replace(/d\uFFFDa/g, 'día');
  content = content.replace(/n\uFFFDa/g, 'nía');

  content = content.replace(/dise\uFFFDado/g, 'diseñado');
  content = content.replace(/A\uFFFDn/g, 'Aún');
  content = content.replace(/aqu\uFFFD/g, 'aquí');
  content = content.replace(/\uFFFDMensaje/g, '¡Mensaje');
  content = content.replace(/\uFFFDndice/g, 'índice');
  content = content.replace(/T\uFFFDtulo/g, 'Título');
  content = content.replace(/Bot\uFFFDn/g, 'Botón');

  // Let's do Directors explicitly:
  content = content.replace(/Secretar\uFFFDa General/g, 'Secretaría General');
  content = content.replace(/Asuntos Acad\uFFFDmicos/g, 'Asuntos Académicos');
  content = content.replace(/Proyectos e Investigaci\uFFFDn/g, 'Proyectos e Investigación');
  content = content.replace(/Relaciones P\uFFFDblicas/g, 'Relaciones Públicas');
  content = content.replace(/Econom\uFFFDa y Finanzas/g, 'Economía y Finanzas');

  fs.writeFileSync(p, content, 'utf8');
}
