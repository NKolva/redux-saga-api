import { SxStyleProp } from 'theme-ui';

export const styles: { [key: string]: SxStyleProp } = {
    App: {
        width:'100%', 
        height:'100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent:'space-evenly', 
        flexDirection: 'row', 
        flexWrap:'wrap',
        marginTop: '20px'
    },
    Header: {
        width: '100%',
        height: '10%',
        backgroundColor:'black'
    }
}