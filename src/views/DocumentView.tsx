import { Suspense, use, useContext } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { db } from '@/db'
import DataList from '@/components/DataList'
import type { Template } from '@/types/template'
import type { ListActions } from '@/types/view'
import RouterContext from '@/RouterContext'

function DocumentCreate({
	template
}: {
	template: Template | undefined
}) {
	const { handleViewChange, handleActionChange } = useContext(RouterContext)
	
	if (!template) {
		return (
			<h2>No se ha seleccionado ninguna plantilla. ¿Ir a la selección?
				<button onClick={() => {handleViewChange('document'); handleActionChange('document', 'View', -1)}}>&rarr;</button>
			</h2>
		)
	}

	return (
		<>
		<h2>Creando documento desde planilla: {template.name}</h2>
		</>
	)
}

function DocumentView() {
	const { actionParam, action } = useContext(RouterContext)
	
	const template = actionParam == -1 ? undefined : use(db.templates.get({'id': actionParam}))

	return (
		<>
		{ action == 'Create' ? (
			<ErrorBoundary fallback={<p>Error al cargar plantilla</p>}>
				<Suspense fallback={<p>Cargando</p>}>
				<DocumentCreate
					template={template}
				/>
				</Suspense>
			</ErrorBoundary>
		) : (
			<>
			<h2>Seleccionar plantilla</h2>

			<DataList
				store='templates'
				actions={{'Cargar': {'view': 'document', 'action': 'Create'}} as ListActions}
			/>
			</>
		)}
		</>
	)
}

export default DocumentView
