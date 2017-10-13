<template>
  <div id='dashboard'>
    <h2>admin.groundwire.co</h2>
    <h4>Welcome, {{name}}! Please manage your Groundwire trading profile below.</h4>
  </div>
</template>


<script>
    import model from '../state/model.js';
    export default {
        data() {
            return {
                name: model.credentials[0].firstName,
                state: model
            }
        },
        methods: {
            populateWidgets(){
                  let dashboard = document.getElementById('dashboard');
                  let widgets = document.createElement('div');
                  widgets.className = 'widgets';
                  dashboard.appendChild(widgets);
                  for (let i in this.state.widgets){
                      let item = document.createElement('div');
                      let heading = document.createElement('h6');
                      let headingContent = document.createTextNode(this.state.widgets[i]);
                      heading.appendChild(headingContent);
                      item.appendChild(heading);
                      item.className = 'widget';
                      widgets.appendChild(item);
                  }
                  let boxes = document.getElementsByClassName('widget');
                  //TODO WHY IS FOR (LET J IN BOXES) FAILING ON LAST INDEX?
                  for (let j = 0; j < boxes.length; j++){
                      j % 2 === parseInt(0) ? boxes[j].className += ' left' : boxes[j].className += ' right';
                  }
            }
        },
        mounted(){
            this.populateWidgets();
        }
    }
</script>