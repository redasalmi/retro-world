import { createRoot } from 'react-dom/client';

const app = document.querySelector('#app');
const root = createRoot(app);
root.render(<h2>Hello from React!</h2>);
