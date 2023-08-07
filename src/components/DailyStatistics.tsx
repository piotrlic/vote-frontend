import {VoteStats} from "./VoteList";

interface VoteStatisticsParams{
  voteStatistics: Map<number, VoteStats>
}
const DailyStatistics = (params: VoteStatisticsParams) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <div>{i+1+": " + params.voteStatistics.get(i+1).count}</div>
      ))}
    </>
  )

}
export default DailyStatistics