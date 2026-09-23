const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generate() {
  const resumePath = path.join(__dirname, '..', 'public', 'resume.html');
  const outPath = path.join(__dirname, '..', 'public', 'resume.pdf');

  if (!fs.existsSync(resumePath)) {
    console.error('resume.html not found at', resumePath);
    process.exit(1);
  }

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('file://' + resumePath, { waitUntil: 'networkidle0' });
  await page.pdf({ path: outPath, format: 'A4', printBackground: true, margin: { top: '20mm', bottom: '20mm' } });
  await browser.close();
  console.log('Generated', outPath);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
