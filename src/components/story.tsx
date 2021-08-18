import React from "react";
import { Story as StoryType, StoryId } from "../models";
import { getStory } from "../service";
import { mapTime } from "../utils";
import { useHistory } from "react-router-dom";
import "../styles/story.css";

export const Story: React.FC<Props> = React.memo(({ id }) => {
  const [story, setStory] = React.useState<StoryType>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const history = useHistory();

  React.useEffect(() => {
    let mounted = true;

    setLoading(true);
    getStory(id)
      .then((response) => {
        mounted && response && setStory(response);
      })
      .catch(() => {
        mounted && setError(true);
      })
      .finally(() => {
        mounted && setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  const openDetail = (id: number) => {
    id && history.push(`/story-detail/${id}`);
  };

  const openUrl = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, "_blank", "noreferrer");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There is an error... Please try again later...</div>;
  }

  return (
    <React.Fragment>
      {story && !error && (
        <div className="story-container pointer" onClick={() => openDetail(story.id)}>
          <div onClick={(e) => openUrl(e, story?.url || "#")} className="story-title">
            {story.title}
          </div>
          <div className="story-footer">
            <div className="story-by">
              Created By <span>{story.by}</span>
            </div>
            {story.time && <div className="story-time">{mapTime(story.time)}</div>}
          </div>
        </div>
      )}
    </React.Fragment>
  );
});

interface Props {
  id: StoryId;
}
