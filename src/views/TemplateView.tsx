import type { ListActions } from '@/types/view'
import { Suspense, useMemo } from 'react'
import DataList from '@/components/DataList'
import { ErrorBoundary } from 'react-error-boundary'
import { db } from '@/db'
import type { Template } from '@/types/template'
import { useContext } from 'react'
import RouterContext from '@/RouterContext'
import TemplateEditor from '@/components/TemplateEditor'

function TemplateView() {
	const { actionParam, action, handleViewChange, handleActionChange } = useContext(RouterContext)

	const templatePromise = useMemo(
		() => db.templates.get({'id': actionParam}) as Promise<Template>,
			[actionParam]
	)

	return (
		<>
		{ action == 'Edit' || action == 'Create' ? (
			<ErrorBoundary fallback={<p>Error al cargar plantilla</p>}>
				<Suspense fallback={<p>Cargando</p>}>
				<TemplateEditor
					templatePromise={templatePromise}
				/>
				</Suspense>
			</ErrorBoundary>
		) : ( // List, Default
			<>
			<h2>Crear plantilla
				<button onClick={() => {handleViewChange('template'); handleActionChange('template', 'Create', -1)}}>&rarr;</button>
			</h2>

			<h2>Seleccionar plantilla</h2>

			<DataList
				store='templates'
				actions={{'Cargar': {'view': 'template', 'action': 'Edit'}} as ListActions}
			/>
			</>
		)}
		</>
	)
}

export default TemplateView
