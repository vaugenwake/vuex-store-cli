/**
 * Copy a stub file into path from file system
 */

const fs = require('fs');

module.exports = function(stub_name, filename, template_path, current_path, encoding = 'utf8') {
    const fileToCopy = fs.readFileSync(template_path + '/' + stub_name);

    if(fileToCopy !== null) {
        const writePath = `${current_path}/${filename}`
        try {
            fs.writeFileSync(writePath, fileToCopy, encoding);
        } catch(error) {
            console.log(error);
        }
    }
}