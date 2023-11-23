import React from "react";
import { useState } from "react";

function Header() {

	const [open, setOpen] = useState(false);

	function toggleNav() { open ? setOpen(false) : setOpen(true) }

	return (
		<>
			<header className="fixed z-50 h-16 w-full border-b-2 border-light-grey bg-white">
				<div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">
					<a href="/" className="block w-20 sm:w-24">
						<img src="/src/client/assets/logo.svg" alt="Donuts Lord logo" />
					</a>
					<nav
						className={`${ open ? '' : 'hidden' } absolute left-0 top-16 h-72 w-full bg-white sm:relative sm:top-0 sm:block sm:h-auto sm:w-auto`}>
						<ul className="flex h-full flex-col items-center justify-center gap-8 sm:flex-row sm:gap-2">
							<li>
								<a
									href="/menu/"
									className="inline-block bg-white font-cursive text-4xl uppercase text-brown sm:rounded-full sm:border-2 sm:border-light-grey sm:px-3 sm:py-1 sm:font-sans sm:text-sm">
									Menu
								</a>
							</li>
							<li>
								<a
									href="/about/"
									className="inline-block bg-white font-cursive text-4xl uppercase text-brown sm:rounded-full sm:border-2 sm:border-light-grey sm:px-3 sm:py-1 sm:font-sans sm:text-sm">
									About
								</a>
							</li>
							<li>
								<a
									href="/contact/"
									className="inline-block bg-white font-cursive text-4xl uppercase text-brown sm:rounded-full sm:border-2 sm:border-light-grey sm:px-3 sm:py-1 sm:font-sans sm:text-sm">
									Contact
								</a>
							</li>
						</ul>
					</nav>
					<button
						onClick={toggleNav}
						className="inline-block rounded-full border-2 border-light-grey bg-white px-3 py-1 sm:hidden"
						role="button"
						aria-hidden="true">
						<div
							id="nav-line-1"
							className={`${ open ? 'rotate-45 translate-y-[3px]' : '' } my-[3px] h-[3px] w-5 transform rounded-full bg-orange transition-transform`}></div>
						<div
							id="nav-line-2"
							className={`${ open ? '-rotate-45 -translate-y-[3px]' : '' } my-[3px] h-[3px] w-5 transform rounded-full bg-orange transition-transform`}></div>
						<span className="hidden">Open menu</span>
					</button>
				</div>
			</header>
			<div 
				onClick={toggleNav} 
				className={`${ open ? '' : 'hidden' } fixed z-40 h-full w-full bg-brown-75 sm:hidden`}>
			</div>
		</>
	);
}

export default Header;
