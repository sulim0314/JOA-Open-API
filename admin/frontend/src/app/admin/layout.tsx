"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Suspense } from "react";
import tw from "tailwind-styled-components";

export default function Admin({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Wrapper>
        <Header />
        <MainContainer>
          <Sidebar />
          <AdminContainer>
            <Children>{children}</Children>
          </AdminContainer>
        </MainContainer>
      </Wrapper>
    </Suspense>
  );
}

const Wrapper = tw.div`
flex
flex-col
h-screen
max-h-screen
w-full
`;

const MainContainer = tw.div`
flex
flex-grow
w-full
transition-all
overflow-hidden
`;

const AdminContainer = tw.div`
flex-grow
flex
flex-col
w-full
overflow-y-scroll
scrollbar-hide
`;

const Children = tw.div`
flex-grow
p-14
pt-0
`;
