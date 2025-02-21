'use client';

import {useState} from 'react';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6';
import CustomSelect from '../CustomSelect';

export default function ProfileForm() {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	return (
		<>
			<h1 className='text-3xl font-bold'>Personal details</h1>
			<span className='text-gray-400'>
				Feel free to any of your details below so your account is up to
				date.
			</span>
			<form
				method='post'
				className='mt-8 flex flex-col gap-3'>
				<div className='grid grid-cols-2 gap-4'>
					<div>
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
					</div>
					<div>
						<label className='flex flex-col gap-1'>
							<span className='font-bold'>Title</span>
							<CustomSelect
								name='title'
								options={[
									{
										label: 'Mr.',
										value: 'Mr.',
									},
									{
										label: 'Mrs.',
										value: 'Mrs.',
									},
									{
										label: 'Miss.',
										value: 'Miss.',
									},
								]}
							/>
						</label>
					</div>
					<div>
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
					</div>
					<div>
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
					</div>
				</div>
				<div className='col-end col-span-2'>
					<a
						href='/auth/register'
						className='text-blue-500 font-bold underline text-right'>
						<p>Change Password</p>
					</a>
				</div>
			</form>
		</>
	);
}
