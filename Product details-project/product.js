// const $sizeClothes = document.getElementById('numbers');
// $sizeClothes.onclick = function(){
//     $sizeClothes.style.background = 'black';
//     $sizeClothes.style.color = 'white';
// };

// const $sizeClothes1 = document.getElementById('numbers-1');
// $sizeClothes1.onclick = function(){
//     $sizeClothes1.style.background = 'black';
//     $sizeClothes1.style.color = 'white';
// };

// Chọn size
const size = ['5 kg', '3 kg', '2 kg']
let check = false;
function btn() {
    if (check == false) {
        alert('Vui lòng chọn size')
    } else {
        alert('Mua hàng thành công')
    }
    console.log(check);
};
function chooseSize(id) {
    check = true;
    for (let i = 1; i <= size.length; i++) {
        if (id != i) {
            const myActive = document.getElementById(i);
            myActive.style.backgroundColor = 'white';
            myActive.style.color = 'black';
        }
        else {
            const myActive = document.getElementById(i);
            myActive.style.backgroundColor = 'black';
            myActive.style.color = 'white';
        }
    }

};


// let count = 1;
// function dec() {
//     if (count == 1) {
//     }
//     else {
//         count -= 1;
//         document.getElementById('count').value = count;
//     }
// };
// function inc() {
//     count += 1;
//     document.getElementById('count').value = count;
// };


// Tăng giảm số lượng
let countElement = document.getElementById('count');
let count = countElement.value;

let render = (count) => {
    countElement.value = count;
};
let inc = () => {
    count++;
    render(count);
};
let dec = () => {
    if (count > 1)
        count--;
    render(count);
};

countElement.addEventListener('input', () => {
    count = countElement.value;
    count = parseInt(count);
    count = (isNaN(count) || count == 0) ? 1 : count;
    render(count);
});

// Điền mail theo dõi tin tức
// const inputEmail = document.getElementById('input-email');
// const button = document.getElementById('button');
// button.onclick = function () {
//     let a = inputEmail.value;
//     if (!a) {
//         alert("Vui lòng nhập email")
//     } else if (!sendEmail(a)) {
//         alert("Vui lòng nhập lại email")
//     } else {
//         alert("Đăng kí thành công")
//     }
// };


// function sendEmail(a) {
//     return String(a)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };


// hiển thị chi tiết sản phẩm

