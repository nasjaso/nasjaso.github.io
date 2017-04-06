import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
const RangePicker = DatePicker.RangePicker;

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

function disabledDate(current) {
    // can not select days before today and today
    // console.log(current+"---"+Date.now()+"-----"+current.valueOf()+"------------"+Date.parse("Nov 31, 2017"))
    if(current)
    return (current.valueOf() <Date.now()||current.valueOf()>Date.parse("Aug 31, 2017"));
}

function disabledDateTime() {
    return {
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
    };
}

function disabledRangeTime(_, type) {
    if (type === 'start') {
        return {
            disabledHours: () => range(0, 60).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }
    return {
        disabledHours: () => range(0, 60).splice(20, 4),
        disabledMinutes: () => range(0, 31),
        disabledSeconds: () => [55, 56],
    };
}

ReactDOM.render(
    <div>
        <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
            showTime
        />
        <br />

    </div>,
    document.getElementById('root')
);