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
            <div>
              <h1>Hello React!</h1>
            </div>
          }
        />
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
);
