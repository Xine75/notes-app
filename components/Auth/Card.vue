<script setup lang="ts">
const authState = ref<"login" | "signup">("login");
const authError = ref("")
const input = reactive ({
  password: "",
  email: ""
})

const {signUp, user, signIn, signOut} = useAuth()

const toggleAuthState = () => {
  if(authState.value === "login") {
    authState.value = "signup"
  } else {
    authState.value = "login"
  }
  authError.value = "";
}

const handleSubmit = async() => {
  try {
    if(authState.value === "login"){
      await signIn({email: input.email, password: input.password})
    } else {
      await signUp({email: input.email, password: input.password})
    }
    input.email = "";
    input.password="";

  } catch (err) {
    authError.value = err.message
  }
}

</script>

<template>
  <div>
<NCard class="card">
  <h3>{{ authState }}</h3>
  <div class="input-container">
    {{input.password}}
  <input type="text" placeholder="Email" v-model="input.email"/>
  <input type="text" placeholder="Password" v-model="input.password"/>
  </div>
  <NButton @click="handleSubmit">Submit</NButton>
  <NButton @click="signOut">Logout</NButton>
  <p v-if="authError" class="error">{{authError}}</p>

  <p @click="toggleAuthState">
    {{  authState==="login" ?
      "Don't have an account? create one now" :
      "Already have an account? Log in" }}</p>
</NCard>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  width: 25rem;
}
.card h3 {
  font-size: 1.75rem;
  text-transform: capitalize;
}
.input-container {
  display: flex;
  flex-direction: column;
}
.input-container input {
padding: 0.2rem;
  margin-bottom: 0.3rem;
  outline: none;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
}
p {
  color: darkblue;
  font-size: 0.75rem;
  cursor: pointer;
}
.error {
  color: red;
}

</style>
