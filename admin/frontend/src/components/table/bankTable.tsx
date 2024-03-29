"use client";
import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation";
import { HiEmojiSad } from "react-icons/hi";
import { localAxios } from "@/api/http-common";
import { SearchBankParams } from "@/models/Bank.interface";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useState, useEffect } from "react";

interface Bank {
  bankId: string;
  adminId: string;
  name: string;
  description: string;
  uri: string;
  createdAt: string;
  updatedAt: string;
}

interface BankTableProps {
  apiKey: string;
}

export default function BankTable({ apiKey }: BankTableProps) {
  const [bankList, setBankList] = useState<Bank[]>([]);
  const [searchBankParams, setSearchBankParams] = useState<SearchBankParams>({
    name: "",
  });

  const api: AxiosInstance = axios.create({
    baseURL: "https://joa13.site/v1", // JSON 데이터를 가져올 엔드포인트의 URL
    headers: {
      apiKey: "9b5c450f-abd4-419f-b092-bcd96e66392f",
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<{
          status: string;
          message: string;
          data: Bank[];
          page: null;
        }> = await localAxios.get("/bank/search");
        setBankList(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  const router = useRouter();

  // "자세히" 버튼 클릭 시 해당 은행 정보를 넘겨주고 bank/detail 페이지로 이동하는 함수
  const handleBankDetail = (bankId: string) => {
    // 은행 상세 정보 페이지인 bank/detail 로 이동하면서 해당 은행의 ID를 쿼리 파라미터로 전달합니다.
    router.push("bank/detail");
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4">
              은행로고
            </th>
            <th scope="col" className="px-6 py-4">
              은행명
            </th>
            <th scope="col" className="px-6 py-4">
              은행설명
            </th>
            {/* <th scope="col" className="px-6 py-4">
              고객 수
            </th> */}
            <th scope="col" className="px-6 py-4">
              은행 코드
            </th>
            <th scope="col" className="relative px-6 py-4">
              <span className="sr-only"> </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {bankList.map((bank) => (
            <tr
              key={bank.bankId}
              className="border-b transition duration-300 ease-in-out hover:bg-pink-300"
            >
              <TableData>
                {/* <Image
                  src={bank.uri}
                  alt="bank_uri"
                  width={50}
                  height={50}
                ></Image> */}
                <HiEmojiSad></HiEmojiSad>
              </TableData>
              <TableData>{bank.name}</TableData>
              <TableData>{bank.description}</TableData>
              {/* <TableData>{bank.customers}</TableData> */}
              <TableData>{bank.bankId}</TableData>
              <TableData>
                <a
                  onClick={() => handleBankDetail(bank.bankId)}
                  className="font-medium text-pink-400 hover:text-pink-500"
                >
                  자세히
                </a>
              </TableData>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TableData = tw.td`
px-5
py-3
`;
