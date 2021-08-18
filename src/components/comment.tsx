import React from "react";
import { Comment as CommentType } from "../models";
import { getComment } from "../service";
import { mapTime } from "../utils";
import "../styles/comment.css";

export const Comment: React.FC<Props> = ({ id }) => {
  const [comment, setComment] = React.useState<CommentType>();
  const [loading, setLoading] = React.useState<Boolean>(false);
  const [error, setError] = React.useState<Boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    getComment(id)
      .then((response) => response && setComment(response))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There is an error... Please try again later...</div>;
  }

  return (
    <React.Fragment>
      {comment && (
        <div className="comment-container">
          {comment?.text && (
            <div className="comment" dangerouslySetInnerHTML={{ __html: comment.text }} />
          )}
          <div className="comment-footer">
            {comment?.by && <div className="comment-created-by">Created By: {comment.by}</div>}
            {comment?.time && <div className="comment-time">{mapTime(comment.time)} ago</div>}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

interface Props {
  id: number;
}
