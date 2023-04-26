"use client";
import { useState } from "react";
import { useContext } from "react";
import { SupabaseContext } from "../supabaseContext";

const NewScoreForm = () => {
  const [player_1, setPlayer_1] = useState("");
  const [player_2, setPlayer_2] = useState("");
  const [song_id, setSong_id] = useState("");
  const [score, setScore] = useState(0);
  const [approved, setApproved] = useState(true);

  const supabase = useContext(SupabaseContext);
  const submitScore = async () => {
    const { error } = await supabase.from("scores").insert({
      player_1,
      player_2,
      song_id,
      score,
      approved,
    });
  };

  return (
    <form>
      <label htmlFor="player_1">player_1:</label>
      <input
        type="text"
        id="player_1"
        name="player_1"
        value={player_1}
        onChange={(e) => setPlayer_1(e.target.value)}
        className="text-black"
      />
      <label htmlFor="player_2">player_2:</label>
      <input
        type="text"
        id="player_2"
        name="player_2"
        value={player_2}
        onChange={(e) => setPlayer_2(e.target.value)}
        className="text-black"
      />
      <label htmlFor="song_id">song_id:</label>
      <input
        type="text"
        id="song_id"
        name="song_id"
        value={song_id}
        onChange={(e) => setSong_id(e.target.value)}
        className="text-black"
      />
      <label htmlFor="score">score:</label>
      <input
        type="number"
        id="score"
        name="score"
        value={score}
        onChange={(e) => setScore(e.target.valueAsNumber)}
        className="text-black"
      />
      <label htmlFor="approved">approved:</label>
      <input
        type="checkbox"
        id="approved"
        name="approved"
        checked={approved}
        onChange={(e) => setApproved(!approved)}
        className="text-black"
      />
      <button type="button" onClick={submitScore}>
        Submit Score
      </button>
    </form>
  );
};

export default NewScoreForm;
