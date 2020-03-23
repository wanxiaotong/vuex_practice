<template>
  <div>
    <!-- <h3>当前最新的count值为：{{ this.$store.state.count }}</h3> -->
    <h3>{{this.$store.getters.showNum}}</h3>
    <button @click="add1Click">+1</button>
    <button @click="addNClick">+N</button>
    <button @click="add1Asyn">+1 Asyn</button>
    <button @click="addNAsyn">+N Asyn</button>

  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    add1Click () {
      this.$store.commit('add1')
    },
    addNClick () {
      this.$store.commit('addN', 3)
    },
    add1Asyn () {
      this.$store.dispatch('add1Async')
    },
    addNAsyn () {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>
