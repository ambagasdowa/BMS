---
title: "Status of the Project Inventory"
author: "baizabal.jesus@gmail.com"
extensions:
  - image_ueberzug
  - qrcode
  - render
styles:
  style: monokai
  table:
    column_spacing: 15
  margin:
    top: 3
    bottom: 0
  padding:
    top: 3
    bottom: 3
---

# Issues in Development

## Javascript

### Modules

## Module scope in `ES6` modules:

> import guidelines

When you import a script in the following manner using `type="module"`:

```
<script type="module">import {hello} from "./test.js";</script>
```

You are creating a certain scope called module scope. Here is where modules scope is relative to other levels of scope. Starting from global they are:

1.  Global scope: All declarations outside a module on the outermost level (i.e. not in a function, and for `const` and `let` not in a block) are accessible from everywhere in the Javascript runtime environment
2.  Module scope: All declarations inside a module are scoped to the module. When other javascipt tries to access these declarations it will throw a reference error.
3.  Function scope: All the variables declared inside (the top level of) a function body are function scoped
4.  Block scope: `let` and `const` variables are block scoped

You were getting the referenceError because the `hello()` function was declared in the module, which was **module scoped**. As we saw earlier declarations inside module scope are only available within that module, and you tried to use it ouside the module.

We can make declarations inside a module global when we **explicitly** put it on the **window** object so we can use it outside of the module. For example:

```
window.hello = hello;  // putting the hello function as a property on the window ob
```
