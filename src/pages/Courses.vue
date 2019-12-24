<template>
  <layout>
    <h1>Learn by doing</h1>
    <div class="courseContainer">
      <div
        style="text-align: center"
        v-for="edge in $page.allContentfulProduct.edges"
        :key="edge.node.id"
        class="individualCourse"
      >
        <h2 style="margine-bottom: 0.25em">{{ edge.node.name }}</h2>
        <g-image
          :src="edge.node.image.file.url"
          style="width: 100%; height: 250px; object-fit: contain;"
          :alt="edge.node.image.title"
        ></g-image>
        <button
          class="snipcart-add-item cart-button"
          :data-item-id="edge.node.id"
          :data-item-name="edge.node.name"
          :data-item-image="edge.node.image.file.url"
          :data-item-price="edge.node.price"
          data-item-url="courses"
        >Buy course for ${{ edge.node.price }}</button>
        <div class="description">
          <p id="description">{{ edge.node.description }}</p>
        </div>
      </div>
    </div>
    <Pager :info="$page.allContentfulProduct.pageInfo" linkClass="pager" />
  </layout>
</template>

<page-query>
query ($page: Int){
  allContentfulProduct (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        name
        price
        description
        image{
          title
          file{
            url
          }
        }
      }
    }
  }
}

</page-query>

<script>
import { Pager } from "gridsome";
export default {
  components: { Pager },
  metaInfo: {
    // adds "Products" title to page tab
    title: "Products",
    meta: [
      { chartset: "utf-8" },
      { name: "author", content: "Ethan Chiasson" },
      { name: "description", content: "Buy Runescape Accounts" },
      {
        name: "keywords",
        content: "Maxed, Mains, Tank, Range Tank, Pure, Mauler"
      }
    ]
  }
};
</script>

<style>
#description {
  padding: 20px;
}

.pager {
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
  border: none;
  color: white;
  text-decoration: none;
}

.pager:hover {
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
  border: none;
  color: #43779e;
  text-decoration: none;
}

.cart-button {
  background-color: forestgreen;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 8px 16px;
  margin-top: 10px;
  text-decoration: none;
  font-size: 1rem;
}

.cart-button:hover {
  cursor: pointer;
}

h2,
h1,
p {
  color: white;
}

h2 {
  padding: 10px;
}

.description {
  margin: 0 auto;
}

.individualCourse {
  background-color: #0d2538;
  border-radius: 10px;
  margin-bottom: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 70%;
}
</style>
