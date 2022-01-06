$("#btnSend").click(function() {
    alert("From: " + $("#textFrom").val() +
        ", Subject: " + $("#textSubject").val() +
        ", Message: " + $("#textMsg").val());

    $("#picGanderson").fadeToggle();
})