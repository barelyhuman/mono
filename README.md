# mono

Simple mono repo setups as a base for a generic

- Shared
- Components
- Web
- Core (Backend)

folder structure

## Flavors

- dev - generic build everything to older node(cjs) compatible code
- esm - use modules (esm) and no backward compiling to have a pure esm setup
- dev-modified - same as dev but uses `react-rewired` to avoid having to rebuild components package again and again

## Getting Started

The repository uses Yarn workspaces to handle the packages right now and you can do the following to setup the base development environment.

- Start by cloning the repo and switching to the needed flavor or download the `tar.gz` of the respective flavor. 
- Then delete the `.git` folder if you cloned , don't have to delete if you downloaded the tarball.
```sh
$ rm -rf .git
```
- Now make sure you have `yarn` installed and then just run 
```sh
$ yarn  ​
```

## Documentations

### dev flavor 

This is a generic flavor that most people could use if you are moving code from older node version , basically < v11 , as those versions of node don't support ESM (EcmaScript Modules), the setup comes with individual build commands for each package and an overall build if needed, the individual builds are needed for the `shared` and `components` packages to work with the web and core setup, since you need to convert them into cjs before it can be used. 

### esm flavor 

This is the preferred way of going ahead if you are building a new project and have no dependencies on older node versions and can start with the latest LTS which supports modules. This is a pure module based approach and you don't need any additional build setup for the `shared` and `components` steps as they are all modules and will be imported as such in the `core` and `web` projects, with the exception of components since they need to be converted to JS from JSX

### dev-modified 

This is an optional version that I included since people might not want to move to a ESM setup but still want the `components` and `web` to work in sync with each other without having to rebuild the components every time you make a change, or you could just leave it in watch mode `yarn shared:build --watch` but this adds `react-app-rewired` to modify webpack to make sure it compiles the components during both dev and building automatically.

