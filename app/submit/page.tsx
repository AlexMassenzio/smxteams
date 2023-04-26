"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/app/supabaseProvider";

const NewScoreForm = () => {
  const [player_1, setPlayer_1] = useState("");
  const [player_2, setPlayer_2] = useState("");
  const [song_id, setSong_id] = useState("");
  const [score, setScore] = useState(0);
  const [approved, setApproved] = useState(true);

  const router = useRouter();
  const { supabase } = useSupabase();
  const submitScore = async () => {
    const { error } = await supabase.from("scores").insert({
      player_1,
      player_2,
      song_id,
      score,
      approved,
    });
    router.push("/");
  };

  return (
    <form className="form-control">
      <label className="label" htmlFor="player_1">
        <span className="label-text">Player 1:</span>
      </label>
      <label className="input-group">
        <span>Player 1</span>
        <input
          type="text"
          id="player_1"
          name="player_1"
          value={player_1}
          onChange={(e) => setPlayer_1(e.target.value)}
          className="input input-bordered"
        />
      </label>

      <label className="label" htmlFor="player_2">
        <span className="label-text">Player 2:</span>
      </label>
      <label className="input-group">
        <span>Player 2</span>
        <input
          type="text"
          id="player_2"
          name="player_2"
          value={player_2}
          onChange={(e) => setPlayer_2(e.target.value)}
          className="input input-bordered"
        />
      </label>

      <label className="label" htmlFor="song_id">
        <span className="label-text">Song:</span>
      </label>
      <label className="input-group">
        <span>Song</span>
        <input
          type="text"
          id="song_id"
          name="song_id"
          value={song_id}
          onChange={(e) => setSong_id(e.target.value)}
          className="input input-bordered"
        />
      </label>

      <label className="label" htmlFor="score">
        <span className="label-text">Score:</span>
      </label>
      <label className="input-group">
        <span>Score</span>
        <input
          type="number"
          id="score"
          name="score"
          value={score}
          onChange={(e) => setScore(e.target.valueAsNumber)}
          className="input input-bordered"
        />
      </label>

      <label className="label" htmlFor="approved">
        <span className="label-text">Approved:</span>
      </label>
      <label className="input-group">
        <span>Approved</span>
        <input
          type="checkbox"
          id="approved"
          name="approved"
          checked={approved}
          onChange={(e) => setApproved(!approved)}
          className="checkbox"
        />
      </label>

      <button type="button" className="btn btn-primary" onClick={submitScore}>
        Submit Score
      </button>
    </form>
  );
};

export default NewScoreForm;
