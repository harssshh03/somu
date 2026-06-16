import React from 'react'
import Image from 'next/image'
const Stacks = () => {
  return (
    <div className='flex justify-center items-center max-w-xl px-7 sm:px-0 mx-auto'>
                   <div className="pt-2">
                       <p className='text-md font-medium mb-4'>stack i ship with:</p>  
                       <div className='flex flex-wrap gap-2'>
                        {[
                          { src: '/python.png', label: 'python' },
                          { src: '/reactjs.png', label: 'react.js' },
                          { src: '/javascript.png', label: 'javascript' },
                          { src: '/tailwind.png', label: 'tailwind.css' },
                          { src: '/git.png', label: 'git' },
                          { src: '/postgress.png', label: 'postgress' },
                          { src: '/expressjs.png', label: 'express.js' },
                          { src: '/nextjs.png', label: 'next.js' },
                          { src: '/typescript.png', label: 'typescript' },
                          { src: '/docker.png', label: 'docker' },
                        ].map(({ src, label }) => (
                          <div
                            key={label}
                            className='rounded-md text-center px-4 py-2 border border-zinc-200 dark:border-zinc-700 text-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-white/25 flex items-center gap-2'
                          >
                            <Image src={src} height={20} width={20} alt={label} />
                            <span>{label}</span>
                          </div>
                        ))}
                        </div>       
                        <div className='mt-9 w-full h-px bg-zinc-300 dark:bg-zinc-600'></div>
                        </div>
    </div>
  )
}

export default Stacks