//set the length of taking a break and working
$(".breakreducebtn").click(function () {
    document.getElementById("breakTime").stepDown(1);
});
$(".workreducebtn").click(function () {
    document.getElementById("workTime").stepDown(1);
});
$(".breakaddbtn").click(function () {
    document.getElementById("breakTime").stepUp(1);
});
$(".workaddbtn").click(function () {
    document.getElementById("workTime").stepUp(1);
});


$("#submit").click(function () {
    //disable submit button
    document.getElementById("submit").disabled = true;
    //check, if the user typed negative numbers and set the counter
    if (document.getElementById("workTime").value < 1) {
        $("#workTime").val(1);
    }
    if (document.getElementById("breakTime").value < 1) {
        $("#breakTime").val(1);
    }
    //start the counter
    var workMinutes = document.getElementById("workTime").value - 1;
    var breakMinutes = document.getElementById("breakTime").value - 1;
    var seconds = 60;
    document.getElementById("digits").innerHTML = workMinutes + 1 + ":00";
    var countdownWork = setInterval(function () {
        $("#workText").css("color", "green");
        seconds--;
        document.getElementById("digits").innerHTML = workMinutes + ":" + seconds;
        if (seconds === 0) {
            if (workMinutes !== 0) {
                workMinutes--;
                document.getElementById("digits").innerHTML = workMinutes + ":" + seconds;
                seconds = 60;
                countdownWork;
            }
            else {
                $("#workText").css("color", "#337ab7");
                clearInterval(countdownWork);
                $("#breakText").css("color", "green");
                seconds = 60;
                var countdownBreak = setInterval(function () {
                    seconds--;
                    document.getElementById("digits").innerHTML = breakMinutes + ":" + seconds;
                    if (seconds === 0) {
                        if (breakMinutes !== 0) {
                            breakMinutes--;
                            document.getElementById("digits").innerHTML = breakMinutes + ":" + seconds;
                            seconds = 60;
                            countdownBreak;
                        }
                        else {
                            $("#breakText").css("color", "#337ab7");
                            clearInterval(countdownBreak);
                            seconds = 60;
                            countdownWork = setInterval(function () {
                                $("#workText").css("color", "green");
                                seconds--;
                                document.getElementById("digits").innerHTML = workMinutes + ":" + seconds;

                                if (seconds === 0) {
                                    if (workMinutes !== 0) {
                                        workMinutes--;
                                        document.getElementById("digits").innerHTML = workMinutes + ":" + seconds;
                                        seconds = 60;
                                        countdownWork;
                                    }
                                    else {
                                        $("#workText").css("color", "#337ab7");
                                        $("#breakText").css("color", "green");
                                        clearInterval(countdownWork);
                                        seconds = 60;
                                        var countdownBreak = setInterval(function () {
                                            seconds--;
                                            document.getElementById("digits").innerHTML = breakMinutes + ":" + seconds;
                                            if (seconds === 0) {
                                                if (breakMinutes !== 0) {
                                                    breakMinutes--;
                                                    document.getElementById("digits").innerHTML = breakMinutes + ":" + seconds;
                                                    seconds = 60;
                                                    countdownBreak;
                                                }
                                                else {
                                                    $("#breakText").css("color", "#337ab7");
                                                    clearInterval(countdownBreak);
                                                    seconds = 60;
                                                    workMinutes = document.getElementById("workTime").value;
                                                    countdownWork;
                                                }
                                            }
                                            $("#clear").click(function () {
                                                document.getElementById("submit").disabled = false;
                                                $("#breakText").css("color", "#337ab7");
                                                clearInterval(countdownBreak);
                                                document.getElementById("digits").innerHTML = "00:00";
                                            })
                                        }, 1000);
                                    }
                                }

                            }, 1000);
                        }
                    }
                    $("#clear").click(function () {
                        document.getElementById("submit").disabled = false;
                        $("#breakText").css("color", "#337ab7");
                        clearInterval(countdownBreak);
                        document.getElementById("digits").innerHTML = "00:00";
                    })
                }, 1000);
            }
        }

    }, 1000);
    $("#clear").click(function () {
        document.getElementById("submit").disabled = false;
        $("#workText").css("color", "#337ab7");
        clearInterval(countdownWork);
        document.getElementById("digits").innerHTML = "00:00";
    })
});