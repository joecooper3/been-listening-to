import styled from "styled-components";

type ScoreProps = {
  score: number;
};

const STAR_SIZE = 16;

const Star = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={STAR_SIZE}
      height={STAR_SIZE}
      viewBox="0 0 24 24"
    >
      <path
        fill="var(--blue)"
        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
      />
    </svg>
  );
};

const HalfStar = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={STAR_SIZE}
      height={STAR_SIZE}
      viewBox="0 0 24 24"
    >
      <path
        fill="var(--blue)"
        d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"
      />
    </svg>
  );
};

const EmptyStar = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={STAR_SIZE}
      height={STAR_SIZE}
      viewBox="0 0 24 24"
    >
      <path
        fill="var(--blue)"
        d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"
      />
    </svg>
  );
};

const ScoreStars = ({ score }: ScoreProps): JSX.Element => {
  const fullStars = Math.floor(score / 2);
  const halfStar = score % 2 === 1;
  const allStars = [];
  let usedHalfStar = false;
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      allStars.push(<Star />);
    } else if (halfStar && !usedHalfStar) {
      allStars.push(<HalfStar />);
      usedHalfStar = true;
    } else {
      allStars.push(<EmptyStar />);
    }
  }
  return <>{allStars.map((item) => item)}</>;
};

const Score = ({ score }: ScoreProps): JSX.Element => {
  return (
    <Container>
      <ScoreStars score={score} />
    </Container>
  );
};

export default Score;

const Container = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / 3;
  grid-row: 3;
  margin-top: 10px;
`;
