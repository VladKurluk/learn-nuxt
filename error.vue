<template>
    <NuxtLayout>
        <div class="prose flex flex-col items-center">
            <template v-if="error.statusCode === 404">
                <h1>404</h1>
                <p><strong>Sorry, that page doesn't exist.</strong></p>
            </template>
            <template v-else>
                <h2>{{ error.statusCode }}</h2>
                <p>
                <strong>{{ error.message }}</strong>
                </p>
                <button
                    @click="handleError"
                    class="border mt-4 py-2.5 px-2 rounded-md bg-green-300 border-green-700"
                >
                    Clear errors
                </button>
            </template>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
const error = useError();

console.log(error);

const props = defineProps({
  error: Object as () => NuxtError
});

const handleError = () => clearError({ redirect: '/' });
</script>

