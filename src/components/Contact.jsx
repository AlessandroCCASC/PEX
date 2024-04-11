import { React } from 'react'

export function Contact() {

	return (
		<div className="max-w-md mx-auto overflow-hidden md:max-w-2xl lg:max-w-6xl py-16 px-4">
			<div className='md:flex flex-grow'>
				<div className='md:shrink-0'>
					<iframe className='h-48 md:h-64 lg:h-96 w-full object-cover md:w-64 lg:w-96 border-4 border-accent-100  rounded-3xl'
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.707239566148!2d-48.82368512289074!3d-26.33597777699565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb138c8dd1159%3A0xe436674985dd4db6!2sR.%20Jo%C3%A3o%20Manoel%20dos%20Santos%2C%2086%20-%20Itaum%2C%20Joinville%20-%20SC%2C%2089210-713!5e0!3m2!1spt-BR!2sbr!4v1712792427098!5m2!1spt-BR!2sbr"
					/>
				</div>

				<div className='p-8'>
					<p className='block mt-1 md:text-md lg:text-lg leading-tight font-medium text-gray-900'>Estamos localizados na Rua João Manoel dos Santos, 86 - Itaum</p>
					<p className='block mt-1 md:text-md lg:text-lg leading-tight font-medium text-gray-900'>Nossos contatos:</p>
					<p className='block mt-1 font-medium text-gray-700'>(47) 00000-0000</p>
					<p className='block mt-1 font-medium text-gray-700'>(47) 00000-0000</p>
					<p className='block mt-1 font-medium text-gray-700'>taty-unhas-e-beleza@email.com</p>
				</div>
			</div>
		</div>
	)
}

export default Contact;