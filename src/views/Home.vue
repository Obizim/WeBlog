<template>
  <div class="home">
    <section>
      <div class="container">
        <img src="../assets/hero.png" alt="illustration-intro" />

        <div class="texts">
          <h3>WeBlog Wejapa task</h3>
          <p>
            WeBlog is a site which displays dev trend blogs from a fake api. A
            wejapa task basically
          </p>
          <router-link to="/blogs">Let's explore</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  max-height: 100vh;
  padding-top: 15vh;

  img {
    padding: 0px 80px;
    flex: 1;
    width: 100%;
  }

  .texts {
    flex: 1;
    padding: 10px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 15px;
      margin-top: 10px;
      max-width: 500px;
    }
    a {
      text-decoration: none;
      margin: 15px 0;
      font-size: 13px;
      border: 1px solid rgb(0, 33, 141);
      padding: 15px 3rem;
      cursor: pointer;
      outline: none;
      text-transform: uppercase;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
