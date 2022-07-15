import React, { Component } from 'react'
import { easeExpInOut } from 'd3-ease'
import NodeGroup from 'react-move/NodeGroup';
import './MyWorks.scss';
export class Portfolio extends Component {
    state = {
        projectList: []
    }
    static getDerivedStateFromProps(props, state) {
        return state = {
            projectList: props.filterMatches
        }
    }
    ShowProjects = () => (
        this.state.projectList ?
            <NodeGroup
                data={this.state.projectList}
                keyAccessor={(d) => d.id}
                start={() => ({
                    opacity: 0,
                    y: 100
                })}
                enter={(d, i) => ({
                    opacity: [1],
                    y: [0],
                    timing: { duration: 1000, delay: i * 100, ease: easeExpInOut }
                })}
                update={(d, i) => ({
                    opacity: [0, 1],
                    y: [100, 0],
                    timing: { duration: 1000, delay: i * 100, ease: easeExpInOut }
                })}
                leave={(d, i) => ({
                    opacity: [0],
                    y: [100],
                    timing: { duration: 400, ease: easeExpInOut }
                })}
            >
                {(nodes) => (
                    <>
                        {nodes.map(({ key, data, state: { y, opacity } }) => (
                            <div key={key}
                                className={`div${data.id} box col-12`}
                                style={{
                                    opacity,
                                    transform: `translateY(${y}px)`
                                }}
                            >
                                <div className={`overlay constent ${data.class}`}>
                                    <div className="text">
                                        <h5>{data.type}</h5>
                                        <h2>{data.title}</h2>
                                        <a href={data.code} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>code</p>
                                        </a>
                                        <a href={data.demo} target="_blank" rel="noopener noreferrer" className="links">
                                            <p>demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )
                }
            </NodeGroup >
            : null
    )
    render() {
        return (
            <div>
                <div className="parent row box_row">
                    {this.ShowProjects()}
                </div>
            </div>
        )
    }
}

export default Portfolio
