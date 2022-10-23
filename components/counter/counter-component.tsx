import { animate } from "framer-motion"

// Hooks
import { useRef, useEffect } from "react"

const Counter: React.FC<{ from: number; to: number }> = ({ from, to }) => {
	const nodeRef = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		const node = nodeRef.current

		const controls = animate(from, to, {
			duration: 2,
			onUpdate(value) {
				if (node) {
					node.textContent = value.toFixed(0)
				}
			},
		})

		return () => controls.stop()
	}, [from, to])

	return <p ref={nodeRef} />
}

export default Counter
