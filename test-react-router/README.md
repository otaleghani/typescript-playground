npm create vite@latest
    react, typescript + swc

Follow this
https://ui.shadcn.com/docs/installation/vite

... 

In your tsconfig.add.json add
...
  "extends": "./tsconfig.json", // THIS
  "include": ["src"]
}

to fix import notices
