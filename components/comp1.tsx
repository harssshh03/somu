"use client"
import { useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import { CharacterV1 } from './ui/skiper-ui/skiper31';

const Comp1 = () => {
      const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,  
  });

  const chars = ['S', 'k', 'I', 'P', 'E', 'R', 'U', 'I'];
  const centerIndex = Math.floor(chars.length / 2);

  return (
    <div
      ref={targetRef}
      className="box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden  p-[2vw]"
    >
      <div
        className="font-geist w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-black"
        style={{
          perspective: "500px",
        }}
      >
        {["S", "k", "I", "P", "E", "R", "U", "I"].map((char, index) => (
          <CharacterV1
            key={index}
            char={char}
            index={index}
            centerIndex={centerIndex}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  )
}

export default Comp1


