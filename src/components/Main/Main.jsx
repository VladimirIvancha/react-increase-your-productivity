import React from 'react';
import Customers from './Customers/Customers';
import Intro from './Intro/Intro';
import PlanAndManage from './Plan&Manage/PlanAndManage';

function Main() {
  return (
    <main className="main">
      <Intro />
      <Customers />
      <PlanAndManage />
    </main>
  );
}
export default Main;
