const fs = require('fs');

const fsp = fs.promises;

const FILE_LOCATION = 'src/database/data.json';

async function readFile() {
    try {
        const file = await fsp.readFile(FILE_LOCATION, (err, data) => {
            if (err) {
                return err;
            }
            return data;
        });

        if (file.length >= 0) {
            return JSON.parse(file);
        }

    } catch (err) {
        return false;
    }
}

async function writeFile() {
    try {
        await fsp.writeFile(FILE_LOCATION, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        return false;
    }
}

module.exports = {
    readFile,
    writeFile
}