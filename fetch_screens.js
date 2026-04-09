const fs = require('fs');
const https = require('https');
const path = require('path');

const screens = [
  { name: 'home', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzRmNjJhOTRlYjQxNTRhYzliNzk0MTI4MTQ0MGRmZDI4EgsSBxC7zp7T4R0YAZIBJAoKcHJvamVjdF9pZBIWQhQxNDI5MTA5MTU5MTY3OTQyMTc5Mg&filename=&opi=89354086' },
  { name: 'about', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzYwNjM4YWI4MDlmMjQ1MzJhNDdmMTE1ODFjMTRjNGFjEgsSBxC7zp7T4R0YAZIBJAoKcHJvamVjdF9pZBIWQhQxNDI5MTA5MTU5MTY3OTQyMTc5Mg&filename=&opi=89354086' },
  { name: 'hub', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2ZmNjgxODYxZjE4MzRhODliMjQ3NzAxNDdhMzQ3MTg4EgsSBxC7zp7T4R0YAZIBJAoKcHJvamVjdF9pZBIWQhQxNDI5MTA5MTU5MTY3OTQyMTc5Mg&filename=&opi=89354086' },
  { name: 'services', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2I0MzhkZGU2NDA0NzQyOTk5Mzc0ZDI1MDk1ZmVhNWM5EgsSBxC7zp7T4R0YAZIBJAoKcHJvamVjdF9pZBIWQhQxNDI5MTA5MTU5MTY3OTQyMTc5Mg&filename=&opi=89354086' }
];

const downloadDir = path.join(__dirname, 'tmp_screens');
if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir);

screens.forEach(screen => {
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
});
