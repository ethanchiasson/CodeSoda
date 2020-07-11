<template>
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
                <p2 class="newsletterSubtitle">
                  Joining our newsletter means that you can stay up to date on all things blockchain with our hand picked list of articles
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
              <input type="text" name="b_57c4947af83579a34e710970b_1e119d8cf0" tabindex="-1" value />
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
        <p>BloqDaily.com is a independent curated daily blockchain, technology, and world news blog that aims to provide high quality content.</p>
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
            <a href>Bitcoin</a>
          </li>
          <li>
            <a href>Ethereum</a>
          </li>
          <li>
            <a href>Altcoins</a>
          </li>
          <li>
            <a href>Community</a>
          </li>
          <li>
            <a href>Tools</a>
          </li>
        </ul>
      </div>
    </div>

    <a :href="href" class="one">Bloq Daily</a>
    Copyright {{getCurrentYear}}
  </footer>
</template>

<script>
export default {
  data: () => ({ href: "bloqdaily.com" }),
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
footer {
  text-align: center;
  color: #2eff7b;
  letter-spacing: 0.5px;
  padding: 20px;
}
</style>