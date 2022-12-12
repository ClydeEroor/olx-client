import React, {useRef} from 'react';
import { useLoader, useFrame} from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

const Box = ({position = []}) => {

    const ref = useRef()

    const [squre, neiro, neiro2, set, set2, set3, set4, test, test2, lanos] = useLoader(TextureLoader,[
        "squre.jpeg",
        "neiro.jpeg",
        "neiro2.jpeg",
        "set.png",
        "set2.jpeg",
        "set3.png",
        "set4.jpeg",
        "test.jpg",
        "test2.jpeg",
        "lanos.jpeg"
    ])
    
    useFrame(() => {
        ref.current.rotation.x += 0.0;
        ref.current.rotation.y += 0.01;
    },[])


    

    return (
        <mesh position={position} ref={ref}>
            {/* <sphereGeometry/> */}
            <sphereGeometry/>
            <meshStandardMaterial map={test}/>
            {/*<meshBasicMaterial color="white" />  //Full color of object*/}
        </mesh>
    );
};

export default Box;
