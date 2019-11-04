import React from 'react';
import ReactDOM from 'react-dom';
// import './style/main.less';

class Welcome extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello world man hey.....</h1>
            </div>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
