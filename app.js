$(document).ready(function () {
  //Submit button is disabled

  //If text typed in input box - button is enabled

  $(`#txtVal`).on(`input`, function () {
    $(`#btnSubmit`).prop(`disabled`, false);
  });

  //h2 div background and border changes color when mouse over
  $(`#h2Input`).on(`mouseover`, function () {
    $(this).css(`color`, `green`);
    $(this).css(`background-color`, `red`);
    $(this).css(`border`, `5px solid black`);
  });

  //create an ul and append to body
  //append after button
  $(`#h2Input`).after(`<ul id="ulList">Shopping</ul>`);

  $(`#btnSubmit`).on(`click`, function () {
    let a = $(`#txtVal`).val();
    console.log(a);
    // console.log(`test`);
    // alert(`You typed ${a}`);
    $(`#h2Input`).append(a);
    $(`#ulList`).append(`<li class="test">${a}</li>`);
    $(`#ulList`).append(`<li id='li12'>${a}</li>`);
    $(`#li12`).append(".");
  });
  //change list item color when clicked
  /* this works but is the whole list not one element */
  $(`#ulList`).on(`click`, function () {
    let min = 0;
    let max = 255;
    let RGB1 = Math.floor(Math.random() * (max - min) + min);
    let RGB2 = Math.floor(Math.random() * (max - min) + min);
    let RGB3 = Math.floor(Math.random() * (max - min) + min);
    let b = `rgb(${RGB1},${RGB2},${RGB3})`;
    $("#li12").css(`color`, b);
  });

  //click on a list item and it is removed

  $(`#ulList`).on("dblclick", function () {
    $("#li12").remove();
    console.log("click ");
  });
});
