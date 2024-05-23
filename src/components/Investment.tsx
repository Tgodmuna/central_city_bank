import React from "react";

const BankingComponent: React.FC = () => {
	return (
		<div className='flex flex-wrap justify-center z-10 items-center w-full min-h-screen p-6 bg-gray-100'>
			<div className='w-full md:w-1/2 lg:w-1/3 p-4'>
				<SavingsCard />
			</div>
			<div className='w-full md:w-1/2 lg:w-1/3 p-4'>
				<InvestmentCard />
			</div>
			<div className='w-full md:w-1/2 lg:w-1/3 p-4'>
				<SavingsFeaturesCard />
			</div>
		</div>
	);
};

export default BankingComponent;

const SavingsCard: React.FC = () => (
	<div
		className='relative orbitron bg-cover bg-center rounded-lg shadow-lg overflow-hidden'
		style={{ backgroundImage: `url('/assets/images/cashWallet.jpg')` }}
	>
		<div className='absolute inset-0 bg-black bg-opacity-50'></div>
		<div className='relative p-8 text-white'>
			<h2 className='text-3xl font-bold mb-4'>Grow (and grow and grow) your money</h2>
			<p className='text-lg mb-4'>Earn 4.10% AER interest (variable)</p>
			<p className='text-lg mb-4'>
				Earn 4.10% AER (variable) on your money with an Instant Access Savings Pot. There’s no minimum
				deposit, and you can access your money anytime.
			</p>
			<a href='/savings' className='hover:bg-blue-800 bg-blue-600 text-white py-2 px-4 rounded'>
				Explore Savings Pots
			</a>
		</div>
	</div>
);

const InvestmentCard: React.FC = () => (
	<div
		className='relative bg-cover bg-center rounded-lg orbitron shadow-lg overflow-hidden'
		style={{ backgroundImage: `url('/assets/images/coins.jpg')` }}
	>
		<div className='absolute inset-0 bg-black bg-opacity-50'></div>
		<div className='relative p-8 text-white'>
			<h2 className='text-3xl font-bold mb-4'>Invest in your future</h2>
			<p className='text-lg mb-4'>
				Invest as little as £1 in a choice of 3 investment options, and the experts will take care of
				everything for you.
			</p>
			<p className='text-sm mb-4'>
				The value of your investments could go up or down and you could get back less than you put in.
			</p>
			<a href='/investment' className=' hover:bg-blue-800 bg-blue-600 text-white py-2 px-4 rounded'>
				Explore Investments
			</a>
		</div>
	</div>
);

const SavingsFeaturesCard: React.FC = () => (
	<div
		className='relative bg-cover bg-center rounded-lg shadow-lg orbitron overflow-hidden'
		style={{ backgroundImage: `url('assets/images/hero-img-2.jpg')` }}
	>
		<div className='absolute inset-0 bg-black bg-opacity-50'></div>
		<div className='relative p-8 text-white'>
			<h2 className='text-3xl font-bold mb-4'>Save as you spend</h2>
			<p className='text-lg mb-4'>
				Every time you spend money, we’ll round it up to the nearest pound and put the spare change in a
				Pot for you. All you need to do is switch on roundups.
			</p>
			<p className='text-lg mb-4'>People on Monzo save on average £100 extra each year this way.</p>
			<a href='/savings-features' className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800'>
				Explore Savings Features
			</a>
		</div>
	</div>
);