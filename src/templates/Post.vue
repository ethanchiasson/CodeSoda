<template>
  <Layout>
    <div class="backButton">
      <a href="/articles" class="button">Articles</a>
    </div>
    <h1 v-html="$page.post.title" style="text-align: start ; color: white"></h1>
    <g-image :src="$page.post.cover_image" style="width: 100% ;" class="coverimage"></g-image>
    <!-- <g-image :src="$page.post.cover_image" style="margin: 0 auto"></g-image> -->
    <div class="divider"></div>

    <div class="headerContainer">
      <div class="author" style="margin-top: 2em">
        <g-image :src="$page.post.image"></g-image>
        <p v-html="$page.post.author" style="font-weight: bold"></p>
        <p style="font-weight: normal;" v-html="$page.post.date"></p>
        <div class="clap" style="flex:1; display: flex;">
          <div class="time" style="flex:1">
            <div class="timeToRead" style>
              <p>
                <span style v-html="$page.post.timeToRead"></span> min read
              </p>
            </div>
          </div>
          <applause-button color="white" style="width: 50px; height: 50px;" />
        </div>
      </div>
    </div>
    <div v-html="$page.post.content" class="posttext"></div>
    <div class="divider"></div>
    <div class="affiliate">
      <div class="affiliateBanner"></div>
      <p class="affiliateSub">This affiliate banner helps support what we do! 😇</p>
    </div>
    <Footer />
  </Layout>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  mounted() {
    let applauseScript = document.createElement("script");
    applauseScript.setAttribute(
      "src",
      "https://unpkg.com/applause-button/dist/applause-button.js"
    );
    document.head.appendChild(applauseScript);
  },
  metaInfo: {
    title: "Article"
  },
  components: {
    Footer
  }
};
</script>


<page-query>
query($path: String!) {
  post(path: $path) {
    title
    author
    image(quality: 100, height: 64, width: 64, fit: cover)
    date(format: "MMMM Do, YYYY")
    timeToRead
    content
    cover_image( height: 1000,quality: 100, fit: cover)
  }
}
</page-query>

<style>
blockquote {
  background-color: #212121;
  padding: 1em;
  border-radius: 1em;
  box-shadow: 0.25em 0.25em 0px #2eff7b;
}

.posttext a {
  color: #e24ec1;
}

cite {
  color: #e24ec1;
}

.headerContainer {
  overflow: hidden;
}
/* Start TOC Styles */

h3#table-of-contents {
  font-size: 24px;
  text-align: center;
  padding-top: 0.5em;
}

.posttext h3 {
  color: #2eff7b;
}

.toc {
  background-color: #1a1a1a;
  width: auto;
  border-radius: 0px;
  color: white;
  border: #212121 solid 2px;
  box-shadow: 0.25em 0.25em 0px #2eff7b;
  margin-bottom: 2em;
}

.tocList a {
  color: white;
  margin-left: 40px;
  width: 75%;
}

.tocList {
  padding-bottom: 5px;
}
/* End TOC Styles */

/* back Button */
.backButton {
  margin-bottom: 50px;
  margin-top: 50px;
}

.button {
  /* background-color: #0d2538; */
  background-color: #212121;
  border: #212121;
  color: white;
  width: 120px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
}

