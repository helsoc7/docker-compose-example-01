import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
 const [backendMessage, setBackendMessage] = useState('');
useEffect(() => {
 fetch('http://localhost:4000/api')
 .then(response => response.json())
 .then(data => setBackendMessage(data.message))
 .catch(err => console.error('Error: ', err));
 }, []);
return (
 <div>
 <p>Message from Backend: {backendMessage}</p>
 </div>
 );
 }
export default App;