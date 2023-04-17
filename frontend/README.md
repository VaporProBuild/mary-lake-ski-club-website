# Description
This is the frontend of the brand that I am a co-founder of called 'Mary Lake Ski Club'. This idea was thought of many years ago and while on my co-op term I had the oppertunity to build a website. Having never done that before I jumped at the oppertunity and taught myself javascript and the vue framework. I made this project after my one at work was funushed and decided to use the same vue framework but use typescript insted.

# Next Steps
Eventually I would like to publish this to the web and connect a backend for payment and start to sell the products. I also want to look into third party services such as shopify becuase they may be more secure and trusted by customers.

# Authour
The sole creater of this project is Bradley Schaefer.

# Vue 3 + TypeScript + Vite

To setup a project that uses vite, vue, typescript
-> `npm create vite@latest`
Name the project (in this case frontend). 
Then select vue, typescript, and follow prompts to build and navigate to directory.
-> `cd fronted`
-> `npm install`
-> npm run dev
This will run the project on a localhost.
You can edit the html, App.vue, and HelloWorld.vue files to get started.

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
