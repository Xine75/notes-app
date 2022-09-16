<script setup lang="ts">
const authState = ref<"login" | "signup">("login");

</script>

<template>
  <div>
<NCard class="card">
  <h3>Login</h3>
  <div class="input-container">
  <input type="text" placeholder="Email"/>
  <input type="text" placeholder="Password"/>
  </div>
  <NButton>Login</NButton>
  <p>Don't have an account? Create one now</p>
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
