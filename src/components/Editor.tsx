import { useEffect, useRef } from 'react';
import Quill, { Delta } from 'quill';
import 'quill/dist/quill.snow.css';

function QuillEditor({
	content
} : {
	content?: Delta
}) {
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const quillRef = useRef<Quill | null>(null)

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
