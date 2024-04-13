import { React } from 'react'

export function Info() {

	return (
		<section id="who-we-are">
			<div className="flex flex-grow items-center justify-center overflow-hidden py-16 px-8 md:px-16 bg-accent-50">
				<div className='md:flex flex-grow max-w-5xl items-center justify-center'>
					<div className='p-8'>
						<p className='block mt-1 md:text-lg font-semibold leading-tight text-gray-900 text-justify'>Quem somos</p>
						<p className='block mt-1 md:text-md leading-tight text-gray-700 text-justify'>Com uma história enraizada na paixão pela beleza, Taty Unhas e Beleza é o destino definitivo para cuidados de unhas e beleza. Nosso compromisso é realçar sua beleza natural enquanto cultivamos uma atmosfera acolhedora de confiança e elegância. Junte-se a nós para uma experiência única de estilo e autoestima.</p>
					</div>
					<div className='md:shrink-0'>
						<img className='h-48 md:h-64 w-full object-cover md:w-64 border-4 rounded-3xl bg-gray-500'
							src="/alongamento-de-unhas.png"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Info;