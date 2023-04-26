import { Score } from "@/lib/types/scores.types";

const Score = (props: { scoreData: Score; rowNumber: number }) => {
  const scoreData = props.scoreData;
  return (
    <tr>
      <th>{props.rowNumber}</th>
      <th>{scoreData.song_id}</th>
      <th>{scoreData.player_1}</th>
      <th>{scoreData.player_2}</th>
      <th>{scoreData.score}</th>
      <th>{scoreData.created_at}</th>
    </tr>
  );
};

export default Score;
