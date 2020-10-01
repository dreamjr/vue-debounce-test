<template>
  <div id="app">
    <ejs-button @click.native="buttonClicked">multiple click</ejs-button>
    <div width="100" height="400" style="width: 100%; height: 400px; border: 1px groove #3f51b5; margin-top:10px;">
      {{clickedString}}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
  Vue.use(ButtonPlugin);

  export default {
  name: 'App',
  data() {
    return {
      clickedString: null,
      clickedNum: 0
    }
  },
  components: {

  },
  methods: {
    buttonClicked() {
      this.clickedNum++;
      let appendString = `clicked ${this.clickedNum} `;

      if(this.clickedString) {
        this.clickedString += appendString;
      } else {
        this.clickedString = appendString;
      }


    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
