import { useCallback, useContext, useEffect, useState } from "react";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";
import { toast } from "react-toastify";
import {
  fetchFavorites,
  handleAddToFavorites,
} from "../../modules/handleFavorites";
import { PlayerContext } from "../../modules/PlayerContext";
import { IFavorite } from "../../types/types";
import { useHistory } from "react-router-dom";
import { handleRating } from "../../modules/handleRating";

export default function VideoControlsComponent() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [timeStamp, setTimeStamp] = useState("01:57");
  const player = useContext(PlayerContext);
  const history = useHistory();
  const [isAlreadyInTheFavsList, setIsAlreadyInTheFavsList] = useState(false);

  useEffect(() => {
    if (isPlaying)
      setTimeout(() => {
        setVideoProgress(videoProgress + 1);
      }, 1000);
  }, [isPlaying, videoProgress]);

  const renderTimeStamp = useCallback(
    () => <span style={{ color: "white" }}>{timeStamp}</span>,
    [timeStamp]
  );

  return (
    <div className="controls-container">
      <div style={{ display: "flex" }}>
        <HeroButtonComponent
          title=""
          icon="arrow-return-left"
          action={() => history.push("/")}
        />
        {!isPlaying && (
          <HeroButtonComponent
            title={""}
            icon={"play"}
            action={() => setIsPlaying(true)}
          />
        )}
        {isPlaying && (
          <HeroButtonComponent
            title={""}
            icon={"pause"}
            action={() => setIsPlaying(false)}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {renderTimeStamp()}
        <input
          type="range"
          min={0}
          value={videoProgress}
          max={256}
          style={{
            accentColor: "red",
            width: "72vw",
          }}
        ></input>
        <span style={{ color: "white" }}>01:28:37</span>
      </div>
      <div style={{ display: "flex" }}>
        <HeroButtonComponent
          title={""}
          icon={"heart"}
          action={() =>
            handleAddToFavorites({
              title: player?.getState().movie.title,
              cover: player?.getState().movie.data?.cover,
              synopsis: player?.getState().movie.data?.synopsis,
            })
          }
        />
        <HeroButtonComponent
          title={""}
          icon={"hand-thumbs-down"}
          action={() => handleRating("dislike")}
        />
        <HeroButtonComponent
          title={""}
          icon={"hand-thumbs-up"}
          action={() => handleRating("like")}
        />
      </div>
    </div>
  );
}
