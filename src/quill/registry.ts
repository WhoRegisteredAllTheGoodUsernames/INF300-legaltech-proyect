import { InlineBlot, BlockBlot, EmbedBlot } from 'parchment'

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

}

export class ContactAttr extends InlineBlot {

}

export class Field extends InlineBlot {

}

export class Clause extends BlockBlot {

}

export class Variable extends EmbedBlot {

}
