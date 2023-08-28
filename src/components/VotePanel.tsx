import Stars from "./Stars";

const VotePanel = ({...params}) => (
  <div id="app">
    <div class="app_panel">
    <div class="vote_panel">
            <div class="title">Oceń smak</div>
            <Stars />
    </div>
    </div>
  </div>
)

export default VotePanel;