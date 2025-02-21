'use client';
import {FaAngleDown} from 'react-icons/fa6';
import {FormEvent, useEffect, useRef, useState} from 'react';
import {FaRegCheckCircle} from 'react-icons/fa';
import Image from 'next/image';
import {useRouter} from 'next/navigation';

const CustomSelect = ({
	name,
	options,
}: {
	name: string;
	options: {label: string; value: string}[];
}) => {
	const [selectedOption, setSelectedOption] = useState<string>(
		options[0].value
	);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const [focusedIndex, setFocusedIndex] = useState(-1);
	const selectRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
		setIsDropdownOpen(false);
		setFocusedIndex(-1);
	};

	const handleClickOutside = (e: MouseEvent) => {
		if (
			selectRef.current &&
			!selectRef.current.contains(e.target as HTMLDivElement)
		) {
			setIsDropdownOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const handleKeyDown = (event: unknown) => {
		const e = event as KeyboardEvent;
		if (e.key === ' ') {
			e.preventDefault();
			toggleDropdown();
		} else if (e.key === 'Enter') {
			e.preventDefault();
			if (isDropdownOpen && focusedIndex >= 0) {
				handleOptionClick(options[focusedIndex].value);
			} else {
				toggleDropdown();
			}
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (!isDropdownOpen) {
				toggleDropdown();
			} else {
				setFocusedIndex((prevIndex) =>
					prevIndex === options.length - 1 ? 0 : prevIndex + 1
				);
			}
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			setFocusedIndex((prevIndex) =>
				prevIndex <= 0 ? options.length - 1 : prevIndex - 1
			);
		} else if (e.key === 'Escape') {
			setIsDropdownOpen(false);
			setFocusedIndex(-1);
		}
	};

	useEffect(() => {
		if (focusedIndex !== -1 && isDropdownOpen) {
			const item = document.getElementById(`select-item-${focusedIndex}`);
			if (item) item.scrollIntoView({block: 'nearest'});
		}
	}, [focusedIndex, isDropdownOpen]);

	return (
		<div
			className='custom-select ring-0 outline-offset-1 outline-gray-400'
			tabIndex={0}
			onKeyDown={(e) => handleKeyDown(e)}
			ref={selectRef}>
			<input
				type='text'
				readOnly
				name={name}
				value={selectedOption}
				className='hidden'
			/>

			<div
				className={`select-selected border rounded p-2 ring-0 outline-1 outline-gray-400 w-full h-10 ${
					isDropdownOpen ? 'select-arrow-active' : ''
				}`}
				onClick={() => toggleDropdown()}>
				{selectedOption}
			</div>

			<div
				className={`select-items rounded bg-white transition-all duration-500 overflow-y-hidden ${
					isDropdownOpen
						? 'max-h-screen ease-in border'
						: 'max-h-0 ease-out'
				}`}>
				{options.map((option, index) => {
					let roundedClass = '';
					if (index === 0) {
						roundedClass = 'rounded-t-[3px]';
					}
					if (index === options.length - 1) {
						roundedClass = 'rounded-b-[3px]';
					}
					return (
						<div
							id={`select-item-${index}`}
							key={index}
							className={`${
								selectedOption === option.value ||
								focusedIndex === index
									? 'same-as-selected'
									: ''
							} p-2 w-full h-10 ${roundedClass}`}
							onClick={() => handleOptionClick(option.value)}
							onMouseEnter={() => setFocusedIndex(index)}>
							{option.label}
						</div>
					);
				})}
			</div>

			<FaAngleDown
				className={`absolute top-3 right-2 z-[99] transition duration-500 rotate-0 ${
					isDropdownOpen ? 'rotate-180' : ''
				}`}
			/>
		</div>
	);
};

export default function ContactForm() {
	const modalRef = useRef<HTMLDialogElement>(null);
	const router = useRouter();

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault();
		modalRef.current?.showModal();
		setTimeout(() => {
			modalRef.current?.close();
			router.replace('/');
		}, 2000);
	};

	return (
		<>
			<form
				onSubmit={(event) => handleSubmitForm(event)}
				className='grid grid-cols-2 gap-5'>
				<label className='flex flex-col gap-1'>
					<span className='font-bold'>Name</span>
					<input
						className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
						placeholder='Enter Your Name'
						type='text'
					/>
				</label>
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
				<label className='flex flex-col gap-1'>
					<span className='font-bold'>Email</span>
					<input
						className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
						placeholder='Enter Your Email Address'
						type='text'
					/>
				</label>
				<label className='flex flex-col gap-1'>
					<span className='font-bold'>Phone Number</span>
					<input
						className='border rounded p-2 ring-0 outline-1 outline-gray-400 h-10'
						placeholder='Enter Your Phone Number'
						type='text'
						inputMode='numeric'
						pattern={'[0-9]*'}
					/>
				</label>
				<label className='col-span-2 flex flex-col gap-1'>
					<span className='font-bold'>Book for</span>
					<CustomSelect
						name='for'
						options={[
							{
								label: 'Child Assessment / Observation',
								value: 'Child Assessment / Observation',
							},
							{label: 'IQ Test', value: 'IQ Test'},
							{
								label: 'School Psychological Tests',
								value: 'School Psychological Tests',
							},
							{
								label: 'Psychological Tests',
								value: 'Psychological Tests',
							},
							{
								label: 'Academic Counselling',
								value: 'Academic Counselling',
							},
							{
								label: 'Psychological Counselling',
								value: 'Psychological Counselling',
							},
						]}
					/>
				</label>
				<label className='col-span-2 flex flex-col gap-1'>
					<span className='font-bold'>How We Can Help?</span>
					<textarea
						className='border rounded p-2 ring-0 outline-1 outline-gray-400 resize-none'
						rows={10}
						placeholder='Write Your Message Here'></textarea>
				</label>
				<div className='w-full col-span-2'>
					<button
						type='submit'
						className='gradient-background rounded-lg mt-5'>
						<div
							className={`px-8 py-3 rounded-lg font-semibold text-neutral-100 transition-all duration-500 bg-secondary-100 hover:bg-secondary-100/20`}>
							Send Message
						</div>
					</button>
				</div>
			</form>
			<dialog
				ref={modalRef}
				className='dialog'
				onCancel={(e) => e.preventDefault()}>
				<div className='bg-white w-[calc(100vw_-_20rem)] rounded-xl flex flex-col gap-10 p-10'>
					<div className='inline-flex flex-row items-center justify-center w-full gap-3 text-secondary-100'>
						<FaRegCheckCircle className='text-3xl' />
						<span className='text-3xl font-bold'>
							Message Sent!
						</span>
					</div>
					<div className='w-full flex justify-center items-center'>
						<Image
							width={1200}
							height={300}
							src={'https://placehold.co/1200x500'}
							className='w-full'
							alt='image'
						/>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<span className='text-center'>
							Your inquiry has been submitted successfully.
						</span>
						<span className='text-center'>
							Please allow 24-48 hours for a response.
						</span>
						<span className='text-3xl text-gradient font-bold mt-10'>
							{"We'll"} be in touch soon !
						</span>
					</div>
				</div>
			</dialog>
		</>
	);
}
