import React from 'react'

const Experience = () => {
  return (
    <div className='flex justify-center px-5 sm:px-0 w-full'>
        <div className='flex mb-8 flex-col max-w-xl px-2 sm:px-3 w-full'>
            <div className='mb-6 mt-6'>
                <p className='text-md font-medium'>experience&apos;s:</p>
            </div>
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-between'>
                  <div>
                    <div><p className='text-md font-medium tracking-tighter'>Qspiders</p></div>
                    <div><p className='text-[#4b5563] tracking-tighter dark:text-[#9ca3af] italic  text-sm font-medium'>Internship</p></div>
                  </div>
                  <div>
                    <div><p className='text-[#4b5563] dark:text-[#9ca3af] text-sm'>Jan 2026 - Present</p></div>
                  </div>
                </div>
                 <div>
                    <p className='text-[15px] text-[#4b5563] dark:text-[#ffff]'>Undergoing professional training in  Python full-stack and SQL, web technologies through a placement-driven program in collaboration with my college.</p>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    <span className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded'>python</span>
                    <span className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded'>sql</span>
                    <span className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded'>django</span>
                    <span className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded'>html</span>
                    <span className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded'>css</span>
                    <span className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded'>javascript</span>
                  </div>
                

            <div className='mt-9 w-full h-px bg-zinc-300 dark:bg-zinc-600'></div>
        </div>
    </div>
    </div>
  )
}

export default Experience