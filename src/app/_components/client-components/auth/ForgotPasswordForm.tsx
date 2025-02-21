'use client';

import {FormEvent} from 'react';

export default function ForgotPasswordForm() {
	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		console.log(formData);
	};
	return (
		<>
			<form
				method='post'
				onSubmit={onSubmit}
				className='mt-8 flex flex-col gap-3'>
				<input
					type='email'
					placeholder='E-mail'
					className='w-full p-3 border rounded-lg'
				/>
				<button
					type='submit'
					className='w-full bg-secondary-100 rounded-lg h-12 font-bold text-white'>
					Submit
				</button>
			</form>
		</>
	);
}
