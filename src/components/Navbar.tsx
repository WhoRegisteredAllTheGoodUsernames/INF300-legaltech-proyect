function Navbar({
	setView, views
}: {
	setView: (view: string) => void
	views: Record<string, string>
}) {
	return (
		<ul>
		{Object.entries(views).map(([view, titulo]) => (
			<button onClick={() => setView(view)}>{titulo}</button>
		))}
		</ul>
	)
}

export default Navbar
