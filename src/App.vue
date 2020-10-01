<template>
  <div id="app">
    <ejs-button @click.native="buttonClickedDebounce">multiple click</ejs-button>
    <br><br>
    debounce milliseconds: <input type="text" v-model="debounceMilliseconds">
    <div width="100" height="400" style="width: 100%; height: 400px; border: 1px groove #3f51b5; margin-top:10px;">
      {{clickedString}}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
  import _debounce from 'lodash/debounce';

  Vue.use(ButtonPlugin);

  export default {
  name: 'App',
  data() {
    return {
      clickedString: null,
      clickedNum: 0,
      debounceMilliseconds: 300
    }
  },
  components: {

  },
  methods: {
    buttonClickedDebounce: _debounce(function() {
      this.buttonClicked();
    }, 300, {
      leading: true,
      trailing: false
    }),
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
