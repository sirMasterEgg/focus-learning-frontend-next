import Navbar from '@/app/_components/Navbar';
import DonationForm from '@/app/_components/client-components/donation/DonationForm';
import FooterGreen from '@/app/_components/FooterGreeen';

export default function Donate() {
	return (
		<>
			<Navbar />
			<main className='px-16 bg-green-50'>
				<div className='py-10 w-full bg-green-50'>
					<div className='flex justify-center min-h-screen w-full'>
						<DonationForm />
					</div>
				</div>
			</main>
			<FooterGreen />
		</>
	);
}
