import React from 'react';
import { Card, Box } from 'theme-ui';

import { styles } from './UsersStyle';

interface UsersProps {
    email: string,
    id: number,
    name: string,
    phone: string,
    userName: string
}

const Users: React.FC<UsersProps> = ({ email, id, name, phone, userName }) => {
    return (
        <Card sx={styles.cardStyle}>
            <Box sx={styles.cardContent}>
                Name: {name}
            </Box>
            <Box sx={styles.cardContent}>
                User Name: {userName}
            </Box>
            <Box sx={styles.cardContent}>
                User ID: {id}
            </Box>
            <Box sx={styles.cardContent}>
                E-mail: {email}
            </Box>
            <Box sx={styles.cardContent}>
                Phone: {phone} 
            </Box>
        </Card>
    );
}

export default Users;
