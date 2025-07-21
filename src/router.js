export const routes = {
  "": () => import("./components/home.js"),
  home: () => import("./components/home.js"),
  about: () => import("./components/about.js"),
  contact: () => import("./components/contact.js"),
  "*": () => import("./components/notFound.js"),
};
// bir şey varsa ona gider yoksa 404 döndürür.
export function getRouteFromPath(pathname) {
  const clean = pathname.replace(/^\//, "").toLowerCase() || "home";
  return routes.hasOwnProperty(clean) ? clean : "*";
}

export async function routeTo(routeName = "home", props = {}) {
  const appDiv = document.getElementById("app");
  if (!appDiv) { return;
}

  const loadComponent = routes.hasOwnProperty(routeName) ? routes[routeName] : routes["*"];// sayfa tanımlı mı diye bakar

  
    const module = await loadComponent();
    const pageFunc = module.default;
    if (typeof pageFunc === "function") {
      appDiv.innerHTML = pageFunc(props);
    } 
  }
 



