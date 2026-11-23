import { Dexie, type EntityTable } from 'dexie'
import type { Template } from '@/types/template'
import type { Contact } from '@/types/directory'

export const db = new Dexie('db') as Dexie & {
	templates: EntityTable <Template, 'id'>,
	directory: EntityTable <Contact, 'id'>
}

db.version(1).stores({
	templates: '++id, name, description, created, last_edited, delta',
	directory: '++id, rut, gender, full_name, birthday, marital_status, direction, bank_account'
})
