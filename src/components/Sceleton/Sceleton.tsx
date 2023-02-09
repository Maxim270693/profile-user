import React, { FunctionComponent } from "react";
import ContentLoader from "react-content-loader";

interface IProps {}

export const MyLoader: FunctionComponent<IProps> = (props) => (
  <ContentLoader
    speed={2}
    width={800}
    height={466}
    viewBox="0 0 800 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="206" cy="105" r="89" />
    <rect x="136" y="208" rx="0" ry="0" width="151" height="27" />
    <rect x="325" y="28" rx="0" ry="0" width="190" height="26" />
    <rect x="326" y="70" rx="0" ry="0" width="141" height="24" />
    <rect x="326" y="150" rx="0" ry="0" width="201" height="22" />
    <rect x="327" y="194" rx="0" ry="0" width="140" height="20" />
    <rect x="326" y="231" rx="0" ry="0" width="176" height="22" />
    <rect x="564" y="42" rx="0" ry="0" width="190" height="40" />
  </ContentLoader>
);
