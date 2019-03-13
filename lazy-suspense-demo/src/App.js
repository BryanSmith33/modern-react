import React, { Suspense } from 'react'
const GitHubInfo = React.lazy(() => import('./Components/GitHubInfo'))

const App = () => (
	<div>
		<Suspense fallback={<div>loading...</div>}>
			<GitHubInfo />
		</Suspense>
	</div>
)

export default App
