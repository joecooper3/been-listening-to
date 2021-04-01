import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const container = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listItem = {
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
        <link rel="icon" href="/favicon.ico" />
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
                  <RatingItem data={rating} key={rating._id} variants={listItem} />
              );
            })}
        </Container>
      </main>
    </Layout>
  );
}

const Container = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1440px;
  width: 100%;
  padding: 0 45px;
  column-gap: 70px;
  row-gap: 50px;
`;
