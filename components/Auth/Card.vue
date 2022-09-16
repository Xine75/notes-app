<script setup lang="ts">
const authState = ref<"login" | "signup">("login");

const {signUp, user} = useAuth()

const toggleAuthState = () => {
  if(authState.value === "login") {
    authState.value = "signup"
  } else {
    authState.value = "login"
  }
}

const handleSubmit = () => {
  signUp(email, password)
}

</script>

<template>
  <div>
<NCard class="card">
  <h3>{{ authState }}</h3>
  <div class="input-container">
  <input type="text" placeholder="Email"/>
  <input type="text" placeholder="Password"/>
  </div>
  <NButton @click="handleSubmit">Submit</NButton>
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

</style>
