<template>
  <div>
    <header>
      <nav class="nav">
        <h1>WeBlog</h1>

        <ul class="menu-nav">
          <li class="menu-nav_item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="menu-nav_item">
            <router-link to="/blogs">Blogs</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
  box-shadow: 0 5px rgba(255, 255, 255, 0.2);

  h1 {
    text-transform: uppercase;
    font-size: 1rem;
  }
}
.menu-nav {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  list-style: none;

  &_item {
    margin: 20px;
  }
}
a {
  text-decoration: none;
  color: #fff;
}
#btn {
  border: transparent;
  padding: 10px 30px;
  background: firebrick;
  color: #ffff;
}
</style>
