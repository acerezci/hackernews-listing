import React from "react";
import { Story as StoryType, StoryId } from "../models";
import { getStory } from "../service";
import { mapTime } from "../utils";
import "../styles/story.css";

export const Story: React.FC<Props> = React.memo(({ id }) => {
  const [story, setStory] = React.useState<StoryType>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    getStory(id)
      .then((response) => response && setStory(response))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(story);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There is an error... Please try again later...</div>;
  }

  return (
    <div className="story-container">
      {story && !error && (
        <React.Fragment>
          <div className="story-title">
            <a target="_blank" rel="noreferrer" href={story.url}>
              {story.title}
            </a>
          </div>
          <div className="story-footer">
            <div className="story-by">
              Created By <span>{story.by}</span>
            </div>
            <div className="story-time">{mapTime(story.time)}</div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
});

interface Props {
  id: StoryId;
}
