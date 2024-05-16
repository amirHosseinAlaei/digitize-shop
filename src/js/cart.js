const cartRoot = document.getElementById("cart-root");

const avalibleCart = [
  { id: 1, name: "phone", count: 1, price: 2000 },
  { id: 2, name: "phone2", count: 1, price: 50000 },
  { id: 3, name: "phone2", count: 1, price: 50124124000 },
];

let str = "";

 avalibleCart.forEach((item) => {
  str += `<p data-id="${item.id}" class="cartItem">name : ${item.name} - price ${item.price}</p>`;
});

cartRoot.innerHTML = str;

const cartItems = document.querySelectorAll(".cartItem");
console.log(cartItems);
cartItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const maps = avalibleCart.map((item) => {
       if (item.id == id) {
        return { ...item, count: item.count+=2  };
      } else {
        return item;
      }

    });
    console.log(maps);
  });
});
