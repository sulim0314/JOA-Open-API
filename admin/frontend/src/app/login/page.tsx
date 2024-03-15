import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <>
      <Wrapper>
        <TitleContainer>
          <TitleText>
            Admin
          </TitleText>
        </TitleContainer>
        <MainContainer>
          <LoginFormContainer className="space-y-6" action="#" method="POST">
            <InputFormWrapper>
              <LoginLabel
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray"
              >
                이메일
              </LoginLabel>
              <InputContainer className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </InputContainer>
            </InputFormWrapper>

            <div>
              <div className="flex items-center justify-between">
                <LoginLabel
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-500"
                >
                  비밀번호
                </LoginLabel>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-gray-500 hover:text-pink-400"
                  >
                    비밀번호 찾기
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <div>
              <Button type="submit">로그인</Button>
            </div>
          </LoginFormContainer>

          <p className="mt-10 text-center text-sm text-gray-light">
            계정이 없으십니까?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-gray-500 hover:text-primary"
            >
              회원가입
            </a>
          </p>
        </MainContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`
flex 
min-h-full 
flex-1 
flex-col 
justify-center 
px-6 py-12 
lg:px-8
`;

const MainContainer = tw.div`
mt-10 
sm:mx-auto 
sm:w-full 
sm:max-w-sm
`;

const TitleContainer = tw.div`
sm:mx-auto 
sm:w-full 
sm:max-w-sm
`;

const InputFormWrapper = tw.div`
`;

const InputContainer = tw.div`

`;

const TitleText = tw.h2`
mt-10 
text-center 
text-2xl 
font-bold 
leading-9 
tracking-tight 
text-primary-900
`;

const FormContainer = tw.div`
`;

const LoginFormContainer = tw.form`
`;

const LoginLabel = tw.label`
`;

const FindPW = tw.a`
`;

const SignUpContainer = tw.p`
`;

const Input = tw.input`
block 
w-full 
rounded-md 
border-0 
px-1.5
py-1.5
text-gray-700
ring-1
ring-inset 
ring-gray-300 
placeholder:text-gray-400 
focus:outline-none
focus:ring-2 
focus:ring-inset 
focus:ring-pink-500 
sm:text-sm 
sm:leading-6
`;

const Button = tw.button`
flex
w-full 
justify-center 
rounded-md 
bg-pink-400
px-3 
py-1.5 
text-sm 
font-semibold
leading-6
text-white
shadow-sm
hover:bg-pink-500
focus-visible:outline
focus-visible:outline-2
focus-visible:outline-offset-2 
focus-visible:outline-pink-600
`;
