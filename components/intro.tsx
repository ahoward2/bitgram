import { Github, Linkedin, Instagram, Medium } from '@icons-pack/react-simple-icons';

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-2 mb-6 md:mb-12 md:pl-10 lg:pl-32">
      <h1 className="text-6xl md:text-8xl font-bold font-mono tracking-tighter leading-tight md:pr-8 text-dark">
        BitGram
      </h1>
      <div className="p-3 max-w-sm mx-auto shadow-md flex items-center space-x-4 bg-dark">
        <Github color="white" size={28}></Github>
        <Linkedin color="white" size={28}></Linkedin>
        <Instagram color="white" size={28}></Instagram>
        <Medium color="white" size={28}></Medium>
      </div>
    </section>
  )
}

export default Intro
