import { db } from '@/db'
import type { ListActions } from '@/types/view'
import { use, useContext, useMemo, Suspense} from 'react'
import RouterContext from '@/RouterContext'
import type { Template } from '@/types/template'
import type { Contact } from '@/types/directory'

function GenerateList({
	itemsPromise, actions
}: {
	itemsPromise: Promise<Template[] | Contact[]>,
	actions: ListActions
}) {
	const { handleViewChange, handleActionChange } = useContext(RouterContext)

	const items = use(itemsPromise)

	return (
		<ul>
		{items.map((item) => (
			<li key={item.id}>{'name' in item ? item.name : item.full_name}
				{Object.entries(actions).map(([actionName, action]) => (
					<button key={`${item.id}-${action.action}`} onClick={
						() => {handleViewChange(action.view); handleActionChange(action.view, action.action, item.id)
						}}>{actionName}</button>
				))}
			</li>
		))}
		</ul>
	)
}

function DataList({
	store, actions,
}: {
	store: string
	actions: ListActions
}) {

	const itemsPromise = useMemo(
		() => db.table(store).toArray() as Promise<Template[] | Contact[]>,
			[store]
	)

	return (
		<Suspense fallback={<p>Cargando</p>}>
			<GenerateList
				itemsPromise={itemsPromise}
				actions={actions}
			/>
		</Suspense>
	)
}

export default DataList
