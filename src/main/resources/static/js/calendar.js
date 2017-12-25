$(document).ready(function() {


    $('#calendar').fullCalendar({

        googleCalendarApiKey: 'AIzaSyB7K4nxGLhUqHfTTeZK6tXTUsBxmQwCKTk',

        events: {
            googleCalendarId: '9ljqm1d5fe8ugr86ovv1at7imc@group.calendar.google.com',

        },

        header: {
            left: 'prev,next today,listWeek',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        eventRender: function (event, element) {
            element.attr('href', 'javascript:void(0);');
            element.click(function() {
                    $("#myModal").modal();
                    $(".modal-title").html(event.title);
                $("#eventStartTime").html(moment(event.start).format('LLLL'));
                $("#eventEndTime").html(moment(event.end).format('LLLL'));
                $("#eventDescription").html(event.description);
            });
        }






    })});

