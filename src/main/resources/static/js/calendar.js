$(document).ready(function() {


    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyB7K4nxGLhUqHfTTeZK6tXTUsBxmQwCKTk',
        eventSources:[
            {
            googleCalendarId: '9ljqm1d5fe8ugr86ovv1at7imc@group.calendar.google.com',
                color: '#ffa98c',
                textColor: 'black'
            },
            {
                googleCalendarId: 'nqbs9anfeuhq28cj2cde3qb7ps@group.calendar.google.com',
                color: '#a9bbff',
                textColor: 'black'
            },
            {
                googleCalendarId: 'j8bac1iag3n8p9ub88hev4bh2o@group.calendar.google.com',
                color: '#a3ff77',
                textColor: 'black'
            },
            {
                googleCalendarId: 'iqeankhjhr5rioivhu1o6rdq0g@group.calendar.google.com',
                color: '#6a82ff',
                textColor: 'black'
            }
       ],
        header: {
            left: 'prev,next today,listWeek',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        eventRender: function (event, element) {
            element.attr('href', 'javascript:void(0);');
            element.click(function() {
                    $("#myModal").modal();
                    $(".modal-title").html(event.location +": " + event.title);
                $("#eventStartTime").html(moment(event.start).format('LLLL'));
                $("#eventEndTime").html(moment(event.end).format('LLLL'));
                $("#eventDescription").html(event.description);
            });
        }
    })});

