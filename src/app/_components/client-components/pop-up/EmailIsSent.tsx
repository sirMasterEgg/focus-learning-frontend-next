'use client';

export default function EmailIsSent() {
	return (
		<div>
			<div className='flex items-center justify-center min-h-screen'>
				<div className='bg-white p-16 rounded-lg border-2 border-solid w-100'>
					<h2 className='text-2xl font-bold text-center'>
						Email Sent
					</h2>
					<p className='text-gray-400 text-center mt-2'>
						We have sent you an email with instructions to reset
						your password.
					</p>
				</div>
			</div>
		</div>
	);
}
