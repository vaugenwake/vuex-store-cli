![Publishing](https://github.com/vaugenwake/vuex-store-cli/workflows/Node.js%20Package/badge.svg)

# vuex-store-cli
CLI Utility to make generating Vuex store components quicker and easier.

### Install
`npm install -g vx-store-generator`

### Usage
```
vx-store -t <type> -n <name>

Options:
      --help             Show help                                     [boolean]
      --version          Show version number                           [boolean]
  -p, --path             location to generate items                     [string]
  -t, --type             module, store, actions, mutations, getters, state
                                                             [string] [required]
  -n, --name             Name for module to be generated                [string]
      --ns, --namespace  Use if you want to namespace a module         [boolean]
```

#### Creating a fresh store
`vx-store -t store`

#### Creating a new store module
`vx-store -t module -n [module_name_here] -p <point path if needed> --ns <add flag to namespace module>`

#### Create a new: state, actions, getter or mutations file
`vx-store -t [actions,getters,mutations,state]`
This will generate a new file in the current directory with a name like: `actions.js`

### TODO:
- Add validation to inputs
- Parse names to remove all spaces and standarize type format
- Add parameter to make file types with custom names
- Add tests!
