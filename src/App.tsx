import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex } from 'theme-ui';
import { UsersState } from './store/reducers/usersReducer';

import Users from './components/Users/Users';

import { styles } from './AppStyle';

const App: React.FC = () => {
  const users = useSelector<UsersState, UsersState['users']>((state) => state.users);
  let updatedUsers = users.flat();

  useEffect(() => { //componentDidMount
    
  })

  return (
      <>
      <Box
          p={2}
          color='white'
          sx={styles.Header}>
        Redux-Saga and TypeScript example
      </Box>
      <Flex>
        <Box sx={styles.App}>
          {updatedUsers.map(res => {
            return <Users 
              key={res.id} 
              email={res.email} 
              id={res.id} 
              name={res.name} 
              phone={res.phone} 
              userName={res.username}/>
          })}
        </Box>
      </Flex>
      </>
  );
}

export default App;
