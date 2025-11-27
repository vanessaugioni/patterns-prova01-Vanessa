class OrderItem {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getSubtotal() {
    return this.price * this.quantity;
  }
}

class Order {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    const item = new OrderItem(name, price, quantity);
    this.items.push(item);
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.getSubtotal(), 0);
  }
}


class OrderController {
  constructor(order, ui) {
    this.order = order;
    this.ui = ui;
  }

  addItemToOrder(name, price, quantity) {
    this.order.addItem(name, price, quantity);
    this.ui.showMessage(`Item adicionado: ${name}`);
  }

  finishOrder() {
    const total = this.order.calculateTotal();
    this.ui.showTotal(total);
  }
}

class UI {
  showMessage(msg) {
    console.log("📢", msg);
  }

  showTotal(total) {
    console.log("💰 Total do pedido:", total.toFixed(2));
  }
}


const order = new Order();
const ui = new UI();
const controller = new OrderController(order, ui);

controller.addItemToOrder("Pizza", 25, 2);
controller.addItemToOrder("Sorvete", 7, 1);
controller.addItemToOrder("Refri", 10, 1);

controller.finishOrder();
