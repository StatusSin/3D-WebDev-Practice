import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei";
import {useRef} from "react";

/**
 * A rotating cube component that renders a rotating cube with sparkles.
 *
 * It uses the `useFrame` hook from `@react-three/fiber` to rotate the cube
 * on each frame, and the `Sparkles` component from `@react-three/drei` to
 * render sparkles on the cube.
 *
 * The cube is rendered with a cylinder geometry and a `meshLambertMaterial`
 * with a color of `#468585` and an emissive color of `#468585`.
 *
 * The sparkles are rendered with 100 sparkles, a scale of 1, a size of 6, a
 * speed of 0.002, a noise value of 0.2, and an orange color.
 *
 * @returns A JSX element representing the rotating cube component.
 */
const RotatingCube = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01
            meshRef.current.rotation.x += 0.01
        }
    })


    return (
        <mesh ref = {meshRef}>
            <cylinderGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color="#468585" emissive="#468585" />

            <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange" />
        </mesh>
    )
}

/**
 * The main App component.
 *
 * This component renders a {@link Canvas} that takes up the full height and
 * width of the viewport. It also renders an {@link OrbitControls} component
 * that allows the user to rotate, zoom in/out, and pan the scene.
 *
 * Additionally, it renders a {@link directionalLight} that shines from the top
 * right corner of the scene, and a {@link color} that sets the background color
 * of the scene to a light gray color.
 *
 * Finally, it renders a {@link RotatingCube} component that renders a rotating
 * cube in the center of the scene.
 *
 * @returns A JSX element that renders the main App component.
 */
const App = () => {
    return (
        <Canvas style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <OrbitControls enableZoom enablePan enableRotate />

            <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6}/>

            <color attach="background" args={['#F0F0F0']} />

            <RotatingCube />
        </Canvas>
    )

}

export default App;