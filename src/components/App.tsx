import VotePanel from "./VotePanel"
import VoteList from "./VoteList"

const App = () => {
	const queryParameters = new URLSearchParams(window.location.search)
	const showList = queryParameters.get("showList")
	console.log(showList)
	return (
		<>
			{ showList ? <VoteList /> : <VotePanel path={``} /> }
		</>
	);
}

export default App;
