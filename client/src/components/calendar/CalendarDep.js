import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useEffect, useState } from 'react';

export default function Calendar(){
    const handleEventClick = (e)=>{
        console.log (e.event.startStr)
    }
    return (
        
        <div>
            <FullCalendar
                plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                initialView = "dayGridMonth"
                headerToolbar = {{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek"

                }}
                businessHours = {{
                    startTime: "7:00",
                    endTime:"19:00",
                    daysOfWeek: [1,3,5,6]
                }}
                timeZone = "local"
                events = {[
                    {title: "event 1", start:"2022-07-04T12:30:00", end: "2022-07-04T13:30:00 ", backgroundColor: "blue", borderColor:"blue"},
                    {title: "event 2", start:"2022-07-04T16:30:00", end: "2022-07-04T18:30:00 ",nombre_participante: "Pedro"}
                    
                ]} 
                eventClick  = {handleEventClick}
                eventContent = {renderEventContent}


 
            />
        </div>
    )
}




function renderEventContent(eventInfo){

    return (
        <div>
            <div>Cita</div>
            <div>{eventInfo.event.title} </div>
            <div>{eventInfo.event.extendedProps.nombre_participante} </div>
            
        </div>
    )
}