import { createContext } from 'react';
import { UserInterface } from '@/types/User';
import { getProfile } from '@/api/auth';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

interface UserContextInterface extends UserInterface {
  isLoading: boolean;
  logOut: () => void;
  isAuth: boolean;
  getUser: any;
}

export const UserContext = createContext<UserContextInterface>(null);

export const UserProvider = ({ children }) => {
  const router = useRouter();

  const {
    data: user,
    isLoading,
    isFetched,
    refetch,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
  });

  const logOut = () => {
    localStorage.removeItem('token');
    router.reload();
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin border-t-[transparent]"></div>
      </div>
    );
  } else {
    return (
      <UserContext.Provider
        value={{
          ...user,
          isLoading,
          logOut: logOut,
          isAuth: !!user,
          getUser: () => {
            refetch();
          },
          connections: user ? [...user.connections, ...user.receivedConnections] : [],
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
};
