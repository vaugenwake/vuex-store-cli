const copy = require('../helpers/copy');

module.exports = function(template_path, current_path) {
    
    copy('getters.stub.js', 'getters.js', template_path, current_path);

}