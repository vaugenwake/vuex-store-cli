const copy = require('../helpers/copy');

module.exports = function(template_path, current_path) {
    
    copy('store.stub.js', 'store.js', template_path, current_path);

}