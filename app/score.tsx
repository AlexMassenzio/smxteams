import { Score } from "@/lib/types/scores.types";

const Score = (props: { scoreData: Score }) => {
  const scoreData = props.scoreData;
  return (
    <div className="border-gray-200 border-2">
      <h1>Submitted by: {scoreData.author || "Anonymous"}</h1>
      <ul>
        <li>{scoreData.player_1}</li>
        <li>{scoreData.player_2}</li>
      </ul>
      <h2>Song: {scoreData.song_id}</h2>
      <h3>Score: {scoreData.score}</h3>
    </div>
  );
};

export default Score;
