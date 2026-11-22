export type Action = 'View' | 'Create' | 'Edit' | 'Delete' | 'Default'

export type Views = Record<string, View>

export type View = {
	title: string,
	actions: Action[]
}

export const DefaultViews: Views = {
	'template': {
		'title': 'Plantillas',
		'actions': ['View', 'Create', 'Edit', 'Default']
	},
	'document': {
		'title': 'Documentos',
		'actions': ['Create', 'Default']
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
