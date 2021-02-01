const state = require('../methods/state');
const actions = require('../methods/action');
const getters = require('../methods/getters');
const mutations = require('../methods/mutations');
const store = require('../methods/store');

module.exports = function(template_path, current_path) {
    
    actions(template_path, current_path);
    getters(template_path, current_path);
    mutations(template_path, current_path);
    state(template_path, current_path);
    store(template_path, current_path);

}