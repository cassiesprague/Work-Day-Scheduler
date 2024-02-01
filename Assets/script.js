$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
//Above is how to access current day

  $(".saveBtn").on("click", function () {
  //Above is the event listener for the save button
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,text);
  //Above puts the items in local storage and shows values
  })

  $("#hour-9 .description").val(localStorage.getItem("hour9"));
  $("#hour-10 .description").val(localStorage.getItem("hour10"));
  $("#hour-11 .description").val(localStorage.getItem("hour11"));
  $("#hour-12 .description").val(localStorage.getItem("hour12"));
  $("#hour-13 .description").val(localStorage.getItem("hour13"));
  $("#hour-14 .description").val(localStorage.getItem("hour14"));
  $("#hour-15 .description").val(localStorage.getItem("hour15"));
  $("#hour-16 .description").val(localStorage.getItem("hour16"));
  $("#hour-17 .description").val(localStorage.getItem("hour17"));
  //Above will load the saved data from local storage for every hour 9-5

  function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
//Above should be how to get the correct colors for past present and future times but I cant find the corect way to get it to work. Still need to work on it