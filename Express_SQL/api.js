async function getProducts() {
  const req = await fetch("https://fakestoreapi.com/products");
  const res = await req.json();

  console.log(res);
  return res;
}

async function getProductID(id) {
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  const res = await req.json();

  console.log(res);
  return res;
}

async function postProduct(product) {
  const req = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  const res = await req.json();
  console.log(res);

  return res;
}

async function deleteProductID(id) {
  const req = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  const res = await req.json();

  console.log(res);
  return res;
}

async function putProductID(id, product) {
  const req = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  const res = await req.json();

  console.log(res);
  return res;
}

async function postPost(post) {
  const req = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: post,
  });

  const res = await req.json();
  console.log(res);

  return res;
}

postPost({
  userId: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
});
