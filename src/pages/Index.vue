<template>
  <Layout :showFooter="false">
    <div class="welcomeBanner">
      <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <!-- <g-image class="logo" alt="Logo" src="~/assets/images/soda.png" height="80" width="80" /> -->
        <h1 style="text-align: center" class="subtitle1">Refreshing Content From Real Developers</h1>
        <p
          style="text-align: center"
          class="subtitle2"
        >Front-end to Backend, Angular to React, we discus it all...</p>
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
      <h1 class="titles">Most Recent Article</h1>
      <div class="mostRecentContainer">
        <article v-for="edge in $page.allPost.edges" :key="edge.node.id">
          <div class="postContainer">
            <h2 style="color: white;">{{ edge.node.title }}</h2>
            <h3 style="color: lightgrey">by {{ edge.node.author }}</h3>
            <p>Posted {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
            <div class="divider"></div>
            <p>{{ edge.node.excerpt }}</p>
            <!-- <div v-html="edge.node.content"></div> -->
            <div class="tagContainer">
              <g-link
                class="span"
                style="padding: .5em ; background-color: #091A28"
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
      </div>
    </div>
    <div class="popularPostContainer">
      <a>
        <p2>🔥</p2>
        <span class="titles">Hot this Week</span>
      </a>
    </div>
    <div class="WeeklySContainer">
      <h1 class="titles"></h1>
    </div>
    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>-->
    <!-- <Footer></Footer> -->
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
          <p class="aboutFooter">
            WebSoda.io is maintained by Ethan Chiasson and small team.
            <br />We aim to provide users with high quality content related to
            <br />programming, front-end development & design,
            <br />and all
            things web development.
          </p>
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


<page-query>
query ($page: Int) {
  allPost (perPage: 1, page: $page) @paginate {
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
    title: "Hello, world!"
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
}
.subtitle1 {
  background: -webkit-linear-gradient(#2e7eff, rgb(231, 50, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  background: #2e7eff;
  border-radius: 50%;
  opacity: 0.5;
  animation: flying 10s infinite ease-in;
}

.bubble:nth-child(1) {
  width: 20px;
  height: 20px;
  left: 10%;
  animation-duration: 8s;
}

.bubble:nth-child(2) {
  width: 10px;
  height: 10px;
  left: 20%;
  animation-duration: 5s;
}

.bubble:nth-child(3) {
  width: 30px;
  height: 30px;
  left: 35%;
  animation-duration: 10s;
  animation-delay: 0s;
}

.bubble:nth-child(4) {
  width: 55px;
  height: 55px;
  left: 50%;
  animation-duration: 6s;
  animation-delay: 0s;
}

.bubble:nth-child(5) {
  width: 35px;
  height: 35px;
  left: 55%;
  animation-duration: 5s;
  animation-delay: 0s;
}

.bubble:nth-child(6) {
  width: 25px;
  height: 25px;
  left: 65%;
  animation-duration: 8s;
  animation-delay: 0s;
}

.bubble:nth-child(7) {
  width: 25px;
  height: 25px;
  left: 25%;
  animation-duration: 7s;
  animation-delay: 2s;
}
.bubble:nth-child(8) {
  width: 40px;
  height: 40px;
  left: 80%;
  animation-duration: 6s;
  animation-delay: 0s;
}
.bubble:nth-child(9) {
  width: 15px;
  height: 15px;
  left: 20%;
  animation-duration: 9s;
  animation-delay: 0s;
}

.bubble:nth-child(10) {
  width: 20px;
  height: 20px;
  left: 85%;
  animation-duration: 5s;
  animation-delay: 0s;
}
.bubble:nth-child(11) {
  width: 20px;
  height: 20px;
  right: 65%;
  animation-duration: 5s;
  animation-delay: 0s;
}
.bubble:nth-child(12) {
  width: 10px;
  height: 10px;
  right: 85%;
  animation-duration: 5s;
  animation-delay: 0s;
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
  background: -webkit-linear-gradient(#2e7eff, rgb(231, 50, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p2 {
  font-size: 2.5rem;
  padding-right: 20px;
}

span.titles {
  font-weight: bold;
}

.postContainer {
  background-color: #0d2538;
  /* background-color: #002b36; */
  border-radius: 10px;
  padding: 20px;
  padding-top: 5px;
  margin-bottom: 25px;
}

.divider {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 70%;
  background: -webkit-linear-gradient(135deg, #2e7eff, rgb(231, 50, 255));
  height: 5px;
  border-radius: 5px;
}

.tagContainer {
  margin-top: 25px;
}

/* Styling for "Read More" Link */
.gLinkPost {
  text-decoration: none;
  color: white;
}

/* Read More Box Style */
.readMore {
  margin-top: 25px;
  background-color: #091a28;
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  margin-top: 30px;
  border: 2px solid #0d2538;
}

/* Read More Rover */
.readMore:hover {
  margin-top: 25px;
  background: linear-gradient(45deg, #2e7eff, rgb(231, 50, 255));
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  margin-top: 30px;
  border: 2px solid #0d2538;
}

/* Changes text Color for Post Container / content */
article {
  color: white;
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
  background: linear-gradient(45deg, #2e7eff, rgb(231, 50, 255));
}

footer {
  margin-top: 75px;
}

/* News Letter Styles */
.newsletterSubtitle {
  width: 80%;
  text-align: center;
  margin: auto;
  margin-bottom: 30px;
  color: #43779e;
  font-size: 1rem;
}

.newsletterLabel {
  margin-bottom: 20px;
  color: white;
  font-size: 1.25rem;
  margin-right: 10px;
}

.newsletterContainer {
  width: 100%;
}

#mc_embed_signup {
  /* Adding these things got me disred email form */
  display: inline-block;
  /*  */
  text-align: center;
  margin-left: 20px;
  color: white;
  margin-bottom: 30px;
  font-weight: bold;
}

#mce-EMAIL {
  background-color: #091a28;
  border: #43779e 2px solid;
  border-radius: 5px;
  color: white;
  padding: 5px;
  font-size: 1rem;
  width: 75%;
}

#mc-embedded-subscribe {
  color: white;
  padding: 5px;
  font-size: 1rem;
  font-weight: bold;
  width: 100px;
  background-color: #091a28;
  border: #43779e 2px solid;
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
  border: #091a28 2px solid;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
}

/* End News Letter Styles */

/* Footer Styles */
.footerContainer {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
}

.aboutFooter {
  text-decoration: none;
  font-size: bold;
  color: #43779e;
}

.left,
.right {
  background-color: #091a28;
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
</style>
