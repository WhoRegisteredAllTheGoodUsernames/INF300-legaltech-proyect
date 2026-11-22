import { db } from '@/db'
import { useLiveQuery } from 'dexie-react-hooks'
import type { ListActions } from '@/types/view'

function DataList({
	store, actions, handleActionChange, handleViewChange
}: {
	store: string
	actions: ListActions
	handleViewChange: (nextView: string) => void
	handleActionChange: (view: string, nextAction: string, actionParam: number) => void
}) {
	const templates = useLiveQuery(() => db.table(store).toArray())

	if (!templates) {
		return null
	}

	return (
		<ul>
		{templates.map((template) => (
			<li>{template.name}
				{Object.entries(actions).map(([actionName, action]) => (
					<button onClick={() => {handleViewChange(action.view); handleActionChange(action.view, action.action, template.id)}}>{actionName}</button>
				))}
			</li>
		))}
		</ul>
	)
}

export default DataList
