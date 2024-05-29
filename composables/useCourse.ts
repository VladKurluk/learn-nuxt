// import { Lesson, LessonWithPath, Chapter, Course } from "~/types/course";
// import courseData from "./courseData";
import type { CourseOutline } from "~/server/api/course/meta.get";

// export const useCourse = (): Course => {
//   const chapters: Chapter[] = courseData.chapters.map((chapter: Chapter) => {
//     const lessons: LessonWithPath[] = chapter.lessons.map((lesson: Lesson) => ({
//       ...lesson,
//       path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
//     }));
//     return {
//       ...chapter,
//       lessons,
//     };
//   });
//   return {
//     ...courseData,
//     chapters,
//   };
// };

export default async () => {
  // return useFetchWithSessionCache<CourseOutline>("/api/course/meta");
  return useFetchWithBuiltinCache<CourseOutline>("/api/course/meta");
};
