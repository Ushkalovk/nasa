import React from "react";
import DateComponent from "./components/DateComponent";
import ImageComponent from "./components/ImageComponent";

const API_KEY = "sRvngy9nGodZ2nvZHM27ud7shyYsFqh8jngN0GGD";

class App extends React.Component {

    state = {
        url: undefined,
        error: undefined,
        type: undefined,
        date: new Date()
    }
    gettingDate = async (value) =>{
        this.setState({date: value })
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
            type: data.media_type
        });
        localStorage.setItem("url", this.state.url);
        localStorage.setItem("type", this.state.type);
    }

    componentDidMount() {
        this.setState({
            url: localStorage.getItem("url"),
            type: localStorage.getItem("type")
        })
    }
  render() {
    return (
        <div>
            <div className="container">
                <DateComponent dateMethod={this.gettingDate}  />
            </div>
            <div className="container">
                <form onSubmit={this.gettingImage}>
                    <button className="btn" >OK</button>
                </form>
            </div>
            <div className="container">
                <ImageComponent url={this.state.url} type={this.state.type}/>
            </div>
        </div>
    );
  }
}

export default App;