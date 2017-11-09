<template>
  <div class="slider-container" @mouseleave="dragleave" @mousemove="drag" @mouseup="dragend" @mouseenter="dragend">
    <div class="slide-bar" ref="slider">
      <div class="fader" v-bind:style="offsetstyle" @mousedown.prevent="dragstart" @mouseup="dragend" ref="fader"></div>
    </div>
    <div class="text-container">
      <control-text :model="m" :disabled="true" />
    </div>
  </div>
</template>

<script>
import ControlText from 'components/controls/text';
import {scale, fixedNotation} from 'tools/utils';
import config from 'config';
export default {
  components: {ControlText},
  props: ['model', 'range', 'places'],
  data() {
    return {
      m: fixedNotation(this.range[0], this.places, config.get('utils.denominations')),
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
          this.m = fixedNotation(scale(0, this.maxDrag, this.range[0], this.range[1], this.dragoffset), this.places, config.get('utils.denominations'));
          this.offsetstyle = {left: `${this.dragoffset}px`};
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/index';
  .slider-container {
    width: 80%;
    padding: 10px 0;
    margin: 0 auto;
    @include flex-row-stack();
    .slide-bar {
      box-sizing: border-box;
      flex: 4;
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
      flex: 1;
      .control-text-input {
        font-size: 1.2em;
        padding: 0;
        text-align: center;
        width: 100%;
        background: none;
        border: none;
        &:disabled {
          color: $app-white;
          font-style: normal;
          opacity: 1;
        }
      }
    }
  }
</style>


