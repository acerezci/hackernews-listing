import React from "react";
import { Pagination, Story } from "../components";
import { StoryId, StoriesIds } from "../models";
import { getStoryIds } from "../service";
import "../styles/home.css";

export const Home: React.FC = () => {
  const [ids, setIds] = React.useState<StoriesIds>([]);
  const [loader, setLoader] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(4);
  const perPage = 50;
  const totalElement = 500;

  React.useEffect(() => {
    setLoader(true);
    getStoryIds()
      .then((response) => response && setIds(response))
      .catch(() => setError(true))
      .finally(() => setLoader(false));
  }, []);

  if (loader) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There is an error... Please try again later...</div>;
  }

  return (
    <div className="home-container">
      {ids &&
        ids
          .slice((currentPage - 1) * perPage, currentPage * perPage)
          .map((id: StoryId, index: number) => <Story key={`${id}-${index}`} id={id} />)}
      <div>
        {[...Array(totalElement / perPage)].map((_, index: number) => (
          <Pagination
            onClick={() => setCurrentPage(index + 1)}
            key={index}
            currentPage={currentPage}
            pageNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
};
