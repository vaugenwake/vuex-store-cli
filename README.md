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
