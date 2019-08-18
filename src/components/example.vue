<template>

    <div>
        <title>Hello Vue</title>
        <div id="app">
            <h1>you must send a message</h1>
            <textarea v-model="message"></textarea>
            <button v-show="message">
                send word to allies
            </button>
            <pre>
        {{$data | json}}
    </pre>>
        </div>
    </div>
</template>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.js"></script> 
<script>
new vue({
  el: "#app",
  data: {
    message: "our king is dead"
  }
});
</script>
