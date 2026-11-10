const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

// Function to generate random 5-digit number
function generateRandomId() {
    return Math.floor(10000 + Math.random() * 90000);
}

// Function to process className attributes
function processClassNames(code) {
    const ast = parse(code, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript']
    });

    traverse(ast, {
        JSXOpeningElement(path) {
            const attributes = path.node.attributes;
            let classNameAttr = attributes.find(attr => 
                attr.type === 'JSXAttribute' && 
                attr.name.name === 'className'
            );

            if (classNameAttr) {
                const randomId = generateRandomId();
                
                // Add data-kte attribute
                attributes.push(
                    t.jsxAttribute(
                        t.jsxIdentifier('data-kte'),
                        t.stringLiteral(`kt-${randomId}`)
                    )
                );

                // Process existing className
                if (t.isStringLiteral(classNameAttr.value)) {
                    const classes = classNameAttr.value.value.split(' ');
                    const newClasses = classes.map(cls => 
                        cls ? `kt-${randomId} ${cls}` : ''
                    ).join(' ');
                    
                    classNameAttr.value = t.stringLiteral(newClasses);
                }
            }
        }
    });

    return generate(ast).code;
}

function processClassNameLine(line) {
    const randomId = generateRandomId();
    
    return line.replace(
        /(<[^>]*)(className=)(["]([^"]*)["])/g,
        (match, prefix, classNameAttr, quotes, classNames) => {
            // Check if already has kt- prefix
            if (classNames.trim().startsWith('kt-')) {
                return match;
            }
            
            // Add kt- prefix only once at the start of the className
            const processedClasses = `kt-${randomId} ${classNames}`.trim();
            
            // Add data-kte attribute if it doesn't exist
            if (!prefix.includes('data-kte')) {
                return `${prefix}data-kte="kt-${randomId}" ${classNameAttr}"${processedClasses}"`;
            } else {
                return `${prefix}${classNameAttr}"${processedClasses}"`;
            }
        }
    );
}

// Function to recursively process directories
async function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (file.endsWith('.tsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            
            // Only process if the file contains className
            if (content.includes('className')) {
                console.log(`Processing file: ${fullPath}`);
                try {
                    // Process file line by line
                    const lines = content.split('\n');
                    const processedLines = lines.map(line => 
                        line.includes('className') ? processClassNameLine(line) : line
                    );
                    const processedContent = processedLines.join('\n');
                    
                    fs.writeFileSync(fullPath, processedContent);
                    console.log(`Successfully processed: ${fullPath}`);
                } catch (error) {
                    console.error(`Error processing ${fullPath}:`, error);
                }
            }
        }
    }
}

// Main execution
async function main() {
    const srcPath = path.join(process.cwd(), 'src');
    
    // Install required dependencies
    console.log('Installing required dependencies...');
    require('child_process').execSync('npm install @babel/parser @babel/traverse @babel/generator @babel/types --save-dev');
    
    console.log('Starting to process files...');
    try {
        await processDirectory(srcPath);
        console.log('Successfully processed all files!');
    } catch (error) {
        console.error('Error:', error);
    }
}

main();