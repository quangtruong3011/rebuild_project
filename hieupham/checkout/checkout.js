let grandTotal = localStorage.getItem("grandTotal");
document.querySelector('.grandTotalShow').innerHTML = grandTotal;

const $buyerNameInp = document.getElementById("buyerNameInp");
const $addressInp = document.getElementById("addressInp");
const $cityInp = document.getElementById("cityInp");
const $phoneNumInp = document.getElementById("phoneNumInp");
const $payLaterBtn = document.getElementById("payLaterBtn");

const $payNowBtn = document.getElementById("payNowBtn");
const $cardNumInp = document.getElementById("cardNumInp");
const $expDateInp = document.getElementById("expDateInp");
const $cvvNumInp = document.getElementById("cvvNumInp");
const $cardNameInp = document.getElementById("cardNameInp");
const $submitBtn = document.getElementById("submitBtn");

$cardNumInp.onchange = function () {
  let cardNum = $cardNumInp.value;
  if (cardNum.length < 16 || cardNum.length > 16) {
    alert("Please enter all 16 numbers!");
  }
};

$cvvNumInp.onchange = function () {
  let cvvNum = $cvvNumInp.value;
  if (cvvNum.length < 3 || cvvNum.length > 3) {
    alert("Please enter all 3 numbers!");
  }
};

$submitBtn.onclick = function (e) {
  e.preventDefault(); //prevent alert from refreshing the page

  const allDetails = {
    buyerName: $buyerNameInp.value,
    address: $addressInp.value,
    city: $cityInp.value,
    phoneNum: $phoneNumInp.value,
    cardNum: $cardNumInp.value,
    cvvNum: $cvvNumInp.value,
    expDate: $expDateInp.value,
    cardName: $cardNameInp.value,
    grandTotal: grandTotal
  };

  if (
    $cardNumInp.value === "" ||
    $cvvNumInp.value === "" ||
    $expDateInp.value === "" ||
    $cardNameInp.value === "" ||
    $cardNumInp.value.length < 16 ||
    $cardNumInp.value.length > 16 ||
    $cvvNumInp.value.length < 3 ||
    $cvvNumInp.value.length > 3 ||
    $buyerNameInp.value === "" ||
    $addressInp.value === "" ||
    $cityInp.value === "" ||
    $phoneNumInp.value === ""
  ) {
    alert("Please fill all required fields!");
  } else {
    localStorage.setItem(
      `online ${$buyerNameInp.value}`,
      JSON.stringify(allDetails)
    );
    console.log(allDetails);

    document.getElementById("popUpWait").style.display = "flex"

    setTimeout(function() {
      document.getElementById("popUpWait").style.display = "none"
    }, 4000)

    setTimeout(function() {
      document.getElementById("popUpCnfrm").style.display = "flex";
    }, 4500)
  }
};

$payNowBtn.onclick = function () {
  document.getElementById("online-form").style.display = "flex";
};

$payLaterBtn.addEventListener("click", () => {
  document.getElementById("online-form").style.display = "none";

  if (
    $buyerNameInp.value === "" ||
    $addressInp.value === "" ||
    $cityInp.value === "" ||
    $phoneNumInp.value === ""
  ) {
    alert("Please fill all required fields!");
  } else {
    let buyerDetails = {
      buyerName: $buyerNameInp.value,
      address: $addressInp.value,
      city: $cityInp.value,
      phoneNum: $phoneNumInp.value,
    };

    localStorage.setItem(
      `offline ${$buyerNameInp.value}`,
      JSON.stringify(buyerDetails)
    );
    console.log(buyerDetails);

    document.getElementById("popUpCnfrm").style.display = "flex";
  }
});