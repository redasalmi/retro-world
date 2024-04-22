import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex h-screen justify-center items-center">
              <h1 className="text-2xl">Hello React!</h1>
            </div>
          }
        />
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
);
