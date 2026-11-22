// Legalmente, sólo se reconocen hombre y mujer
// Puede que expanda el tipo para ajustar los pronombres de los documentos,
// tipo, poner 'sr', 'sra', 'don' o 'doña'.
export type Gender = 'Hombre' | 'Mujer'

export type MaritalStatus = 'Casado/a' | 'Soltero/a' | 'Conviviente' | 'Divorciado/a' | 'Viudo/a'

export type Direction = {
	street: string,
	number: string,
	state: string,
	city: string,
	country: string
}

// Suelen ser fijos.
// Lista robada de https://cursando.cl/banca/bancos-en-chile/ (consultado el
// 22/11/2026). Realmente no me preocupé que sea verídica, confiable o lo que
// sea xd.
export type Bank = 'Banco Estado' |
	'Banco de Chile / Edwards' |
	'Banco de Crédito e Inversiones (BCI)' |
	'Banco Bice' |
	'HSBC Bank' |
	'Banco Santander' |
	'Itaú / Corpbanca' |
	'Banco Security' |
	'Scotiabank' |
	'Scotiabank Azul (Ex BBVA)' |
	'Banco Falabella' |
	'Banco Ripley' |
	'Banco Consorcio' |
	'Banco BTG Pactual Chile' |
	'Banco Internacional' |
	'Banco Do Brasil' |
	'JP Morgan Chase Bank' |
	'Banco de la Nación Argentina' |
	'MUFG Bank (Ex The Bank of Tokyo)' |
	'China Construction Bank' |
	'Bank of China' 

export type BankAccountType = 'Cuenta corriente' | 'Cuenta Vista'

// Para recibir dinero. Puede no ser necesariamente la de la misma persona
// del contrato.
export type BankAccount = {
	titular: string,
	titular_id: string,
	bank: Bank,
	type: BankAccountType
}

export type Contact = {
	id: number,
	rut: string, //Si, si, el gran debate
	gender: Gender,
	full_name: string,
	birthday: Date,
	marital_status: MaritalStatus,
	direction: Direction
	bank_accounts: BankAccount[]
}
