<template>
    <NuxtLayout>
        <div class="prose flex flex-col items-center">
            <template v-if="error.statusCode === 404">
                <h1>404</h1>
                <p><strong>Sorry, that page doesn't exist.</strong></p>
                <strong>{{ error.message }}</strong>
                <button
                    @click="handleError('/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3')"
                    class="border mt-4 py-2.5 px-2 rounded-md bg-green-300 border-green-700"
                >
                    Go to the first lesson
                </button>
            </template>
            <template v-else>
                <h2>{{ error.statusCode }}</h2>
                <p>
                <strong>{{ error.message }}</strong>
                </p>
                <button
                    @click="handleError('/')"
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

const handleError = (redirectTo) => clearError({ redirect: redirectTo });
</script>

