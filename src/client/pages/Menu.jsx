import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Menu() {
	return (
		<>
			<Header />

			{/* HERO */}
			<section className="relative z-10 pt-28 md:pt-32">
				<div className="mx-auto max-w-5xl px-4">
					<div className="relative -bottom-20 -mt-20 overflow-hidden rounded-2xl bg-pink p-4 sm:flex">
						<div className="text-center mx-auto py-4 max-w-xs sm:text-left sm:pr-12 sm:flex sm:flex-col sm:justify-between sm:py-0">
							<h1 className="text-white mb-2">Discover our sweeeet menu</h1>
							<p className="text-white-80">Carefull not to drown in all that sugar</p>
						</div>

						<div className="w-full relative overflow-hidden rounded-md sm:hidden" aria-hidden="true">
							<div className="absolute h-[70%] bottom-0 z-0 w-full bg-white rounded-md"></div>
							<img
								src="/src/client/assets/images/donut-menu-mobile.png"
								alt=""
								aria-hidden="true"
								className="w-full bottom-0 relative z-10 animate-float"
							/>
						</div>

						<div className="w-full relative overflow-hidden rounded-md hidden sm:block" aria-hidden="true">
							<div className="absolute w-[75%] right-0 z-0 h-full bg-white rounded-md"></div>
							<img
								src="/src/client/assets/images/donut-menu-desktop.png"
								alt=""
								aria-hidden="true"
								className="h-[110%] -top-[5%] bottom-0 relative z-10 animate-float"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* /HERO */}

			<div className="bg-wave-pattern relative top-1 h-4 w-full bg-bottom bg-repeat-x"></div>

			{/* MENU */}
			<section className="relative bg-light-grey pt-32 pb-20 md:pt-40">
				<div className="mx-auto max-w-5xl px-4">
					<p id="counter-1" className="text-sm uppercase text-light-brown mb-6">
						<span className="text-brown text-base">Donuts</span> <br /> 1–6 / 18
					</p>
					<p id="counter-2" className="hidden text-sm uppercase text-light-brown mb-6">
						<span className="text-brown text-base">Donuts</span> <br /> 6–12 / 18
					</p>
					<p id="counter-3" className="hidden text-sm uppercase text-light-brown mb-6">
						<span className="text-brown text-base">Donuts</span> <br /> 12–18 / 18
					</p>

					{/* PAGE 1 */}
					<div id="page-1" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/original-glazed.png"
								alt="Original Glazed"
								className="w-full rounded-md"
							/>
							<div>
								<span className="inline-block relative rounded-full bg-pink px-2 p-0.5 text-xs uppercase text-white mb-3">
									Best seller
								</span>
								<h3 className="text-brown mb-2">Original Glazed</h3>
								<p className="text-light-brown">Our signature Original Glazed ring doughnut</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										2.50<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+15
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/chocolate-sprinkle.png"
								alt="Chocolate Sprinkle"
								className="w-full rounded-md"
							/>
							<div>
								<span className="inline-block relative rounded-full bg-pink px-2 p-0.5 text-xs uppercase text-white mb-3">
									Best seller
								</span>
								<h3 className="text-brown mb-2">Chocolate Sprinkle</h3>
								<p className="text-light-brown">Our chocolatey hand-dipped doughnut</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										2.75<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+15
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/original-filled-creme.png"
								alt="Original Filled Creme"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Original Filled Creme</h3>
								<p className="text-light-brown">Our classic doughnut with a smooth creme filling</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										3.00<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+20
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/strawberry-iced-ring.png"
								alt="Strawberry Iced Ring"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Strawberry Iced Ring</h3>
								<p className="text-light-brown">Original Glazed doughnut dipped in Strawberry icing</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										2.75<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+15
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/caramel-iced-ring.png"
								alt="Caramel Iced Ring"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Caramel Iced Ring</h3>
								<p className="text-light-brown">Original Glazed doughnut dipped in Caramel icing</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										2.75<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+15
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/glazed-raspberry.png"
								alt="Glazed Raspberry"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Glazed Raspberry</h3>
								<p className="text-light-brown">Fruity raspberry filling and signature glaze</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										3.25<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+25
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* /PAGE 1 */}

					{/* PAGE 2 */}
					<div id="page-2" className="hidden gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/chocolate-custard.png"
								alt="Chocolate Custard"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Chocolate Custard</h3>
								<p className="text-light-brown">Smooth custard filling, dipped in rich chocolatey icing</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										3.50<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+20
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/strawberry-creme.png"
								alt="Strawberry Creme"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Strawberry Creme</h3>
								<p className="text-light-brown">Fruity strawberry kreme filling with strawberry flavour icing</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										3.50<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+20
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/confetti-celebration.png"
								alt="Confetti Celebration"
								className="w-full rounded-md"
							/>
							<div>
								<span className="inline-block relative rounded-full bg-pink px-2 p-0.5 text-xs uppercase text-white mb-3">
									Best seller
								</span>
								<h3 className="text-brown mb-2">Confetti Celebration</h3>
								<p className="text-light-brown">Cookie dough flavour filling, with yellow coating and sugar stars</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										3.75<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+25
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/pumpkin-patch.png"
								alt="Pumpkin Patch"
								className="w-full rounded-md"
							/>
							<div>
								<span className="inline-block relative rounded-full bg-orange px-2 p-0.5 text-xs uppercase text-white mb-3">
									Special
								</span>
								<h3 className="text-brown mb-2">Pumpkin Patch</h3>
								<p className="text-light-brown">Toffee apple filling, orange icing, with a spooky face</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										3.00<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+30
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/bite--n-delight.png"
								alt="Bite and Delight"
								className="w-full rounded-md"
							/>
							<div>
								<span className="inline-block relative rounded-full bg-orange px-2 p-0.5 text-xs uppercase text-white mb-3">
									Special
								</span>
								<h3 className="text-brown mb-2">Bite and Delight</h3>
								<p className="text-light-brown">Raspberry filling, berry icing, with a terrifying face</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										3.65<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+40
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/spooktacular.png"
								alt="Spookctacular"
								className="w-full rounded-md"
							/>
							<div>
								<span className="inline-block relative rounded-full bg-orange px-2 p-0.5 text-xs uppercase text-white mb-3">
									Special
								</span>
								<h3 className="text-brown mb-2">Spookctacular</h3>
								<p className="text-light-brown">Apple-flavoured icing, topped with spooky sprinkles</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										3.25<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+35
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* /PAGE 2 */}

					{/* PAGE 3 */}
					<div id="page-3" className="hidden gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/angry-n-hungry.png"
								alt="Angry and Hungry"
								className="w-full rounded-md"
							/>
							<div>
								<span className="inline-block relative rounded-full bg-turquoise px-2 p-0.5 text-xs uppercase text-white mb-3">
									New
								</span>
								<h3 className="text-brown mb-2">Angry and Hungry</h3>
								<p className="text-light-brown">Chocolatey icing, decorated with a werewolf face</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										4.25<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+45
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/chocolate-dreamcake.png"
								alt="Chocolate Dreamcake"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Chocolate Dreamcake</h3>
								<p className="text-light-brown">Rich brownie batter filling with chocolate decoration</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										5.25<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+45
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/nutty-chocolatta.png"
								alt="Nutty Chocolatta"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Nutty Chocolatta</h3>
								<p className="text-light-brown">Filled with hazelnut spread and topped with caramelised hazelnuts</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										5.65<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+50
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/lotus-biscoff.png"
								alt="Lotus Biscoff"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Lotus Biscoff</h3>
								<p className="text-light-brown">The unique caramelised taste of Lotus Biscoff®, pure indulgence</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										5.15<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+40
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/sticky-toffee-swirl.png"
								alt="Sticky Toffee Swirl"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Sticky Toffee Swirl</h3>
								<p className="text-light-brown">Salted caramel filling with caramel icing & honeycomb crunch</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										5.75<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+55
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex flex-col justify-between">
							<img
								src="/src/client/assets/images/products/hazelnut-crispy.png"
								alt="Hazelnut Crispy"
								className="w-full rounded-md"
							/>
							<div>
								<h3 className="text-brown mb-2">Hazelnut Crispy</h3>
								<p className="text-light-brown">Covered with hazelnut glaze and topped with crunchy hazelnuts</p>
								<div className="flex justify-between items-center mt-4">
									<span className="text-2xl text-orange mr-2">
										4.95<span className="text-base ml-0.5 opacity-80">€</span>
									</span>
									<div className="text-sm border-2 border-brown-15 text-light-brown px-2 py-0.5 rounded-full inline-flex gap-1 items-center">
										+30
										<img src="/src/client/assets/images/logo-s.svg" alt="Loyalty point" className="inline-block h-4" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* /PAGE 3 */}

					{/* PAGINATION */}
					<div className="flex justify-center gap-2 mt-12">
						<button
							id="btn-page-1"
							type="button"
							className="text-xl px-4 py-2 text-white bg-pink rounded-full border-4 border-white">
							1
						</button>
						<button
							id="btn-page-2"
							type="button"
							className="text-xl px-4 py-2 text-light-brown bg-light-grey rounded-full border-4 border-white">
							2
						</button>
						<button
							id="btn-page-3"
							type="button"
							className="text-xl px-4 py-2 text-light-brown bg-light-grey rounded-full border-4 border-white">
							3
						</button>
					</div>
					{/* PAGINATION */}
				</div>
			</section>
			{/* /MENU */}

			<div className="bg-wave-b-pattern relative -top-1 z-0 h-4 w-full bg-top bg-repeat-x"></div>

			<Footer />
		</>
	);
}

export default Menu;
