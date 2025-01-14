<template>
  <div class="p-4">
    <form @submit.prevent="registerUser" class="max-w-md mx-auto">
      <div class="mb-4">
        <input 
          v-model="formData.username" 
          type="text" 
          placeholder="Username"
          class="w-full p-2 border rounded"
        >
      </div>
      <div class="mb-4">
        <input 
          v-model="formData.email" 
          type="email" 
          placeholder="Email"
          class="w-full p-2 border rounded"
        >
      </div>
      <div class="mb-4">
        <input 
          v-model="formData.password" 
          type="password" 
          placeholder="Password"
          class="w-full p-2 border rounded"
        >
      </div>
      <button 
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>

    <div v-if="result" class="mt-4 p-4 border rounded">
      {{ result }}
    </div>
  </div>
</template>

<script setup>
const formData = ref({
  username: '',
  email: '',
  password: ''
})

const result = ref(null)

async function registerUser() {
  try {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify(formData.value)
    })
    result.value = await response.json()
  } catch (error) {
    result.value = { status: 'error', message: error.message }
  }
}
</script>