$(document).ready(function() {


        $("#Password").focusout(function() {
            var checkpassword = $("#Password").val();
            if (checkpassword.length >= 8) {
                $("#minimum").html("&#x02713;");
                $("#minimum1").css({ "color": "green" });
            }



            var regexp1 = RegExp("[0-9]");
            if (regexp1.test(checkpassword)) {
                $("#number").html("&#x02713;");
                $("#number1").css({ "color": "green" });

            }

            var regexp2 = RegExp("[a-z]");
            if (regexp2.test(checkpassword)) {
                $("#lower").html("&#x02713;");
                $("#lower1").css({ "color": "green" });
            }
            var regexp3 = RegExp("[A-Z]");
            if (regexp3.test(checkpassword)) {
                $("#upper").html("&#x02713;");
                $("#upper1").css({ "color": "green" });
            }

            
            var specialcharacters = RegExp("[^0-9 && ^a-z && ^A-Z]");
            if (checkpassword.match(specialcharacters)) {
                $("#special").html("&#x02713;");
                $("#special1").css({ "color": "green" });
            }


            if (checkpassword.length >= 8 &&
                regexp1.test(checkpassword) &&
                regexp2.test(checkpassword) &&
                checkpassword.match(specialcharacters) &&
                regexp3.test(checkpassword)) {


                var img = document.createElement("img");

                img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAmFoQKt6NTaQPrzU6hsGhtQJIn8I4de9iATcgGR6K9Wp70Lz";
                var src = document.getElementById("x");

                src.appendChild(img);
            }




        });

    });