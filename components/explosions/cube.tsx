import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"
import { AnimationAction, Group, MathUtils, Vector3 } from "three"

useGLTF("/cube.glb")

export default function Cube(){

    const {nodes, animations, scene} = useGLTF("/cube.glb")
    const {actions} = useAnimations(animations,scene)
    const group = useRef<Group>(null);
    
    const motionVal = useMotionValue(0);
    const spring = useSpring(motionVal, {stiffness:20})
    useFrame(({camera})=>{
        
        group.current?.rotateY(MathUtils.degToRad(0.1));
        
        Object.keys(actions).forEach((key)=> {
            Vector3
            const action = actions[key] as AnimationAction
            action.play().paused =true;
            action.time = spring.get()

        })
    })

    const handlePointerOver = () => {
        motionVal.set(1.3); // Set motionVal to 1 when pointer is over the object
    };

    const handlePointerOut = () => {
        motionVal.set(0); // Reset motionVal to 0 when pointer leaves the object
    };

    return(
        <group onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} ref={group}>
            <primitive object={scene}/>
        </group>
    )
}
