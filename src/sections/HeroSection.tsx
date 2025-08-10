import logo from "/tohumLogo_BetterQuality_256_x_256.svg";
import windowsLogo from "/brandLogo/windowsLogo.svg";
import linuxLogo from "/brandLogo/linuxLogo.svg";
import appleLogo from "/brandLogo/appleLogo.svg";
import { BadgeCheck, ChevronDown, Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
	const kbdRef = useRef<HTMLDivElement>(null);
	const [getTextAnimationState, setTextAnimationState] = useState<boolean>(false);

	const handleCopyBtnClick = () => {
		navigator.clipboard.writeText("cargo install tohum").then(() => {
			toast.custom((t) => (
				<div
					onClick={() => toast.dismiss(t.id)}
					className={`${
						t.visible ? "animate-enter" : "animate-leave"
					} w-fit bg-gray-800/70 text-white h-12 rounded-lg flex items-center px-3 gap-x-2 select-none cursor-pointer shadow-md`}
				>
					<kbd className="text-sm sm:text-base">Copy Success</kbd>
					<BadgeCheck className="w-5 h-5" />
				</div>
			));
		});
	};

	useEffect(() => {
		if (!kbdRef.current) return;

		const text = "cargo install tohum";
		let index = 0;

		const interval = setInterval(() => {
			if (!kbdRef.current) return;
			if (kbdRef.current.innerText.length > 20) return;

			kbdRef.current.innerText += text[index] === " " ? "\u00A0" : text[index];
			index++;
			if (index >= text.length) {
				clearInterval(interval);
				setTextAnimationState(true);
			}
		}, 100);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{/* First Page */}
				<div id="hero" className="w-full h-[100dvh] min-h-screen flex justify-center items-center relative snap-start">
					<div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-y-6 lg:gap-y-0 lg:gap-x-6 px-4 sm:px-6">
						{/* Right block (title + platforms + cmd) */}
						<div className="flex flex-col items-center lg:items-end w-full lg:w-auto gap-y-3 sm:gap-y-4">
            <span className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white text-jetbrains-bold select-none leading-none">
              TOHUM
            </span>

							{/* Available Platform Logos */}
							<div className="flex flex-wrap justify-center lg:justify-end items-center gap-2 sm:gap-3 select-none">
              <span className="text-xs sm:text-sm md:text-base text-jetbrains-thin font-thin text-white mr-1">
                Available On
              </span>
								<div className="flex size-10 sm:size-12 justify-center items-center bg-white rounded-full">
									<img src={appleLogo} alt="Apple" className="w-6 h-6 sm:w-8 sm:h-8" />
								</div>
								<div className="flex size-10 sm:size-12 justify-center items-center bg-white rounded-full">
									<img src={windowsLogo} alt="Windows" className="w-6 h-6 sm:w-8 sm:h-8" />
								</div>
								<div className="flex size-10 sm:size-12 justify-center items-center bg-white rounded-full">
									<img src={linuxLogo} alt="Linux" className="w-6 h-6 sm:w-8 sm:h-8" />
								</div>
							</div>
							{/* Command box */}
							<div className="w-full max-w-[90vw] sm:max-w-none bg-gray-800/60 backdrop-blur text-white h-12 rounded-lg flex items-center px-2 sm:px-3 gap-x-2">
								<div className="flex items-center justify-center h-full">
									<kbd
										ref={kbdRef}
										className="text-sm sm:text-base font-mono tracking-tight"
										aria-label="Install command"
									>
										{"\u00A0"}
									</kbd>
									{!getTextAnimationState ? (
										<div className="h-1/2 w-[2px] bg-white animate-blink ml-1" />
									) : null}
								</div>
								<button
									onClick={handleCopyBtnClick}
									className="ml-auto bg-[#222222] border border-white/10 px-3 py-2 rounded-md transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
									aria-label="Copy command"
								>
									<Copy className="w-5 h-5 sm:w-6 sm:h-6" />
								</button>
							</div>
						</div>

						{/* Left block (logo) */}
						<img
							src={logo}
							alt="Tohum logo"
							className="select-none w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
						/>
					</div>

					{/* Scroll down chevron */}
					<button
						aria-label="Scroll to next section"
						className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white"
					>
						<ChevronDown className="w-10 h-10 sm:w-12 sm:h-12 motion-safe:animate-bounce" />
					</button>
				</div>
				{/* First Page */}
		</>
	);
};

export default HeroSection;
