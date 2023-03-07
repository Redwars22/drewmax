import React, { ReactNode, FC, createContext, useState } from "react";
import { IPlayerContext } from "../types/player";
import { JsxElement } from "typescript";

type IPlayer = null | {
  player: IPlayerContext;
  setPlayerProps: (props: IPlayerContext) => void;
  getState: () => IPlayerContext;
};

const PlayerContext = createContext<IPlayer>(null);

const PlayerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
  value: IPlayerContext | null;
}): JSX.Element => {
  const [player, setPlayer] = useState({
    isPlaying: false,
    movie: {
      title: "",
      uuid: "",
    },
  } as IPlayerContext);

  const setPlayerProps = (values: IPlayerContext) => {
    setPlayer((s) => ({
      ...s,
      isPlaying: values.isPlaying,
      movie: {
        title: values.movie.title,
        uuid: "",
        data: {
          synopsis: values.movie.data?.synopsis!,
          cover: values.movie.data?.cover!,
        },
      },
    }));
  };

  const getState = () => player;

  const values = {
    player,
    setPlayerProps,
    getState,
  } as IPlayer;

  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
};

export { PlayerContext, PlayerContextProvider };
