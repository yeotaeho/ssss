import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from './ssr-0d4787f8.js';
import { N as Nav } from './Nav-3aa1cb46.js';

const categories = {
  mockCategory01: {
    description: "Salad and fries",
    id: "mockCategory01",
    name: "Appetizers",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: [
      "appetizer01",
      "appetizer02",
      "appetizer03",
      "appetizer04",
      "appetizer05",
      "appetizer06"
    ]
  },
  mockCategory02: {
    id: "mockCategory02",
    name: "Meat Pasta",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: [
      "meatPasta01",
      "meatPasta02",
      "meatPasta03",
      "meatPasta04",
      "meatPasta05",
      "meatPasta06",
      "meatPasta07",
      "meatPasta08"
    ]
  },
  mockCategory03: {
    id: "mockCategory03",
    name: "Wine",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: ["wine01", "wine02", "wine03", "wine04"]
  },
  mockCategory04: {
    id: "mockCategory04",
    name: "Lunch Menu",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: ["appetizer01", "meatPasta01", "meatPasta06", "wine01"]
  },
  mockCategory05: {
    id: "mockCategory05",
    name: "Vegetarian Pasta",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: ["appetizer04", "appetizer05"]
  },
  mockCategory06: {
    id: "mockCategory06",
    name: "Special Menu",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: ["wine02", "wine03"]
  },
  mockCategory07: {
    id: "mockCategory07",
    name: `Kid's Menu`,
    picture: "https://picsum.photos/300/200.webp",
    productOrder: ["appetizer01", "meatPasta05", "meatPasta06", "meatPasta07", "meatPasta08"]
  },
  mockCategory08: {
    id: "mockCategory08",
    name: "Beverages",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory09: {
    id: "mockCategory09",
    name: "Pizza",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory10: {
    id: "mockCategory10",
    name: "Steak",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory11: {
    id: "mockCategory11",
    name: "Chicken Pasta",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory12: {
    id: "mockCategory12",
    name: "Seafood Pasta",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory13: {
    id: "mockCategory13",
    name: "Take Out Only",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory14: {
    id: "mockCategory14",
    name: "Spicy",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory15: {
    id: "mockCategory15",
    name: "Beer",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory16: {
    id: "mockCategory16",
    name: "Dessert",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  }
};
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="main">${each(Object.keys(categories), (key) => {
    return `<a href="/about"><div class="category_item"><img${add_attribute("src", categories[key].picture, 0)} alt=""> <h3>${escape(categories[key].name)}</h3></div> </a>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1daf0e59.js.map
