'use client';
import Image from 'next/image';
import {FaRegCreditCard} from 'react-icons/fa';
import {useState} from 'react';
import Mahatma2 from '@/app/assets/Contact & Donate/Mahatma 2.png';
import QRIS from '@/app/assets/others/Icons/QRISpng.png';
import VisaLogo from '@/app/assets/others/Icons/logos_visa.png';
import MastercardLogo from '@/app/assets/others/Icons/logos_mastercard.png';
import WhiteLogo from '@/app/assets/navbar/Main Logo with Name Vector.svg';

export default function DonationForm() {
	const [selected, setSelected] = useState('credit');
	return (
		<>
			<div className='p-14 w-full min-h-screen'>
				<div className='w-full flex-1 bg-white shadow-md rounded p-8'>
					<div class='flex gap-2'>
						<div class='w-2/5'>
							<Image
								src={Mahatma2}
								alt='donationImage'
								objectFit='cover'
							/>
						</div>
						<div class='w-3/5 p-8'>
							<span className='inline-block text-4xl tracking-wide text-justify font-bold align-text-bottom mt-8'>
								Supporting Our Children: Therapy Scholarships
								for Mahatma
							</span>
							<hr className='border-t border-gray-300 mt-16 mb-6' />
							<span className='inline-block tracking-wide text-justify text-2xl text-gray-400'>
								Your donation will benefit <b>Mahatma</b>
							</span>
						</div>
					</div>
					<form
						method='post'
						// onSubmit={onSubmit}
						className='mt-8 flex flex-col gap-3'>
						<label className='flex flex-col gap-1'>
							<span className='font-bold flex'>
								Your Details <p className='text-red-500'> *</p>
							</span>
						</label>
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
							<span className='font-bold'>Email</span>
							<input
								className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
								placeholder='Enter Your Email'
								type='email'
								inputMode='email'
								name='email'
							/>
						</label>
						<label className='flex flex-col gap-1'>
							<span className='text-right'>
								The invoice email will be sent to this email
								address.
							</span>
						</label>
						<label className='flex flex-col gap-1'>
							<span className='font-bold'>
								Enter Your Donation
							</span>
							<div className=' flex flex-row gap-2'>
								<button className='border rounded-xl shadow-lg font-bold flex-1 p-4 w-2/10'>
									$25.00
								</button>
								<button className='border rounded-xl shadow-lg font-bold flex-1 p-4 w-2/10'>
									$50.00
								</button>
								<button className='border rounded-xl shadow-lg font-bold flex-1 p-4 w-2/10'>
									$75.00
								</button>
								<button className='border rounded-xl shadow-lg font-bold flex-1 p-4 w-2/10'>
									$100.00
								</button>
								<button className='border rounded-xl shadow-lg font-bold flex-1 p-4 w-2/10'>
									$250.00
								</button>
							</div>
						</label>
						<label className='flex flex-col gap-1'>
							<input
								className='border rounded mt-2 p-2 ring-0 outline-1 outline-gray-400 h-10'
								placeholder='$ Other Amount'
								type='number'
								inputMode='number'
								name='otherAmount'
							/>
						</label>
						<label className='flex flex-col gap-1 mt-4'>
							<span className='font-bold'>Payment Method</span>

							<div
								className={`flex items-center justify-between gap-3 p-4 border ${
									selected === 'credit'
										? 'border-black'
										: 'border-gray-300'
								} rounded-lg cursor-pointer shadow-sm`}
								onClick={() => setSelected('credit')}>
								{/* Left Section (Radio Button + Icon + Text) */}
								<div className='flex items-center gap-3'>
									<input
										type='radio'
										name='payment'
										checked={selected === 'credit'}
										className='w-5 h-5'
										readOnly
									/>
									<FaRegCreditCard className='text-xl' />
									<span>Credit or Debit Card</span>
								</div>

								{/* Right Section (Card Logos) */}
								<div className='flex items-center gap-2'>
									<Image
										src={MastercardLogo}
										alt='Mastercard'
										className='w-8 h-auto'
									/>
									<Image
										src={VisaLogo}
										alt='Visa'
										className='w-8 h-auto'
									/>
								</div>
							</div>
							<div
								className={`overflow-hidden transition-all duration-300 mt-3 ${
									selected === 'credit'
										? 'max-h-[600px] opacity-100'
										: 'max-h-0 opacity-0'
								}`}>
								<div className='bg-gray-50 p-4 rounded-lg border border-gray-300 flex flex-col gap-3'>
									<div className='flex flex-col gap-2'>
										<input
											className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
											placeholder='Enter Your Email Address'
											type='email'
											inputMode='email'
											name='email'
										/>
									</div>
									<div className='grid grid-cols-2 gap-3'>
										<input
											type='text'
											placeholder='First Name'
											name='first_name'
											className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
										/>
										<input
											type='text'
											placeholder='Last Name'
											name='last_name'
											className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
										/>
									</div>
									<input
										type='text'
										placeholder='Card Number'
										name='card_number'
										className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
									/>
									<div className='grid grid-cols-2 gap-3'>
										<input
											type='text'
											placeholder='MM / YY'
											name='expiry_date'
											className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
										/>
										<input
											type='text'
											placeholder='CVV'
											name='cvv'
											className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
										/>
									</div>
									<input
										type='text'
										placeholder='Name on Card'
										name='name_on_card'
										className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
									/>
									<div className='grid grid-cols-2 gap-3'>
										<select className='p-2 border rounded'>
											<option>Country</option>
										</select>
										<input
											type='text'
											placeholder='Postal Code'
											name='postal_code'
											className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
										/>
									</div>
									<div className='mt-3 flex items-center gap-2'>
										<input
											type='checkbox'
											name='save_card'
											id='save-card'
										/>
										<label
											htmlFor='save-card'
											className='text-sm'>
											Save card for future donations
										</label>
									</div>
								</div>
							</div>
							<div
								className={`flex items-center gap-3 p-4 mt-3 border ${
									selected === 'qr'
										? 'border-black'
										: 'border-gray-300'
								} rounded-lg cursor-pointer shadow-sm`}
								onClick={() => setSelected('qr')}>
								<input
									type='radio'
									name='payment'
									checked={selected === 'qr'}
									className='w-5 h-5'
									readOnly
								/>
								<Image
									src={QRIS}
									alt='QRIS'
									width={30}
									height={30}
								/>
								<span>QR Payment</span>
							</div>
						</label>
						<hr className='border-t-2 border-gray-300 border-dashed mt-16 mb-8' />
						<div className='flex justify-center'>
							<Image
								src={WhiteLogo}
								alt='WhiteLogo'
								width={100}
								height={50}
							/>
						</div>
						<div>
							<label className='flex flex-col gap-1'>
								<span className='font-bold text-xl'>
									Your Donation
								</span>
							</label>
						</div>
						<div className='flex justify-between'>
							<span className='text-xl text-gray-300'>
								<span className='text-red-500'>*</span>Your
								Donation
							</span>
							<span className='text-xl text-gray-300'>
								Amount Donation
							</span>
						</div>
						<div className='flex justify-between'>
							<span className='text-xl'>Total due today</span>
							<span className='text-xl'>Amount Donation</span>
						</div>
						<div className='flex justify-end mt-16'>
							<button
								type='submit'
								className='w-40 bg-secondary-100 rounded-full h-12 font-bold text-white'>
								Donate Now
							</button>
						</div>

						<div className='flex justify-end mt-8'>
							<span className='text-gray-300'>
								<span className='text-red-500'>*</span>Your
								donation will directly support our programs.
								Please note that your donation may be subject to
								applicable taxes.
							</span>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
