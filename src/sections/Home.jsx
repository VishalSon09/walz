import { Suspense, useState, useEffect } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Bloom, EffectComposer, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader } from 'postprocessing'
import { OrthographicCamera, Loader } from '@react-three/drei'
import PScene from '../components/PScene'

// Loads the colour-grading LUT inside the Canvas so it suspends together with the scene
// function Effects() {
//   const texture = useLoader(LUTCubeLoader, '/lut/F-6800-STD.cube')
//   return (
//     <EffectComposer disableNormalPass>
//       <Bloom mipmapBlur levels={9} intensity={1.5} luminanceThreshold={1} luminanceSmoothing={1} />
//       <LUT lut={texture} />
//     </EffectComposer>
//   )
// }

// const Home = () => (
//   <section className="min-h-screen w-full flex flex-col relative" id="home">
//     <div className="w-full h-full absolute inset-0">
//       <Canvas className="w-full h-full" gl={{ antialias: false }} dpr={[1, 2]}>
//         <OrthographicCamera makeDefault zoom={70} near={1} far={2000} position={[0, 0, 100]} />
//         <color attach="background" args={['black']} />
//         <Suspense fallback={null}>
//           <PScene />
//           <Effects />
//         </Suspense>
//       </Canvas>
//       {/* Progress bar while the model, textures, font and LUT load */}
//       <Loader />
//     </div>
//   </section>
// )

// export default Home

const Home = () => {

  const [texture, setTexture] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTexture = async () => {
      try {
        const loadedTexture = await new Promise((resolve, reject) => {
          const loader = new LUTCubeLoader();
          loader.load('/lut/F-6800-STD.cube', resolve, undefined, reject);
        });
        setTexture(loadedTexture);
      } catch (error) {
        setError(error);
      }
    };
    loadTexture();
  }, []);

  if (error) {
    return <div>Error loading texture: {error.message}</div>;
  }

  if (!texture) {
    return <div>Loading texture...</div>;
  }


  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full h-full absolute inset-0">
        {/* <Canvas orthographic gl={{ antialias: false }} camera={{ position: [0, 0, 100], zoom: 70 }} dpr={window.devicePixelRatio} style={{ width: '100vw', height: '100vh', display:'block' }}> */}
        <Canvas className="w-full h-full" gl={{antialias:false}}>
          {/* <Suspense fallback={<CanvasLoader />}> */}
            {/* To hide controller */}
            {/* <Leva hidden /> */}
            {/* <PerspectiveCamera makeDefault position={[0, 0, 100]} zoom={70} /> */}
            <OrthographicCamera 
              makeDefault
              zoom={70}
              near={1}
              far={2000}
              position={[0, 0, 100]}
             
              // style={{ width: '100vw', height: '100vh', display:'block' }}
            />
          {/* <Suspense fallback={<CanvasLoader />}> */}
            <color attach="background" args={['black']} />
            <PScene />
            <EffectComposer disableNormalPass>
              <Bloom mipmapBlur levels={9} intensity={1.5} luminanceThreshold={1} luminanceSmoothing={1} />
              <LUT lut={texture} />
            </EffectComposer>
          {/* </Suspense> */}
        </Canvas>
      </div>




    </section>
  )
}

export default Home
