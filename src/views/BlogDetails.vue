<template>
  <div class="single-blog">
    <h1 v-rainbow>{{ blog.title }}</h1>
    <p>{{ blog.body }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.id, {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then(jsonData => {
        this.blog = jsonData
      })
  }
}
</script>

<style lang="scss" scoped>
.single-blog{
  margin: 30px auto;
  max-width: 900px;
  padding: 20px 10px;
  background: #eee;
  border-radius: 5px;

  h1{
    background: transparent;
    margin: 10px 10px;
  }
  p{
    background: transparent;
    color: black;
    margin: 30px 10px;
  }
}
</style>