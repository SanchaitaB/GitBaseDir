import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Seitch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Jokes from './Jokes';


ReactDOM.render(
<Router history={createBrowserHistory()}>
    <switch>
        <Route exact path='/' component={App}></Route>
        <Route path='/jokes' component={Jokes}></Route>
    </switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class Animal
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    speak()
    {
        console.log("Hi my name is", this.name, "and I am", this.age, "years old.")
    }
}

const animal1 = new Animal("Simba", 3);
animal1.speak();

class Lion extends Animal
{
    constructor(name, age, furColor, speed)
    {
        super(name, age)
        this.furColor = furColor;
        this.speed = speed;
    }

    roar()
    {
        console.log("ROOOAR...I have ", this.furColor, " furs and I can run", this.speed, "miles per hour.")
    }
}

const animal2 = new Lion("Simba",3,"Brown", 50);
animal2.speak();
animal2.roar();
