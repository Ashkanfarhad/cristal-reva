const https = require('https');

https.get('https://ibb.co/bMW25c9V', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/https:\/\/i\.ibb\.co\/[^"']+/);
    if (match) {
      console.log(match[0]);
    } else {
      console.log("Not found");
    }
  });
});
