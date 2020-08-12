<template>
  <div class="show-blogs">
    <h1>{{ title }}</h1>
    <div class="single-blog" v-for="(blog, index) in blogs" :key="index">
      <router-link :to="'/blog/' + blog.id"
        ><h2 v-rainbow>{{ blog.title | uppercase }}</h2></router-link
      >
      <article v-rainbow>{{ blog.body | reduce }}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Trending blogs",
      blogs: []
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.blogs = jsonData;
      });
  }
};
</script>

<style lang="scss" scoped>
.show-blogs {
  max-width: 800px;
  margin: 30px auto;
  padding: 0 10px;

  h1 {
    text-align: left;
    font-size: 1.5rem;
    font-weight: 500;
  }
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border-radius: 5px;
}
a {
  text-decoration: none;
}
h2 {
  color: #000;
  background: transparent;
  font-size: 1rem;
  font-weight: 400;
}
article {
  background: transparent;
  margin-top: 10px;
}
</style>
