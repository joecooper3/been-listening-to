import styled from "styled-components";

import { IPlayLinks } from "../interfaces/interfaces";

const Spotify = ({ url }) => {
  return (
    <a href={url} target="_blank">
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path
          fill="var(--blue)"
          d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
        />
      </svg>
    </a>
  );
};

const YouTube = ({ url }) => {
  return (
    <a href={url} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="var(--blue)"
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
        />
      </svg>
    </a>
  );
};

const Bandcamp = ({ url }) => {
  return (
    <a href={url} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 682.667 682.667"
      >
        <defs>
          <clipPath id="a" clipPathUnits="userSpaceOnUse">
            <path
              d="M2560 0c1413.85 0 2560 1146.15 2560 2560S3973.85 5120 2560 5120 0 3973.85 0 2560 1146.15 0 2560 0z"
              clip-rule="evenodd"
            />
          </clipPath>
          <clipPath id="b" clipPathUnits="userSpaceOnUse">
            <path d="M0 0h5120v5120H0z" />
          </clipPath>
          <clipPath id="c" clipPathUnits="userSpaceOnUse">
            <path
              d="M3248.57 2735.96c-183.49 0-277.25-144.42-277.25-362 0-205.66 101.38-360.04 277.25-360.04 198.89 0 273.45 182.02 273.45 360.04-.14 185.9-93.84 362-273.51 362M2761 3275.92h217.97v-522.15h3.85c59.28 98.87 183.55 160.21 294.46 160.21 311.63 0 462.74-245.35 462.74-544.05 0-274.84-133.84-533.97-426.43-533.97-133.85 0-277.25 33.54-342.29 168.09h-3.78v-140.51h-206.53v1412.35l.01.03"
              clip-rule="evenodd"
            />
          </clipPath>
          <clipPath id="d" clipPathUnits="userSpaceOnUse">
            <path d="M0 0h5120v5120H0z" fill="var(--blue)" />
          </clipPath>
          <clipPath id="e" clipPathUnits="userSpaceOnUse">
            <path
              d="M4543.89 2544.02c-17.22 124.62-105.15 191.92-225.61 191.92-112.87 0-271.54-61.35-271.54-371.91 0-170.13 72.64-350.15 261.97-350.15 126.18 0 214.11 87.14 235.18 233.51h217.97c-40.16-265.06-198.84-411.43-453.15-411.43-309.78 0-479.95 227.42-479.95 528.07 0 308.56 162.53 549.89 487.6 549.89 229.44 0 424.54-118.68 445.5-369.91h-217.61l-.36.01"
              clip-rule="evenodd"
            />
          </clipPath>
          <clipPath id="f" clipPathUnits="userSpaceOnUse">
            <path d="M0 0h5120v5120H0z" fill="var(--blue)" />
          </clipPath>
          <clipPath id="g" clipPathUnits="userSpaceOnUse">
            <path
              d="M1998.95 1866.62H364.078l763.462 1409.3h1634.88l-763.47-1409.3"
              clip-rule="evenodd"
            />
          </clipPath>
          <clipPath id="h" clipPathUnits="userSpaceOnUse">
            <path d="M0 0h5120v5120H0z" fill="var(--blue)" />
          </clipPath>
        </defs>
        <g clip-path="url(#a)" transform="matrix(.13333 0 0 -.13333 0 682.667)">
          <g clip-path="url(#b)">
            <path d="M0 0h5170v5170H0z" fill="var(--blue)" />
          </g>
        </g>
        <g clip-path="url(#c)" transform="matrix(.13333 0 0 -.13333 0 682.667)">
          <g clip-path="url(#d)">
            <path d="M2710.99 1785.96h1079.03v1539.96H2710.99z" className="inside" fill="var(--tan)" />
          </g>
        </g>
        <g clip-path="url(#e)" transform="matrix(.13333 0 0 -.13333 0 682.667)">
          <g clip-path="url(#f)">
            <path d="M3778.76 1785.96h1033.1v1177.96h-1033.1z" className="inside" fill="var(--tan)" />
          </g>
        </g>
        <g clip-path="url(#g)" transform="matrix(.13333 0 0 -.13333 0 682.667)">
          <g clip-path="url(#h)">
            <path d="M314.078 1816.62h2498.34v1509.3H314.078z" className="inside" fill="var(--tan)" />
          </g>
        </g>
      </svg>
    </a>
  );
};

const PlayLinks: React.FC<{ playLinks: IPlayLinks }> = ({ playLinks }) => {
  const { bandcamp, spotify, youtube } = playLinks;
  return (
    <Container>
      {spotify && <Spotify url={spotify} />}
      {youtube && <YouTube url={youtube} />}
      {bandcamp && <Bandcamp url={bandcamp} />}
    </Container>
  );
};

export default PlayLinks;

const Container = styled.div`
  height: 100%;
  margin: 0 10px;
  display: flex;
  align-items: center;

  svg {
    margin: 0 10px;
    path {
      transition: fill 0.25s;
    }

    &:hover {
      path {
        fill: var(--black);
      }
    }
    path.inside {
      fill: var(--tan) !important;
    }
  }
`;
