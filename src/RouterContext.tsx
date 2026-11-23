import { createContext } from 'react'
import type { UIController } from '@/types/view'

const RouterContext = createContext<UIController>({
	view: 'index',
	action: 'Default',
	actionParam: -1,
	confirmation: false,

	setView: () => {},
	setAction: () => {},
	setActionParam: () => {},
	setConfirmation: () => {},
	
	handleActionChange: () => {},
	handleViewChange: () => {}
})

export default RouterContext
