import { use } from 'react'
import type { Template } from '@/types/template'
import QuillEditor from '@/components/Editor'

function TemplateEditor({
	templatePromise
}: {
	templatePromise: Promise<Template>
}) {
	const template = use(templatePromise)

	return (
		<QuillEditor/>
	)
}

export default TemplateEditor
