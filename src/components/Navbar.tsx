import type { Views } from '@/types/view'

function Navbar({
	actualView, views, handleViewChange
}: {
	actualView: string
	views: Views
	handleViewChange: (nextView: string) => void
}) {
	return (
		<ul>
		{Object.entries(views).map(([listView, view]) => (
			<button onClick={() => handleViewChange(listView)}>{actualView == listView ? '*' : ''}{view.title}</button>
		))}
		</ul>
	)
}

export default Navbar
