import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import Image from 'next/image'

export default function Talks({ posts }) {
  return (
    <div>
      <Head>
        <title>Talks|studywithnova</title>
      </Head>
      <h2>Hello, Im Nova Lailatul Rizkiyah</h2>
      <p>Currently work as a frontend developer.
        <br></br>
        You found my personal slice of the internet. Take a look and enjoy.</p>
    </div>
  )
}

