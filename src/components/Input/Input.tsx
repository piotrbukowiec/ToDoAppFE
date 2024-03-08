import React, { useState } from 'react';

interface Props {
	onTextChange: (text: string) => void;
}
export const Input = ({ onTextChange }: Props) => {
	const [text, setText] = useState('');
	return (
		<input
			className='todo-input'
			type='text'
			value={text}
			onChange={event => {
				const { value } = event.target;
				setText(value);
				onTextChange(value);
			}}
		/>
	);
};
