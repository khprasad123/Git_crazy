import React from 'react';
import MainPage from './components/MainPage';
import {Container} from 'react-bootstrap';

class App extends React.Component {
    render() { 
        return ( 
            <Container className={null}>
                <MainPage/>
            </Container>
         );
    }
}
 
export default App;