import path from 'path';
import { fileURLToPath } from 'url';
import {generateDocs} from "./generateMdxDoc/gererateMdxFile.mjs";
import {createMetaJson} from "./createMetaJson.mjs";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const startDir = path.join(__dirname, '../../packages/utils/src');
const includeExtensions = ['.ts'];
const excludeExtensions = ['.d.ts'];
const ignorePrefix = 'SHOPLFLOW_DOCS_IGNORE';

const outputDirectory = './pages/utils';

(async () => {
    await generateDocs(startDir, includeExtensions, excludeExtensions, ignorePrefix, outputDirectory);
    await createMetaJson(outputDirectory);
})();

