$(document).ready(function() {

    $(function() {
        var dialog, form,

            tips = $( ".validateTips" );

        function validateDateRange(start, end) {

            if(!start.isValid()) {
                alert("Start date is invalid");
                return false;
            }

            if(!end.isValid()) {
                alert("End date is invalid");
                return false;
            }

            if(start.isAfter(end)) {
                alert("End date must be after start date");
                return false;
            }

            if(start.isSame(end)) {
                alert("End date must be after start date");
                return false;
            }
            return true;
        }});
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
        eventClick: function (event, element) {
            $('#myModal').modal('show');
            $(".modal-title").html(event.title);
            $("#eventStartTime").html(moment(event.start).format('LLLL'));
            $("#eventEndTime").html(moment(event.end).format('LLLL'));
            $("#eventDescription").html(event.description);
            var startData = moment(event.start);
            var endData = moment(event.end);
            var eventData ={
                id: event.id,
                title: event.title,
                start: startData,
                end: endData,
                description: event.description
            };
            $('#deleteEvent').on('click',function (e) {
                $('#calendar').fullCalendar('removeEvents', event._id);
                $.ajax({
                    type: "DELETE",
                    url: "/event",
                    data: JSON.stringify(eventData),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(data){
                        $('#calendar').fullCalendar( 'refetchEvents' );
                    },
                    failure: function(errMsg) {
                        alert(errMsg);
                    }
                });
            })
        },
        dayClick: function(date, jsEvent, view) {
            $("#myModalAdd").modal();
            $('#saveEvent').on('click',function () {

                var title = document.getElementById("newtitle").value;
                var description = document.getElementById("description").value;
                var start = document.getElementById("datetimepickerStart").value;
                var end = document.getElementById("datetimepickerEnd").value;
                var eventData ={
                    title: title,
                    description: description,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', event);
                $.ajax({
                    type: "POST",
                    url: "/event",
                    data: JSON.stringify(eventData),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(data){
                        $('#calendar').fullCalendar( 'refetchEvents' );
                        $('#saveEvent').unbind('click');
                        $('#myModalAdd').modal('hide');
                    },
                    failure: function(errMsg) {
                        alert(errMsg);
                    }
                });
            })




        }



    })});