.button:hover {
  cursor: pointer;
  background: linear-gradient(45deg, #2eff7b, #00792c);
  text-decoration: none;
}
/* End Back Button */

/* Article, Spacing, and More */

/* Spacer */
hr {
  background-color: #2e7eff;
  border-color: #2e7eff;
}

a {
  text-decoration: none;
  font-size: bold;
  color: white;
}

ul {
  list-style-type: none;
}

li {
  padding-top: 5px;
}

.time {
  color: white;
}
.clap {
  margin-top: 20px;
}

code {
  /* background-color: #143855; */
  background-color: black;
  padding: 0.25em;
  border-radius: 4px;
  color: white;
}

hr {
  border-color: #1ee63f;
  max-width: 75%;
  margin-left: 0;
  border-radius: 1em;
  background: linear-gradient(45deg, #2eff7b, #00792c);
}

h2::before {
  content: "#";
  color: white;
  padding: 1.75px;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  /* background: linear-gradient(45deg, #2eff7b, #00792c); */
  background-color: #212121;
  padding: 0.4em;
  height: 100px;
  width: 100px;
  opacity: 1;
  margin-right: 0.2em;
  color: #2eff7b;
}

.author img {
  border-radius: 5em;
}

.tocList a::before {
  content: "#";
  color: white;
  padding: 1.75px;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  background: #212121;
  padding: 0.4em;
  height: 100px;
  width: 100px;
  opacity: 1;
  margin-right: 0.5em;
  color: #2eff7b;
}

/* em {
  color: white;
  padding: 1.75px;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  background: linear-gradient(45deg, #2eff7b, #00792c);
  padding: 0.25em;
} */

.author {
  margin-top: -15px;
  color: white;
}

.timeToRead {
  width: 100px;
  margin-top: -20px;
  margin-bottom: 20px;
}
.timeToRead {
  font-size: 1rem;
  color: white;
}

.posttext {
  font-size: 1.15rem;
  color: white;
}

.divider {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  background: linear-gradient(45deg, #2eff7b, #00792c);
  height: 5px;
  border-radius: 5px;
}
/* 
/* Start Afilliate Banner Styles */
.affiliateSub {
  color: white;
}
.affiliateBanner {
  width: 100%;
  height: 150px;
  background-color: #212121;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 10px;
}
/* End Afilliate Banner Styles */
/* 
 


/* Start Applause button */
applause-button {
  position: relative;
  cursor: pointer;
  margin: 1em;
}
applause-button .style-root {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
applause-button .style-root:after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: " ";
  display: block;
  border-radius: 50%;
  border: 1px solid grey;
}
applause-button .style-root:hover:after:not(.clap-limit-exceeded) {
  border-color: inherit;
}
applause-button.loading {
  opacity: 0.5;
}
applause-button .shockwave {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
}
applause-button svg {
  position: absolute;
  width: 60%;
  height: 60%;
  margin-left: 20%;
  margin-top: 20%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  stroke: none;
  overflow: visible !important;
}
applause-button svg g.flat {
  visibility: hidden;
}
applause-button svg g.outline {
  visibility: visible;
}
applause-button.clapped svg g.flat {
  visibility: visible;
}
applause-button.clapped svg g.outline {
  visibility: hidden;
}
applause-button .count-container {
  position: absolute;
  top: -55%;
  width: 100%;
  color: white;
  user-select: none;
}
applause-button .count-container .count {
  margin-left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  text-align: center;
}
applause-button g.sparkle circle {
  opacity: 0;
  stroke-width: 0;
}
applause-button g.sparkle g:nth-child(1) {
  transform: rotate(0deg) translateX(10px);
}
applause-button g.sparkle g:nth-child(2) {
  transform: rotate(72deg) translateX(10px);
}
applause-button g.sparkle g:nth-child(3) {
  transform: rotate(144deg) translateX(10px);
}
applause-button g.sparkle g:nth-child(4) {
  transform: rotate(216deg) translateX(10px);
}
applause-button g.sparkle g:nth-child(5) {
  transform: rotate(288deg) translateX(10px);
}
applause-button:hover:not(.clapped) .shockwave {
  animation-name: shockwave;
  animation-duration: 1.25s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  background: linear-gradient(45deg, #2eff7b, #00792c);
}
applause-button.clap {
  animation-name: pulse;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
applause-button.clap .sparkle circle {
  animation-name: explode;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
applause-button.clap .count {
  animation-name: hideThenShow;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
@keyframes explode {
  0% {
    transform: translateX(10px);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(25px);
  }
}
@keyframes shockwave {
  0% {
    transform: scale(1);
    box-shadow: 0 0 2px;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
    box-shadow: 0 0 50px, inset 0 0 10px;
  }
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes hideThenShow {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  20% {
    opacity: 0;
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  80% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
/* End Applause button */

/* Start Code Prism */

pre.language-js {
  background-color: #212121;
  text-shadow: none;

  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px yellow;
}

/*  HTML Code Block Styling */
pre.language-html {
  background-color: #212121;
  text-shadow: none;

  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px black;
}

/* JSON Code Block Styling */
pre.language-json {
  background-color: #212121;
  text-shadow: none;

  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px wheat;
}

pre.language-css {
  background-color: #212121;
  text-shadow: none;

  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px plum;
}

pre.language-cs {
  background-color: #212121;
  text-shadow: none;

  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px rgb(15, 134, 144);
}

span.token.keyword {
  color: #ff3e24;
  text-shadow: none;
  font-weight: bolder;
}

span.token.operator {
  color: #1ee63f;
  background-color: #212121;
  text-shadow: none;
  font-size: 16px;
  font-weight: bold;
}
span.token.number {
  color: #ffeb66;
  text-shadow: none;
}
span.token.string {
  color: #ffeb66;
  text-shadow: none;
}

span {
  text-shadow: none;
}

span.token.tag {
  color: orangered;
}

code.language-js,
code.language-json,
code.language-html,
code.language-java,
code.language-cs {
  text-shadow: none;
  color: white;
}

/* End prism */
</style>
