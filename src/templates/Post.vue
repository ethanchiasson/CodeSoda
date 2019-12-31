<template>
  <Layout>
    <div class="backButton">
      <a href="javascript:history.go(-1)" class="button">↩</a>
    </div>
    <h1 v-html="$page.post.title" style="text-align: center ; color: #433422"></h1>
    <!-- <g-image :src="$page.post.cover_image" style="margin: 0 auto"></g-image> -->
    <div class="divider"></div>
    <div class="headerContainer" style="overflow: hidden;">
      <div class="author" style="overflow: hidden; margin-top: 20px; float: left">
        <g-image :src="$page.post.image" style="float: left;"></g-image>
        <p
          v-html="$page.post.author"
          style="margin-left: 110px; margin-top: 25px; font-weight: bold;"
        ></p>
        <p
          style="font-weight: normal; font-size: 1rem; margin-left: 110px;"
          v-html="$page.post.date"
        ></p>
      </div>
      <div class="clap" style="overflow: hidden; float: right; padding: 15px;">
        <div class="time" style="float:left; margin-right: 250px;">
          <div class="timeToRead" style="overflow: hidden; margin-top: 20px;">
            <p style="float: left;" v-html="$page.post.timeToRead"></p>
            <p style="float: right;">minute read</p>
          </div>
        </div>
        <!-- old applause color -->
        <!-- color="#2e7eff"  -->
        <applause-button
          color="#222222"
          style="width: 50px; height: 50px; margin-top: 20px; float: right;"
        />
      </div>
    </div>
    <div v-html="$page.post.content" class="posttext"></div>
    <div class="divider"></div>
    <div class="affiliate">
      <div class="affiliateBanner"></div>
      <p class="affiliateSub">This affiliate banner helps support what we do! 😇</p>
    </div>
    <footer>
      <!-- Begin newsletterContainer -->
      <div class="newsletterContainer">
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us4.list-manage.com/subscribe/post?u=57c4947af83579a34e710970b&amp;id=1e119d8cf0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                <div class="newsletterLabel">
                  <label for="mce-EMAIL">Hey you! Please Consider Joining The Newsletter 💌</label>
                </div>
                <div class="newsletterSubtitle">
                  <p>
                    Joining our newsletter means that you can stay up to date on the
                    latest trends in web development and design with our hand picked list of articles
                    from our amazingly talented curated authors.
                  </p>
                </div>
                <input
                  type="email"
                  value
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                  placeholder="Your Email Address"
                />
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input
                  type="text"
                  name="b_57c4947af83579a34e710970b_1e119d8cf0"
                  tabindex="-1"
                  value
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>
        <!--End mc_embed_signup-->
      </div>
      <!--newsletter container-->
      <div class="footerContainer">
        <div class="left">
          <p
            class="aboutFooter"
          >WebSoda.io is maintained by Ethan Chiasson and small team. We aim to provide users with high quality content related to programming, front-end development & design, and all things web development.</p>
        </div>
        <div class="right">
          <ul>
            <li>
              <a href>Contact</a>
            </li>
            <li>
              <a href>Advertise</a>
            </li>
            <li>
              <a href>Articles</a>
            </li>
            <li>
              <a href>Authors</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
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
    cover_image(width: 425, height:200, quality: 100, fit: fill)
  }
}
</page-query>

<style>
/* Start TOC Styles */

h2#table-of-contents {
  font-size: 24px;
  text-align: center;
  padding-top: 5px;
}

.toc {
  background-color: #222222;
  width: auto;
  border-radius: 5px;
  color: #f1e7d0;
}

