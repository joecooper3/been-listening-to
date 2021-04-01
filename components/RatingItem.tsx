import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import PlayLinks from "./PlayLinks";
import { IRating } from "../interfaces/interfaces";

import { artistNamesToString, genresToString } from "../utils/formatters";

const RatingItem: React.FC<{ data: IRating; variants: any }> = ({
  data,
  variants,
}) => {
  const {
    albumArt,
    albumName,
    artistNames,
    releaseYear,
    genres,
    playLinks,
  } = data;
  const imageUrl = albumArt.url;
  return (
    <Container variants={variants}>
      <AlbumArt src={imageUrl} alt={`${albumName}`} />
      <PlayLinks playLinks={playLinks} />
      <Meta>
        <Artist>{artistNamesToString(artistNames)}</Artist>
        <AlbumName>{albumName}</AlbumName>
        <Details>{releaseYear}</Details>
        <Details>{genresToString(genres)}</Details>
      </Meta>
    </Container>
  );
};

export default RatingItem;

const Container = styled(motion.article)`
  display: grid;
  grid-template-columns: 135px 110px 1fr;
  grid-template-rows: 63px 1fr;
  max-width: 625px;
`;

const AlbumArt = styled.img`
  grid-column: 1 / 3;
  grid-row: 1 / -1;
  width: 100%;
  z-index: 2;
`;

const Meta = styled.div`
  background: var(--white);
  grid-column: 2 / -1;
  grid-row: 2;
  padding: 30px 20px 30px 130px;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const Artist = styled.h2`
  font-size: 36px;
  color: var(--blue);
  line-height: 1.3;
  margin: 10px 0;
`;

const AlbumName = styled.h3`
  font-size: 24px;
  color: var(--black);
  font-weight: 300;
  margin: 10px 0 18px;
`;

const Details = styled.p`
  font-weight: 600;
  color: var(--blue);
  font-size: 18px;
  margin: 10px 0;
`;
