function HomePage() {
  
  return `
  
    <h1>Home</h1>
    <p>Merhaba Hoş geldiniz, ${store.username || "ziyaretçi"}!</p>
    <p>Giriş yaptın mı ? ${store.loggedIn ? "Evet":"Hayır"}</p>
  `;
 
}

export default HomePage;




/*function HomePage(props = {}) {
  return `
    <h1>Home</h1>
    <p>Merhaba Hoş geldiniz, ${props.username || "ziyaretci"}!</p>
  `;
}*/