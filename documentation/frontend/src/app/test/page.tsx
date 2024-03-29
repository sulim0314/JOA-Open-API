"use client";
import tw from "tailwind-styled-components";
import { useState } from "react";
import { JoinMemberParams, JoinMemberResponse } from "./components/api";
import { postAxios } from "./components/http-common";

const Home = () => {

  const [formData, setFormData] = useState<JoinMemberParams>({
    name: "김김",
    email: "asd@asdas.com",
    phone: "00013131313",
    password: "1234",
    bankId: "bdbbfe2c-dc15-4c85-8706-dac0299e7ff6"
  });

  const joinMember = async (data: JoinMemberParams): Promise<JoinMemberResponse> => {
    console.log("여기 들어오나");
    const url = "member";
    console.log(formData.name);
    const response = await postAxios(url, data);
    return response.data;
  };

  return (
    <>
      <Wrapper>
        <MainContainer>
          <SubContainer>
            <MainTitleItem>Joa Open API</MainTitleItem>
            <MainTextItem>

              <form onSubmit={() => joinMember}>

            <ButtonContainer>
              <button type="submit">시작하기</button>
            </ButtonContainer>
            </form>
            </MainTextItem>
            <MainTextItem>

            </MainTextItem>
          </SubContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = tw.div`
pt-24
`;

const MainContainer = tw.div`
mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2
`;

const SubContainer = tw.div`
lg:pr-8 lg:pt-12
`;

const MainTitleItem = tw.h2`
mt-2 text-3xl font-bold tracking-tight sm:text-4xl 
`;

const MainTextItem = tw.div`
mt-6 leading-7 break-keep
`;

const ButtonContainer = tw.div`
mt-2 py-6
`;

const PurpleButtonItem = tw.a`
py-3 px-7 text-xs bg-purple-300 hover:bg-purple-500 text-white w-full transition ease-in duration-200 
text-center font-semibold shadow-md focus:ring-2 focus:ring-offset-2 rounded-full
`;