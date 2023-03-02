import { useCallback, useContext } from "react";
import { handleClosePlayer } from "../../modules/showPlayer";
import "../../styles/player.css";
import { PlayerContext } from "../../modules/PlayerContext";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";
import { handleRating } from "../../modules/handleRating";

export default function PlayerComponent() {
  const player = useContext(PlayerContext);

  const renderPlayerArea = useCallback(() => {
    return (
      <>
        {player?.getState().isPlaying && (
          <div className="player">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                maxHeight: "50px",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <HeroButtonComponent
                  title=""
                  icon="arrow-return-left"
                  action={() => handleClosePlayer()}
                />
                <span className="player-movie-title">
                  {player?.getState().movie.title}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <HeroButtonComponent
                  title={"Não Gostei"}
                  icon={"hand-thumbs-down"}
                  action={() => handleRating("dislike")}
                />
                <HeroButtonComponent
                  title={"Gostei"}
                  icon={"hand-thumbs-up"}
                  action={() => handleRating("like")}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }, [player]);

  return <>{renderPlayerArea()}</>;
}
