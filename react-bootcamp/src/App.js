import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/img_0140-1.jpg'
import Title from './Title';
import Header from './Header';


class App extends Component{

  state = {displayBio: false};

  toggleDisplayBio = () => {
    this.setState({displayBio: !this.state.displayBio})
  };

  render()
  {
    return (
      <div>
        <Header />
        <img className='profile' src={profile} alt="profile"></img>
        <h1>Hello</h1>
        <p>My name is Sanchaita</p>
        <p>I am here to learn React and Redux</p>
        { this.state.displayBio ? <Title /> : null}        
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Bangalore, and code everyday.</p>
              <p>My favorite language is C#</p>
              <p>Besides coding, I also love music and gardening.</p>
              <button onClick={this.toggleDisplayBio}>Read less</button>
            </div>
           ) : (
           <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
           </div>
           )
        }       
        <hr/>
        <Projects />
        <hr/>
        <SocialProfiles />       
      </div>
     );
  }
}

export default App;
