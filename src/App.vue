<template>
  <div id="app">
    <ejs-button @click.native="buttonClicked">multiple click - original</ejs-button>
    <br><br>
    <ejs-button @click.native="buttonClickedDebounce">multiple click - debounce</ejs-button>
    <br><br>
    <ejs-button @click.native="buttonClickedThrottle">multiple click - throttle</ejs-button>
    <br><br>
    <ejs-button @click.native="clear">clear</ejs-button>
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
  import { getDebouncedFunction, getThrottleFunction } from './components/LodashUtil';

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
  watch: {
    debounceMilliseconds(val) {
      console.log('### debounceMilliseconds changes ### - ' + val);
      this.buttonClickedDebounce = getDebouncedFunction(function(args) {
        this.buttonClicked(args);
      }, val);
      this.buttonClickedThrottle = getThrottleFunction(function(args) {
        this.buttonClicked(args);
      }, val);
    }
  },
  components: {
  },
  methods: {
    buttonClickedDebounce: getDebouncedFunction(function (args) {
      this.buttonClicked(args);
    }),
    buttonClickedThrottle: getThrottleFunction(function(args) {
      this.buttonClicked(args);
    }),
    buttonClicked(args) {
      // console.log(args);
      this.clickedNum++;
      let appendString = `clicked ${this.clickedNum} `;

      if(this.clickedString) {
        this.clickedString += appendString;
      } else {
        this.clickedString = appendString;
      }
    },
    clear() {
      this.clickedNum = 0;
      this.clickedString = null;
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
