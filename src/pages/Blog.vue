<template>
  <!-- need to add that layout to make sure we get nav -->
  <layout>
    <h1 style="color: white ;">Articles</h1>
    <p class="welcome">
      <a class="subtitle">👋 Welcome Fellow Developer!</a>
      <br />
      <br />Search through our collection of articles by some pretty awesome
      developers.
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
    <!-- Add linkClass here to style pager pagnation -->
    <Pager :info="$page.allPost.pageInfo" linkClass="pager" />
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
                  <p2>
                    Joining our newsletter means that you can stay up to date on the
                    latest trends in web development and design with our hand picked list of articles
                    from our amazingly talented curated authors.
                  </p2>
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
            CodeSoda.io is maintained by Ethan Chiasson and small team.
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

<style>
footer {
  margin-top: 75px;
}

/* News Letter Styles */
.newsletterSubtitle {
  width: 70%;
  text-align: center;
  margin: auto;
  margin-bottom: 30px;
  color: #43779e;
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

.newAuthorLink {
  text-decoration: none;
  border-radius: 5px;
  padding: 5px;
  color: white;
  font-weight: bold;
  display: inline;
  text-decoration: none;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(transparent, transparent),
    linear-gradient(to right, #091a28, #091a28);
  background-repeat: no-repeat;
  background-position: 120%, 122%, 0 130%;
  background-size: 100% 10px;
}

.welcome {
  background-color: #002b36;
  padding: 10px;
  border-radius: 10px;
  color: white;
  /* background-image: linear-gradient(transparent, transparent),
    linear-gradient(transparent, transparent),
    linear-gradient(to right, #232526, #414345); */
  background: linear-gradient(45deg, #2e7eff, rgb(231, 50, 255));
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

/* wraps each post in its own container */
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
  background: linear-gradient(135deg, #2e7eff, rgb(231, 50, 255));
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
  color: #43779e;
  text-decoration: none;
}
</style>
