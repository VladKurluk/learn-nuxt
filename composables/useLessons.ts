import { LessonWithPath } from "~/types/course";

export default async (chapterSlug: string, lessonSlug: string) => {
  return useFetchWithSessionCache<LessonWithPath>(
    `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  );
  // Fetch data witn builtin cache mechanism
  //   return useFetchWithBuiltinCache<LessonWithPath>(
  //     `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  //   );
};
