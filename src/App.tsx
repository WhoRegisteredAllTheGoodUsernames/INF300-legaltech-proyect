import { useState } from 'react'
import { DefaultViews } from '@/types/view'
import Navbar from "@/components/Navbar"
import IndexView from '@/views/IndexView'
import DocumentView from '@/views/DocumentView'
import DirectoryView from '@/views/DirectoryView'
import TemplateView from '@/views/TemplateView'


// Acá definimos las vistas principales
//   1) El inicio, donde podemos acceder a las otras vistas :v
//   2) La vista de creación de plantillas
//   3) La vista de creación de documentos
//   3) El directorio

function App() {
	const [view, setView] = useState('index')
	const [action, setAction] = useState('default')
	const [actionParam, setActionParam] = useState(-1)
	const [confirmation, setConfirmation] = useState(false)

	const handleUIChange = (actualValue: string, nextValue: string, handler: (value: string) => void) => {
		if (actualValue == nextValue){
			return
		}

		if (confirmation){
			const userConfirms = confirm("Hay cambios no guardados. ¿Desea salir igualmente?")

			if (userConfirms){
				setConfirmation(false)
				handler(nextValue)
			} else {
				return
			}
		}

		handler(nextValue)
	}

	const handleViewChange = (nextView: string) => {
		handleUIChange(view, nextView, setView)
	}

	const handleActionChange = (nextActionView: string, nextAction: string, actionParam: number) => {
		if (action != nextAction && DefaultViews[nextActionView].actions.find((action) => action == nextAction)){
			setActionParam(actionParam)
			handleUIChange(action, nextAction, setAction)
		}
	}

	return (
		<>
		<header>
		<Navbar
		actualView={view}
		views={DefaultViews}
		handleViewChange={handleViewChange}
		/>
		</header>
		{ view == 'template' ? (
			<TemplateView />
		) : view == 'document' ? (
		<DocumentView
			action={action}
			actionParam={actionParam}
			handleActionChange={handleActionChange}
			handleViewChange={handleViewChange}
		/>
		) : view == 'directory' ? (
		<DirectoryView />
		) : (
		<IndexView
			handleViewChange={handleViewChange}
			handleActionChange={handleActionChange}
		/>
		)}
		</>
	)
}

export default App
