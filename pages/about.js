
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import Image from 'next/image'

export default function About({ posts }) {
  return (
    <div>
      <Head>
        <title>About|studywithnova</title>
      </Head>
      <h1>About</h1>
      <h2>Nova Lailatul Rizkiyah</h2>
      <p>Hello! Im Nova. I started learning web development in May 2020, which is the start of the pandemic. I have nothing much to do so I decided to learn web development from a udemy course, then started watching a bunch of youtube videos to explore more about web development especially frontend development.

There are a lot of things and technologies to learn in frontend development and I am motivated to learn as much as possible. I enjoy learning something new and getting feedback to make myself better and improve.

In this website I will be writing some blogs and showcase my projects. I believe that writing what I have learned is the best way to remember things, and I can share my knowledge along the way. So do contact me and I will be very happy to help!</p>
      
    </div>
  )
}

