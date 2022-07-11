import React from 'react';
import { SideNav,CreatePost,Header, RightNav } from '../Components/index';

export const Home = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <CreatePost />
      <RightNav />
    </div>
  )
}
