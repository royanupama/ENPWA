<template>
  <div class="er-main">
    <router-link to="/subscribe" id="signUp" tag="span">Sign Up</router-link>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'Eros-Main',
        data () {
            return {
                msg: "Bollywood's biggest movie collection."
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    #signUp{
        color:#08c;
        position:absolute;
        top:1em;
        right:1em;
        cursor:pointer;
    }
</style>
