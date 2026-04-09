const fs = require('fs');
const path = require('path');

const convertToJSX = (html) => {
    // Extract everything between <main> and </main>
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (!mainMatch) return '<div className="min-h-screen">Content not found</div>';
    
    let jsx = mainMatch[1];
    
    // Replace class= with className=
    jsx = jsx.replace(/\bclass="/g, 'className="');
    
    // Make sure img tags are closed properly
    jsx = jsx.replace(/<img([^>]*?)(?<!\/)>(\s*(?:<\/img>)?)/gi, '<img$1 />');
    
    // Make sure input tags are closed properly
    jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />');
    
    // Make sure br, hr tags are closed properly
    jsx = jsx.replace(/<br([^>]*?)(?<!\/)>/gi, '<br$1 />');
    jsx = jsx.replace(/<hr([^>]*?)(?<!\/)>/gi, '<hr$1 />');

    // Make sure all style="" are removed (since I don't want to convert them to objects, there shouldn't be many anyway)
    // Actually if there are any style="" it might break. Let's convert them to empty object or just strip.
    // I noticed style="" in the head, but in <main> maybe none. Let's just do a basic strip if any.
    jsx = jsx.replace(/style="[^"]*"/g, '');

    return jsx;
};

const screens = [
    { name: 'home', file: 'page.tsx', dir: '' },
    { name: 'about', file: 'page.tsx', dir: 'about-us' },
    { name: 'hub', file: 'page.tsx', dir: 'hub' },
    { name: 'services', file: 'page.tsx', dir: 'services' }
];

const srcDir = path.join(__dirname, 'tmp_screens');
const appDir = path.join(__dirname, 'src', 'app');

screens.forEach(screen => {
    const htmlPath = path.join(srcDir, `${screen.name}.html`);
    if (!fs.existsSync(htmlPath)) {
        console.log(`Skipping ${screen.name}.html`);
        return;
    }
    const html = fs.readFileSync(htmlPath, 'utf8');
    const jsxContent = convertToJSX(html);
    
    const outDir = path.join(appDir, screen.dir);
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }
    
    const template = `import React from 'react';

export default function ${screen.name.charAt(0).toUpperCase() + screen.name.slice(1)}Page() {
  return (
    <main className="pt-20">
      ${jsxContent}
    </main>
  );
}
`;
    fs.writeFileSync(path.join(outDir, screen.file), template);
    console.log(`Wrote ${path.join(screen.dir, screen.file)}`);
});
