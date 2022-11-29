import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from './Store/Context';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlePage from './Pages/ArticlePage';
import SearchPage from './Pages/SearchPage';
import MailPage from './Pages/MailPage';
import BlogPage from './Pages/BlogPage';

export const ContextApi = React.createContext();

function App()
{
  const [state, dispatch] = Context();
  return (
    <ContextApi.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="articles" element={<ArticlePage />} />
          <Route path="articles/:id" element={<BlogPage/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="articles/search/" element={<SearchPage />} />
          <Route path="mail" element={<MailPage />} />
        </Routes>
      </BrowserRouter>
    </ContextApi.Provider>
  );
}

export default App;

