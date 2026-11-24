import { Suspense, useState } from 'react';

import Button from '../components/Button.jsx';
import { skills } from '../constants/index.js';
import Model from '../components/forAbout/Model.jsx';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../components/Loading.jsx';
import { BakeShadows, CameraControls, ContactShadows, Environment } from '@react-three/drei';
import { Inception } from '../components/forAbout/Inception.jsx';
import { Link } from 'react-router-dom';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText('lensmanzest@gmail.com')
      .then(() => {
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
      })
      .catch(console.error);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" /> */}
            <Inception />
            <div>
              <p className="grid-headtext">INCEPTION</p>
              <p className="grid-subtext">
                An imaginal lexicographer who apprehends his thoughts and arbitrary vision by printing an emotion. A
                zestful technician who thrives for innovation to create an artistic output and a psyched wizard
                enhancing his view on panoramic field of globalization.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain scale-150 mb-12"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <div className="grid-subtext p-3">
                <ul className="list-disc">
                  <li className="py-2">Houdini (SOPs, DOPs, TOPs, PDG)</li>
                  <li className="py-2">Unreal Engine (Lumen, Niagara, CARLA Integration)</li>
                  <li className="py-2">Python (HDA scripting, batch automation, scenario generation)</li>
                  <li className="py-2">USD / OpenUSD (scene composition, variant management, asset pipelines)</li>
                  <li className="py-2">Omniverse Replicator (sensor simulation & dataset generation)</li>
                  <li className="py-2">TensorFlow / ML pipelines (lighting inference, synthetic vision)</li>
                  <li className="py-2">Karma / Redshift (rendering pipelines)</li>
                  <li className="py-2">Version Control & Collaboration: Git, Perforce, Notion</li>
                  <li className="py-2">
                    Frameworks: OSM/JOSM, Gaussian Splatting, Cesium, Meta Segment Anything Model (SAM), AFrame/Web3D,
                    FFMPEG, ImageMagik, OpenDRIVE, OpenScenario, OpenMaterials, OpenUSD
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 0.5, 1], fov: 50, near: 0.001 }}
                onCreated={(state) => (state.gl.shadowMap.autoUpdate = false)}>
                <ambientLight intensity={4} />
                <spotLight
                  position={[1, 5, 3]}
                  angle={0.2}
                  penumbra={1}
                  intensity={300}
                  castShadow
                  shadow-mapSize={2048}
                />
                <spotLight
                  position={[-3, 5, 15]}
                  intensity={2000}
                  angle={0.075}
                  penumbra={0.5}
                  castShadow
                  shadow-mapSize={1024}
                />
                <pointLight position={[1, 1, -1]} intensity={4} />
                <Suspense fallback={<CanvasLoader />}>
                  <Model limit={50} position={[0, -0.0005, 0]} castShadow receiveShadow />
                  <ContactShadows
                    frames={1}
                    rotation-x={Math.PI / 2}
                    position={[0, -0.4, 0]}
                    far={1}
                    width={1.5}
                    height={1.5}
                    blur={0.2}
                  />
                  <Environment preset="night" />
                  <BakeShadows />
                </Suspense>
                <CameraControls />
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">What I create</p>

              <ul className="grid-subtext p-3 list-disc">
                <li className="py-2">
                  Procedural synthetic worlds and environments — urban layouts, rail platforms, traffic systems —
                  optimized for autonomous vehicle simulation and real-time AI training.
                </li>
                <li className="py-2">
                  Natural phenomena and destruction FX — flowing rivers, breaking glass, splashes, avalanches, smoke
                  trails, and fire — authored for real-time and cinematic contexts.
                </li>
                <li className="py-2">
                  Simulation-ready datasets with multi-sensor support (LiDAR, RADAR, cameras) for CARLA, Unreal Engine,
                  and Omniverse validation pipelines.
                </li>
                <li className="py-2">
                  Intelligent lighting systems — procedural rigs, AI-generated hierarchies, and mood-matched
                  illumination — integrated using USD and machine learning tools.
                </li>
                <li className="py-2">
                  Abstract and generative visuals — fractals, growth systems, glitches, portals, and data-driven FX —
                  designed with modular pipelines for scalability and iteration.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-2 ">
          <div className="grid-container ">
            <div className=" flex flex-wrap justify-evenly p-5 gap-10 ">
              {skills.map((skill) => (
                <div key={skill.name} className="block-container w-20 h-20 ">
                  <div className="flex flex-col justify-center items-center ">
                    <div className="btn-back rounded-xl" />
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 " />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              {/* <p className="grid-subtext text-center">Contact me</p> */}
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-l font-medium text-gray_gradient text-white">lensmanzest@gmail.com</p>
              </div>

              <Link to="/contact" className="w-fit">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
