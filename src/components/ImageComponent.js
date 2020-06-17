import React from "react";

class ImageComponent extends React.Component {

    render() {
        return (
            <div>
                {this.props.type === "image" &&
                    <img src={this.props.url} alt=""/>
                }
                {this.props.type === "video" &&
                <iframe width="560" height="315" src={this.props.url} frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>
                }

            </div>
        );
    }
}

export default ImageComponent;