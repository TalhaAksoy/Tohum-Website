import { Terminal, Rocket, Folder } from "lucide-react";

export default function QuickStartSection() {
	return (
		<>
			<section id="quickstart" className="w-full h-[100dvh] text-white py-12 px-6">
				<div className="max-w-[900px] mx-auto flex flex-col gap-8">
					<h2 className="text-2xl font-bold flex items-center gap-2">
						🚀 Quickstart
					</h2>

					{/* Adımlar */}
					<div className="flex flex-col gap-6">
						{/* 1. Adım */}
						<div className="bg-[#1e293b] rounded-xl p-5 border border-gray-700 shadow">
							<div className="flex items-center gap-2 mb-3">
								<Terminal className="w-5 h-5 text-yellow-400"/>
								<span className="font-semibold">Install</span>
							</div>
							<pre className="bg-[#0f172a] p-3 rounded-lg text-sm overflow-x-auto">
							cargo install tohum
						</pre>
						</div>

						{/* 2. Adım */}
						<div className="bg-[#1e293b] rounded-xl p-5 border border-gray-700 shadow">
							<div className="flex items-center gap-2 mb-3">
								<Folder className="w-5 h-5 text-blue-400"/>
								<span className="font-semibold">List Templates</span>
							</div>
							<pre className="bg-[#0f172a] p-3 rounded-lg text-sm overflow-x-auto">
							tohum store list
						</pre>
						</div>

						{/* 3. Adım */}
						<div className="bg-[#1e293b] rounded-xl p-5 border border-gray-700 shadow">
							<div className="flex items-center gap-2 mb-3">
								<Rocket className="w-5 h-5 text-green-400"/>
								<span className="font-semibold">Initialize</span>
							</div>
							<pre className="bg-[#0f172a] p-3 rounded-lg text-sm overflow-x-auto">
							tohum init node/react my-app
						</pre>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}