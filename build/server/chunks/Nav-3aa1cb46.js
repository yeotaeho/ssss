import { c as create_ssr_component, e as escape, h as add_classes, d as each } from './ssr-0d4787f8.js';

const tableNumber = "12";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const languages = [{ name: "English" }, { name: "한국어" }];
  return `<div class="nav"><ul class="nav_menu"><li class="item">  <span id="language_name">${escape(languages[0].name)}</span><img src="./src/img/chevron-down.png" alt=""${add_classes(" closed".trim())}> <ul class="languages"> ${each(languages, (data, dataIndex) => {
    return `  ${``}`;
  })}</ul></li>   <li class="item" data-svelte-h="svelte-d124ub"><img src="./src/img/notifications_active.png" alt="">Call Waiter</li> <li class="item" data-svelte-h="svelte-1iakwlg"><img src="./src/img/receipt.png" alt="">View Bill</li> <li class="item" data-svelte-h="svelte-tppy6s"><img src="./src/img/shopping_cart.png" alt="">My Cart<span class="count">0</span></li> <li class="item"><img src="./src/img/table.png" alt="">${escape(tableNumber)}</li></ul></div>`;
});

export { Nav as N };
//# sourceMappingURL=Nav-3aa1cb46.js.map
