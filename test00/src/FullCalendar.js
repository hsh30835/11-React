import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
    { title: 'Meething', start: new Date() }
]

const DemoApp = () => {
    return (
        <div>
            <h1>Demo App</h1>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                events={events}
                eventContent={renderEventContent}
            />
        </div>
    )
}

const renderEventContent = (eventInfo) => {
    return(
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

// Document.arguments.FullCalendar

export default DemoApp