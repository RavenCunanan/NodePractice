const path = require('path');

// Manually define your Desktop path (adjust for macOS/Linux if needed)
const desktopPath = path.join('C:', 'Users', 'YourUsername', 'Desktop');

// List of files on the Desktop
const files = ['good-morning.PNG', 'screenshot021425.JPG', 'drawing.png', 'haircut.WEBP', 'meme.GIF'];

// List of valid image file extensions (both lowercase & uppercase)
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.PNG', '.JPG', '.JPEG', '.GIF', '.WEBP'];

// Find the first image file
const firstImage = files.find(file => imageExtensions.includes(path.extname(file)));

if (firstImage) {
  console.log('First image file found:', path.join(desktopPath, firstImage));
} else {
  console.log('No image files found!');
}
