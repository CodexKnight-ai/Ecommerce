const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public';
const outputDir = 'public/optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.[^.]+$/, '.webp'));
      
      await sharp(inputPath)
        .webp({ quality: 80 })
        .resize(1200, null, { withoutEnlargement: true })
        .toFile(outputPath);
      
      console.log(`Optimized: ${file}`);
    }
  }
}

optimizeImages().catch(console.error); 