<template>
  <!-- need to add that layout to make sure we get nav -->
  <layout>
    <!-- <h1 style="color: #222222 ;">Articles</h1> -->
    <p class="welcome">
      <a class="subtitle">👋 Welcome!</a>
      <br />
      <br />Search through our collection of articles by awesome
      people just like you.
      <!-- <br />Interested in becoming a curated author ?
      <a href="Google.com" class="newAuthorLink">Click Here</a>-->
    </p>
    <article v-for="edge in $page.allPost.edges" :key="edge.node.id">
      <div class="postContainer">
        <g-image
          :src="edge.node.cover_image"
          style="width: 100% ; padding-top: 15px;"
          class="coverimage"
        ></g-image>
        <h2 style="color: white;">{{ edge.node.title }}</h2>
        <h3 style="color: lightgrey">by {{ edge.node.author }}</h3>
        <p>Posted {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
        <div class="divider"></div>
        <p>{{ edge.node.excerpt }}</p>
        <!-- <div v-html="edge.node.content"></div> -->
        <div class="tagContainer">
          <g-link
            class="span"
            style="padding: .5em ; background-color: #1a1a1a;"
            v-for="tag in edge.node.tags"
            :to="tag.path"
            :key="tag.id"
          >{{ tag.id }}</g-link>
          <br />
          <div class="readMore">
            <g-link :to="edge.node.path" class="gLinkPost" style="color: white">Read More</g-link>
          </div>
        </div>
      </div>
    </article>
    <!-- Add linkClass here to style pager pagnation -->
    <Pager :info="$page.allPost.pageInfo" linkClass="pager" />
    <Footer />
  </layout>
</template>

<page-query>
query ($page: Int) {
  allPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        author
        excerpt
        date (format: "MMMM Do, YYYY")
        tags {
          id
          path
        }
        timeToRead
        path
        cover_image(width: 600, height:300, quality: 100, fit: fill)
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Footer,
    Pager
  },
  props: ["showFooter"]
};
</script>


style
<style>
.welcome {
  background-color: #212121;
  padding: 10px;
  border-radius: 10px;
  color: white;
  /* background-image: linear-gradient(transparent, transparent),
    linear-gradient(transparent, transparent),
    linear-gradient(to right, #232526, #414345); */
  background: linear-gradient(45deg, #00792c, #2eff7b);
}

.subtitle {
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

/* Span for tags. */
.span {
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px;
  color: white;
  text-decoration: none;
}
/* Tags hover effects */
.span:hover {
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px;
  color: white;
  text-decoration: none;
  background: linear-gradient(45deg, #00792c, #00792c);
}

/* Pagnation Style */
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
  color: #2eff7b;
  text-decoration: none;
}
</style>

