import React from 'react';
import Customers from './Customers/Customers';
import Features from './Features/Features';
import Intro from './Intro/Intro';
import PlanAndManage from './Plan&Manage/PlanAndManage';
import Stats from './Stats/Stats';

function Main() {
  return (
    <main className="main">
      <Intro />
      <Customers />
      <PlanAndManage />
      <Features />
      <Stats />
    </main>
  );
}
export default Main;
