import React from "react";

const App: React.FC = () => {
	const mode = import.meta.env.MODE;

	return (
		<div>
			<h2>This is {mode} mode</h2>
		</div>
	);
};

export default App;
