$("#send1").click(function () {
	        document.getElementById("1").value = "";
        document.getElementById("2").value = "";
        document.getElementById("3").value = "";
        document.querySelector("#happy").checked = false;

        var slapform = new Slapform();
        $("#send1").prop("disabled", true);
        slapform.submit({

            form: "vog0f58Vj"
        }).then(function () {
            alert("successful sending!");
        }).catch(function () {
            alert("sending failed");
        });

        return false;
    });

