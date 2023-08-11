
import { collection, query, where, and, getCountFromServer } from "firebase/firestore"
import db from "./firebase"
import {useCallback, useEffect, useState} from "preact/compat"
import DailyStatistics from "./DailyStatistics"

export interface VoteStats {
  vote: number
  count: number
}
const VoteList = ({...params}) => {
  const [voteStatistics, setVoteStatistics] = useState<Map<number, VoteStats>>(new Map<number, VoteStats>())

  const countTodayVotes = async (value: number) => {
    const votesRef = collection(db, "votes")
    const today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    const queryRef = query(votesRef,
        where("vote", "==", ""+value),
        where("creationDate", '>', today)
    )
    const querySnapshot = await getCountFromServer(queryRef)
    return querySnapshot.data()
  }
  const getVotes = async () => {
    console.log(`Loading votes`)
    const voteStats = new Map<number, VoteStats>
    for (let i= 1; i <= 5; i ++) {
      const result = await countTodayVotes(i)
      voteStats.set(i, {count: result.count, vote: i} as VoteStats)
    }
    setVoteStatistics(voteStats)
  }
  const callGetVotes = useCallback(()=> getVotes(),[])

  useEffect(()=>{
    console.log(voteStatistics)
  },[voteStatistics])

  useEffect(() => {
    callGetVotes()
  },[])

  return (
    <>
      <h1>Dzisiejsze głosy ({new Date().getUTCDate() +"-"+ new Date().getUTCMonth() +"-"+ new Date().getUTCFullYear()})</h1>
      {voteStatistics && voteStatistics.size>0 && <DailyStatistics voteStatistics={voteStatistics}/>}
    </>
  )
}
export default VoteList