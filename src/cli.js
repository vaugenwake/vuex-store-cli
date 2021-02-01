#!/usr/bin/env node

import makemodule from "./make/makemodule";
import makeStore from "./make/makeStore";
import action from "./methods/action";
import getters from "./methods/getters";
import mutations from "./methods/mutations";
import state from "./methods/state";

const path = require("path");
const yargs = require("yargs");

const isNotEmpty = require("./helpers/isNotEmpty");

let CURR_DIR = process.cwd();
const template_path = path.join(__dirname, '../templates');

export function cli() {
    const options = yargs.usage("Usage: -t <type> -n <name> --ns <namespace>")
    .option('p', {alias: 'path', describe: 'location to generate items', type: 'string', demandOption: false})
    .option('t', {alias: 'type', describe: 'module, store, actions, mutations, getters, state', type: 'string', demandOption: true})
    .option('n', {alias: 'name', describe: 'Name for module to be generated', type: 'string', demandOption: false})
    .option('ns', {alias: 'namespace', describe: 'Use if you want to namespace a module', type: 'boolean', demandOption: false})
    .argv;

    if(isNotEmpty(options.p)) {
        var newPath = path.join(CURR_DIR, options.p);
        CURR_DIR = newPath;
    }

    if(isNotEmpty(options.t)) {
        switch(options.t) {
            case 'module':
                if(isNotEmpty(options.n)) {
                    makemodule(template_path, CURR_DIR, options.n, options.ns)
                }
                break;
            case 'store':
                makeStore(template_path, CURR_DIR)
                break;
            case 'actions':
                action(template_path, CURR_DIR)
                break;
            case 'getters':
                getters(template_path, CURR_DIR)
                break;
            case 'mutations':
                mutations(template_path, CURR_DIR)
                break;
            case 'state':
                state(template_path, CURR_DIR)
                break;
        }
    }
}