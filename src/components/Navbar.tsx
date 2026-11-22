function Navbar({
	view, setView, views, confirmation, setConfirmation
}: {
	view: string
	setView: (view: string) => void
	views: Record<string, string>
	confirmation: boolean
	setConfirmation: (confirmation: boolean) => void
}) {
	const handleViewChange = (nextView: string) => {
		if (view == nextView){
			return
		}

		if (confirmation){
			const userConfirms = confirm("Hay cambios no guardados. ¿Desea salir igualmente?")

			if (userConfirms){
				setConfirmation(false)
				setView(nextView)
			} else {
				return
			}
		}

		setView(nextView)
	}

	return (
		<ul>
		{Object.entries(views).map(([view, titulo]) => (
			<button onClick={() => handleViewChange(view)}>{titulo}</button>
		))}
		</ul>
	)
}

export default Navbar
