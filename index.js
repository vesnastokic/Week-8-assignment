// Serbian food menu
class Menu {
    constructor() {
      this.menuItems = [];
    }
  
    createMenuItem(name, price) {
      const menuItem = new MenuItem(name, price);
      this.menuItems.push(menuItem);
    }
  
    viewMenu() {
      console.log("Menu:");
      this.menuItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price}`);
      });
    }
  
    deleteMenuItem(index) {
      if (index >= 0 && index < this.menuItems.length) {
        this.menuItems.splice(index, 1);
        console.log("Menu item deleted successfully.");
      } else {
        console.log("Invalid index.");
      }
    }
  }
  
  class MenuItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  const menu = new Menu();
  
  // Creating menu food items
  menu.createMenuItem("Ćevapi", 12);
  menu.createMenuItem("Pljeskavica", 14);
  menu.createMenuItem("Sarma", 10);
  
  // View manu
  menu.viewMenu();
  
  // Deleting a menu item
  menu.deleteMenuItem(1);
  
  // Viewing menu after deletion
  menu.viewMenu();