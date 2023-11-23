import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
	return (
		<>
			<Header />

			{/* HERO */}
			<section className="relative z-10 pt-28 md:pt-32">
				<div className="mx-auto max-w-5xl px-4">
					<div className="relative -bottom-20 -mt-20 overflow-hidden rounded-2xl bg-orange p-4 sm:flex">
						<div className="mx-auto max-w-sm py-4 text-center sm:flex sm:max-w-none sm:flex-col sm:justify-between sm:py-0 sm:pr-12 sm:text-left">
							<h1 className="mb-2 text-white">Some information about us</h1>
							<p className="text-white-80">We should get to know each other</p>
						</div>
						<div className="mt-10 h-60 w-full sm:mt-0 sm:h-96">
							<img
								src="/src/client/assets/images/shop.jpg"
								alt="Picture of the inside of our first shop"
								className="h-full w-full rounded-md object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* /HERO */}

			<div className="relative top-1 h-4 w-full bg-wave-pattern bg-bottom bg-repeat-x"></div>

			{/* SHOPS */}
			<section className="relative bg-light-grey pb-20 pt-32 md:pt-40">
				<div className="mx-auto max-w-5xl px-4">
					<h2 className="mb-1 text-orange">Our shops</h2>

					<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div className="flex flex-col rounded-2xl bg-white p-4 sm:col-span-2 lg:col-span-1">
							<img
								src="/src/client/assets/images/news-becentral.jpg"
								alt="The beCentral building"
								className="h-48 w-full rounded-md object-cover sm:h-80 lg:h-48"
							/>
							<div className="mt-4 flex h-full flex-1 flex-col justify-between">
								<div>
									<h3>BeCentral</h3>
									<p className="my-2 text-base text-brown">Kantersteen 12, 1000 Brussels</p>
								</div>
								<div className="flex justify-between">
									<div className="flex flex-col text-base text-brown">
										<span>Mon. – Fri.</span>
										<span>Sat.</span>
										<span>Sun.</span>
									</div>
									<div className="flex flex-col items-end text-base text-light-brown">
										<span>10:00 – 18:00</span>
										<span>10:00 – 20:00</span>
										<span>9:00 – 16:00</span>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col rounded-2xl bg-white p-4">
							<img
								src="/src/client/assets/images/cinquantenaire.jpg"
								alt="The Cinquantenaire parc"
								className="h-48 w-full rounded-md object-cover"
							/>
							<div className="mt-4 flex h-full flex-1 flex-col justify-between">
								<h3>Cinquantenaire</h3>
								<p className="my-2 text-base text-brown">Avenue de la renaissance, 1000 Brussels</p>
								<div className="mt-4 flex justify-between">
									<div className="flex flex-col text-base text-brown">
										<span>Mon. – Fri.</span>
										<span>Sat.</span>
										<span>Sun.</span>
									</div>
									<div className="flex flex-col items-end text-base text-light-brown">
										<span>10:00 – 19:00</span>
										<span>10:00 – 22:00</span>
										<span>12:00 – 18:00</span>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col rounded-2xl bg-white p-4">
							<img
								src="/src/client/assets/images/atomium.jpg"
								alt="The Atomium"
								className="h-48 w-full rounded-md object-cover"
							/>
							<div className="mt-4 flex h-full flex-1 flex-col justify-between">
								<h3>Atomium</h3>
								<p className="my-2 text-base text-brown">Place de l'Atomium 1, B-1020 Brussels</p>
								<div className="mt-4 flex justify-between">
									<div className="flex flex-col text-base text-brown">
										<span>Mon. – Fri.</span>
										<span>Sat.</span>
										<span>Sun.</span>
									</div>
									<div className="flex flex-col items-end text-base text-light-brown">
										<span>10:00 – 18:00</span>
										<span>8:00 – 20:00</span>
										<span>8:00 – 20:00</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* MAP */}
					<div className="relative mt-16 w-full overflow-hidden rounded-xl border-8 border-white">
						<iframe
							src="https://www.google.com/maps/d/u/0/embed?mid=18aFM2NAHemYxV-MkjyPWyE6V2Era88Y&ehbc=2E312F&noprof=1"
							width="100%"
							height="100%"
							className="relative -top-12 -mb-12 h-96 sm:h-[500px]"></iframe>
					</div>
					{/* /MAP */}
				</div>
			</section>
			{/* /SHOPS */}

			<div className="relative -top-1 z-0 h-4 w-full bg-wave-b-pattern bg-top bg-repeat-x"></div>

			<Footer />
		</>
	);
}

export default About;
