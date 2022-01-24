import React, { useState, useEffect } from "react";

export default function App() {
  const [list, setList] = useState(true);
  const [list1, setList1] = useState(false);
  const [list2, setList2] = useState(false);
  const [list3, setList3] = useState(false);
  const [tracks, settracks] = useState([]);
  const [tracks1, settracks1] = useState([]);
  const [tracks2, settracks2] = useState([]);
  const [tracks3, settracks3] = useState([]);
  const [name, setName] = useState('')
  const [ID, setID] = useState(0)
  const [theArtist, settheArtist] = useState('')


  useEffect(() => {
    fetch("http://localhost:3001/tracks/list")
      .then((response) => response.json())
      .then((responseJson) => {
        settracks(responseJson.data);
      });
  }, []);
  

  let getTitle = () => {
    fetch(`http://localhost:3001/tracks/title/${name}`)
      .then((response) => response.json())
      .then((responseJson) => {
        settracks2(responseJson.data);
        setList(true);
        setList1(false)
        setList2(true);
        setList3(false);
      });
  };

  let getArtist = () => {
    fetch(`http://localhost:3001/tracks/${theArtist}`)
      .then((response) => response.json())
      .then((responseJson) => {
        settracks1(responseJson.data);
        setList1(true);
        setList(true);
        setList2(false);
        setList3(false);
      });
  };

  let getID = () => {
    fetch(`http://localhost:3001/tracks/id/${ID}`)
      .then((response) => response.json())
      .then((responseJson) => {
        settracks3(responseJson.data);
        setList1(false);
        setList3(true);
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

      <h1>Search ID</h1>
      <input 
      type="number"
      name="name"
      onChange={event => setID(event.target.value)} />
      <button  onClick={() => getID()}>
        Search
      </button>

      {list2 ? (
        <div className="list-group">
          <h1><b>Results:</b></h1>
          {tracks2.map((track) => (
            <li>
              <b>Artist:</b> { track.artist }, <b>Title:</b> { track.title }, <b>ID:</b> { track.id }
            </li>
          ))}
          <br></br>
        </div>
      ) : null}
      {list3 ? (
        <div className="list-group">
          <h1><b>Results:</b></h1>
          {tracks3.map((track) => (
            <li>
              <b>Artist:</b> { track.artist }, <b>Title:</b> { track.title }, <b>ID:</b> { track.id }
            </li>
          ))}
          <br></br>
        </div>
      ) : null}
      {list1 ? (
        <div className="list-group">
          <h1><b>Results:</b></h1>
          {tracks1.map((track) => (
            <li>
              
              <b>Artist:</b> { track.artist }, <b>Title:</b> { track.title }, <b>ID:</b> { track.id }
            </li>
          ))}
          <br></br>
        </div>
      ) : null}
      {list ? (
        
        <div className="list-group">
          <br></br>
          <h1><b>Track List:</b></h1>
          {tracks.map((track) => (
            <li>
              <b>Artist:</b> {track.artist }, <b>Title:</b> { track.title }, <b>ID:</b> { track.id }
            </li>
          ))}

        </div>
      ) : null}
    </div>
  );
}