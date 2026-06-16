"use client"
import Image from 'next/image'
import React from 'react'
import { ImagesBadge } from './ui/images-badge'
import { TextAnimate } from './ui/text-animate'

const Introduction = () => {
  return (
    <div className="flex justify-center px-8 py-12 w-full">
      <div className="flex flex-col gap-8 w-full max-w-xl">

        <div className="flex justify-between gap-4">
          <div>
            <Image
              src="/somu6.jpg"
              alt="profile picture"
              width={100}
              height={100}
              className="rounded-md w-28 sm:w-32 h-auto ring-1 ring-zinc-200 dark:ring-zinc-800"
            />
          </div>
          <div className="pt-4">
            <a href="/projects">
              <ImagesBadge
                className="h-10 hover:underline text-shadow-xs text-shadow-zinc-400 dark:text-shadow-zinc-600 underline-zinc-700 dark:underline-zinc-400"
                text="projects"
                images={[
                  "/cash.jpg",
                  "/chats.jpg",
                  "/canvix.jpg",
                ]}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
            <TextAnimate
              animation="blurIn"
              className="text-shadow-xs text-shadow-zinc-400 dark:text-shadow-zinc-200"
              by="word"
            >
              Hi, I'm Soumya Singh
            </TextAnimate>
          </h1>

          <p className="text-sm text-shadow-2xs text-zinc-500 dark:text-zinc-400 dark:text-shadow-zinc-600">
            21, Mumbai · Full Stack Developer
          </p>

          <p className="text-sm sm:text-base text-shadow-2xs text-zinc-700 dark:text-zinc-300 dark:text-shadow-zinc-500 leading-relaxed">
            I'm a full-stack developer dedicated to building clean,
            efficient web applications with modern technologies while
            continuously learning and exploring new tools to enhance my skills.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Introduction