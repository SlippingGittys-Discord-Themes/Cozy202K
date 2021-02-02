let version = '2021.02.02.01';

let el;

const css = `@import url("https://slippinggitty.github.io/COMFY202K.css");`;

let obj = {
    onImport: async function () {
      el = document.createElement('style');
  
      document.head.appendChild(el);
  
      el.appendChild(document.createTextNode(css));
    },
  
    remove: async function () {
      el.remove();
    },
  
    name: 'Cozy202K',
    description: 'A Discord Theme based on LeoRichartes concept art',
  
    author: ['SlippingGitty NYRI4 Tamago-iku Pavol'],
  
    version
  };
  
  obj
