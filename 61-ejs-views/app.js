import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsPath = join(__dirname, 'public');
const viewsPath = join(__dirname, 'views');

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));

const navLinks = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
];

const socialLinks = [
  { href: 'https://github.com/JoeZlonicky', text: 'GitHub' },
  { href: 'mailto:example@gmail.com', text: 'email' },
];

app.get('/', (req, res) => {
  res.render('index', { navLinks: navLinks, socialLinks: socialLinks, message: 'EJS rocks!' });
});

app.get('/about', (req, res) => {
  res.render('about', { navLinks: navLinks, socialLinks: socialLinks, message: 'Well, I made this website!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Open at http://localhost:${PORT}`));
