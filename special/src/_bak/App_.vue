<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/TEST'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  method: {
    test:function(){
      console.log('sss')
    }
  }
}
</script>
