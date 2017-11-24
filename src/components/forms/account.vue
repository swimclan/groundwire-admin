<template>
  <div class="preference-form-container">
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
    <div class="switch-container">
      <control-switch v-model="activate" :labels="{on: 'on', off: 'off'}" />
      <control-switch v-model="transaction" :labels="{on: 'cash', off: 'credit'}"/>
    </div>
  </div>
</template>

<script>
import ControlText from 'components/controls/text';
import ControlSlider from 'components/controls/slider';
import ControlToggle from 'components/controls/toggle';
import ControlSwitch from 'components/controls/switch';
export default {
  components: {ControlText, ControlSlider, ControlToggle, ControlSwitch},
  data() {
    return {
      fname: 'These',
      lname: 'Are',
      email: 'Text Boxes',
      marketcap: 3,
      ret: 0,
      stopmargin: 0,
      strategy: null,
      activate: false,
      transaction: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .preference-form-container {
    @include pref-form();
    .switch-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
</style>


