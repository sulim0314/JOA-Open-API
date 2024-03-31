interface Item {
  id: number;
  title: string;
  to?: string; //선택
}

const bankItems: Item[] = [
  { id: 1, title: '은행 생성', to: '' },
  { id: 2, title: '은행 정보 조회', to: '' },
  { id: 3, title: '은행 정보 수정', to: '' },
  { id: 4, title: '은행 목록 조회/검색 ', to: '' },
  { id: 5, title: '은행 삭제', to: '' },
];

const memberItems: Item[] = [
  { id: 1, title: '고객 가입', to: '' },
  { id: 2, title: '이메일 중복 검사', to: '' },
  { id: 3, title: '전화번호 중복 검사', to: '' },
  { id: 4, title: '전화번호 중복 검사', to: '' },
  { id: 5, title: '고객 내 정보 조회', to: '' },
  { id: 6, title: '고객 정보 조회', to: '' },
  { id: 7, title: '고객 내 정보 수정', to: '' },
  { id: 8, title: '고객 정보 수정', to: '' },
  { id: 9, title: '고객 목록 조회/검색 ', to: '' },
  { id: 10, title: '고객 탈퇴', to: '' },
];

const productItems: Item[] = [
  { id: 1, title: '예적금상품 생성', to: '' },
  { id: 2, title: '예적금상품 정보 조회', to: '' },
  { id: 3, title: '예적금상품 종료', to: '' },
  { id: 4, title: '예적금상품 목록 조회/검색', to: '' },
  { id: 5, title: '예적금상품 삭제', to: '' },
];

const accountItems: Item[] = [
  { id: 1, title: '계좌 개설', to: '' },
  { id: 2, title: '계좌 정보 조회', to: '' },
  { id: 3, title: '계좌 잔액 조회', to: '' },
  { id: 4, title: '계좌 정보 수정', to: '' },
  { id: 5, title: '계좌 이체한도 변경', to: '' },
  { id: 6, title: '계좌 비밀번호 변경', to: '' },
  { id: 7, title: '고객 계좌 목록 조회', to: '' },
  { id: 8, title: '계좌 목록 조회/검색', to: '' },
  { id: 9, title: '계좌 해지', to: '' },
];

const transactionItems: Item[] = [
  { id: 1, title: '입금', to: '' },
  { id: 2, title: '출금', to: '' },
  { id: 3, title: '이체', to: '' },
  { id: 4, title: '1원 전송', to: '' },
  { id: 5, title: '1원 인증 확인', to: '' },
  { id: 6, title: '거래내역 수정', to: '' },
  { id: 7, title: '거래내역 삭제', to: '' },
];

const dummyItems: Item[] = [
  { id: 1, title: '더미 은행고객 자동 생성', to: '' },
  { id: 2, title: '더미 계좌 자동 생성', to: '' },
  { id: 3, title: '더미 거래내역 자동 생성', to: '' },
  { id: 4, title: '더미 생성내역 정보 조회', to: '' },
  { id: 5, title: '더미 생성내역 수정', to: '' },
  { id: 6, title: '더미 생성내역 목록 조회/검색', to: '' },
  { id: 7, title: '더미 생성내역 삭제', to: '' },
  { id: 8, title: '더미 전체 삭제', to: '' },
];

export const components = [
  {
    name: '공통부(Commons)',
    anchor: '#',
    sub: null,
  },
  {
    name: '은행(Bank)',
    anchor: '#',
    sub: bankItems,
  },
  {
    name: '고객(Member)',
    anchor: '#',
    sub: memberItems,
  },
  {
    name: '예적금상품(Product)',
    anchor: '#',
    sub: productItems,
  },
  {
    name: '계좌(Account)',
    anchor: '#',
    sub: accountItems,
  },
  {
    name: '거래내역(Transaction)',
    anchor: '#',
    sub: transactionItems,
  },
  {
    name: '더미데이터(Dummy)',
    anchor: '#',
    sub: dummyItems,
  },
]