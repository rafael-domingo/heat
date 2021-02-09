import React from 'react'
import { Trail, animated } from 'react-spring/renderprops'

export default class Slug extends React.PureComponent {
    render() {
        const { 
            children, 
            from = { opacity: 0 },
            to = { opacity: 1},
            // from = { opacity: 0, transform: `translate3d(0,40px,0)` },
            // to = { opacity: 1, transform: `translate3d(0, 0px, 0)`},
            ...rest
        } = this.props
        const result = React.Children.map(children, child => styles => {
            const Component = animated[child.type] || animated(child.type)
            const props = {
                ...child.props,
                style: {
                    willChange: 'opacity, transform',
                    ...child.props.style,
                    ...styles
                }
            }
            return <Component {...props} />
        }) 
        return (
            <Trail
                native
                {...rest}
                items={result}
                keys={result.map((_, i) => i)}
                from={from}
                to={to}
                children={child => child}
            />
        )
    }
}