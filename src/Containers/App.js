import React from 'react';
import Searchbox from '../Components/Searchbox';
import CardList from '../Components/CardList' ;
import {robots} from '../Components/robots';
import './app.css';
import Scroll from '../Components/Scroll';

//app owns state so use class syntax
class App extends React.Component {
	constructor() {
		super()
		//states def
		this.state ={
		robots:[],
		searchfield:''
		}
	}
	//to know the change
	onSearchChange = (event) => {

		this.setState({searchfield: event.target.value})
		
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				response.json();
			})
			.then(users => {
				this.setState({robots:robots})
			})
		
	}
	
	
	render() {
		const filterdrobot=this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(robots.length === 0)
		{
			return <h1>Loading</h1>
		}else{
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<Searchbox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filterdrobot} />
					</Scroll>
				</div>
				);
		}
		
	}
	
}
export default App;