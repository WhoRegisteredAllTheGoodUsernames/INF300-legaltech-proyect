import { Suspense, use } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { db } from '@/db'
import DataList from '@/components/DataList'
import type { Template } from '@/types/template'
import type { ListActions } from '@/types/view'

function DocumentCreate({
	template
}: {
	template: Template | undefined
}) {
	if (!template) {
		return null
	}

	return (
		<>
		<h2>Creando documento desde planilla: {template.name}</h2>
		</>
	)
}

function DocumentView({
	action, actionParam, handleActionChange, handleViewChange
}: {
	action: string,
	actionParam: number
	handleActionChange: (nextActionView: string, nextAction: string, actionParam: number) => void
	handleViewChange: (nextView: string) => void
}) {

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
			<h2>Seleccionar documento</h2>

			<DataList
				store='templates'
				actions={{'Cargar': {'view': 'document', 'action': 'Create'}} as ListActions}
				handleActionChange={handleActionChange}
				handleViewChange={handleViewChange}
			/>
			</>
		)}
		</>
	)
}

export default DocumentView
