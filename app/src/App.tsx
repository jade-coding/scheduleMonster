import React from 'react';
import GlobalStyle from './components/layout/globalStyle';
import { OAuth } from './pages/Login/OAuth';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <OAuth />
      </div>
    </>
  );
}

export default App;
