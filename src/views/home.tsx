export default function Home() {
	const handleClick = async () => {
		console.log(await window.API.test());
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
