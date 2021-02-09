import React from 'react';
import './logo.css';

export default class Logo extends React.Component {

    // Not used in component, just needed to figure out what to set stroke-dashoffset value to in CSS
    // getPathLength() {
    //     const path = this.path;
    //     const pathLength = this.path.getTotalLength();
    // }

    componentDidMount() {
        // window.addEventListener('load', this.getPathLength());
    }
    render() { 
        
        return (
        <div className="logo">
            <svg id="logo" viewBox="0 0 646 206" version="1.1">
                <title>heat</title>
                <g id="Logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop" transform="translate(-194.000000, -383.000000)" fillRule="nonzero" stroke="#FF5757" strokeWidth="5">
                    <path ref={(ref) => this.path = ref} d="M261.2,586 L261.2,511.9 L296.9,511.9 L296.9,586 L361.1,586 L361.1,385.9 L296.9,385.9 L296.9,454 L261.2,454 L261.2,385.9 L197.3,385.9 L197.3,586 L261.2,586 Z M235.1,562 L227.3,562 L227.3,409.9 L235.1,409.9 L235.1,478.9 L323.3,478.9 L323.3,409.9 L331.1,409.9 L331.1,562 L323.3,562 L323.3,486.1 L235.1,486.1 L235.1,562 Z M502.1,586 L502.1,533.5 L446,533.5 L446,510.4 L499.1,510.4 L499.1,460.6 L446,460.6 L446,438.4 L500,438.4 L500,385.9 L382.1,385.9 L382.1,586 L502.1,586 Z M479.9,562 L412.1,562 L412.1,409.9 L479.9,409.9 L479.9,417.1 L419.9,417.1 L419.9,481.9 L476.9,481.9 L476.9,489.1 L419.9,489.1 L419.9,554.8 L479.9,554.8 L479.9,562 Z M566.6,586 L573.2,568 L633.8,568 L640.4,586 L703.4,586 L627.5,385.9 L579.5,385.9 L503.6,586 L566.6,586 Z M548.3,562 L539.9,562 L597.8,409.9 L609.2,409.9 L667.1,562 L658.7,562 L653,547 L554,547 L548.3,562 Z M650.3,539.8 L603.5,417.1 L556.7,539.8 L650.3,539.8 Z M617,523.9 L590,523.9 L603.5,488.8 L617,523.9 Z M800.3,586 L800.3,438.4 L837.2,438.4 L837.2,385.9 L697.4,385.9 L697.4,438.4 L734.3,438.4 L734.3,586 L800.3,586 Z M771.2,562 L763.4,562 L763.4,417.1 L720.5,417.1 L720.5,409.9 L814.1,409.9 L814.1,417.1 L771.2,417.1 L771.2,562 Z" id="heat"></path>
                    </g>
                </g>
            </svg>
        </div>
        )
    }
}