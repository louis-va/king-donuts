import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<Header />

			{/* HERO */}
			<section id="hero" className="mx-auto grid max-w-5xl gap-4 px-4 pt-28 md:grid-cols-2 md:pt-32">
				<div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-orange p-4 md:row-span-2">
					<h1 className="mb-44 text-white">
						Brussel's <br />
						roundest <br />
						donuts
					</h1>
					<p className="text-white-80">Simply the best</p>
					<img
						src="/src/client/assets/images/hero-image.png"
						alt="Three tasty looking donuts"
						className="absolute bottom-0 right-0 -mr-6 w-72 transform animate-float sm:w-96"
					/>
				</div>

				<div className="relative overflow-hidden rounded-2xl bg-pink p-4">
					<div className="relative z-10">
						<h2 className="mb-1 text-white">Menu</h2>
						<p className="mb-10 text-white-80">Check out our delicious treats</p>
						<div className="flex flex-wrap gap-2">
							<a href="./menu/" className="btn primary">
								Take a looook
							</a>
						</div>
					</div>
					<div className="absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 transform">
						<img
							src="/src/client/assets/images/swirl.svg"
							alt=""
							aria-hidden="true"
							className="w-full animate-spin opacity-60"
						/>
					</div>
				</div>

				<div className="relative overflow-hidden rounded-2xl bg-turquoise p-4">
					<h2 className="mb-1 text-white">About us</h2>
					<p className="mb-10 text-white-80">Get to know us better</p>
					<div>
						<a href="./contact/" className="btn secondary">
							Contact us
						</a>
					</div>
					<div className="mt-2">
						<a href="./about/" className="btn secondary">
							The restaurant
						</a>
					</div>
					<img
						src="/src/client/assets/images/crowns.png"
						alt=""
						aria-hidden="true"
						className="absolute right-0 top-16 w-36 transform"
					/>
				</div>
			</section>
			{/* /HERO */}

			<div className="relative top-1 h-20 w-full bg-wave-pattern bg-bottom bg-repeat-x md:h-28"></div>

			{/* SERVICE */}
			<section id="service" className="bg-light-grey pt-12 md:pt-20">
				<div className="mx-auto max-w-5xl px-4">
					<h2 className="mb-1 text-orange">
						Good service, <br />
						good donuts.
					</h2>

					<div className="mt-6 grid gap-4 md:grid-cols-2">
						<div className="flex items-center gap-4 rounded-2xl bg-white p-4">
							<img
								src="/src/client/assets/icons/thumb-up.svg"
								alt=""
								aria-hidden="true"
								className="w-14 rounded-full bg-pink p-4"
							/>
							<div>
								<h3 className="mb-2 text-orange">100% Belgian</h3>
								<p className="text-light-brown">All of our donuts are sourced and cooked in belgium.</p>
							</div>
						</div>

						<div className="flex items-center gap-4 rounded-2xl bg-white p-4">
							<img
								src="/src/client/assets/icons/heart.svg"
								alt=""
								aria-hidden="true"
								className="w-14 rounded-full bg-pink p-4"
							/>
							<div>
								<h3 className="mb-2 text-orange">Fresh ingredients</h3>
								<p className="text-light-brown">We bake our products twice a day so you always have fresh donuts.</p>
							</div>
						</div>

						<div className="flex items-center gap-4 rounded-2xl bg-white p-4">
							<img
								src="/src/client/assets/icons/clock.svg"
								alt=""
								aria-hidden="true"
								className="w-14 rounded-full bg-pink p-4"
							/>
							<div>
								<h3 className="mb-2 text-orange">Fast delivery</h3>
								<p className="text-light-brown">
									With our 3 shops in Brussels, we are never more than 20 minutes away from you.
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4 rounded-2xl bg-white p-4">
							<img
								src="/src/client/assets/icons/medal.svg"
								alt=""
								aria-hidden="true"
								className="w-14 rounded-full bg-pink p-4"
							/>
							<div>
								<h3 className="mb-2 text-orange">Number 1</h3>
								<p className="text-light-brown">King Donut is the most popular donut restaurant in the world!</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* /SERVICE */}

			{/* EVENTS */}
			<section id="events" className="relative z-10 bg-light-grey pt-16 md:pt-24">
				<div className="mx-auto max-w-5xl px-4">
					<div className="relative -bottom-20 -mt-20 overflow-hidden rounded-2xl bg-orange p-4 text-center">
						<div className="mx-auto my-4 max-w-xs">
							<h2 className="mb-2 text-white">Enjoy a sweet halloween</h2>
							<p className="text-white-80">Get special halloween-themed donuts from Oct. 20th to Nov. 10th</p>
						</div>

						<div className="mx-auto max-w-lg rounded-xl">
							<img
								src="/src/client/assets/images/halloween.png"
								alt=""
								aria-hidden="true"
								className="relative -bottom-20 -mt-10"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* /EVENTS */}

			<div className="relative -top-1 z-0 h-20 w-full bg-wave-b-pattern bg-top bg-repeat-x"></div>

			{/* NEWS */}
			<section id="news" className="pt-16 md:pt-24">
				<div className="mx-auto max-w-5xl px-4">
					<h2 className="text-orange">The king's news</h2>

					<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div className="rounded-2xl border-2 border-brown-15 p-4 sm:col-span-2 lg:col-span-1">
							<img
								src="/src/client/assets/images/news-becentral.jpg"
								alt="The beCentral building"
								className="w-full rounded-md"
							/>
							<div>
								<div className="relative -top-4 -mb-8 inline-block rounded-full border-2 border-white bg-turquoise px-4 py-1 text-sm uppercase text-white">
									Shop
								</div>
								<p className="mb-2 text-light-brown">Oct. 2nd 2023</p>
								<p className="text-brown">The king is opening a new shop in the technology hub beCentral.</p>
							</div>
						</div>

						<div className="rounded-2xl border-2 border-brown-15 p-4">
							<img
								src="/src/client/assets/images/news-lion.jpg"
								alt="The beCentral building"
								className="w-full rounded-md"
							/>
							<div>
								<div className="relative -top-4 -mb-8 inline-block rounded-full border-2 border-white bg-pink px-4 py-1 text-sm uppercase text-white">
									Product
								</div>
								<p className="mb-2 text-light-brown">Sept. 22nd 2023</p>
								<p className="text-brown">A new angry donut drops for all hungry animals!</p>
							</div>
						</div>

						<div className="rounded-2xl border-2 border-brown-15 p-4">
							<img
								src="/src/client/assets/images/news-donut-day.jpg"
								alt="The beCentral building"
								className="w-full rounded-md"
							/>
							<div>
								<div className="relative -top-4 -mb-8 inline-block rounded-full border-2 border-white bg-orange px-4 py-1 text-sm uppercase text-white">
									Promo
								</div>
								<p className="mb-2 text-light-brown">Sept. 13th 2023</p>
								<p className="text-brown">Tomorrow is Donut's Day!! Come get your free donut in any King Donut.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* /NEWS */}

			<Footer />
		</>
	);
}

export default Home;
