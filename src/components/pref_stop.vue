<script>
import Preference from './preference';
export default {
  extends: Preference,
  data() {
    return {
      title: 'Stop Margin'
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-container {
    &:before {
      font-family: FontAwesome;
      font-style: normal;
      content: "\F0AB";
    }
  }
</style>

