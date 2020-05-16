import React from 'react';
import './MultiColorBackground.css'

// Following is taken from https://blog.prototypr.io/css-only-multi-color-backgrounds-4d96a5569a20

export default class MultiColorBackground extends React.Component {
    render() {
        return (
            <div>
                <div className="card-holder">
                    <div className="card bg-gold">
                        New York is Sunny today at 60°.
                </div>
                </div>
                <div className="card-holder">
                    <div className="card bg-news">
                        Breaking News <br />
                    Apple launches the new iPhone.
                </div>
                </div>
                <div className="card-holder">
                    <div className="card bg-germany">
                        Germany! Germany! Germany!!
                </div>
                </div>
                <div className="card-holder">
                    <div className="card bg-aurora">
                        New Planets<br />Discovered
                </div>
                </div>
                <div className="card-holder">
                    <div className="card bg-purple">
                        The refreshing Black Currant Ice Cream is a wonderful treat.
                </div>
                </div>
                <div className="card-holder">
                    <div className="card bg-spring">
                        Keep Calm and Add Some Colors.
                </div>
                </div>
            </div>
        )
    }
}