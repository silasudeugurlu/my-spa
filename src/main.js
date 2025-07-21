import { store } from "./store.js";
import { routeTo, getRouteFromPath } from "./router.js";


// Geri/ileri tuşları ile yönlendirme
window.addEventListener("popstate", () => {
  const route = getRouteFromPath(location.pathname);
  routeTo(route);
});


// Linklere tıklanırsa
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-link]");
  if (link) {

    e.preventDefault();
    history.pushState(null, null, link.pathname); // URLyi değiştir
    const route = getRouteFromPath(link.pathname);
    routeTo(route); // Sayfayı yükle
  }
});

// Giriş butonu
document.getElementById("loginBtn").addEventListener("click", () => {
  store.loggedIn = true;
  store.username = "Sıla Sude";

  const href = "/home";
  history.pushState(null, null, href);
  const route = getRouteFromPath(href);
  routeTo(route);
});

window.addEventListener("DOMContentLoaded", () => {
  const routeName = getRouteFromPath(location.pathname);
  routeTo(routeName);
});
