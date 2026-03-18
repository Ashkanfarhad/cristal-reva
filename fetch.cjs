const https = require('https');
https.get('https://cristalreva.netlify.app/assets/index-C3-OHYoU.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const classNames = data.match(/className:\s*"([^"]+)"/g);
    if(classNames) {
      console.log("ClassNames:");
      console.log(classNames.slice(0, 50).join('\n'));
    }
    const links = data.match(/href:\s*"([^"]+)"/g);
    if(links) {
      console.log("Links:");
      console.log(links.join('\n'));
    }
    const texts = data.match(/>([^<]+)</g);
    if(texts) {
      console.log("Texts:");
      console.log(texts.slice(0, 50).join('\n'));
    }
  });
});
