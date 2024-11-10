<template>
  <form @submit.prevent="handleSubmit" class="max-w-md mx-auto p-6">
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input
        v-model="email"
        type="email"
        id="email"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
      />
    </div>
    
    <div class="mb-6">
      <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <input
        v-model="password"
        type="password"
        id="password"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
      />
    </div>

    <button
      type="submit"
      :disabled="isLoading"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {{ isLoading ? 'Logging in...' : 'Login' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const isLoading = ref(false);

const handleSubmit = async () => {
  try {
    isLoading.value = true;
    await authStore.login(email.value, password.value);
    router.push('/dashboard');
  } catch (error) {
    console.error('Login failed:', error);
    // Handle error (show toast notification, etc.)
  } finally {
    isLoading.value = false;
  }
};
</script> 