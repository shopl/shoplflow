import path from 'path';
import { fileURLToPath } from 'url';
import {generateDocs} from "./generateMdxDoc/gererateMdxFile.mjs";
import {createMetaJson} from "./createMetaJson.mjs";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ignorePrefix = 'SHOPLFLOW_DOCS_IGNORE';



const packageInfo = [{
    startDir: path.join(__dirname, '../../packages/utils/src'),
    includeExtensions: ['.ts'],
    excludeExtensions: ['.d.ts'],
    outputDirectory: './pages/utils',
},{
    startDir: path.join(__dirname, '../../packages/base/src'),
    includeExtensions: ['.tsx', '.ts'],
    excludeExtensions: ['.styled.ts', '.types.ts', '.d.ts', 'stories.tsx', 'stories.ts'],
    outputDirectory: './pages/base',
}];

packageInfo.forEach(async ({startDir, includeExtensions, excludeExtensions, outputDirectory}) => {
    await generateDocs(startDir, includeExtensions, excludeExtensions, ignorePrefix, outputDirectory);
    await createMetaJson(outputDirectory);
});


