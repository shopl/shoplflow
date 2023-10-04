import fs from "fs";
import path from "path";
import {getFiles} from "./generateMdxDoc/findFiles.mjs";
export const createMetaJson = async (rootDir) => {
    const groupedByDir = {};
    const allFiles = getFiles(rootDir, ['.mdx']);

    allFiles.forEach((file) => {
        const dir = path.dirname(file);
        const fileNameWithoutExtension = path.basename(file, path.extname(file));

        if (!groupedByDir[dir]) {
            groupedByDir[dir] = [];
        }

        groupedByDir[dir].push(fileNameWithoutExtension);
    });

    Object.keys(groupedByDir).forEach((dir) => {
        const metaFilePath = path.join(dir, '_meta.json');
        const metaData = {};

        groupedByDir[dir].forEach((fileNameWithoutExtension) => {
            metaData[fileNameWithoutExtension] = {
                title: fileNameWithoutExtension
            };
        });

        fs.writeFileSync(metaFilePath, JSON.stringify(metaData, null, 2));
    });
};
