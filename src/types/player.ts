export interface IPlayerContext {
  isPlaying: boolean;
  movie: {
    title: string;
    uuid: string;
    data?: {
      synopsis: string | undefined;
      cover: string;
    };
  };
}
