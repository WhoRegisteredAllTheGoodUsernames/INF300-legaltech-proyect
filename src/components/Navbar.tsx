import { useContext } from 'react'
import RouterContext from '@/RouterContext'
import type { Views } from '@/types/view'

function Navbar({
	views
}: {
	views: Views
}) {
	const { view, handleViewChange } = useContext(RouterContext)

	return (
		<ul>
		{Object.entries(views).map(([viewName, listView]) => (
			<li key={viewName}><button onClick={() => handleViewChange(viewName)}>{view == viewName ? '*' : ''}{listView.title}</button></li>
		))}
		</ul>
	)
}

export default Navbar
