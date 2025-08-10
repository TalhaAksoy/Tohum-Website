import {AnimatedBackground} from "animated-backgrounds";
import HeroSection from "./sections/HeroSection.tsx";
import FeaturesSection from "./sections/FeaturesSection.tsx";
import Sidebar from "./components/Sidebar.tsx";
import QuickStartSection from "./sections/QuickStartSection.tsx";
import AvailableTemplates from "./sections/AvailableTemplates.tsx";

const App = () => {
	return (
		<>
			<Sidebar/>
			<main className="w-full min-h-screen flex flex-col justify-center items-center">
				<AnimatedBackground
					animationName="cosmicDust"
					theme="landing"
					adaptivePerformance={true}
					interactionConfig={{
						effect: "attract", // 'attract', 'repel', 'follow', 'burst'
						strength: 0.8, // 0-1
						radius: 150, // pixels
						continuous: true, // keep effect after mouse leaves
					}}
				/>
				<HeroSection/>
				<FeaturesSection/>
				<QuickStartSection/>
				<AvailableTemplates
					items={[
						{
							id: "go-cli",
							icon: <span className="text-sky-400">GO</span>,
							name: "go/cli",
							description: "basic CLI application setup",
							command: "tohum init go/cli my-cli",
						},
						{
							id: "node-cli-ts",
							icon: <span className="text-sky-400">TS</span>,
							name: "node/cli/ts",
							description: "CLI project with TypeScript and tsup",
							command: "tohum init node/cli/ts my-tool",
						},
						{
							id: "node-react",
							icon: <span className="text-sky-400">RC</span>,
							name: "node/react",
							description: "React project with TypeScript and Vite",
							command: "tohum init node/react my-app",
						},
					]}
				/>
			</main>
		</>
	);
};

export default App;
