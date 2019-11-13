import React from 'react';


class HelloWorld extends React.Component{

    render() {
        return(

            <div>

                <h1>HELLO WORLD</h1>
                <h1>{localStorage.getItem('cvu')}</h1>

            </div>
        )
    }
}

export default HelloWorld;