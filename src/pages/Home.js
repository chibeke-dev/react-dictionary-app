import React from 'react'
import Layout from '../components/layout/Layout';
import Dictionary from '../components/search/Dictionary';
import './Home.css';

export default function Home() {
  return (
    <div className = "home">
    <Layout/>

    <main>
    <Dictionary defaultKeyword="welcome" />
    </main>
    </div>
  )
}


