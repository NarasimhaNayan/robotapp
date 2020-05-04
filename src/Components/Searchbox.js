import React from 'react';

const Searchbox= ({searchfield, searchChange}) => {
	return (
		<div className='pa3 '>
			<input 
			className='pa3 ba b--green bg-lightest-blue shadow-5' 
			type='text' 
			placeholder='robot name' 
			onChange={searchChange}/>
		</div>
		);

}
export default Searchbox;