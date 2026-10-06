const fs = require('fs');
const files = ['Contacto.jsx', 'Directors.jsx', 'Events.jsx', 'Home.jsx', 'Login.jsx', 'Nosotros.jsx', 'SemesterCard.jsx'];
const paths = files.map(f => {
  if (f === 'SemesterCard.jsx') return 'src/components/organisms/' + f;
  return 'src/components/pages/' + f;
});

for (let p of paths) {
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/max-w-7xl/g, 'max-w-[1600px]');
  content = content.replace(/max-w-6xl/g, 'max-w-[1400px]');
  content = content.replace(/max-w-5xl/g, 'max-w-7xl');
  content = content.replace(/max-w-4xl/g, 'max-w-6xl');
  fs.writeFileSync(p, content, 'utf8');
  console.log('Fixed ' + p);
}
