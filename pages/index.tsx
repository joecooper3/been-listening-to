import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

import { dateToNumber } from "../utils/formatters";
import dbConnect from "../utils/dbConnect";
import { Rating } from "../models/models";
import { IRating } from "../interfaces/interfaces";
import RatingItem from "../components/RatingItem";

import Title from "../components/home/Title";

export async function getStaticProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Rating.find().sort({ dateAdded: -1 }).limit(25);
  const recents = result.map((doc) => {
    const rating = doc.toObject();
    rating.dateAdded = dateToNumber(rating.dateAdded);
    rating.createdAt = dateToNumber(rating.createdAt);
    rating.updatedAt = dateToNumber(rating.updatedAt);
    delete rating.albumArt._id;
    delete rating.playLinks._id;
    return rating;
  });

  return { props: { recents: recents } };
}

const container: Variants = {
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 70 },
  show: { opacity: 1, y: 0 },
};

export default function Home({ recents }) {
  console.log(recents);
  const [titleAnimComplete, setTitleAnimComplete] = useState(false);
  return (
    <Layout>
      <Head>
        <title>been listening to…</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>📻</text></svg>" />
      </Head>

      <main>
        <Title animComplete={setTitleAnimComplete} />
        <Container
          initial="hidden"
          animate={titleAnimComplete && "show"}
          variants={container}
        >
          {titleAnimComplete &&
            recents.map((rating: IRating) => {
              return (
                <RatingItem
                  data={rating}
                  key={rating._id}
                  variants={listItem}
                />
              );
            })}
        </Container>
      </main>
    </Layout>
  );
}

const Container = styled(motion.section)`
  display: grid;
  margin: 70px auto;
  max-width: 100%;
  width: 100%;
  padding: 0 45px;
  column-gap: 70px;
  row-gap: 50px;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 2000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
