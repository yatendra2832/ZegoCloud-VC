import React, { useState, useCallback } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleRoomJoin = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  
  return (
    <div className="container">
      <input
        type="text"
        name="roomcode"
        id="roomcode"
        placeholder="Enter room code"
        className="input-field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="join-button" onClick={handleRoomJoin}>
        Join
      </button>
    </div>
  );
};

export default Home;
