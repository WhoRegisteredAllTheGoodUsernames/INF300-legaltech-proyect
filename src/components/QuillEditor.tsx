import { useEffect, useRef } from 'react';
import Quill from 'quill';
import Delta from 'quill-delta';
import 'quill/dist/quill.snow.css';
import { Contact, ContactAttr, Field, Clause, Variable } from '@/quill/registry'

function QuillEditor({
	content
} : {
	content?: Delta
}) {
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const quillRef = useRef<Quill | null>(null)

	Quill.register(Contact)
	Quill.register(ContactAttr)
	Quill.register(Field)
	Quill.register(Clause)
	Quill.register(Variable)

	useEffect(() => {
		const wrapper = wrapperRef.current
		if (!wrapper) {
			return
		}

		wrapper.innerHTML = ''
		const container = document.createElement('div')
		wrapper.appendChild(container)

		const quill = new Quill(container, {
			theme: 'snow',
		})

		quillRef.current = quill

		if (content) {
			quill.setContents(content)
		}
		return () => {
			quillRef.current = null
			wrapper.innerHTML = ''
		}
	})

	useEffect(() => {
		const quill = quillRef.current
		if (!quill || !content) {
			return
		}

		quill.setContents(content)
	}, [content])

	return <div ref={wrapperRef} />
}

export default QuillEditor
