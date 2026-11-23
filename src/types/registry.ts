export type BlotContact = {
	blotContactId: number
	contactRole: string
}

export type BlotContactAttr = {
	blotContactId: number
	contactAttr: 'rut' | 'gender' | 'full_name' | 'birthday' | 'marital_status' | 'direction' | 'bank_account'
	attrLabel: string
}

export type BlotField = {
	fieldLabel: string
	fieldType: 'number' | 'string' | 'date'
}
