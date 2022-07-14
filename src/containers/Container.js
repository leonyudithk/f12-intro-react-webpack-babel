import React, { Component } from 'react';
import { Component1 } from '../components/Component1';
import Component2 from '../components/Component2';

class Container extends Component {
    render() {
        return (
            <div>
                <Component1/>
                <div>
                <h1>Dentro del contenedor Componente 2</h1>
                <br />
                <Component2/>
                </div>
              
            </div>
        );
    }
}

export default Container;