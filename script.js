// script.js
const messages = [
    "Em chắc chưa? 🥺",
    "Em thực sự chắc chứ?? 😢",
    "Em khum đồng ý được à? 😭",
    "Đồng ý đi maàa... 🌹",
    "Em suy nghĩ lại đi! 💝",
    "Em mà chọn Không, thì anh rất buồn đấy... 💔",
    "Anh sẽ rất buồn đấy... 😢",
    "Anh sẽ rất rất buồn đấyyyyyy... 😭",
    "Ok fine, anh không hỏi em nữa... 💔",
    "Anh đùa thui, làm ơn chọn Có đi mà, anh năn nỉ! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Thay đổi nội dung nút "Không"
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Làm to nút "Có"
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    // Di chuyển nút "Không" ngẫu nhiên
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'fixed';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Tạo hiệu ứng trái tim bay
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '♥';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    document.querySelector('.floating-hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);