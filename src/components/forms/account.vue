<template>
  <div class="preference-form">
    <control-text :model="fname" />
    <control-text :model="lname" />
    <control-text :model="email" />
    <slider :range="[0, 5]" :places="2" />
    <slider :range="[100, 500000]" :places="1" />
    <slider :range="[50000, 5000000000]" :places="1" />
    <slider :range="[5, 50]" :places="2" />
    <slider :range="[120000, 5000000]" :places="1" />
    <slider :range="[0, 0.99]" :places="2" />
  </div>
</template>

<script>
import ControlText from 'components/controls/text';
import Slider from 'components/controls/slider';
export default {
  components: {ControlText, Slider},
  data() {
    return {
      fname: 'These',
      lname: 'Are',
      email: 'Text Boxes'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .preference-form {
    @include flex-center-stack();
  }
</style>


