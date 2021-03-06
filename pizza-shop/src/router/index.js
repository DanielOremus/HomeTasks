import { createRouter, createWebHashHistory } from "vue-router";
// 1. Define route components.
// These can be imported from other files
import ListPage from "@/pages/ListPage";
import CartPage from "@/pages/CartPage";
import HomePage from "@/pages/HomePage";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/list", component: ListPage, name: "list" },
  { path: "/cart", component: CartPage, name: "cart" },
  { path: "/", component: HomePage, name: "home" },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.
export default router;
