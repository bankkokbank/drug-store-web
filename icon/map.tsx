"use client";

import Icon, {
  CustomIconComponentProps,
} from "@ant-design/icons/lib/components/Icon";

const MapSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <g data-name="map android app aplication phone">
      <path d="M30.56 8.47a8 8 0 0 0-7-7 64.29 64.29 0 0 0-15.06 0 8 8 0 0 0-7 7 64.29 64.29 0 0 0 0 15.06 8 8 0 0 0 7 7 64.29 64.29 0 0 0 15.06 0 8 8 0 0 0 7-7 64.29 64.29 0 0 0 0-15.06zM3.42 23.3a63.65 63.65 0 0 1 0-14.6 6 6 0 0 1 1.07-2.79L14.59 16 4.49 26.09a6 6 0 0 1-1.07-2.79zm19.88 5.28a63.65 63.65 0 0 1-14.6 0 6 6 0 0 1-2.79-1.07L16 17.41l10.09 10.1a6 6 0 0 1-2.79 1.07zm5.28-5.28a6 6 0 0 1-1.07 2.79L5.91 4.49A6 6 0 0 1 8.7 3.42a63.65 63.65 0 0 1 14.6 0 6 6 0 0 1 5.28 5.28 63.65 63.65 0 0 1 0 14.6z" />
      <path d="M22 6a4 4 0 0 0-4 4c0 1.87 2.65 5.8 3.18 6.57a1 1 0 0 0 1.64 0C23.35 15.8 26 11.87 26 10a4 4 0 0 0-4-4zm0 8.18A13.26 13.26 0 0 1 20 10a2 2 0 0 1 4 0 13.36 13.36 0 0 1-2 4.18z" />
      <circle cx="22" cy="10" r="1" />
    </g>
  </svg>
);

const MapIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={MapSvg} {...props} />
);

export default MapIcon;
