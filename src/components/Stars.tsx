import {useEffect, useState} from "preact/compat";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;
const Stars = ()=> {
  const [vote, setVote] = useState<number>(0)
  const [clicked, setClicked] = useState(false)
  const updateVote = (e) => {
    setVote(e.target.id)
  }
  useEffect(()=>{
    if(clicked){

      setClicked(false)
      document.getElementById('confirm_btn').className = 'confirm_btn';
    }
  }, [clicked])
  const sendVote = async () => {
    await addDoc(collection(db, "votes"), {
      vote: vote,
      creationDate: Timestamp.now()
    });

    document.getElementById('confirm_btn').className = 'btn_clicked';
    setClicked(true)
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
      <button id="confirm_btn" className="confirm_btn" onClick={sendVote}/>
    </>
  )
}

export default Stars