import {axiosInstance, memberAxiosInstance} from '.';

export const join = async (params: any): Promise<any> => {
  console.log(params);
  const response = await axiosInstance.post('/member', params);
  return response.data;
};

export const login = async (params: any): Promise<any> => {
  console.log(params);
  const response = await memberAxiosInstance.post('/member/login', params);
  return response.data;
};

export const logout = async (): Promise<any> => {
  const response = await memberAxiosInstance.get('/member/logout');
  return response.data;
};

export const emailConfirm = async (
  email: string,
  bankId: string,
): Promise<any> => {
  const response = await axiosInstance.get(`/member/email/${email}/${bankId}`);
  return response.data;
};

export const emailSend = async (params: any): Promise<any> => {
  const response = await memberAxiosInstance.post('/member/emailSend', params);
  return response.data;
};

export const checkEmailCode = async (params: any): Promise<any> => {
  const response = await memberAxiosInstance.post(
    '/member/emailConfirm',
    params,
  );
  return response.data;
};
