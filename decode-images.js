import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

try {
  const cristalB64 = fs.readFileSync(path.join(assetsDir, 'cristal-reva-logo.b64.txt'), 'utf8');
  fs.writeFileSync(path.join(assetsDir, 'cristal-reva-logo.jpg'), Buffer.from(cristalB64, 'base64'));
  console.log('Successfully decoded cristal-reva-logo.jpg');
} catch (e) {
  console.error('Error decoding cristal-reva-logo.jpg:', e.message);
}

try {
  const chaplinB64 = fs.readFileSync(path.join(assetsDir, 'chaplin-logo.b64.txt'), 'utf8');
  fs.writeFileSync(path.join(assetsDir, 'chaplin-logo.jpg'), Buffer.from(chaplinB64, 'base64'));
  console.log('Successfully decoded chaplin-logo.jpg');
} catch (e) {
  console.error('Error decoding chaplin-logo.jpg:', e.message);
}
