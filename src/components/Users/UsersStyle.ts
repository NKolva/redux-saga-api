import { SxStyleProp } from 'theme-ui';

export const styles: { [key: string]: SxStyleProp } = {
    cardStyle:{
        maxWidth: 200, 
        height: 256, 
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection:'column',
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        padding: '10px',
        margin: '15px',
    },
    cardContent: {
        width: '100%',
        height: '20%',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
}