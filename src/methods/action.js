const copy = require('../helpers/copy');

module.exports = function(template_path, current_path) {
    
    copy('actions.stub.js', 'actions.js', template_path, current_path);

}