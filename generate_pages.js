const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'tmp_screens', 'community-collaboration.html');
const htmlSource = fs.readFileSync(htmlPath, 'utf8');

// Simple parser functions (this assumes well-formatted HTML blocks as viewed earlier)
const extractBlock = (source, startTag, endTag) => {
    const startIdx = source.indexOf(startTag);
    if (startIdx === -1) return '';
    const endIdx = source.indexOf(endTag, startIdx) + endTag.length;
    return source.substring(startIdx, endIdx);
}

const formatJSX = (html) => {
    let jsx = html;
    jsx = jsx.replace(/\bclass="/g, 'className="');
    jsx = jsx.replace(/<img([^>]*?)(?<!\/)>(\s*(?:<\/img>)?)/gi, '<img$1 />');
    jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />');
    jsx = jsx.replace(/<br([^>]*?)(?<!\/)>/gi, '<br$1 />');
    jsx = jsx.replace(/<hr([^>]*?)(?<!\/)>/gi, '<hr$1 />');
    jsx = jsx.replace(/<!--(.*?)-->/g, '{/*$1*/}');
    // For specific SVG attributes (if present, though we might not have any here based on previous view):
    jsx = jsx.replace(/viewbox/g, 'viewBox').replace(/stroke-width/g, 'strokeWidth');
    return jsx;
}

const heroSection = extractBlock(htmlSource, '<!-- Hero Section -->', '</header>');
const communitiesSection = extractBlock(htmlSource, '<!-- Community Segments -->', '</section>');
const contactSection = extractBlock(htmlSource, '<!-- Contact/Inquiry Section -->', '</section>');

const communitiesJSX = formatJSX(heroSection + '\n' + communitiesSection);
const collaborationJSX = formatJSX(contactSection);

const communitiesPageCode = `import React from 'react';

export default function CommunitiesPage() {
  return (
    <main className="pt-20">
      ${communitiesJSX}
    </main>
  );
}
`;

const collaborationPageCode = `import React from 'react';

export default function CollaborationPage() {
  return (
    <main className="pt-20 min-h-screen bg-surface">
      <header className="pt-16 pb-8 text-center px-8">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-4 tracking-tight uppercase">Let's Collaborate</h1>
        <p className="text-on-surface-variant font-body max-w-2xl mx-auto">Fill out the form below to begin a project or query.</p>
      </header>
      ${collaborationJSX}
    </main>
  );
}
`;

// Write /communities
const commDir = path.join(__dirname, 'src', 'app', 'communities');
if(!fs.existsSync(commDir)) fs.mkdirSync(commDir, {recursive: true});
fs.writeFileSync(path.join(commDir, 'page.tsx'), communitiesPageCode);

// Write /collaboration
const collabDir = path.join(__dirname, 'src', 'app', 'collaboration');
if(!fs.existsSync(collabDir)) fs.mkdirSync(collabDir, {recursive: true});
fs.writeFileSync(path.join(collabDir, 'page.tsx'), collaborationPageCode);

console.log('Pages generated successfully!');
