import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

class DateComponent extends React.Component {

    onChange = (value) => {this.props.dateMethod(value) };
    render() {
        return (

            <div className="calend">
                <Calendar
                onChange={this.onChange}
                value={new Date()}
                maxDate={new Date()}
                className="container calend"
                />
            </div>
        );
    }
}

export default DateComponent;