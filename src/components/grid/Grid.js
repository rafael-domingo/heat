import React from 'react'
import PropTypes from 'prop-types'
import Measure from 'react-measure'
import { Transition, animated, interpolate } from "react-spring/renderprops";

const styles = {
    outer: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    inner: {
        position: 'relative',
        width: '100%',
        overflow: 'auto',
        minHeight: '100%'
    },
    cell: {
        position: 'absolute',
        willChange: 'transform, width, height, opacity'
    }
}

export default class Grid extends React.Component {
    static propTypes = {
        data: PropTypes.array,
        keys: PropTypes.func, 
        occupySpace: PropTypes.bool,
        columns: PropTypes.number,
        margin: PropTypes.number, 
        heights: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
        lockScroll: PropTypes.bool,
        closeDelay: PropTypes.number
    }

    static defaultProps = {
        occupySpace: true, 
        columns: 3, 
        margin: 0, 
        heights: 400,
        lockScroll: false, 
        closeDelay: 0
    }

    // Default state of the unopened cell
    // TODO: Try to refactor this to the old way to set state via constructor, see if it still works
    state = { width: 0, height: 0, open: undefined, lastOpen: undefined, data: this.props.data}

    // -------------------------
    // Methods to adjust state based on user input

    // Minimizes expanded cell 
    scrollOut = e => {
        if(!this.props.lockScroll) {
            this.state.open && this.toggle(undefined) // shorthand for an if statement // TODO: Try to refactor this into a regular if-statement
            this.clicked = false
        }
    }

    // Toggles state based on clicking cell 
    toggle = key => {
        return (
            this.setState(
                state => ({
                    lastOpen: state.open, 
                    open: state.open === key ? undefined : key
                }),
                () => (this.clicked = true)
            )
        )
    }

    // Adjust size of container based on Measure component
    resize = (width, height, props) => 
    this.setState({
        [width]: props.client.width,
        [height]: props.client.height
    })
    reizeOuter = props => this.resize('widthOuter', 'heightOuter', props)
    resizeInner = props => this.resize('width', 'height', props)

    // Update method gets called everytime and assigns value based on open state
    update = ({ key, x, y, width, height }) => {
        const open = this.state.open === key
        return {
            opacity: this.state.open && !open ? 1 : 1,
            // outerRef comes from measureRef object given by Measure component
            x: open ? this.outerRef.scrollLeft : x,
            y: open ? y : y,
            // this.state.width comes from resize method
            width: open ? this.state.width: width,
            height: open ? 'auto': height
        }
    }

    componentDidUpdate() {
        this.clicked = false // reset clicked property after Grid is loaded
        // TODO: console log to see if this gets called when component mounts and that's how we can call it later in the component
    }

    render() {
        
        let {
            children, 
            columns,
            margin, 
            occupySpace, 
            impl, 
            config, 
            data,
            keys, 
            heights,
            closeDelay,
            lockScroll,
            ...rest
        } = this.props
        let { lastOpen, open, width } = this.state
        let column = 0
        let columnHeights = new Array(columns).fill(0)
        // Adjust container based on mobile
        if (this.state.width < 450) {
            columns = 1
            margin = 0
            occupySpace = false
        }
        // Create array to display initial grid of cells
        let displayData = data.map((child, i) => {
            let index = occupySpace ? columnHeights.indexOf(Math.min(...columnHeights)) : column++ % columns // Maximizes the space used if occupySpace is specified
            let cellWidth = width / columns - margin / (1 - 1 / (columns + 1))
            let left = cellWidth * index
            let offset = (index + 1) * margin
            let top = columnHeights[index] + margin
            let height = heights 
            columnHeights[index] += height + margin
            return {
                x: margin ? left + offset : left,
                y: top,
                width: cellWidth > 150 ? cellWidth : 150,
                height,
                key: keys(child),
                object: child
            }
        })
        const overflow = lockScroll ? (open ? 'auto' : 'hidden') : 'auto'
        const height = columnHeights[0]
        return (
            <Measure
                client
                innerRef={r => this.outerRef = r}
                onResize={this.resizeOuter}>
                    {({ measureRef }) => (
                        <div
                            ref={measureRef}
                            style={{...styles.outer, ...this.props.style, overflow}}
                            {...rest}
                            // onTouchMove={this.scrollOut}
                            onClick={this.scrollOut}>
                                <Measure
                                    client
                                    innerRef={r => (this.innerRef = r)}
                                    onResize={this.resizeInner}>
                                        {({ measureRef }) => (
                                            <div
                                                ref={measureRef} 
                                                style={{ ...styles.inner, height }}>
                                                    <Transition
                                                        native
                                                        items={displayData}
                                                        keys={d => d.key}
                                                        from={{ opacity: 0 }}
                                                        leave={{ opacity: 0 }}
                                                        enter={this.update}
                                                        update={this.update}
                                                        impl={impl}
                                                        config={{ ...config, delay: this.clicked && !open ? closeDelay : 0}}>
                                                            {(c, i) => ({ opacity, x, y, width, height }) => {
                                                                return (
                                                                    <animated.div 
                                                                        style={{
                                                                            ...styles.cell,
                                                                            opacity,
                                                                            width,
                                                                            height,
                                                                            zIndex: lastOpen === c.key || open === c.key ? 5000: 0,
                                                                            transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px, 0)`)
                                                                        }}
                                                                        children={children(c.object, open === c.key, () => this.toggle(c.key))}
                                                                        />
                                                                )
                                                            }}

                                                    </Transition>

                                            </div>

                                        )}

                                </Measure>
                        </div>
                    )}
            </Measure>
        )
    }
}