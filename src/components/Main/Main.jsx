import React from 'react';
import Blog from './Blog/Blog';
import Customers from './Customers/Customers';
import Features from './Features/Features';
import Intro from './Intro/Intro';
import PlanAndManage from './Plan&Manage/PlanAndManage';
import Quotes from './Quotes/Quotes';
import Stats from './Stats/Stats';

function Main() {
  return (
    <main className="main">
      <Intro />
      <Customers />
      <PlanAndManage />
      <Features />
      <Stats />
      <Blog />
      <Quotes />
    </main>
  );
}
export default Main;
