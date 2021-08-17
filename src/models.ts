export type StoryId = number;
export type StoriesIds = StoryId[];

export interface Story {
  by: string;
  descendants: number;
  id: StoryId;
  kids: StoryId[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}
