$("button").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".Register-form").offset().top,
    },
    "slow"
  );
});

function myFunction2() {
  var checkBox2 = document.getElementById("check2");
  var text2 = document.getElementById("text2");
  var text1 = document.getElementById("text1");
  if (checkBox2.checked == true) {
    text2.style.display = "block";
    text1.style.display = "none";
  } else {
    text2.style.display = "none";
  }
}

function myFunction1() {
  var checkBox1 = document.getElementById("check1");
  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");
  if (checkBox1.checked == true) {
    text1.style.display = "block";
    text2.style.display = "none";
  } else {
    text1.style.display = "none";
  }
}

$("input:checkbox").on("click", function () {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
