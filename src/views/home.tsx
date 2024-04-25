import { emulators } from '../lib/emulators';

export default function Home() {
	const handleClick = async () => {
		const isInstalled = await window.API.isEmulatorInstalled(
			emulators.sony.playstation1[0],
		);
		console.log({ isInstalled });
	};

	return (
		<div className="flex h-screen items-center justify-center">
			<h1 className="text-2xl">Hello React!</h1>
			<button type="button" onClick={handleClick}>
				TEST
			</button>
		</div>
	);
}
