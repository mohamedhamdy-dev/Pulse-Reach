declare module "react-player" {
  import * as React from "react";

  export interface ReactPlayerProps {
    url: string | string[];
    playing?: boolean;
    loop?: boolean;
    controls?: boolean;
    muted?: boolean;
    width?: string | number;
    height?: string | number;
    onClick?: () => void;
    style?: object;
    // ...add any other props you need
  }

  export default class ReactPlayer extends React.Component<ReactPlayerProps> {}
}
