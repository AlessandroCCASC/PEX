import { React, useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from "react-scroll";

export function Toolbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="bg-accent-50">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="text-gray-900 text-xl font-semibold">TATY UNHAS & BELEZA</span>
					</a>
				</div>
				<div className="flex md:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}>

						<span className="sr-only">Abrir menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<Popover.Group className="hidden md:flex lg:gap-x-12">
					<Link
						activeClass="active"
						to="who-we-are"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="text-lg text-gray-900">
						<a href='#'>Quem somos</a>
					</Link>
					<Link
						activeClass="active"
						to="staff"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="text-lg text-gray-900">
						<a href='#'>Equipe</a>
					</Link>
					<Link
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="text-lg text-gray-900">
						<a href='#'>Contato</a>
					</Link>
				</Popover.Group>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between bg-accent-50 p-6">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="text-gray-900 text-sm font-semibold">TATY UNHAS & BELEZA</span>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)} >
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 px-6">
								<Link
									activeClass="active"
									to="who-we-are"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" >
									<a href='#'>Quem somos</a>
								</Link>
								<Link
									activeClass="active"
									to="staff"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" >
									<a href='#'>Equipe</a>
								</Link>
								<Link
									activeClass="active"
									to="contact"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500">
									<a href='#'>Contato</a>
								</Link>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}

export default Toolbar;