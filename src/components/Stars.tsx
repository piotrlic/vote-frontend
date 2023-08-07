import {useEffect, useState} from "preact/compat";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;
const Stars = ()=> {
  const [vote, setVote] = useState<number>(0)
  const [tickClicked, setTickClicked] = useState(false)
  const stars_selected = vote > 0
  const updateVote = (e) => {
    setVote(e.target.id)
  }
  useEffect(()=>{
    if(tickClicked){

      setTickClicked(false)
      document.getElementById('confirm_btn').className = 'confirm_btn_disabled';
    }
  }, [tickClicked])
  const sendVote = async () => {
    await addDoc(collection(db, "votes"), {
      vote: vote,
      creationDate: Timestamp.now()
    });

    document.getElementById('confirm_btn').className = 'btn_clicked';
    setTickClicked(true)
    setVote(0)
  }
  return (
    <>
      <div className="stars">
        {Array.from({ length: 5 }, (_, i) =>
          i < vote ?
            <div id={`${i+1}`} className="vote_item_enabled" onClick={updateVote}/> :
            <div id={`${i+1}`} className="vote_item_disabled" onClick={updateVote}/>
        )}
      </div>
      <button id="confirm_btn" className={stars_selected ? "confirm_btn": "confirm_btn_disabled"} onClick={stars_selected ? sendVote : undefined}/>
    </>
  )
}

export default Stars