<template>
<div>
  <div>{{ value }}</div>
  <div>
    <button @click="plus">Plus</button>
    <button @click="minus">Minus</button>
  </div>
</div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Watch,
  Emit,
} from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { counterGetters, counterActions } from '@/store/modules/counter/publicConstants';

import { getDataFromUrl } from '@/services/some.service';

const CounterModule = namespace('counterModule');

@Component({
  name: 'Counter',
})
export default class Counter extends Vue {
  @Prop()
  private someProp!: string;

  @CounterModule.Getter(counterGetters.VALUE)
  private value!: number;

  @CounterModule.Action(counterActions.PLUS)
  private plus!: () => void;

  @CounterModule.Action(counterActions.MINUS)
  private minus!: () => void;

  private someValue = 12;

  @Watch('value', { deep: true })
  private valueWatcher(newValue: number, oldValue: number) {
    console.log(newValue);
    console.log(oldValue);
  }

  private get computedValue(): string {
    return this.someValue.toString();
  }

  private created(): void {
    getDataFromUrl('abc');
  }

  private mounted(): void {
    console.log('mounted');
  }

  @Emit('someAction')
  private someAction() {
    return this.someValue;
  }
}
</script>

<style scoped lang="scss">

</style>
