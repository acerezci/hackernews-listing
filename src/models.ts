export type StoryId = number;
export type StoriesIds = StoryId[];
export type CommentId = number;

export interface Story {
  id: number;
  deleted?: boolean;
  type: string;
  by?: string;
  time?: number;
  dead?: boolean;
  kids?: CommentId[];
  descendants?: number;
  score?: number;
  title?: string;
  url?: string;
}

export interface Comment {
  id: number;
  deleted?: boolean;
  type: string;
  by?: string;
  time?: number;
  dead?: boolean;
  kids?: CommentId[];
  parent?: number;
  text?: string;
}
