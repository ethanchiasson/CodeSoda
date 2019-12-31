<template>
  <Layout>
    <div class="container">
      <h1 style="text-align: center ; color: #222222">🙁 Sorry, that page does not exist</h1>
      <div class="read">
        <p
          style="text-align: center ; color: #222222"
        >Looking for refreshing articles on all things web development?</p>
        <button
          style="text-align: center ;"
          class="readButton"
          onclick="window.location='http://www.websoda.io/blog';"
        >Browse Our Articles</button>
      </div>
    </div>
  </Layout>
</template>

<style>
button {
  color: #222222;
  padding: 5px;
  font-size: 1rem;
  font-weight: bold;
  width: 100px;
  background-color: #f1e7d0;
  border: #222222 2px solid;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  width: 40%;
}

button:hover {
  color: white;
  padding: 5px;
  font-size: 1rem;
  font-weight: bold;
  width: 40%;
  background: linear-gradient(45deg, #2e7eff, rgb(231, 50, 255));
  border: #222222 2px solid;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
}

div.read {
  text-align: center;
}

div.container {
  margin-top: 35%;
}
</style>