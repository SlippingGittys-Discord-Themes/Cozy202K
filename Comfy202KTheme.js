let version = '2021.01.28.01';

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
  
    name: 'SlideToUnlock',
    description: 'A Discord Theme based on LeoRichartes concept art',
  
    author: ['SlippingGitty NYRI4 Tamago-iku'],
  
    version
  };
  
  obj
