import { useCallback, useContext, useEffect } from "react";
import "../../styles/player.scss";
import { PlayerContext } from "../../modules/PlayerContext";
import VideoControlsComponent from "./VideoControlsComponent";
import { toast } from "react-toastify";

export default function PlayerComponent() {
  const player = useContext(PlayerContext);

  const renderPlayerArea = useCallback(() => {
    return (
      <>
        {player?.getState().isPlaying && (
          <div className="player">
            <div>
              <iframe
                className="player-movie-container"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/"
                title="YouTube video player"
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-controls">
              <VideoControlsComponent />
            </div>
          </div>
        )}
      </>
    );
  }, [player]);

  return <>{renderPlayerArea()}</>;
}

//uLtkt8BonwM?start=4757
