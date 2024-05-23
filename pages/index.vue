<template>
  <NuxtLink class="underline font-medium" :href="firstLesson.path">
    Go to first lesson
  </NuxtLink>
</template>

<script setup lang="ts">
const firstLesson = useFirstLesson();

definePageMeta({
  middleware: [
    function (_to, from) {
      const redirectPathCookie = useCookie("sb-redirect-path");

      if (redirectPathCookie.value) {
        return navigateTo(redirectPathCookie.value as string, {
          replace: true,
        });
      }
    },
  ],
});
</script>
