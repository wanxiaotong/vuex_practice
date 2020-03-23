<template>
  <div>
    <!-- <h3>当前最新的count值为：{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <!-- <button @click='sub1Click'>-1</button>
    <button @click='subNClick'>-N</button>
    <button @click='sub1Asyn'>-1 Async</button>
    <button @click='subNAsyn'>-N Async</button> -->
    <!-- 可直接调用map里面的 -->
    <button @click='sub1'>-1</button>
    <button @click='subN(6)'>-N</button>
    <button @click='sub1Async'>-1 Async</button>
    <button @click='subNAsync(5)'>-N Async</button>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub1', 'subN']),
    ...mapActions(['sub1Async', 'subNAsync'])
    // sub1Click () {
    //   this.sub1()
    // },
    // subNClick () {
    //   this.subN(3)
    // },
    // sub1Asyn () {
    //   this.sub1Async()
    // },
    // subNAsyn () {
    //   this.subNAsync(4)
    // }
  }
}
</script>
