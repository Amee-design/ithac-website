const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/**/*.tsx');

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace missing alt tags by duplicating data-alt or adding empty alt if data-alt is missing
    let modified = false;
    
    // regex to find <img ...> that lacks an 'alt=' attribute
    content = content.replace(/<img([^>]*?)>/g, (match, inner) => {
        if (!/\balt=/.test(inner)) {
            // Check if there's a data-alt
            const dataAltMatch = inner.match(/data-alt="([^"]*)"/);
            const altText = dataAltMatch ? dataAltMatch[1] : 'image';
            modified = true;
            return `<img${inner} alt="${altText}">`;
        }
        return match;
    });

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed alts in ${file}`);
    }
});
