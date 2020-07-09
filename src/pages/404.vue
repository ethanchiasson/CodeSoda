<template>
  <Layout>
    <div class="container">
      <h1 style="text-align: center ;">🙁 Sorry, that page does not exist!!!</h1>
      <div class="read">
        <p
          style="text-align: center ;"
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
  color: #212121;
  padding: 5px;
  font-size: 1rem;
  font-weight: bold;
  width: 100px;
  background: linear-gradient(45deg, #2eff7b, #00792c);
  border: #212121 2px solid;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  width: 40%;
}

button:hover {
  box-shadow: 2px 2px 10px black;
}

div.read {
  text-align: center;
}

div.container {
  margin-top: 35%;
}
</style>