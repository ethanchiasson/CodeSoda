<template>
  <Layout>
    <div class="backButton">
      <a href="javascript:history.go(-1)" class="button">↩</a>
    </div>
    <h1 v-html="$page.post.title"></h1>
    <g-image :src="$page.post.cover_image" style="margin: 0 auto"></g-image>
    <div class="divider"></div>
    <div class="author" style="overflow: hidden; margin-top: 20px;">
      <g-image :src="$page.post.image" style="float: left;"></g-image>
      <p
        v-html="$page.post.author"
        style="margin-left: 110px; margin-top: 25px; font-weight: bold;"
      ></p>
      <p style="font-weight: normal; font-size: 1rem; margin-left: 110px;" v-html="$page.post.date"></p>
    </div>
    <div class="clap" style="overflow: hidden;">
      <applause-button
        color="#2e7eff"
        style="width: 50px; height: 50px; margin-top: 20px; float: left;"
      />
      <div class="time" style="float:right; margin-right: 90px;">
        <div class="timeToRead" style="overflow: hidden; margin-top: 20px;">
          <p style="float: left;" v-html="$page.post.timeToRead"></p>
          <p style="float: right;">minute read</p>
        </div>
      </div>
    </div>
    <div v-html="$page.post.content"></div>
  </Layout>
</template>

<script>
export default {
  mounted() {
    let applauseScript = document.createElement("script");
    applauseScript.setAttribute(
      "src",
      "https://unpkg.com/applause-button/dist/applause-button.js"
    );
    document.head.appendChild(applauseScript);

    // let applauseScriptCSS = document.createElement("link");
    // applauseScriptCSS.setAttribute(
    //   "rel",
    //   "https://unpkg.com/applause-button/dist/applause-button.css"
    // );
    // document.head.appendChild(applauseScriptCSS);
  }
};
</script>


<page-query>
query($path: String!) {
  post(path: $path) {
    title
    author
    image(quality: 100)
    date(format: "MMMM Do, YYYY")
    timeToRead
    content
    cover_image(width: 750, height:300, quality: 100, fit: fill)
  }
}
</page-query>

<style>
.time {
  color: grey;
}
.clap {
  width: 300px;
}
applause-button {
  position: relative;
  cursor: pointer;
  margin-left: 20px;
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
  border: 1px solid;
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
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
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

code {
  background-color: #143855;
  padding: 4px;
  border-radius: 4px;
}
em {
  color: #2e7eff;
}

body {
  color: white;
}

pre.language-js {
  background-color: #0d2538;
  text-shadow: none;
  /* border: 2px solid whitesmoke; */
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px yellow;
}

pre.language-html {
  background-color: #0d2538;
  text-shadow: none;
  /* border: 2px solid whitesmoke; */
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px lightseagreen;
}

pre.language-json {
  background-color: #0d2538;
  text-shadow: none;
  /* border: 2px solid whitesmoke; */
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px yellow;
}

pre.language-css {
  background-color: #0d2538;
  text-shadow: none;
  /* border: 2px solid whitesmoke; */
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px plum;
}

pre.language-cs {
  background-color: #0d2538;
  text-shadow: none;
  /* border: 2px solid whitesmoke; */
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
  background-color: #002b36;
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

.author {
  width: 700px;
  margin-top: -15px;
}

.timeToRead {
  width: 100px;
  margin-top: -20px;
  margin-bottom: 20px;
}

p {
  font-weight: normal;
}

.divider {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  background: linear-gradient(135deg, #2e7eff, rgb(231, 50, 255));
  height: 5px;
  border-radius: 5px;
}

.button {
  background-color: #0d2538;
  border: #002b36;
  color: white;
  width: 120px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.button:hover {
  background-color: #002b36;
  border: #002b36;
  color: white;
  width: 120px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background: linear-gradient(135deg, #2e7eff, rgb(231, 50, 255));
  text-decoration: none;
}

.backButton {
  margin-bottom: 40px;
}
</style>
