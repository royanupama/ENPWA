<template>
  <div class="er-main">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row justify-content-center align-items-center" :style="{height:loginContainerHeight+'px'}">
        <div class="col-6 col-sm-6">
          <div class="form-group row">
            <label class="col-2 col-sm-2 align-items-center">Username</label>
            <input class="form-control col-9 col-sm-9" type="text" v-model="user.username">
          </div>
          <div class="form-group row align-items-center">
            <label class="col-2 col-sm-2">Email ID</label>
            <input class="form-control col-9 col-sm-9" type="email" v-model="user.email">
          </div>
          <button class="btn btn-primary" @click="submitUserData">Submit</button>
          <hr/>
          <button class="btn btn-success" @click="fetchUserData">Get User Data</button>
          <br/><br/>
          <ul class="list-group">
            <li class="list-group-item" :key="u" v-for="u in users">{{u.username}} - {{u.email}}</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Subscription',
  data () {
    return {
      msg: "Come be entertained. Subscribe Now.",
      user: {
        username:'',
        email:''
      },
      users:[],
      loginContainerHeight: window.innerHeight*0.5
    }
  },
  methods:{
    submitUserData(){
      this.$http.post('https://dummyserver-1610c.firebaseio.com/userData.json',this.user)
        .then(
          response=>{
            console.log(response);
          },
          error=>{
            console.log(error);
          }
        );
    },fetchUserData(){
      this.$http.get('https://dummyserver-1610c.firebaseio.com/userData.json')
        .then(
          response=>{
            return response.json();
          },
          error=>{
            console.log(error);
          }
        ).then(
          data=>{
            this.users=[];
            let key;
            for(key in data){
              this.users.push(data[key]);
            }
          },
          error=>{
            console.log(error);
          }
        )
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
a {
  color: #42b983;
}
</style>
