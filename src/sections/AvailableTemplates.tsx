import {useState} from "react";

type TemplateItem = {
	id: string;
	icon: React.ReactNode;
	name: string;
	description: string;
	command: string;
};

export default function AvailableTemplates({
	                                           items,
	                                           title = "Available Templates",
	                                           subtitle = "Some of the ready-to-use templates for popular frameworks and languages",
                                           }: {
	items: TemplateItem[];
	title?: string;
	subtitle?: string;
}) {
	const [copiedId, setCopiedId] = useState<string | null>(null);

	const copy = async (cmd: string, id: string) => {
		try {
			await navigator.clipboard.writeText(cmd);
			setCopiedId(id);
			setTimeout(() => setCopiedId(null), 1200);
		} catch {
		}
	};

	return (
		<section id={"availableTemplates"} className="w-full h-[100dvh] flex items-center justify-center">
			<div className="max-w-[1200px] w-full mx-auto">
				<header className="text-center mb-8">
					<h2 className="text-3xl font-bold text-card-text-color">{title}</h2>
					<p className="text-card-text-secondary">{subtitle}</p>
				</header>

				{/* Basit liste */}
				<ul className="flex flex-col gap-4">
					{items.map((t) => (
						<li
							key={t.id}
							className="
                bg-card-background border border-card-border-color rounded-xl
                p-4 flex items-start gap-3
              "
						>
							<div className="shrink-0 text-2xl leading-none mt-0.5">
								{t.icon}
							</div>

							<div className="min-w-0 flex-1">
								<div className="font-mono text-lg font-semibold text-green-400 break-words">
									{t.name}
								</div>
								<p className="text-card-text-secondary text-sm mt-1">
									{t.description}
								</p>

								<div
									className="
                    mt-3 flex items-center gap-2
                    bg-[rgba(255,255,255,0.02)]
                    border border-card-border-color rounded-lg
                    px-3 py-2
                  "
								>
									<code className="font-mono text-sm text-card-text-color whitespace-pre-wrap break-all">
										{t.command}
									</code>
									<button
										onClick={() => copy(t.command, t.id)}
										className="
                      ml-auto text-xs px-2 py-1 rounded-md
                      bg-green-600 text-white hover:bg-green-700
                      active:scale-95 transition
                    "
									>
										{copiedId === t.id ? "Copied" : "Copy"}
									</button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}