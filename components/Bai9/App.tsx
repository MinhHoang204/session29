import React, { useState } from 'react';
import ListProduct from '../Bai8/ListProduct';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'english' | 'vietnamese'>('english');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'vietnamese' : 'english'));
  };

  return (
    <div className={theme}>
      <header>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
        <button onClick={toggleLanguage}>
          Switch to {language === 'english' ? 'vietnamese' : 'english'}
        </button>
      </header>
      <h1>{language === 'english' ? 'Product List' : 'Danh sách sản phẩm'}</h1>
      <ListProduct />
    </div>
  );
};

export default App;