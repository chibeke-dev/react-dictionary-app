import {React, Component } from 'react';
import Layout from '../components/layout/Layout';
import Dictionary from '../components/search/Dictionary';

export default class Home extends Component {
  render() {
    return (
        <div >
    
        <Layout/> 
        <main>
            <Dictionary  />
          </main> 
      </div>
    )
  }
}
