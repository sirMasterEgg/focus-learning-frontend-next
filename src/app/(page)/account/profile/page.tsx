import ProfileCard from '@/app/_components/client-components/account/ProfileCard';
import ProfileForm from '@/app/_components/client-components/account/ProfileForm';
import Footer from '@/app/_components/Footer';
import Navbar from '@/app/_components/Navbar';
import {PiSignOut} from 'react-icons/pi';

export default function AccountPage() {
	return (
		<>
			<Navbar />
			<main className='px-16'>
				<div className='mt-10 w-full mb-10'>
					<div className='flex items-center justify-center min-h-screen'>
						<div className='flex gap-8 w-full'>
							<div className='w-3/12 px-8'>
								<ProfileCard />
							</div>
							<div className='w-8/12'>
								<ProfileForm />
							</div>
							<div className='w-1/12'>
								<button className='flex gap-2'>
									Sign Out <PiSignOut className='size-5' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
