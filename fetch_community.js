const fs = require('fs');
const https = require('https');
const path = require('path');

const screen = { 
  name: 'community-collaboration', 
  url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2QyOGQwNWIxMjM0OTQyOGJhZDIxN2RmY2IwOTRjYzZkEgsSBxC7zp7T4R0YAZIBJAoKcHJvamVjdF9pZBIWQhQxNDI5MTA5MTU5MTY3OTQyMTc5Mg&filename=&opi=89354086' 
};

const downloadDir = path.join(__dirname, 'tmp_screens');
if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir);

const file = fs.createWriteStream(path.join(downloadDir, `${screen.name}.html`));
https.get(screen.url, response => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log(`Downloaded ${screen.name}.html`);
  });
}).on('error', err => {
  console.error(`Error downloading ${screen.name}:`, err.message);
});
