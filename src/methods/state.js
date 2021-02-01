const copy = require('../helpers/copy');

module.exports = function(template_path, current_path) {
    
    copy('state.stub.js', 'state.js', template_path, current_path);

}