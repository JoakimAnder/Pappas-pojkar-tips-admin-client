import {useState} from "react";


export default function useDateTimeInput(initialValue) {
    let initialDate = "";
    let initialTime = "";

    if(initialValue) {
        const len2 = x => {
            x = x+"";
            return (x.length < 2 ? "0"+x : x);
        };

        const now = new Date(initialValue);

        const y = now.getFullYear();
        const mo = now.getMonth()+1;
        const d = now.getDate();
        const h = now.getHours();
        const mi = now.getMinutes();

        initialDate = `${len2(y)}-${len2(mo)}-${len2(d)}`;
        initialTime = `${len2(h)}:${len2(mi)}`;
    }


    const [date, setDate] = useState(initialDate);
    const [time, setTime] = useState(initialTime);

    const dateBind = {
        value: date,
        onChange: e => setDate(e.target.value),
        type: "date"
    };
    const timeBind = {
        value: time,
        onChange: e => setTime(e.target.value),
        type: "time"
    };

    function epoch() {
        return Date.parse(`${date}t${time}`)
    }

    function stringDate() {
        return new Date(epoch())
    }

    return [[date, time], [dateBind, timeBind], stringDate, epoch]
}