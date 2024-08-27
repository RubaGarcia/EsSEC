import { createClient, ContentType } from 'contentful-management';
import fs from 'fs';
import path from 'path';

const contentfulSpaceId = 'k9voop8uf94b';
const contentfulEnvironmentId = 'master';
const contentfulManagementToken = 'CFPAT-fQQuxSBYTtwet9NZdCnEKh57X-IaxPnLomAeR-Fx2H4';

async function fetchContentTypes() {
    const client = createClient({
        accessToken: contentfulManagementToken,
    });

    const space = await client.getSpace(contentfulSpaceId);
    const environment = await space.getEnvironment(contentfulEnvironmentId);
    const contentTypes = await environment.getContentTypes();

    return contentTypes.items;
}

function generateInterface(contentType: ContentType) {
    const { name, fields } = contentType;

    const interfaceName = `I${name.replace(/\s+/g, '')}Fields`;
    const interfaceFields = fields
        .map((field) => {
            const fieldName = field.id;
            const fieldType = getFieldType(field.type);

            return `    ${fieldName}: ${fieldType};`;
        })
        .join('\n');

    return `export interface ${interfaceName} {\n${interfaceFields}\n}`;
}

function getFieldType(contentfulType: string): string {
    switch (contentfulType) {
        case 'Symbol':
        case 'Text':
            return 'string';
        case 'Number':
            return 'number';
        case 'Boolean':
            return 'boolean';
        case 'Date':
            return 'Date';
        case 'Link':
            return 'Entry<any>';
        case 'Array':
            return 'any[]';
        case 'RichText':
            return 'Document';
        default:
            return 'any';
    }
}

async function generateContentTypeDefinitions() {
    const contentTypes = await fetchContentTypes();
    const interfaces = contentTypes.map(generateInterface);
    

    const outputPath = path.join('C:\\Users\\IncentroUser\\EsSEC\\frontend\\src\\types\\', 'AutoGenTypes.d.ts');
    fs.writeFileSync(outputPath, interfaces.join('\n\n'));
    console.log(`Generated Contentful types at ${outputPath}`);
}

generateContentTypeDefinitions().catch(console.error);