.tocList a {
  color: #f1e7d0;
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
  background-color: #222222;
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
/* End Back Button */
/* 
 
 
 
*/
/* 
 
 
 
*/
/* Article, Spacing, and More */

/* Spacer */
hr {
  background-color: #2e7eff;
  border-color: #2e7eff;
}

a {
  text-decoration: none;
  font-size: bold;
  color: #43779e;
}

ul {
  list-style-type: none;
}

li {
  padding-top: 5px;
}

.time {
  color: #222222;
}
.clap {
  margin-top: 20px;
}

code {
  /* background-color: #143855; */
  background-color: #222222;
  padding: 4px;
  border-radius: 4px;
  color: #f1e7d0;
}

em {
  color: #f1e7d0;
  padding: 2px;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  background: linear-gradient(
    127deg,
    rgba(231, 50, 255, 0.8),
    rgb(1, 69, 255) 70.71%
  );
}


pre.language-js {
  /* background-color: #0d2538; */
  background-color: #222222;
  text-shadow: none;
  /* border: 2px solid whitesmoke; */
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px rgb(223, 223, 38);
}

/*  HTML Code Block Styling */
pre.language-html {
  /* background-color: #0d2538; */
  background-color: #222222;
  text-shadow: none;
  /* border: 2px solid whitesmoke; */
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px darkcyan;
}

/* JSON Code Block Styling */
pre.language-json {
  /* background-color: #0d2538; */
  background-color: #222222;
  text-shadow: none;
  /* border: 2px solid whitesmoke; */
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px wheat;
}

pre.language-css {
  /* background-color: #0d2538; */
  background-color: #222222;
  text-shadow: none;
  /* border: 2px solid whitesmoke; */
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 5px 7px plum;
}

pre.language-cs {
  /* background-color: #0d2538; */
  background-color: #222222;
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
  background-color: #222222;
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
  margin-top: -15px;
  color: #433422;
}

.timeToRead {
  width: 100px;
  margin-top: -20px;
  margin-bottom: 20px;
}
.timeToRead {
  font-size: 1rem;
  color: #433422;
}

.posttext {
  font-size: 1.15rem;
  color: #433422;
}

.divider {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  background: linear-gradient(135deg, #2e7eff, rgb(231, 50, 255));
  height: 5px;
  border-radius: 5px;
}
/* 
 
 
 
*/
/* 
 
 
 
*/
/* Start Afilliate Banner Styles */
.affiliateSub {
  color: #222222;
}
.affiliateBanner {
  width: 100%;
  height: 150px;
  background-color: #222222;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 10px;
}
/* End Afilliate Banner Styles */
/* 
 
 
 
*/
/* 
 
 
 
*/
/* News Letter Styles */
.newsletterSubtitle {
  width: 80%;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  color: #f1e7d0;
  font-size: 1rem;
  font-weight: bold;
}

.newsletterLabel {
  margin-bottom: 20px;
  color: white;
  font-size: 1.25rem;
  margin-right: 10px;
}

.newsletterContainer {
  width: 100%;
  background-color: #222222;
  border-radius: 0px;
  padding-top: 15px;
  border-top: 4px solid red;
  border-bottom: 4px solid red;
  border-left-width: 0;
  border-right-width: 0;
  border-image: linear-gradient(to right, #2e7eff, rgb(231, 50, 255)) 1 stretch;
}

#mc_embed_signup {
  /* Adding these things got me disred email form */
  display: inline-block;
  /*  */
  text-align: center;
  margin-left: 20px;
  color: white;
  margin-bottom: 10px;
  font-weight: bold;
}

#mce-EMAIL {
  background-color: #f1e7d0;
  border: #f1e7d0 2px solid;
  border-radius: 5px;
  color: #222222;
  padding: 5px;
  font-size: 1rem;
  width: 75%;
}

#mc-embedded-subscribe {
  color: #222222;
  padding: 5px;
  font-size: 1rem;
  font-weight: bold;
  width: 100px;
  background-color: #f1e7d0;
  border: #f1e7d0 2px solid;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  width: 40%;
}

#mc-embedded-subscribe:hover {
  color: white;
  padding: 5px;
  font-size: 1rem;
  font-weight: bold;
  width: 40%;
  background: linear-gradient(45deg, #2e7eff, rgb(231, 50, 255));
  border: #f1e7d0 2px solid;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
}
/* End News Letter Styles */
/* 
 
 
 
*/
/* 
 
 
 
*/
/* Footer Styles */
footer {
  margin-top: 75px;
}

.footerContainer {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
}

.aboutFooter {
  text-decoration: none;
  font-size: bold;
  /* color: #43779e; */
  color: #222222;
}

.left,
.right {
  /* background-color: #091a28; */
  background-color: #f1e7d0;
  width: auto;
  height: auto;
  text-align: start;
}

.left {
  float: left;
}

.right {
  float: right;
}
/* End Footer Styles */
/* 
 
 
 
*/
/* 
 
 
 
*/
/* Start Applause button */
applause-button {
  position: relative;
  cursor: pointer;
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
  color: #222222;
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
/* End Applause button */
</style>
