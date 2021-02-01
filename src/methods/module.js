const copy = require('../helpers/copy');

module.exports = function(template_path, current_path, namespace) {
    
    if(!namespace) {
        copy('module.stub.js', 'index.js', template_path, current_path);
    } else {
        copy('module-ns.stub.js', 'index.js', template_path, current_path);
    }

}