<template>
  <div>
    <div>hello world.</div>
    <p>-------------------------</p>
    <my-add></my-add>
    <p>-------------------------</p>
    <my-sub></my-sub>
  </div>
</template>

<script>
import addition from './components/addition.vue'
import substraction from './components/substraction.vue'

export default {
  data () {
    return {}
  },
  components: {
    'my-add': addition,
    'my-sub': substraction
  }
}
</script>

<style></style>
