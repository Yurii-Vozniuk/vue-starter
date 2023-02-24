<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Counter/Counter.vue';

@Component({
  components: {
    Counter,
  },
})
export default class HomeView extends Vue {}
</script>
