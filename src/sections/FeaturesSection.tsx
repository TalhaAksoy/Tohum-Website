import {BadgeCheck, Disc, FileSliders, ShoppingBag, Waypoints} from "lucide-react";

export default function FeaturesSection() {
	return (
		<>
			<section id="features" className={'w-full h-[100dvh] overflow-y-auto pb-16 sm:pb-0'}>
				<div className="max-w-[1200px] mx-auto h-full px-6 flex flex-col justify-evenly pb-0 sm:pb-14">
					<div className="text-center">
						<h2 className="text-[clamp(2rem,4vw,2.5rem)] font-bold text-card-text-color">Features</h2>
						<p className="text-lg text-card-text-secondary max-w-[600px] mx-auto">
							Powerful features that make project initialization effortless
						</p>
					</div>
					<div className={` w-full flex-1 relative`}>
						<div className={`absolute inset-0 overflow-y-auto`}>
							<div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] p-1">
								<div className="text-center p-6 bg-card-background border border-card-border-color rounded-2xl transition
                  hover:-translate-y-1 hover:shadow-lg hover:border-card-hover-border-color">
									<div className="text-[2.5rem] mb-4">
										<img src="/public/brandLogo/rust_logo.svg" alt="Rust" className="w-10 h-10 object-contain inline-block"/>
									</div>
									<h3 className="text-xl font-semibold text-card-text-color">Lightning Fast</h3>
									<p className="mt-2 text-card-text-secondary">
										Bootstrap new projects in seconds, not minutes. tohum is built
										with Rust for maximum performance.
									</p>
								</div>

								<div className="text-center p-6 bg-card-background border border-card-border-color rounded-2xl transition
                  hover:-translate-y-1 hover:shadow-lg hover:border-card-hover-border-color">
									<div className="text-[2.5rem] mb-4">
										<ShoppingBag className="w-10 h-10 inline-block" color={'white'}/>
									</div>
									<h3 className="text-xl font-semibold text-card-text-color">Template Stores</h3>
									<p className="mt-2 text-card-text-secondary">
										Organize templates in stores for easy discovery. Use the official
										store or create your own custom stores for teams and
										organizations.
									</p>
								</div>

								<div className="text-center p-6 bg-card-background border border-card-border-color rounded-2xl transition
                  hover:-translate-y-1 hover:shadow-lg hover:border-card-hover-border-color">
									<div className="text-[2.5rem] mb-4">
										<BadgeCheck className="w-10 h-10 inline-block" color={'white'} />
									</div>
									<h3 className="text-xl font-semibold text-card-text-color">Different Sources</h3>
									<p className="mt-2 text-card-text-secondary">
										Templates can be stored anywhere - Git repositories, local paths,
										template stores, or any remote location.
									</p>
								</div>

								<div className="text-center p-6 bg-card-background border border-card-border-color rounded-2xl transition
                  hover:-translate-y-1 hover:shadow-lg hover:border-card-hover-border-color">
									<div className="text-[2.5rem] mb-4">
										<Disc className="w-10 h-10 inline-block" color={'white'} />
									</div>
									<h3 className="text-xl font-semibold text-card-text-color">Cross-Platform</h3>
									<p className="mt-2 text-card-text-secondary">
										Works seamlessly on Linux, macOS, and Windows. Install via Cargo,
										Nix, or build from source.
									</p>
								</div>

								<div className="text-center p-6 bg-card-background border border-card-border-color rounded-2xl transition
                  hover:-translate-y-1 hover:shadow-lg hover:border-card-hover-border-color">
									<div className="text-[2.5rem] mb-4">
										<Waypoints className="w-10 h-10 inline-block" color={'white'} />
									</div>
									<h3 className="text-xl font-semibold text-card-text-color">Proxy</h3>
									<p className="mt-2 text-card-text-secondary">
										Templates can be configured to act as a proxy for other
										provisioning tools such as <code
										className="font-mono text-[0.875rem] bg-card-background px-1 py-0.5 rounded border border-card-border-color">npm
										init</code> or
										<code
											className="font-mono text-[0.875rem] bg-card-background px-1 py-0.5 rounded border border-card-border-color">cargo
											init</code>. Unify your project setup workflow.
									</p>
								</div>

								<div className="text-center p-6 bg-card-background border border-card-border-color rounded-2xl transition
                  hover:-translate-y-1 hover:shadow-lg hover:border-card-hover-border-color">
									<div className="text-[2.5rem] mb-4">
										<FileSliders className="w-10 h-10 inline-block" color={'white'} />
									</div>
									<h3 className="text-xl font-semibold text-card-text-color">Configurable Templates</h3>
									<p className="mt-2 text-card-text-secondary">
										Templates support configurations. You can customize them based on
										requirements of your project.
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	)
};