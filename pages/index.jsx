import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Confetti from 'react-confetti';
// components
import Header from '../components/Header';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
// styles
import '../public/css/main.css';

const Index = () => {
  const [articleId, setArticleId] = useState(null);
  const [articleActive, setArticleActive] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [confettiActive, setConfettiActive] = useState(0);

  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    setHeight(innerHeight);
    setWidth(innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = id => {
    if (id) {
      setArticleId(id);
      setArticleActive(true);
    } else {
      setArticleActive(false);
      setArticleId(null);
    }
  };

  const toggleConfetti = () => {
    return !confettiActive ? setConfettiActive(150) : setConfettiActive(0);
  };

  return (
    <div>
      <Head>
        <title>James & Su-Zen’s Wedding</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <noscript>
          <link rel="stylesheet" href="/css/noscript.css" />
        </noscript>
      </Head>
      <Confetti height={height} width={width} numberOfPieces={confettiActive} />
      <div id="wrapper">
        <Header onNavClick={handleClick} hidden={!!articleId} />
        <Articles displayId={articleId} active={articleActive} onClose={() => handleClick(null)} />
        <Footer onConfettiClick={toggleConfetti} confetti={!!confettiActive} />
      </div>
      <div id="bg" />
    </div>
  );
};

export default Index;
