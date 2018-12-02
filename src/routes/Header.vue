<template>
  <header>
    <div>
      <router-link class="head-image" :to="{name: 'index'}">
        <img src="./../assets/candidate_head.jpg">
      </router-link>
      <nav class="navigation">
        <ul>
          <li>
            <router-link :to="{name: 'about'}">Über</router-link>
          </li>
          <li>
            <router-link :to="{name: 'positions'}">Positionen</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss" scoped>
  @import './../style/globals.scss';

  header {
    background-color: rgba($primary-color,0.8);
    padding: 0;
    margin: 0;
    position: fixed;
    width: 100%;
    z-index: 1;
    box-shadow: 10px 10px 104px 0 rgba(0,0,0,0.75);


    a.head-image {
      display: block;
      width: 100px;
      height: 100px;
      position: absolute;
      border-radius: 50%;
      border: 1px solid $decent-border-color;
      overflow: hidden;
      margin-top: 5px;
      margin-left: 5px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    div {
      width: 100%;
      max-width: $max-width;
      margin: auto;
      display: flex;
      position: relative;
    }

    nav.navigation {
      flex: 1 0 200px;
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        list-style: none;
        li {
          display: block;
          a {
            display: block;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-family: $heading-font;
            padding: 10px 20px;

            &.router-link-active {
              text-decoration: underline;
            }

            &:hover {
              text-decoration: underline;
            }
          }

        }
      }
    }
  }
</style>
