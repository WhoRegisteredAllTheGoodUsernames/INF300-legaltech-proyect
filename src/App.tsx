import { useState } from 'react'
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
  return (
	<>
	<header>
		<Navbar
			setView={setView}
			views={{
				'template': 'Plantilas',
				'document': 'Documentos',
				'directory': 'Directorio',
				'index': 'Índice'
			}}
		/>
	</header>
	{ view == 'template' ? (
		<TemplateView />
	) : view == 'document' ? (
		<DocumentView />
	) : view == 'directory' ? (
		<DirectoryView />
	) : (
		<IndexView />
	)}
    </>
  )
}

export default App
