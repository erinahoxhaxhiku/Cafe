
let dailySales = 1500;
let customersServed = 200;
let topSellingItem = "Cappuccino";
let currentInventory = 50;

function updateStats() {

  dailySales += Math.floor(Math.random() * 200);
  customersServed += Math.floor(Math.random() * 20);
  topSellingItem = ["Espresso", "Cappuccino", "Latte", "Americano"][Math.floor(Math.random() * 4)];
  currentInventory -= Math.floor(Math.random() * 5);

  document.getElementById("dailySales").textContent = `$${dailySales}`;
  document.getElementById("customersServed").textContent = customersServed;
  document.getElementById("topSellingItem").textContent = topSellingItem;
  document.getElementById("currentInventory").textContent = currentInventory;
}
