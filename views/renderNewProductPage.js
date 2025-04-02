/* 🏗 Structo the Builder */
/* Funkcja generująca stronę HTML z najnowszym produktem */
const renderNewProductPage = (data) => {
  return `
  <html>
    <head><title>Shop - Newest product</title></head>
    <body>
      <h1>Newest product</h1>
      <nav>
        <a href="/">Home</a><br />
        <a href="/product/add">Add product</a><br />
        <a href="/logout">Logout</a>
      </nav>
      <br />
      <div>${data ? `New product data : ${data}` : "No new products available."}</div>
    </body>
  </html>
  `;
};

module.exports = renderNewProductPage;
