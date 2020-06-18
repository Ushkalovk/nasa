import React from "react";

class ImageComponent extends React.Component {

    render() {
        return (
            <div>
                {this.props.type === "image" &&
                    <div>
                        <div className="mt-2">
                            <h1>{this.props.title}</h1>
                        </div>
                        <div>
                            <img className="img-fluid" src={this.props.url} alt=""/>
                        </div>
                        <div className="mt-2">
                            <h3>{this.props.explanation}</h3>
                        </div>
                    </div>
                }
                {this.props.type === "video" &&

                <div>
                    <div className="mt-2">
                        <h1>{this.props.title}</h1>
                    </div>
                    <div>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" title="Video" width="560" height="315" src={this.props.url} frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="">{this.props.explanation}</h3>
                    </div>
                </div>
                }

            </div>
        );
    }
}

export default ImageComponent;