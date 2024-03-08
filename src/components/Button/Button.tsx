import React, { MouseEvent } from 'react';
interface Props {
	handleSubmit: (event: MouseEvent) => void;
}
export const Button = ({ handleSubmit }: Props) => {
	return (
		<button className='submit-btn' onClick={event => handleSubmit(event)}>
			Add todo
		</button>
	);
};
