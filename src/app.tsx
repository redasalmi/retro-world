import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home';

declare global {
	interface Window {
		API: {
			test: () => Promise<void>;
		};
	}
}

ReactDOM.createRoot(document.querySelector('#app')).render(
	<React.StrictMode>
		<MemoryRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</MemoryRouter>
	</React.StrictMode>,
);
