export type Action = 'View' | 'Create' | 'Edit' | 'Delete' | 'Default'

export type ListAction = {
	view: string,
	action: string
}

export type ListActions = {
	[action: string]: ListAction
}

export type Views = Record<string, View>

export type View = {
	title: string,
	actions: Action[]
}

// Por ahora puse todo xd

export type UIController = {
	view: string,
	action: string,
	actionParam: number,
	confirmation: boolean,

	setView: (view: string) => void,
	setAction: (action: string) => void,
	setActionParam: (actionParam: number) => void,
	setConfirmation: (confirmation: boolean) => void,
	
	handleActionChange: (nextActionView: string, nextAction: string, actionParam: number) => void,
	handleViewChange: (nextView: string) => void
}

export const DefaultViews: Views = {
	'template': {
		'title': 'Plantillas',
		'actions': ['View', 'Create', 'Edit', 'Default']
	},
	'document': {
		'title': 'Documentos',
		'actions': ['View', 'Create', 'Default']
	},
	'directory': {
		'title': 'Directorio',
		'actions': ['View', 'Create', 'Edit', 'Default']
	},
	'index': {
		'title': 'Inicio',
		'actions': ['Default']
	},
}
