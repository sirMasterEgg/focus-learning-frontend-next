'use client';

import ForgotPasswordForm from '@/app/_components/client-components/auth/ForgotPasswordForm';
import Footer from '@/app/_components/Footer';
import Navbar from '@/app/_components/Navbar';

export default function ForgotPassword() {
	return (
		<>
			<Navbar />
			<main className='px-16'>
				<div className='mt-10 w-full mb-10'>
					<div className='flex items-center justify-center min-h-screen'>
						<div className='bg-white p-16 rounded-lg border-2 border-solid  w-100'>
							<h2 className='text-2xl font-bold text-center'>
								Forgot Password
							</h2>
							<p className='text-gray-400 text-center mt-2'>
								Enter your email address to get instructions to
								reset the password.
							</p>
							<ForgotPasswordForm />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
