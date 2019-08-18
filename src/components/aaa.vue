<template>
    <div id="vue_det">
        <h1>Firstname : {{firstname}}</h1>
        <h1>Lastname : {{lastname}}</h1>
    </div>
</template>
<script>
var vm = new Vue({
  el: "#vue_det",
  data: {
    firstname: "Ria",
    lastname: "Singh",
    address: "Mumbai"
  },
  methods: {
    mydetails: function() {
      return "I am " + this.firstname + " " + this.lastname;
    }
  }
});
</script>
<style>
</style>

