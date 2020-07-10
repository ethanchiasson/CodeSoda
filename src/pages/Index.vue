<template>
  <Layout :showFooter="false">
    <div class="welcomeBanner">
      <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <!-- <g-image class="logo" alt="Logo" src="~/assets/images/soda.png" height="80" width="80" /> -->
        <h1 style="text-align: center" class="subtitle1">Real Blockchain Content Brewed Daily</h1>
        <p
          style="text-align: center"
          class="subtitle2"
        >Bitcoin, alt-coins, ICOs & scams, it's all here.</p>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
    </div>

    <div class="mostRecentArticleContainer">
      <h1 class="titles">Most Recent Articles</h1>
      <div class="mostRecentContainer">
        <article v-for="edge in $page.allPost.edges" :key="edge.node.id">
          <div class="postContainer">
            <h2 style="color: white;">{{ edge.node.title }}</h2>
            <g-image
              :src="edge.node.cover_image"
              style="width: 100% ; padding-top: 15px;"
              class="coverimage"
            ></g-image>
            <h3 style="color: lightgrey">by {{ edge.node.author }}</h3>
            <p>Posted {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
            <div class="divider"></div>
            <p>{{ edge.node.excerpt }}</p>
            <!-- <div v-html="edge.node.content"></div> -->
            <div class="tagContainer">
              <g-link
                class="span"
                style="padding: .5em ; background-color: #1a1a1a"
                v-for="tag in edge.node.tags"
                :to="tag.path"
                :key="tag.id"
              >{{ tag.id }}</g-link>
              <br />
              <div class="readMore">
                <g-link :to="edge.node.path" class="gLinkPost" style="color: white;">Read More</g-link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <!-- <div class="popularPostContainer">
      <a>
        <p2>🔥</p2>
        <span class="titles">Hot this Week</span>
      </a>
    </div>-->
    <div class="WeeklySContainer">
      <h1 class="titles"></h1>
    </div>
    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>-->
    <Footer />
  </Layout>
</template>


<page-query>
query ($page: Int) {
  allPost (perPage: 3, page: $page) @paginate {
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
        cover_image(width: 500, height:250, quality: 100, fit: fill)
      }
    }
  }
}
</page-query>









<script>
import Footer from "~/components/Footer.vue";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    Footer
  }
};
</script>

<style>
.subtitle2 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: -20px;
  color: white;
}
.subtitle1 {
  background: -webkit-linear-gradient(45deg, #2eff7b, #00792c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
}
/* Start of bubble animation */
.bubbles {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  top: 0;
  left: 0;
}

.bubble {
  position: relative;
  bottom: 0;
  /* background: #2e7eff; */
  border-radius: 50%;
  opacity: 0.5;
  animation: flying 10s infinite ease-in;
}

.bubble:nth-child(1) {
  width: 32px;
  height: 32px;
  left: 10%;
  animation-duration: 8s;
  background-image: url("../assets/images/btc.png");
}

.bubble:nth-child(2) {
  width: 32px;
  height: 32px;
  left: 20%;
  animation-duration: 5s;
  background-image: url("../assets/images/ltc.png");
}

.bubble:nth-child(3) {
  width: 32px;
  height: 32px;
  left: 35%;
  animation-duration: 10s;
  animation-delay: 0s;
  background-image: url("../assets/images/eth.png");
}

.bubble:nth-child(4) {
  width: 32px;
  height: 32px;
  left: 50%;
  animation-duration: 6s;
  animation-delay: 0s;
  background-image: url("../assets/images/doge.png");
}

.bubble:nth-child(5) {
  width: 32px;
  height: 32px;
  left: 55%;
  animation-duration: 5s;
  animation-delay: 0s;
  background-image: url("../assets/images/btc.png");
}

.bubble:nth-child(6) {
  width: 32px;
  height: 32px;
  left: 65%;
  animation-duration: 8s;
  animation-delay: 0s;
  background-image: url("../assets/images/ltc.png");
}

.bubble:nth-child(7) {
  width: 32px;
  height: 32px;
  left: 25%;
  animation-duration: 7s;
  animation-delay: 0s;
  background-image: url("../assets/images/eth.png");
}
.bubble:nth-child(8) {
  width: 32px;
  height: 32px;
  left: 80%;
  animation-duration: 6s;
  animation-delay: 0s;
  background-image: url("../assets/images/doge.png");
}
.bubble:nth-child(9) {
  width: 32px;
  height: 32px;
  left: 20%;
  animation-duration: 9s;
  animation-delay: 0s;
  background-image: url("../assets/images/btc.png");
}

.bubble:nth-child(10) {
  width: 32px;
  height: 32px;
  left: 85%;
  animation-duration: 5s;
  animation-delay: 0s;
  background-image: url("../assets/images/ltc.png");
}
.bubble:nth-child(11) {
  width: 32px;
  height: 32px;
  right: 65%;
  animation-duration: 5s;
  animation-delay: 0s;
  background-image: url("../assets/images/btc.png");
}
.bubble:nth-child(12) {
  width: 32px;
  height: 32px;
  right: 85%;
  animation-duration: 5s;
  animation-delay: 0s;
  background-image: url("../assets/images/eth.png");
}

@keyframes flying {
  0% {
    bottom: -100px;
    transform: translateX(0);
  }

  50% {
    transform: translateX(100px);
  }

  100% {
    bottom: 1080px;
    transform: translateX(-50px);
  }
}

/* End of Bubble Animation */

.nav-text {
  vertical-align: middle;
}
.home-links a {
  margin-right: 1rem;
}

.welcomeBanner {
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
  color: white;
}

.logo {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}

.titles {
  font-size: 2rem;
  background: -webkit-linear-gradient(45deg, #2eff7b, #00792c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
}
/* 
p2 {
  font-size: 2.5rem;
  padding-right: 20px;
} */

span.titles {
  font-weight: bold;
}
</style>
