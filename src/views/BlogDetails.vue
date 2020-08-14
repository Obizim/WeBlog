<template>
  <div class="single-blog">
    <h1 v-rainbow>{{ blog.title | uppercase }}</h1>
    <p>{{ blog.body }}</p>

    <p class="comment">Comments:</p>
    <section>
      <div style="background: #eee">
        <div class="comments" v-for="(comment, index) in comments" :key="index">
          <h3>{{ comment.email }}</h3>
          <article>{{ comment.body | reduce }}</article>
        </div>
      </div>
      <form>
        <h3>Add Comment</h3>
        <label for="email">Email Address: </label>
        <input type="text" v-model="details.email" required />
        <br />
        <label for="body">Body: </label>
        <input type="text" v-model="details.body" required />
        <button @click.prevent="validateForm">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      comments: [],
      details: {
        body: " ",
        email: " "
      }
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts/" + this.id, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.blog = jsonData;
      });
    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.comments = jsonData.slice(0, 4);
      });
  },
  methods: {
    validateForm() {
      if (this.details.email && this.details.body == " ") {
        alert("Email address and body cannot be empty");
      } else {
        this.comments.push(this.details);
        this.details = {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.single-blog {
  margin: 30px auto;
  max-width: 900px;
  padding: 20px 10px;
  background: #eee;
  border-radius: 5px;

  h1 {
    background: transparent;
    margin: 10px 10px;
    font-size: 1.5rem;
  }
  p {
    background: transparent;
    color: black;
    margin: 30px 10px;
  }
}
.comment {
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
}

section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: #eee;
}

.comments {
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: flex-start;
  justify-content: center;
  background: #eee;

  h3 {
    font-size: 1rem;
    margin: 10px 0;
    background: transparent;
    color: #000;
  }
  article{
    background: transparent;
    color: #000
  }
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #eee;

  h3 {
    margin-bottom: 20px;
    background: transparent;
    color: #000;
  }
label{
  background: transparent;
  color: #000;
}
  input {
    border: 1px solid rgb(0, 0, 0);
    height: 30px;
    width: 250px;
    margin-top: 10px;
    padding: 5px;
    background: transparent;
  }
  button {
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px 20px;
    background: rgb(3, 4, 94);
    outline: none;
  }
}

@media screen and (max-width: 1024px) {
  section {
    flex-direction: column;
  }
  form {
    align-items: center;
  }
}
</style>
