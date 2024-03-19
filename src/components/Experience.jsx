import React from "react";
import {
  OrbitControls,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text
} from "@react-three/drei";
import LaptopModel from "./models/LaptopModel";

const Experience = () => {

  return (
    <>
      <color args={["#29292e"]} attach="background" />
      <Environment preset="city" />
      <PresentationControls
        global
        rotation={[0.13, 0.5, 0]}
        polar={[-0.2, 0.4]}
        azimuth={[-0.55, 0.55]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>

            <rectAreaLight
            width={2.5}
            height={2}
            intensity={65}
            color={"#c7c5c5"}
            position={[0.1,0.55,-1.15]}
            rotation={[0.1, Math.PI,0]}

            />

          <LaptopModel />
          <Html transform 
          wrapperClass="htmlScreen"
          distanceFactor={1.66}
          position={[-0.01, 0.29, -2.01]}
          rotation-x={-0.28}
          >
            <iframe src="https://anshdeepsingh.com" />
          </Html>
          <Text 
          fontSize={1}
          position={[3,0.25,0.75]}
          rotation-y={-1.25}
          maxWidth={2}
          textAlign="center"
          font="./Eczar-VariableFont_wght.ttf"
          >ANSHDEEP SINGH</Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-2} opacity={0.4} scale={10} blur={2.4} />
    </>
  );
};

export default Experience;
