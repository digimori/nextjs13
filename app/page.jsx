import React from 'react';
import { metadata } from './layout';

const Home = ({ metadata, description }) => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient'>AI Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptodo is an AI Open-source bluh bluh bluh Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Eum, id voluptatibus! Vel quisquam sed, ex incidunt ipsam aliquid commodi ipsa, 
        aspernatur deserunt facere veniam asperiores quas, deleniti quibusdam quo molestias.</p>

        {/* Feed goes here */}
    </section>
  )
}

export default Home