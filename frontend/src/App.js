import React, { useState, useEffect } from "react";

export default function App() {
  const [list, setList] = useState(true);
  const [list1, setList1] = useState(false);
  const [list2, setList2] = useState(false);
  const [card, setCard] = useState(false);
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [players1, setPlayers1] = useState([]);
  const [players2, setPlayers2] = useState([]);
  const [name, setName] = useState('')
  const [theArtist, settheArtist] = useState('')


  useEffect(() => {
    fetch("http://localhost:3001/players/list")
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayers(responseJson.data);
      });
  }, []);
  

  let getTitle = () => {
    fetch(`http://localhost:3001/players/title/${name}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayers2(responseJson.data);
        setList(true);
        setList1(false)
        setList2(true);
      });
  };

  let getArtist = () => {
    fetch(`http://localhost:3001/players/${theArtist}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayers1(responseJson.data);
        setList1(true);
        setList(true);
        setList2(false);
      });
  };


  return (
    <div className="container">
      <h1>Search Title</h1>
      <input 
      type="text"
      name="name"
      onChange={event => setName(event.target.value)} />
      <button  onClick={() => getTitle()}>
        Search
      </button>
      <h1>Search Artist</h1>
      <input 
      type="text"
      name="name"
      onChange={event => settheArtist(event.target.value)} />
      <button  onClick={() => getArtist()}>
        Search
      </button>
      {list2 ? (
        <div className="list-group">
          <h1><b>Results:</b></h1>
          {players2.map((player) => (
            <li>
              <b>Artist:</b> { player.artist }, <b>Title:</b> { player.title }
            </li>
          ))}
          <br></br>
        </div>
      ) : null}
      {list1 ? (
        <div className="list-group">
          <h1><b>Results:</b></h1>
          {players1.map((player) => (
            <li>
              
              <b>Artist:</b> { player.artist }, <b>Title:</b> { player.title }
            </li>
          ))}
          <br></br>
        </div>
      ) : null}
      {list ? (
        
        <div className="list-group">
          <br></br>
          <h1><b>Track List:</b></h1>
          {players.map((player) => (
            <li>
              <b>Artist:</b> {player.artist }, <b>Title:</b> { player.title }
            </li>
          ))}

        </div>
      ) : null}
    </div>
  );
}