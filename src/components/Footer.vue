<template>
  <footer>
    <a :href="href" class="one">Code Cabin</a>
    Copyright {{getCurrentYear}}
  </footer>
</template>

<script>
export default {
  data: () => ({ href: "http://ethanchiasson.com" }),
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
  color: #43779e;
  letter-spacing: 0.5px;
  padding: 20px;
}
</style>