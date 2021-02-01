const state = require('../methods/state');
const actions = require('../methods/action');
const getters = require('../methods/getters');
const mutations = require('../methods/mutations');
const genModule = require('../methods/module');

const dir = require('../helpers/dir');

module.exports = function(template_path, current_path, name, namespace = false) {
    
    dir(current_path, name);
    actions(template_path, current_path + '/' + name);
    getters(template_path, current_path + '/' + name);
    mutations(template_path, current_path + '/' + name);
    state(template_path, current_path + '/' + name);
    genModule(template_path, current_path + '/' + name, namespace);

}