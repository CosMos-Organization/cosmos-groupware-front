import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import '../SCSS/custom/_Calendar.css';
import style from "../SCSS/components/_Calendar.module.scss";

const _Calendar = () => {
    const [value, onChange] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [selectDate, setSelectDate] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [dateValueMap, setDateValueMap] = useState({});

    const handleDateClick = (date) => {
        setSelectDate(date);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSave = () => {
        // 선택한 날짜와 입력한 값을 매핑하여 저장
        const updatedMap = { ...dateValueMap, [selectDate.toDateString()]: inputValue };
        setDateValueMap(updatedMap);

        // 모달 창 닫기
        setShowModal(false);
    }

    const customLocale = {
        // 필요한 다른 옵션들...
        startOfWeek: 3 // 주 시작일을 일요일(0)로 설정
    }

    useEffect(() => {
        console.log(dateValueMap);
    }, [inputValue]);

    return (
        <div className={style.calendar_main}>
            <Calendar
                onChange={onChange}
                value={value}
                onClickDay={handleDateClick}
                calendarType='US'
                tileContent={({ date, view }) => {
                    if (view === 'month' && dateValueMap[date.toDateString()]) {
                        return <p>{dateValueMap[date.toDateString()]}</p>;
                    }
                }}
            />
            {showModal &&
                <div className={style.modal}>
                    <div className={style.modal_content}>
                        <h2>{selectDate.toDateString()}</h2>
                        <input type="text" value={inputValue} onChange={handleInputChange} />
                        <button onClick={handleSave}>Save</button>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default _Calendar;
