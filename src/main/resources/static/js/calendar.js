$(document).ready(function() {
    $('#calendar').fullCalendar({
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: {
            url: '/events',
            type: 'GET',
            error: function() {
                alert('Błąd pobierania danych!');
            },

            textColor: 'white'
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

