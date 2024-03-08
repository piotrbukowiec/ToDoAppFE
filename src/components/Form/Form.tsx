import { useState } from 'react';
import './Form.css';

export const Form = () => {
	const [text, setText] = useState('');

	return (
		<>
			<form className='custom-form'>
				<input className='custom-input' type='text' value={text} onChange={e => setText(e.target.value)} />
			</form>
		</>
	);
};
