import React from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

import PlayLinks from "./PlayLinks";
import Score from "./Score";
import { IRating } from "../interfaces/interfaces";

import { artistNamesToString, genresToString } from "../utils/formatters";

const RatingItem: React.FC<{ data: IRating; variants: Variants }> = ({
  data,
  variants,
}) => {
  const {
    albumArt,
    albumName,
    artistNames,
    releaseYear,
    genres,
    score,
    playLinks,
  } = data;
  const imageUrl = albumArt.url;

  return (
    <Container layout variants={variants}>
      <AlbumArt src={imageUrl} alt={`${albumName}`} layout />
      <PlayLinks playLinks={playLinks} />
      <Meta layout>
        <Artist>{artistNamesToString(artistNames)}</Artist>
        <AlbumName>{albumName}</AlbumName>
        <Details>{releaseYear}</Details>
        <Details>{genresToString(genres)}</Details>
      </Meta>
      {score > 0 && <Score score={score} />}
    </Container>
  );
};

export default RatingItem;

const Container = styled(motion.article)`
  display: grid;
  grid-template-columns: 135px 110px 1fr;
  grid-template-rows: 63px auto 30px auto 1fr;
  width: 100%;
  max-width: 625px;
`;

const AlbumArt = styled(motion.img)`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  width: 100%;
  z-index: 2;
`;

const Meta = styled(motion.div)`
  background: var(--white);
  grid-column: 2 / -1;
  grid-row: 2 / 5;
  padding: 30px 20px 30px 130px;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  line-height: 1.3;
`;

const Artist = styled.h2`
  font-size: 36px;
  color: var(--blue);
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
  l
`;
