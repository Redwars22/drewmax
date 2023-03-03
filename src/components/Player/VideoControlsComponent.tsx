import { useCallback, useEffect, useState } from "react";
import HeroButtonComponent from "../Hero/HeroButtons/HeroButton";
import { toast } from "react-toastify";

export default function VideoControlsComponent() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [timeStamp, setTimeStamp] = useState("00:00");

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
        <span style={{ color: "white" }}>01:16:59</span>
      </div>
      <div style={{ display: "flex" }}>
        <HeroButtonComponent
          title={""}
          icon={"question"}
          action={() => toast("Não tem ajuda, se vire!")}
        />
        <HeroButtonComponent
          title={""}
          icon={"plus"}
          action={() =>
            toast(
              "Não foi possível adicionar à lista, porque ainda nem tem lista :P"
            )
          }
        />
      </div>
    </div>
  );
}
