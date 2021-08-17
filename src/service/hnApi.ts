import { storiesURL, storyURL } from "../config";
import { StoriesIds, Story, StoryId } from "../models";

export const getStoryIds = async (): Promise<StoriesIds> => {
  const result = await fetch(storiesURL);
  const ids: StoriesIds = await result.json();

  return ids;
};

export const getStory = async (id: StoryId): Promise<Story> => {
  const result = await fetch(`${storyURL}${id}.json`);
  const story: Story = await result.json();

  return story;
};
