import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from './ssr-0d4787f8.js';
import { N as Nav } from './Nav-3aa1cb46.js';

const products$1 = {
  appetizer01: {
    description: "Romain lettuce and croutons with caesar dressing.",
    id: "appetizer01",
    name: "Caesar Salad",
    picture: "https://picsum.photos/300/200.webp",
    price: 1e3
  },
  appetizer02: {
    description: "Green Salad.",
    id: "appetizer02",
    name: "Green Salad",
    picture: "https://picsum.photos/300/200.webp",
    price: 1e3
  },
  appetizer03: {
    description: "Caprese Salad.",
    id: "appetizer03",
    name: "Caprese Salad",
    picture: "https://picsum.photos/300/200.webp",
    price: 1300
  },
  appetizer04: {
    description: "",
    id: "appetizer04",
    name: "Calamari",
    picture: "https://picsum.photos/300/200.webp",
    price: 1200
  },
  appetizer05: {
    description: "",
    id: "appetizer05",
    name: "French Fries",
    picture: "https://picsum.photos/300/200.webp",
    price: 800
  },
  appetizer06: {
    description: "",
    id: "appetizer06",
    name: "Cheese Stick",
    picture: "https://picsum.photos/300/200.webp",
    price: 700
  },
  meatPasta01: {
    description: "Bacon and egg yolk with spaghetti in a cream sauce. Bacon and egg yolk with spaghetti in a cream sauce. Bacon and egg yolk with spaghetti in a cream sauce.",
    id: "meatPasta01",
    name: "Carbonara",
    picture: "https://picsum.photos/300/200.webp",
    price: 1700
  },
  meatPasta02: {
    description: "",
    id: "meatPasta02",
    name: "Bolognese",
    picture: "https://picsum.photos/300/200.webp",
    price: 1700
  },
  meatPasta03: {
    description: "",
    id: "meatPasta03",
    name: "Polpettine",
    picture: "https://picsum.photos/300/200.webp",
    price: 1700
  },
  meatPasta04: {
    description: "Bacon and egg yolk with spaghetti in a cream sauce.",
    id: "meatPasta04",
    name: "Salscicie",
    picture: "https://picsum.photos/300/200.webp",
    price: 1700
  },
  meatPasta05: {
    description: "",
    id: "meatPasta05",
    name: "Rose Forno",
    picture: "https://picsum.photos/300/200.webp",
    price: 1900
  },
  meatPasta06: {
    description: "",
    id: "meatPasta06",
    name: "Beef Soy Pasta",
    picture: "https://picsum.photos/300/200.webp",
    price: 1750
  },
  meatPasta07: {
    description: "",
    id: "meatPasta07",
    name: "Beef Rose Pasta",
    picture: "https://picsum.photos/300/200.webp",
    price: 1800
  },
  meatPasta08: {
    description: "",
    id: "meatPasta08",
    name: "Meat Lover",
    picture: "https://picsum.photos/300/200.webp",
    price: 1850
  },
  wine01: {
    description: "",
    id: "wine01",
    name: "House Wine (Red)",
    picture: "https://picsum.photos/300/200.webp",
    price: 800
  },
  wine02: {
    description: "",
    id: "wine02",
    name: "House Wine (White)",
    picture: "https://picsum.photos/300/200.webp",
    price: 800
  },
  wine03: {
    description: "",
    id: "wine03",
    name: "Bottle Wine (Red)",
    picture: "https://picsum.photos/300/200.webp",
    price: 6200
  },
  wine04: {
    description: "",
    id: "wine04",
    name: "Bottle Wine (Red)",
    picture: "https://picsum.photos/300/200.webp",
    price: 6200
  }
};
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  for (const key in products$1) {
    if (products$1.hasOwnProperty(key)) {
      products$1[key].price = products$1[key].price.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
    }
  }
  return `<div class="title" data-svelte-h="svelte-iiapma"><a href="/"><input type="button" value="←"></a> <h1>Appetizers<span>Salad and fries</span></h1></div> <div class="products">${each(Object.keys(products$1), (key) => {
    return `<div class="products_item"><img${add_attribute("src", products$1[key].picture, 0)} alt=""> <h6>${escape(products$1[key].name)}</h6> <p>$${escape(products$1[key].price)}</p> </div>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(Products, "Products").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-74e35809.js.map
