// importing the Suspense component
import React, { Suspense } from 'react'
// lazy loading our GitHubInfo component
const GitHubInfo = React.lazy(() => import('./Components/GitHubInfo'))

const App = () => (
	<div>
		{/* Suspense taking the fallback prop. Here we are just using a div with loading but we could just as easily pass another component */}
		{/* Suspense will display the fallback component until GitHubInfo is ready to be dipslayed */}
		<Suspense fallback={<div>loading...</div>}>
			<GitHubInfo />
		</Suspense>
	</div>
)

export default App
