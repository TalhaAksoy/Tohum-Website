import { motion } from "framer-motion";
import { LayoutGrid, Box, Play, Scroll } from "lucide-react";
import { useMemo, useState, useEffect, useRef } from "react";

export default function Sidebar() {
	const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
	const [active, setActive] = useState<number>(0);

	// Scroll sırasında observer'ı geçici devre dışı bırakmak için kilit
	const lockRef = useRef(false);

	const sectionIds = ["hero", "features", "quickstart", "availableTemplates"] as const;

	const scrollToId = (id: string) => {
		const el = document.getElementById(id);
		if (!el) return;
		lockRef.current = true;                 // tıklama kaynaklı scroll: observer'ı kilitle
		el.scrollIntoView({ behavior: "smooth", block: "start" });
		setTimeout(() => (lockRef.current = false), 900); // smooth scroll bitince aç
	};

	const items = useMemo(
		() => [
			{ icon: <LayoutGrid className="w-1/2 h-1/2" color="white" />, onClick: () => scrollToId("hero") },
			{ icon: <Box className="w-1/2 h-1/2" color="white" />,         onClick: () => scrollToId("features") },
			{ icon: <Play className="w-1/2 h-1/2" color="white" />,        onClick: () => scrollToId("quickstart") },
			{ icon: <Scroll className="w-1/2 h-1/2" color="white" />,      onClick: () => scrollToId("availableTemplates") },
		],
		[]
	);

	// Sayfa içi scroll ile aktif sekmeyi güncelle
	useEffect(() => {
		const els = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean) as HTMLElement[];

		if (!els.length) return;

		// viewport ortasına yakın olanı “aktif” saysın diye rootMargin kullandık
		const io = new IntersectionObserver(
			(entries) => {
				if (lockRef.current) return;

				// şu an görünür olanlar içinde en yüksek oranlıyı seç
				let bestId: string | null = null;
				let bestRatio = 0;

				for (const e of entries) {
					if (e.isIntersecting && e.intersectionRatio >= bestRatio) {
						bestRatio = e.intersectionRatio;
						bestId = (e.target as HTMLElement).id;
					}
				}

				if (bestId) {
					const idx = sectionIds.indexOf(bestId as (typeof sectionIds)[number]);
					if (idx !== -1) setActive(idx);
				}
			},
			{
				root: null,                           // window scroll
				rootMargin: "-40% 0px -40% 0px",      // ortayı baz alır (üst-alt %40 boşluk)
				threshold: [0, 0.25, 0.5, 0.75, 1],
			}
		);

		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);

	return (
		<nav
			className={`
        fixed inset-x-0 bottom-0 z-60 h-14
        flex flex-row justify-evenly items-center sm:bg-transparent bg-[#1F2B3E]
        pb-[env(safe-area-inset-bottom)]
        sm:top-0 sm:left-0 sm:bottom-auto sm:w-24 sm:h-screen sm:flex-col sm:justify-evenly sm:pb-0
      `}
		>
			{items.map((it, i) => (
				<motion.button
					key={i}
					type="button"
					initial={isMobile ? { y: "150%" } : { x: "-150%" }}
					animate={{ x: 0, y: 0 }}
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.5, delay: i * 0.3 }}
					onClick={(e) => {
						e.preventDefault();
						setActive(i);  // anında görsel geri bildirim
						it.onClick();
					}}
					className={`
            relative size-10 sm:size-16
            bg-[#1F2B3E] border border-[#4d648d] rounded-lg
            flex items-center justify-center
            focus:outline-none
          `}
				>
					{active === i && (
						<motion.div
							layoutId="activeIndicator"
							className="absolute inset-0 rounded-lg border-2 border-white/90 bg-transparent pointer-events-none"
							transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.6 }}
						/>
					)}
					{it.icon}
				</motion.button>
			))}
		</nav>
	);
}
