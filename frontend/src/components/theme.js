import  styled  from 'styled-components'
import {ClinicTheme as CT} from './theme-colors'

export const MyHeader = styled.div`
    background-color: ${CT.tertiary};
    min-height: 25px;
    max-height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;  
    padding: 10px 20px 10px 20px;
    
` 
export const Logo1 = styled.img`
    height: 150px;
    width: 150px;
    margin: 0;
`