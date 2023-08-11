import {VoteStats} from "./VoteList";
import StarPrinter from "./StarPrinter";

interface VoteStatisticsParams{
  voteStatistics: Map<number, VoteStats>
}
const DailyStatistics = (params: VoteStatisticsParams) => {
  return (
    <table id={"tableWithVotes"}>
      <tr><th>liczba gwiazdek</th><th>liczba głosów</th></tr>
      {Array.from({ length: 5 }, (_, i) => (
        <tr><td><StarPrinter n={i+1}/></td><td>{params.voteStatistics.get(i+1).count}</td></tr>
      ))}
    </table>
  )

}
export default DailyStatistics