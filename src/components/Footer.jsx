import { React } from 'react'

export function Footer() {

	return (
		<footer className="bg-accent-50 " aria-labelledby="footer-heading">
			<div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-8">
				<div className="flex flex-row itens-center justify-center gap-8">

					<a href="https://www.instagram.com/tatyunhasebeleza/"  className="-m-1.5 p-1.5">
						<span className="sr-only">Instagram</span>
						<img className="h-4 w-auto" src="/instagram.svg" alt="" />
					</a>
					<a href="https://www.facebook.com/Tatyunhasebeleza" className="-m-1.5 p-1.5">
						<span className="sr-only">Facebook</span>
						<img className="h-4 w-auto" src="/facebook.svg" alt="" />
					</a>
					<a href="https://twitter.com/tatyunhasemgel" className="-m-1.5 p-1.5">
						<span className="sr-only">Twitter</span>
						<img className="h-4 w-auto" src="/twitter.svg" alt="" />
					</a>
				</div>

				<div className='flex flex-row itens-center justify-center '>
					<img
						className="lg:w-1/12 sm:w-3/12"
						src="/logo.png"
						alt="TATY UNHAS & BELEZA"
					/>
				</div>

				<div className='flex flex-row itens-center justify-center pt-8'>
					<p className='text-gray-900 text-xs sm:text-normal'>© 2024 TATY UNHAS & BELEZA · Todos os direitos reservados</p>
				</div>
			</div>
		</footer >
	)
}

export default Footer;