import React from 'react';
import { createRoot } from 'react-dom/client';
// StyleSheet
import './index.scss';
// Component
import App from "./App"
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />)