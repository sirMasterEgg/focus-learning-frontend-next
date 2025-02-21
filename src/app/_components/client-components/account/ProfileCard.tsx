import Image from 'next/image';
import ProvileUniverse from '@/app/assets/others/Profile Universe.png';

export default function ProfileCard() {
	return (
		<div className='w-64 rounded-xl shadow-lg bg-white overflow-hidden h-full'>
			<div className='bg-blue-100 p-3 flex items-center space-x-1'>
				<span className='text-gray-600 text-lg'>Hi,</span>
				<span className='font-bold text-gray-900 text-lg'>
					Georgio Hodge
				</span>
				<span className='text-lg'>👋</span>
			</div>
			<div className='bg-cover bg-center relative'>
				<Image
					src={ProvileUniverse}
					alt='Profile'
					className='object-cover'
					objectFit='fill'
				/>
			</div>
		</div>
	);
}
