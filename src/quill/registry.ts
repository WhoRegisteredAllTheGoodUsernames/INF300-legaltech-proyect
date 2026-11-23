import { InlineBlot, BlockBlot, EmbedBlot } from 'parchment'
import type { BlotContact, BlotContactAttr, BlotField } from '@/types/registry'

// Entidades:
//   1) Personas: Define cuantas y cuales personas se usan en el documento.
//   	Ej: Persona1 -> Arrendador y Persona2 -> Arrendatario
//   2) Atributos de personas: Persona1.nombre, rut, etc.
//   3) Parámetros generales (campos): valor de arriendo, fecha, etc.
//   4) Clausula: Texto condicional que depende del valor de una o varias
//   	variables.
//   5) Variables: Parámetros que no se traducen en campos, pero que definen
//   	las clausulas.

// Requerimientos mínimos para las clases: blotName, tagName o className
export class Contact extends EmbedBlot {
	blotName = 'contact'
	className = 'contact'
	
	static create(value: BlotContact) {
		const node = super.create() as Element

		node.setAttribute('blot-contact-id', String(value.blotContactId))
		node.textContent = value.contactRole

		return node
	}

	static value(node: HTMLElement): BlotContact {
		return {
			blotContactId: 	Number(node.getAttribute('blot-contact-id') ?? '-1'),
			contactRole: node.textContent ?? ''
		}
	}
}

export class ContactAttr extends InlineBlot {
	static blotName = 'contact_attr'
	static tagName = 'span'
	static className = 'contact_attr'

	static create(value: BlotContactAttr) {
		const node = super.create()

		node.setAttribute('blot-contact-id', String(value.blotContactId))
		node.setAttribute('blot-contact-attr', value.contactAttr)
		node.textContent = value.attrLabel

		return node
	}

	static value(node: HTMLElement): BlotContactAttr {
		return {
			blotContactId: 	Number(node.getAttribute('blot-contact-id') ?? '-1'),
			contactAttr: node.getAttribute('blot-contact-attr') as BlotContactAttr['contactAttr'],
			attrLabel: node.textContent ?? ''
		}
	}
}

export class Field extends InlineBlot {
	static blotName = 'field'
	static tagName = 'span'
	static className = 'field'

	static create(value: BlotField) {
		const node = super.create()

		node.setAttribute('blot-field-type', value.fieldType)
		node.textContent = value.fieldLabel

		return node
	}

	static value(node: HTMLElement): BlotField {
		return {
			fieldType: 	node.getAttribute('blot-field-type') as BlotField['fieldType'],
			fieldLabel: node.textContent ?? ''
		}
	}
}

export class Clause extends BlockBlot {
	blotName = 'clause'
	className = 'clause'
}

export class Variable extends EmbedBlot {
	blotName = 'variable'
	className = 'variable'
}
