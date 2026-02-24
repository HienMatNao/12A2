function updateClock() {
    const now = new Date();

    // Xử lý Giờ : Phút : Giây
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;

    // Xử lý Ngày tháng năm
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('vi-VN', options);
    document.getElementById("date").textContent = dateStr;
}

// Chạy mỗi giây
setInterval(updateClock, 1000);
// Chạy ngay khi load
updateClock();