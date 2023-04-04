import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper, HemisphereLight, HemisphereLightHelper, PointLight, PointLightHelper, SpotLight, SpotLightHelper } from 'three'

export default function Experience() {
    const directionalLightRef = useRef()

    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const spotLightRef = useRef()

    /*useHelper(directionalLightRef, DirectionalLightHelper, 1)

    useHelper(hemisphereLightRef, HemisphereLightHelper, 1)
    useHelper(pointLightRef, PointLightHelper, 1)
    useHelper(spotLightRef, SpotLightHelper, 1)*/

    useHelper(pointLightRef, PointLightHelper, 1)


    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/*<directionalLight  ref={directionalLightRef} castShadow position={[2, 6, -6]} intensity={1.5} />

        <hemisphereLight color="#ffffff" groundColor="#000000" intensity={1} position={[0, 10, 0]} />
        <pointLight ref={pointLightRef} castShadow intensity={4} position={[2, 6, -6]} />
        <spotLight ref={spotLightRef} castShadow intensity={3} position={[2, 6, -6]} angle={Math.PI / 4} penumbra={0.05} />*/}

        <pointLight ref={pointLightRef} castShadow intensity={4} position={[2, 6, -6]} />



        <ambientLight intensity={1} />
        <Door/>
        <Floor/>
    </>
}