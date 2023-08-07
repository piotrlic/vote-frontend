import VotePanel from "./VotePanel"
import Router from 'preact-router';
import VoteList from "./VoteList";
const App = () => (

	<Router>
		<VotePanel path="/"/>
		<VoteList path="/votes"/>
	</Router>
);

export default App;
