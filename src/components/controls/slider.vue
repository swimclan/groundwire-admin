<template>
  <div class="control-slider-container" @mouseleave="dragleave" @mousemove="drag" @mouseup="dragend" @mouseenter="dragend">
    <div class="slide-bar" ref="slider">
      <div class="fader" v-bind:style="offsetstyle" @mousedown.prevent="dragstart" @mouseup="dragend" ref="fader"></div>
    </div>
    <div class="text-container" :data-preunit="preunit" :data-postunit="postunit">
      <control-text class="small" v-model="m" :disabled="true" />
    </div>
  </div>
</template>

<script>
import ControlText from 'components/controls/text';
import {scale, fixedNotation} from 'tools/utils';
import config from 'config';
export default {
  components: {ControlText},
  props: {
    value: {
      default: 0,
      type: Number
    },
    range: {
      default: [],
      type: Array
    },
    places: {
      default: 0,
      type: Number
    },
    preunit: {
      default: '',
      type: String
    },
    postunit: {
      default: '',
      type: String
    },
    factor: {
      default: 1,
      type: Number
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data() {
    return {
      m: `${this.preunit}${this.preunit ? ' ' : ''}${this.processDisplay(this.value > this.range[0] ? this.value : this.range[0])} ${this.postunit}`,
      dragrestart: true,
      dragstate: false,
      dragorigin: 0,
      dragoffset: 0,
      dragposition: 0,
      dragstop: true,
      offsetstyle: {left: 0},
      sliderBarWidth: 0,
      faderWidth: 0,
      maxDrag: 0,
      boundryPad: 0,
      val: this.value
    }
  },
  methods: {
    dragstart(e) {
      this.dragstate = true;
      this.dragorigin = e.screenX;
      this.sliderBarWidth = this.$refs.slider.clientWidth;
      this.faderWidth = this.$refs.fader.clientWidth;
      this.maxDrag = this.sliderBarWidth - this.faderWidth - this.boundryPad;
    },
    dragend(e) {
      this.dragstate = false;
      this.dragposition = this.dragoffset;
    },
    dragleave(e) {
      this.drag(e);
    },
    drag(e) {
      if (this.dragstate) {
        let nextOffset =  e.screenX - this.dragorigin + this.dragposition;
        if (nextOffset < 0 || nextOffset > this.maxDrag) {
          this.dragstop = true;
        } else {
          this.dragstop = false;
          this.dragoffset = nextOffset;
          let val = scale(0, this.maxDrag, this.range[0], this.range[1], this.dragoffset)
          let displaynum = this.processDisplay(val);
          this.m = `${this.preunit}${this.preunit ? ' ' : ''}${displaynum} ${this.postunit}`;
          this.offsetstyle = {left: `${this.dragoffset}px`};
          this.updateValue(val)
        }
      }
    },
    updateValue: function(val) {
      this.val = val;
      this.$emit('input', val);
    },
    processDisplay(val) {
      let adjustedVal = val * this.factor;
      return fixedNotation(adjustedVal, this.places, config.get('utils.denominations'));
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .control-slider-container {
    width: 100%;
    padding: 10px 0;
    @include flex-row-stack();
    .slide-bar {
      flex: 8;
      box-sizing: border-box;
      @include control-slider-bar($height: 1px, $background: $app-white, $border-width: 1px);
      .fader {
        position: relative;
        bottom: 15px;
        height: 30px;
        width: 30px;
        border-radius: 30px;
        border: 1px solid $app-white;
        background: $app-main;
        box-shadow: 0px 0px 4px $app-white;
      }
    }
    .text-container {
      display: flex;
      align-items: center;
      flex: 3;
    }
  }
</style>


