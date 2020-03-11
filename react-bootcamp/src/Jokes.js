import React, {Component} from 'react';
import Header from './Header';

const Joke = ({ joke }) => {
    const {setup, punchline } = joke;
    return  <p>{setup} <em>{punchline}</em></p>;
};

class Jokes extends Component
{
    state = {joke : {}, jokes : [] };

    componentDidMount()
    {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke : json }));
    };

    fetchJokes = () => 
    {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes : json }));
    }

    render()
    {
        const { setup, punchline } = this.state.joke;
        return(            
            <div>
                <Header></Header>
                <h2>Highlighted joke</h2>
                <Joke joke={this.state.joke}></Joke>
                <hr/>
                <p>Want ten new jokes?</p>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(joke => {
                        
                        return <Joke joke={joke}></Joke>
                    })
                }
            </div>
        );
    }

}
export default Jokes;