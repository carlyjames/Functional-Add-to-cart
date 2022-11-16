import pizzaImg from "../images/images/pizza.png";
import burgerImg from "../images/images/burger.png";
import cocaImg from "../images/images/coca.png";
import saladImg from "../images/images/salad.png";
import waterImg from "../images/images/water.png";
import iceCreamImg from "../images/images/icecream.png";
import kebabImg from "../images/images/kebab.png";

export function getData() {
    return [
      { title: "Pizza", price: 17.99, Image: pizzaImg,id:1 },
      { title: "Burger", price: 15, Image: burgerImg,id:2 },
      { title: "Coca", price: 3.5, Image: cocaImg ,id:3},
      { title: "Kebab", price: 13.99, Image: kebabImg,id:4 },
      { title: "Salad", price: 2.5, Image: saladImg,id:5 },
      { title: "Bottle of water", price: 0.99, Image: waterImg,id:6 },
      { title: "Ice cream", price: 2.99, Image: iceCreamImg,id:7 },
    ];
  }