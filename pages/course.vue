<template>
  <div>
    <div class="mb-4 flex justify-between items-center w-full">
      <h1>
        <span class="font-medium">
          <span class="font-bold">{{ course.title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <div
          class="space-y-1 mb-4 flex flex-col"
          v-for="(chapter, index) in course.chapters"
          :key="chapter.slug"
        >
          <h4 class="flex justify-between items-center">
            {{ chapter.title }}
            <span
              v-if="percentageCompleted && user"
              class="text-emerald-500 text-sm"
            >
              {{ percentageCompleted.chapters[index] }}%
            </span>
          </h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            :to="lesson.path"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
            :class="{
              'text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }"
          >
            <span class="text-gray-500">{{ index + 1 }}</span>
            <span>
              {{ lesson.title }}
            </span>
          </NuxtLink>
        </div>
        <div
          v-if="percentageCompleted"
          class="mt-8 text-sm font-medium text-gray-500 flex justify-between items-center"
        >
          Course completion:
          <span> {{ percentageCompleted.course }}% </span>
        </div>
      </div>

      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <template #error="{ error, clearError }">
            <div
              class="w-full h-full flex flex-col items-center justify-center"
            >
              <p>
                Oh no, something went wrong with the lesson!
                <br />
                <code>{{ error }}</code>
              </p>
              <button
                class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded mt-4"
                @click="() => resetError(clearError)"
              >
                Clear the error.
              </button>
            </div>
          </template>
          <NuxtPage />
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCourseProgress } from "~/store/courseProgress";
import { storeToRefs } from "pinia";
const user = useSupabaseUser();
const firstLesson = await useFirstLesson();
const course = await useCourse();

// definePageMeta({
//   layout: false,
// })

// Get chapter completion percentages
const { percentageCompleted } = storeToRefs(useCourseProgress());

const resetError = async (clearError) => {
  await navigateTo(firstLesson.path);
  clearError();
};
</script>
