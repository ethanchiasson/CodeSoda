<template>
  <div class="layout">
    <div
      class="livecoinwatch-widget-5"
      lcw-base="USD"
      lcw-color-tx="#abb8c3"
      lcw-marquee-1="coins"
      lcw-marquee-2="movers"
      lcw-marquee-items="10"
    ></div>
    <header class="header">
      <strong>
        <div class="sitelogo">
          <!-- This exact keyword stops the index/home
          always showing as an active-->
          <!-- <g-image class="logo" alt="Logo" src="~/assets/images/btc.png" height="32" width="32" /> -->
          <span>
            <g-link exact to="/" class="siteName">
              {{
              $static.metaData.siteName
              }}
            </g-link>
          </span>
          <!-- <g-image class="logo" alt="Logo" src="~/assets/images/soda.png" height="40" width="40" /> -->
        </div>
      </strong>
      <nav class="nav">
        <g-link exact class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/articles">Articles</g-link>
        <!-- <g-link class="nav__link" to="/about">Authors</g-link> -->
        <!-- <g-link class="nav__link" to="/courses">Courses</g-link> -->
      </nav>
    </header>
    <slot />
    <Footer v-if="showFooter"></Footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer
  },
  props: ["showFooter"],
  metaInfo: {
    script: [
      {
        src: "https://www.livecoinwatch.com/static/lcw-widget.js",
        async: true,
        defer: true
      }
    ]
  }
};
</script>


<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: white;
}

.body {
  /* background: #091a28; */
  background: #1a1a1a;
  /* overflow-x: hidden; */
}

/* adds color to active route */
.active {
  font-weight: bold;
  /* background: #002b36; */
  border-radius: 10px;
  display: inline;
  text-decoration: none;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(transparent, transparent),
    linear-gradient(45deg, #2eff7b, #00792c);
  background-repeat: no-repeat;
  background-position: 120%, 122%, 0 130%;
  background-size: 100% 10px;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

/* Styles top nav links */
.nav__link {
  margin-left: 10px;
  text-decoration: none;
  font-size: 18px;
  /* addingsd padding to active link background */
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  color: white;
}

/* Changes Site Name Styles */
.siteName {
  text-decoration: none;
  color: white;
  font-size: 18px;
  /* removes border from title due to "active link" */
  border: none;
  background-image: none;
}

/*  */
/*  */
/*  */
/*  */
/* Scroll Bar Style */
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px rgb(216, 6, 6); */
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(transparent, transparent),
    linear-gradient(45deg, #2eff7b, #00792c);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(transparent, transparent),
    linear-gradient(45deg, #2eff7b, #00792c);
  border-radius: 10px;
}
/*  */
/*  */
/*  */
/*  */

.siteLogo {
  display: flex;
  align-items: center;
}
.logo {
  float: left;
}

.siteName {
  float: right;
  line-height: 80px;
  color: white;
}
</style>
