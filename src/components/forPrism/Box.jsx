import * as THREE from 'three'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { lerpC } from '../../utilities/util'

const w = 1
const h = 1
const r = 0.1
const depth = 1
const s = new THREE.Shape()
s.moveTo(-w / 2, -h / 2 + r)
s.lineTo(-w / 2, h / 2 - r)
s.absarc(-w / 2 + r, h / 2 - r, r, 1 * Math.PI, 0.5 * Math.PI, true)
s.lineTo(w / 2 - r, h / 2)
s.absarc(w / 2 - r, h / 2 - r, r, 0.5 * Math.PI, 0 * Math.PI, true)
s.lineTo(w / 2, -h / 2 + r)
s.absarc(w / 2 - r, -h / 2 + r, r, 2 * Math.PI, 1.5 * Math.PI, true)
s.lineTo(-w / 2 + r, -h / 2)
s.absarc(-w / 2 + r, -h / 2 + r, r, 1.5 * Math.PI, 1 * Math.PI, true)

const boxGeometry = new THREE.BoxGeometry()
const roundedBoxGeometry = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false })
roundedBoxGeometry.translate(0, 0, -depth / 2)
roundedBoxGeometry.computeVertexNormals()

// Stable default so the effect below doesn't re-run on every render
const noop = () => {}

const Box = forwardRef(({ onRayOver, onRayOut, onRayMove, onHoverChange = noop, ...props }, ref) => {
  const [hovered, hover] = useState(false)
  const inner = useRef(null)
  const outer = useRef(null)

  useFrame(() => {
    if (!inner.current) return
    lerpC(inner.current.material.emissive, hovered ? 'white' : '#454545', 0.1)
  })

  useEffect(() => {
    onHoverChange(hovered)
  }, [hovered, onHoverChange])

  return (
    <group scale={0.5} ref={ref} {...props}>
      <mesh visible={false} ref={outer} onRayOver={() => hover(true)} onRayOut={() => hover(false)} geometry={boxGeometry} />

      <mesh ref={inner} onRayOver={onRayOver} onRayOut={onRayOut} geometry={roundedBoxGeometry}>
        <meshStandardMaterial color="#333" toneMapped={false} emissiveIntensity={2} />
      </mesh>
    </group>
  )
})

Box.displayName = 'Box'

export default Box
