import shoppingList from './shopping-list.js';
import store from './store.js';
import item from './item.js'

const main = function () {
 
  item.create('Jacob');
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);