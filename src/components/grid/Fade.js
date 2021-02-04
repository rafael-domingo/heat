import React from 'react'
import { Transition, Trail, animated } from "react-spring/renderprops";

export default class Fade extends React.PureComponent {
    render() {
        const {
            children, 
            show, 
            from = { opacity: 0 },
            enter = { opacity: 1 },
            leave = { opacity: 0 },
            ...rest
        } = this.props

        const { type, props } = children
        const Component = animated[type] || animated(type)
        const result = styles => {
            const newProps = {
                ...props,
                style: {
                    willChange: 'opacity, transform',
                    ...props.style,
                    ...styles
                }
            }
            return <Component {...newProps} />
        }
        
        return (
            <Transition 
                native
                items={show}
                {...rest}
                from={from}
                enter={enter}
                leave={leave}
                children={show => show && result}
            />
        )
    }
}