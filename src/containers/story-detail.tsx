import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Story } from "../models";
import { getStory } from "../service";
import { mapTime } from "../utils";
import { Comment } from "../components";
import Star from "../assets/star.png";
import "../styles/story-detail.css";

export const StoryDetail: React.FC = () => {
  const { id: storyId } = useParams<Params>();
  const history = useHistory();
  const [story, setStory] = React.useState<Story>();
  const [loading, setLoading] = React.useState<Boolean>(false);
  const [error, setError] = React.useState<Boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    getStory(parseInt(storyId))
      .then((response) => response && setStory(response))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [storyId]);

  const goBack = () => {
    history.goBack();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There is an error... Please try again later...</div>;
  }

  return (
    <React.Fragment>
      {story && (
        <div className="story-detail-container">
          <div onClick={goBack} className="back-button pointer">
            &#8610; Back
          </div>
          <div className="header">
            <div>
              <div className="title">
                {story.title}
                <span className="id">({story.id})</span>
              </div>
              <div className="created-by">Created By: {story.by}</div>
            </div>
            <div className="header-right">
              <div className="story">{story.type} Type</div>
              <div className="score">
                {story.score}
                <img className="star" src={Star} alt="star" />
                <img className="star" src={Star} alt="star" />
                <img className="star" src={Star} alt="star" />
              </div>
              {story.time && <div className="time">{mapTime(story.time)}</div>}
            </div>
          </div>
          <div className="url pointer">
            <a href={story.url} target="_blank" rel="noreferrer">
              Click here you can visit the story
            </a>
          </div>
          {story.kids && (
            <React.Fragment>
              <div className="comment-title">Comments({story.kids.length}) </div>
              {story.kids.map((kid, index) => (
                <Comment key={`${kid}-${index}`} id={kid} />
              ))}
            </React.Fragment>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

type Params = {
  id: string;
};
