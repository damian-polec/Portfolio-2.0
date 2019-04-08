import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Intro from '../../components/Intro/Intro';
import Nav from '../../components/Nav/Nav';
import NavTop from '../../components/Nav/NavTop/NavTop';
import Content from '../Content/Content';
import Backdrop from '../../components/Backdrop/Backdrop';

import './Main.scss';

class Main extends Component{
  state = {
    nav: true,
    isToggle: false
  }
  
  componentDidMount() {
    if(this.props.location.pathname !== '/') {
      this.setState({nav: false})
    }
  }

  showNav() {
    this.setState({nav: true, isToggle: false});
  }

  hideNav() {
    this.setState({nav: false})
  }

  onMobileNavToggle() {
    this.setState(prevState => {
      return {
        isToggle: !prevState.isToggle
      }
    })
  }

  render() {
    return (
      <div className='home'>
        <Backdrop 
          toggle={this.onMobileNavToggle.bind(this)}
          isToggle={this.state.isToggle} />
        <NavTop
          toggle={this.onMobileNavToggle.bind(this)}
          isToggle={this.state.isToggle} 
          showMainNavAction={this.showNav.bind(this)}
          isVisible={this.state.nav}/>        
        <Intro 
          isVisible={this.state.nav}/>
        <Nav 
          isVisible={this.state.nav}
          click={this.hideNav.bind(this)}/>
        <Switch>
          <Route 
            exact path='/profile'
            render={(props) => <Content {...props} jType='type-profile' contentType='profile' />} />
            <Route 
            exact path='/portfolio'
            render={(props) => <Content {...props} jType='type-portfolio' contentType='portfolio' />} />
            <Route 
            exact path='/contact'
            render={(props) => <Content {...props} jType='type-contact' contentType='contact' />} />
        </Switch>
        
      </div>
    )
  }
}

export default Main;