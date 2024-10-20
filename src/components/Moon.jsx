

import {useRef} from 'react'

const sphere = () => {
    const sphere = useRef()
    return (
        <mesh ref={sphere}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}
const moon = () =>{
    return(
        <group>
            <sphere args={[1, 32, 32]} position={[0, 0, 0]} material-color="hotpink"/>
        </group>
    )
}