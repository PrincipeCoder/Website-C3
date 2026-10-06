const fs = require('fs');
const files = ['C3Conf.jsx', 'C3TF.jsx', 'Contacto.jsx', 'Directors.jsx', 'Events.jsx', 'Home.jsx', 'Login.jsx', 'Nosotros.jsx', 'Banner.jsx', 'SemesterCard.jsx'];
const paths = files.map(f => {
  if (f === 'Banner.jsx' || f === 'SemesterCard.jsx') return 'src/components/organisms/' + f;
  return 'src/components/pages/' + f;
});

for (let p of paths) {
  try {
    let content = fs.readFileSync(p, 'utf8');
    
    // Strip BOM
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    
    // Convert mojibake back to UTF-8
    const map = {
      'Ã¡': 'á',
      'Ã©': 'é',
      'Ã­': 'í',
      'Ã³': 'ó',
      'Ãº': 'ú',
      'Ã±': 'ñ',
      'Ã ': 'Á',
      'Ã‰': 'É',
      'Ã“': 'Ó',
      'Ãš': 'Ú',
      'Ã‘': 'Ñ',
      'Â¿': '¿',
      'Â¡': '¡',
      'Ã¼': 'ü'
    };
    
    for (let bad in map) {
      content = content.split(bad).join(map[bad]);
    }
    
    fs.writeFileSync(p, content, 'utf8');
    console.log('Fixed ' + p);
  } catch (e) {
    console.error(e.message);
  }
}
