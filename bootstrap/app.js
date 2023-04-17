// Login & Register
// Register
// Kiểm tra email
function vaildateEmail() {
    const email = document.getElementById("users-email").value;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(email)) {
        return true;
    } else {
        alert("Please enter a valid email address");
    }
}
// Kiểm tra password
function vaildatePassword() {
    const password = document.getElementById("users-pwd").value;
    // Kiểm tra chiều dài password
    if (password.length < 8 || password.length > 64) {
        alert("Password length must be at least 8 characters and up to 64 characters, the password should include uppercase and lowercase characters, numbers and special characters.");
    }

    // Kiểm tra có ít nhất một chữ cái in hoa và một chữ cái thường
    else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        alert("Password length must be at least 8 characters and up to 64 characters, the password should include uppercase and lowercase characters, numbers and special characters.");
    }

    // Kiểm tra có ít nhất một số
    else if (!/\d/.test(password)) {
        alert("Password length must be at least 8 characters and up to 64 characters, the password should include uppercase and lowercase characters, numbers and special characters.");
    }

    // Kiểm tra có ít nhất một ký tự đặc biệt
    else if (!/[\W_]/.test(password)) {
        alert("Password length must be at least 8 characters and up to 64 characters, the password should include uppercase and lowercase characters, numbers and special characters.");
    }

    // Password hợp lệ
    return true;
}
// Kiểm tra lại password
function confirmPassword() {
    const password = document.getElementById("users-pwd").value;
    const confirmPassword = document.getElementById("users-confirm-pwd").value;
    if (password != confirmPassword) {
        alert("Password does not match");
    }
    return true;
}
// Kiểm tra checkbox
function checkAgreeTerms() {
    var checkBox = document.getElementById("agree-terms");
    if (checkBox.checked == true) {
        // Người dùng đã chọn checkbox
        return true;
        // Thực hiện các hành động khác tùy thuộc vào yêu cầu của bạn
    } else {
        // Người dùng chưa chọn checkbox
        alert("Please agree to the terms and conditions");
        // Thực hiện các hành động khác tùy thuộc vào yêu cầu của bạn
    }
}
// Đưa vào localStorage
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
    const username = document.getElementById("users-name").value;
    const email = document.getElementById("users-email").value;
    const password = document.getElementById("users-pwd").value;

    // Check if the user has agreed to the terms and conditions
    const agreeTerms = document.getElementById("agree-terms").checked;
    if (!agreeTerms) {
        alert("Please agree to the terms and conditions");
        return;
    }

    // Save user data to localStorage
    const userData = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("User registered successfully!");
});

// Đăng nhập
// Lấy dữ liệu từ localStorage
const userData = JSON.parse(localStorage.getItem("userData"));
function login() {
    const email = document.getElementById("inp-email").value;
    const password = document.getElementById("inp-password").value;
    if (email === userData.email && password === userData.password) {
        window.location.href = "main.html";
    } else {
        alert("Wrong email or password");
    }
}
