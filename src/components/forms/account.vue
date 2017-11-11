<template>
  <div class="preference-form">
    <control-text v-model="fname" :eid="'text-fname'" :elabel="'First Name'" />
    <control-text v-model="lname" :eid="'text-lname'" :elabel="'Last Name'" />
    <control-text v-model="email" :eid="'text-email'" :elabel="'Email'" />
    <control-slider :range="[0, 5]" :places="2" v-model="marketcap" />
    <control-slider :range="[100, 500000]" :places="1" v-model="ret" :preunit="'$'" />
    <control-slider :range="[0, 0.05]" :places="2" v-model="stopmargin" :postunit="'%'" :factor="100" />
    <control-toggle
      v-model="strategy"
      :options="[
        {label: 'Best Price', value: 'bestprice', id: 1},
        {label: 'Slope', value: 'slope', id: 2},
        {label: 'Profit', value: 'profit', id: 3}
      ]"
    />
  </div>
</template>

<script>
import ControlText from 'components/controls/text';
import ControlSlider from 'components/controls/slider';
import ControlToggle from 'components/controls/toggle';
export default {
  components: {ControlText, ControlSlider, ControlToggle},
  data() {
    return {
      fname: 'These',
      lname: 'Are',
      email: 'Text Boxes',
      marketcap: 0,
      ret: 0,
      stopmargin: 0,
      strategy: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .preference-form {
    width: 80%;
    margin: 0 auto;
    @include flex-center-stack();
  }
</style>


