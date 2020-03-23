import item from './item.js';


export default {
  items: [],
  hideCheckedItems: false,
  findById: function (id) {
    return this.items.find(x => x.id === id);
  },
  addItem: function (name) {
    try {
      item.validateName(name);
      const newItem = item.create(name);
      this.items.push(newItem);
    } catch (error) {
      console.log('Failed to add new item');
    }
  },
  findAndToggleChecked: function (id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  },
  findAndUpdateName: function (id, newName) {
    try {
      item.validateName(name);
      const item = this.findById(id);
      item.name = newName;
    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  },
  findAndDelete: function (id) {
    const item = this.findById(id);
    const itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  },

  toggleCheckedFilter: function () {
    this.hideCheckedItems = !this.hideCheckedItems;
  }
  
};

