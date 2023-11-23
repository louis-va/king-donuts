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
					<div className="relative -bottom-20 -mt-20 overflow-hidden rounded-2xl bg-turquoise p-4 sm:flex">
						<div className="mx-auto max-w-sm py-4 text-center sm:flex sm:max-w-none sm:flex-col sm:justify-between sm:py-0 sm:pr-12 sm:text-left">
							<h1 className="mb-2 text-white">Any questions? Contact us!</h1>
							<p className="text-white-80">Promess we won't ghost you</p>
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

			{/* FORM */}
			<section className="relative bg-light-grey pb-20 pt-32 md:pt-40">
				<div className="mx-auto max-w-5xl px-4">
					<h2 className="mb-1 text-orange">Send an email</h2>

					<div className="px-4 py-6 rounded-2xl bg-white mt-8 border-4 border-orange border-dashed">
						<form action="#" className="grid sm:grid-cols-2 gap-4">
							<label className="block">
								<span className="text-light-brown">Firstname</span>
								<input
									type="text"
									className="text-brown mt-1 block w-full rounded-md border-2 border-grey focus:ring-1 focus:ring-orange focus:border-orange"
									placeholder=""
								/>
							</label>
							<label className="block">
								<span className="text-light-brown">Lastname</span>
								<input
									type="text"
									className="text-brown mt-1 block w-full rounded-md border-2 border-grey focus:ring-1 focus:ring-orange focus:border-orange"
									placeholder=""
								/>
							</label>
							<label className="block">
								<span className="text-light-brown">Email</span>
								<input
									type="text"
									className="text-brown mt-1 block w-full rounded-md border-2 border-grey focus:ring-1 focus:ring-orange focus:border-orange"
									placeholder=""
								/>
							</label>
							<label className="block">
								<span className="text-light-brown">Type of message</span>
								<select className="text-brown mt-1 block w-full rounded-md border-2 border-grey focus:ring-1 focus:ring-orange focus:border-orange">
									<option>Reservation</option>
									<option>Complain</option>
									<option>Suggestion</option>
									<option>Other</option>
								</select>
							</label>
							<label className="block col-span-1 sm:col-span-2">
								<span className="text-light-brown">Message</span>
								<textarea
									className="text-brown mt-1 block w-full rounded-md border-2 border-grey focus:ring-1 focus:ring-orange focus:border-orange"
									rows="4"></textarea>
							</label>
							<div className="block col-span-1 sm:col-span-2">
								<div className="mt-2">
									<div>
										<label className="inline-flex items-center">
											<input
												type="checkbox"
												className="rounded border-2 border-grey focus:ring-1 bg-white focus:bg-white focus:ring-orange focus:border-orange focus:ring-offset-0 text-orange"
											/>
											<span className="ml-2">I am not a donut-eating robot</span>
										</label>
									</div>
								</div>
							</div>
							<div className="block mt-2 col-span-1 sm:col-span-2">
								<button className="btn orange" type="submit">
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			{/* /FORM */}

			<div className="relative -top-1 z-0 h-4 w-full bg-wave-b-pattern bg-top bg-repeat-x"></div>

			<Footer />
		</>
	);
}

export default About;
