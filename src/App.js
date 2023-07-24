import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';
import AuthProvider from './context/AuthContext';  // <-- Importing the AuthProvider context

function App() {
  return (
    <div className="App">
      <AuthProvider> {/* Wrapping the components with the AuthProvider */}
        <NavbarComp/>
      </AuthProvider>
    </div>
  );
}

export default App;
