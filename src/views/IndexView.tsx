import { useContext } from 'react'
import RouterContext from '@/RouterContext'

function IndexView() {
	const { handleViewChange, handleActionChange } = useContext(RouterContext)

	return (
	<>
	<h2>Documentos</h2>
	<ul>
		<li>Crear documento a partir de plantilla
		<button onClick={() => {handleViewChange('document'); handleActionChange('document', 'View', -1)}}>&rarr;</button></li>
	</ul>
	
	<h2>Plantillas</h2>
	<ul>
		<li>Ver plantillas
		<button onClick={() => {handleViewChange('template'); handleActionChange('template', 'View', -1)}}>&rarr;</button></li>
		<li>Crear plantilla
		<button onClick={() => {handleViewChange('template'); handleActionChange('template', 'Create', -1)}}>&rarr;</button></li>
	</ul>
	
	<h2>Directorio</h2>
	<ul>
		<li>Ver directorio
		<button onClick={() => {handleViewChange('directory'); handleActionChange('directory', 'View', -1)}}>&rarr;</button></li>
		<li>Añadir persona al directorio
		<button onClick={() => {handleViewChange('directory'); handleActionChange('directory', 'Create', -1)}}>&rarr;</button></li>
	</ul>
	</>
	)
}

export default IndexView
