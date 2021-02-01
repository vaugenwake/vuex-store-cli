const copy = require('../helpers/copy');

module.exports = function(template_path, current_path) {
    
    copy('mutations.stub.js', 'mutations.js', template_path, current_path);

}