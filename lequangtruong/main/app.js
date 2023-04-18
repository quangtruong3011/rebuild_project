// Thiết lập thời gian kết thúc đếm ngược (định dạng: "Tháng ngày, năm giờ:phút:giây")
var countDownDate = new Date("Jul 1, 2023 00:00:00").getTime();

// Cập nhật đồng hồ đếm ngược mỗi 1 giây
var x = setInterval(function () {

  // Lấy thời gian hiện tại
  var now = new Date().getTime();

  // Tính khoảng cách thời gian giữa thời gian hiện tại và thời gian kết thúc đếm ngược
  var distance = countDownDate - now;

  // Tính toán số ngày, giờ, phút và giây còn lại
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị kết quả trong phần tử có id="countdown"
  document.getElementById("isDays").innerHTML = "-" + days;
  document.getElementById("isHrs").innerHTML = "-" + hours;
  document.getElementById("isMins").innerHTML = "-" + minutes;
  document.getElementById("isSecs").innerHTML = "-" + seconds;



  // Nếu đếm ngược kết thúc, hiển thị thông báo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Đếm ngược đã kết thúc!";
  }
}, 1000);