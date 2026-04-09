const fs = require('fs');
const path = require('path');

const targetFiles = [
    'src/app/page.tsx',
    'src/app/about-us/page.tsx',
    'src/app/services/page.tsx',
    'src/app/hub/page.tsx',
    'src/app/communities/page.tsx',
    'src/app/collaboration/page.tsx'
];

targetFiles.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (!fs.existsSync(fullPath)) {
        console.log(`Skipping ${file}`);
        return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if we already imported FadeIn to avoid duplicates
    if (content.includes('FadeIn')) {
        console.log(`Already animated ${file}`);
        return;
    }

    // Prepare import path (adjust relative path based on file depth)
    let depth = file.split('/').length - 2; // e.g. src/app/page.tsx -> 2 - 2 = 0
    // Actually, src/app is 2 deep from project root. components is at src/components
    // From src/app/page.tsx it's ../components
    // From src/app/about-us/page.tsx it's ../../components
    let importPath = depth === 1 ? '../components/animations/FadeIn' : '../../components/animations/FadeIn';
    if(file === 'src/app/page.tsx') importPath = '../components/animations/FadeIn';
    
    let imports = `import { FadeIn } from '${importPath}';\n`;
    
    // Inject import after React import
    content = content.replace(/import React from 'react';/, `import React from 'react';\n${imports}`);

    // We will do a generic replacement of <header> and <section> tags
    // This is safe because these files are mostly flat output from our generator
    
    // Replace <header ...> with <FadeIn><header ...>
    content = content.replace(/(<header\b[^>]*>)/g, '<FadeIn>$1');
    // Replace </header> with </header></FadeIn>
    content = content.replace(/(<\/header>)/g, '$1</FadeIn>');
    
    // Replace <section ...> with <FadeIn delay={0.2}><section ...>
    // We parse section one by one to add staggered delay if we wanted but let's just do a clean fade
    content = content.replace(/(<section\b[^>]*>)/g, '<FadeIn delay={0.1}>$1');
    content = content.replace(/(<\/section>)/g, '$1</FadeIn>');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Injected animations into ${file}`);
});
