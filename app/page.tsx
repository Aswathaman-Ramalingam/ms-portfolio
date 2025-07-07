"use client"
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Dias from "./components/Dias";


export default function Home() {
    return <>
        <Canvas className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <ScrollControls pages={3} damping={0.25}>
                <Dias />
            </ScrollControls>
        </Canvas>
    </>
}
