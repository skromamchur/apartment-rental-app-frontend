import axios from 'axios';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_PATH}`,
});

axiosClient.defaults.headers.common['Content-Type'] = 'application/json';

const requestHandler = (request) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    if (!request?.headers?.Authorization && typeof window !== 'undefined') {
      if (request.headers) {
        request.headers['Authorization'] = `Bearer ${token}`;
      }
    }
  }

  return request;
};

const responseHandler = (response: AxiosResponse) => response;

const errorHandler = (error: { response: AxiosResponse }) => {
  if (error?.response?.status === 403) {
    toast.error('Please purchase a pack to proceed', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return Promise.reject(error);
};
axiosClient.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error),
);

axiosClient.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error),
);

export default axiosClient;
