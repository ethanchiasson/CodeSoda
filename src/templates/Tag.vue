<template>
  <Layout>
    <div class="backButton">
      <a href="javascript:history.go(-1)" class="button">↩</a>
    </div>
    <h1 style="color: white">Posts tagged #{{ $page.tag.title }}</h1>
    <article v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
      <div class="postContainer">
        <g-image :src="edge.node.cover_image" style="width: 100% ; padding-top: 15px;"></g-image>
        <h2>{{ edge.node.title }}</h2>
        <p>{{ edge.node.excerpt }}</p>
        <p>Posted {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
        <!-- <div v-html="edge.node.content"></div> -->
        <div class="div1">
          <g-link
            class="span"
            style="padding: .5em ; background-color: #091A28"
            v-for="tag in edge.node.tags"
            :to="tag.path"
            :key="tag.id"
          >{{ tag.id }}</g-link>
          <br />
          <div class="readMore">
            <g-link :to="edge.node.path" class="gLinkPost">Read More</g-link>
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query ($id: String!){
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
           id
        title
        excerpt
        date (format: "MMMM Do, YYYY")
        tags {
          id
          path
        }
        timeToRead
        path
        cover_image(width: 600, height:300, quality: 90, blur: 1)
          }
        }
      }
    }
  }
}
</page-query>

<style>
.backButton {
  margin-bottom: 40px;
}
</style>