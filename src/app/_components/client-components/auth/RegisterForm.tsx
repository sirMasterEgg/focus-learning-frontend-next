'use client';

import {googleIcon} from '@/app/assets/others';
import {signIn} from 'next-auth/react';
import Image from 'next/image';
import {FormEvent, useState} from 'react';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6';

export default function RegisterForm() {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] =
		useState<boolean>(false);

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
				<label className='flex flex-col gap-1'>
					<span className='font-bold'>Name</span>
					<input
						className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
						placeholder='Enter Your Full Name'
						type='text'
						inputMode='text'
						name='name'
					/>
				</label>
				<label className='flex flex-col gap-1'>
					<span className='font-bold'>Email Address</span>
					<input
						className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
						placeholder='Enter Your Email Address'
						type='email'
						inputMode='email'
						name='email'
					/>
				</label>
				<label className='flex flex-col gap-1 relative'>
					<span className='font-bold'>Password</span>
					<input
						className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
						placeholder='Enter Your Password'
						type={`${showPassword ? 'text' : 'password'}`}
						name='password'
					/>
					<button
						type='button'
						onClick={() => setShowPassword(!showPassword)}
						className='absolute right-3 translate-y-0.5 top-1/2 text-gray-400'>
						{showPassword ? (
							<>
								<FaRegEye className='w-6 h-6' />
							</>
						) : (
							<>
								<FaRegEyeSlash className='w-6 h-6' />
							</>
						)}
					</button>
				</label>
				<label className='flex flex-col gap-1 relative'>
					<span className='font-bold'>Confirm Password</span>
					<input
						className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
						placeholder='Confirm Your Password'
						type={`${showConfirmPassword ? 'text' : 'password'}`}
						name='confirm_password'
					/>
					<button
						type='button'
						onClick={() =>
							setShowConfirmPassword(!showConfirmPassword)
						}
						className='absolute right-3 translate-y-0.5 top-1/2 text-gray-400'>
						{showConfirmPassword ? (
							<>
								<FaRegEye className='w-6 h-6' />
							</>
						) : (
							<>
								<FaRegEyeSlash className='w-6 h-6' />
							</>
						)}
					</button>
				</label>
				<button
					type='submit'
					className='w-full bg-secondary-100 rounded-lg h-12 font-bold text-white'>
					Sign Up
				</button>
			</form>
			<span className='separator my-5'>or</span>
			<button
				type='button'
				onClick={() => signIn('google')}
				className='w-full bg-white border border-gray-300 rounded-lg h-12 font-bold inline-flex flex-row items-center justify-center gap-2'>
				Continue with Google
				<Image
					src={googleIcon}
					alt={'Icon google'}
					className='w-7 h-7'
				/>
			</button>
		</>
	);
}
