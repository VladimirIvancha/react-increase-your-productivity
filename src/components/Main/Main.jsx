import React from 'react';
import Blog from './Blog/Blog';
import Customers from './Customers/Customers';
import Faq from './Faq/Faq';
import Features from './Features/Features';
import GetStarted from './GetStarted/GetStarted';
import Intro from './Intro/Intro';
import Newsletter from './Newsletter/Newsletter';
import PlanAndManage from './Plan&Manage/PlanAndManage';
import Quotes from './Quotes/Quotes';
import Stats from './Stats/Stats';

function Main() {
  return (
    <main className="main" id="main">
      <Intro />
      <Customers />
      <PlanAndManage />
      <Features />
      <Stats />
      <Blog />
      <Quotes />
      <Faq />
      <GetStarted />
      <Newsletter />
    </main>
  );
}
export default Main;
