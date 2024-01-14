import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_PATH}`,
});

axiosClient.defaults.headers.common['Content-Type'] = 'application/json';

export default axiosClient;