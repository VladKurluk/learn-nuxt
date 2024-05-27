export type Lesson = {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  videoId: number;
  text: string;
  sourceUrl?: string;
};

export type LessonWithPath = Lesson & {
  path: string;
};

export type Chapter = {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[] | LessonWithPath[];
};

export type Course = {
  title: string;
  chapters: Chapter[];
};

type Outlinebase = {
  title: string;
  slug: string;
  number: number;
};

export type OutlineLesson = Outlinebase & {
  path: string;
};

export type OutlineChapter = Outlinebase & {
  lessons: OutlineLesson[];
};

export type CourseMeta = {
  title: string;
  chapters: OutlineChapter[];
};
