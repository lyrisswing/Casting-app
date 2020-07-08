import React from 'react';
import GlobalStyle from './globalStyles';
import CardCollection from './components/CardCollection/CardCollection.component';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <CardCollection />
    </div>
  );
}

export default App;