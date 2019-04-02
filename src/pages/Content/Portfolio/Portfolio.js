import React, { Component } from 'react';

import Project from './Project/Project';
import Footer from '../../../components/Footer/Footer';
import Spinner from '../../../components/Spinner/Spinner';
import './Portfolio.scss';


class Portfolio extends Component {
  state = {
    isLoading: true,
    projects: null
  }

  componentDidMount() {
    fetch('https://portfolio-674b6.firebaseio.com/projects.json')
      .then(res => {
        return res.json();
      })
      .then(res => {
        const id = Object.keys(res);
        const projects = Object.values(res).map((elem, i) => {
          elem.id = id[i];
          return elem;
        });
        this.setState({projects: projects, isLoading: false})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    let projects = null;
    if(!this.state.isLoading) {
      projects = this.state.projects.map(project => {
        return (
        <Project 
          key={project.id}
          projecId={project.id}
          projectImageUrl={project.imageUrl}
          liveLink={project.liveUrl}
          gitHubLink={project.gitHubUrl} 
          title={project.title} 
          />)
      })
    }
    return (
      <div className='portfolio-page'>
        <h2>My Projects</h2>
        {this.state.isLoading ? <Spinner /> : <div className='projects'>{projects}</div>}
        
        <Footer />
      </div>
    )
  }
} 
export default Portfolio;