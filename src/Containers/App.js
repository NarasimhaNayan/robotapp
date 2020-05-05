import React from 'react';
import Searchbox from '../Components/Searchbox';
import CardList from '../Components/CardList' ;
// import {robots} from '../Components/robots';
import './app.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

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
	
		
	
	//to make webpage realistic
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({robots:users})});
				


	}
		
	
	
	//to know the change
	onSearchChange = (event) => {

		this.setState({searchfield: event.target.value})
	}
	
	render() {
		//const  { robots, searchfield } = this.state;
		const filterdrobot=this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		// if(robots.length === 0)
		// {
		// 	return <h1>Loading</h1>
		// }
		// else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<Searchbox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filterdrobot} />
						</ErrorBoundary>
					</Scroll>
				</div>
				);
		
		
	}
	
}
export default App;