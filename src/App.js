import React from "react";
import DateComponent from "./components/DateComponent";
import ImageComponent from "./components/ImageComponent";
import Insta from "./components/Insta";

const API_KEY = "sRvngy9nGodZ2nvZHM27ud7shyYsFqh8jngN0GGD";

class App extends React.Component {

    state = {
        url: undefined,
        type: undefined,
        date: new Date(),
        explanation: undefined,
        title: undefined,
        outdate: undefined,
        code: undefined
    }



    gettingDate = async (value) =>{

        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',

        };

        this.setState({
            date: value,
            outdate: value.toLocaleString("ru", options)
        })
    }

    gettingImage = async (e) => {
        e.preventDefault();
        const newdate = `${this.state.date.getFullYear()}-${this.state.date.getMonth()+1}-${this.state.date.getDate()}`
        const api_url = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${newdate}`,{
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await api_url.json();
        console.log(newdate);
        console.log(data);

        this.setState({
            url: data.url,
            error: data.error,
            type: data.media_type,
            explanation: data.explanation,
            title: data.title,
            code: data.code
        });
        if(this.state.code) alert("Ошибка! Повторите попытку");
        else{
            sessionStorage.setItem("date", this.state.date);
            sessionStorage.setItem("url", this.state.url);
            sessionStorage.setItem("type", this.state.type);
            sessionStorage.setItem("explanation", this.state.explanation);
            sessionStorage.setItem("title", this.state.title);
            sessionStorage.setItem("outdate", this.state.outdate)
        }


    }

    componentDidMount() {
        this.setState({
            url: sessionStorage.getItem("url"),
            type: sessionStorage.getItem("type"),
            explanation: sessionStorage.getItem("explanation"),
            title: sessionStorage.getItem("title"),
            outdate: sessionStorage.getItem("outdate")

        })
    }
  render() {

    return (
        <div>
            <div id="block" className="container">
                <div className="row text-center align-items-center ">
                    <div className="col-sm-12 col-md-12">
                        <div className="container marg">
                            <div className="container text"><h3>Выбранная дата</h3><h3>{this.state.outdate}</h3></div>
                            <DateComponent dateMethod={this.gettingDate} imageMethod={this.gettingImage} />
                        </div>
                    </div>
                    <div className="col-md-12 mt-2">
                            <form onSubmit={this.gettingImage}>
                                <button className="btn btn-lg btn-block btn-primary btn-circle align-content-center marg align-middle" >Посмотреть</button>
                            </form>
                    </div>
                    <div className="col-md-12 marg text" >
                        <ImageComponent url={this.state.url} type={this.state.type} explanation={this.state.explanation} title={this.state.title}/>
                    </div>
                    <div className="col-md-12 marg text">
                        <Insta url={this.state.url} type={this.state.type}/>
                    </div>
                </div>

            </div>
        </div>
    );
  }
}

export default App;