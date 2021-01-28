import React from 'react';

export default class WorkItem extends React.PureComponent {
    render() {
        return (
            <div className="Work__item--content">
                <div className="Work__item--image">
                    <a href={this.props.work.weblink} target="_blank" rel="noopener noreferrer">
                        <img alt="Project Cover" src={this.props.work.image}/>
                    </a>
                </div>
                <div className="Work__item--title">
                    <p><span className="bold">{this.props.work.title}</span></p>
                </div>
                <div className="Work__item--desc">
                    <p>{this.props.work.description}</p>
                </div>
                <div className="Work__item--tools">
                    {this.props.work.tools.map((tool, index) => {
                        return (
                            <p key={index}>• {tool}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}