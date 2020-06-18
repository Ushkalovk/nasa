import React from "react";

class Insta extends React.Component {

    state = {
        urls: []
    }
    add = () =>{
        if (this.props.type === "image"){
            let arr = this.state.urls;
            arr.push(this.props.url);
            this.setState({urls: arr});
        } else if(this.props.type === "video") alert("Невозможно сохранить видео");
        else alert("Нет изображения");
    }

    render()
    {
        return (
            <div className="container">
                <div>
                    <button className="btn btn-primary" onClick={this.add}>Сохранить картинку</button>
                </div>
                { this.state.urls.map(function (item, i) {
                    return(
                    <div key={i} className="card w-50 text-center marg mt-5">
                        <div className="card-header">
                            <h3>Instagram</h3>
                        </div>
                        <div className="card-img-top mt-2 mb-2 ">
                            <img className="img-fluid" src={item} alt=""/>
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                    );
                })}
            </div>
        );
    };
}

export default Insta;