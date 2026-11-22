function IndexView({
	handleViewChange, handleActionChange
}: {
	handleViewChange: (nextView: string) => void
	handleActionChange: (view: string, nextAction: string) => void
}) {
	return (
	<>
	<h2>Documentos</h2>
	<ul>
		<li>Crear documento a partir de plantilla
		<button onClick={() => {handleViewChange('document'); handleActionChange('document', 'Create')}}>&rarr;</button></li>
	</ul>
	
	<h2>Plantillas</h2>
	<ul>
		<li>Ver plantillas
		<button onClick={() => {handleViewChange('template'); handleActionChange('template', 'View')}}>&rarr;</button></li>
		<li>Crear plantilla
		<button onClick={() => {handleViewChange('template'); handleActionChange('template', 'Create')}}>&rarr;</button></li>
	</ul>
	
	<h2>Directorio</h2>
	<ul>
		<li>Ver directorio
		<button onClick={() => {handleViewChange('directory'); handleActionChange('directory', 'View')}}>&rarr;</button></li>
		<li>Añadir persona al directorio
		<button onClick={() => {handleViewChange('directory'); handleActionChange('directory', 'Create')}}>&rarr;</button></li>
	</ul>
	</>
	)
}

export default IndexView
