const correctPassword = "123456";

function verifyPassword() {
    const passwordInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");
    
    if (passwordInput === correctPassword) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("content").style.display = "block";
        localStorage.setItem("logged-in", "true"); // 記住登入狀態
    } else {
        errorMessage.textContent = "❌ Incorrect password. Try again.";
        document.getElementById("password-input").value = "";
    }
}

function logout() {
    document.getElementById("login-page").style.display = "block";
    document.getElementById("content").style.display = "none";
    localStorage.removeItem("logged-in");
    document.getElementById("password-input").value = "";
}

// 頁面載入時檢查是否已登入
window.onload = function() {
    if (localStorage.getItem("logged-in") === "true") {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
};

// 按 Enter 鍵也能登入
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("password-input").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            verifyPassword();
        }
    });
});
