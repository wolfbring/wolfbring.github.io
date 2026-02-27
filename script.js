// 監聽 Enter 鍵，讓使用者輸入密碼後直接按 Enter 就能登入
document.getElementById('password-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        verifyPassword();
    }
});

function verifyPassword() {
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const loginPage = document.getElementById('login-page');
    const content = document.getElementById('content');

    // 這裡設定你的進入密碼 (假設為 "wolf123")
    const correctPassword = "1234";

    if (passwordInput.value === correctPassword) {
        // 驗證成功：隱藏登入頁，顯示內容
        loginPage.style.display = 'none';
        content.style.display = 'block';
        errorMessage.innerText = ""; // 清空錯誤訊息
        passwordInput.value = "";    // 清空密碼框
    } else {
        // 驗證失敗：顯示錯誤提示
        errorMessage.innerText = "Wrong password, stranger. The pack doesn't recognize you.";
        passwordInput.classList.add('shake'); // 可以在 CSS 加入震動效果
        setTimeout(() => passwordInput.classList.remove('shake'), 500);
    }
}

function logout() {
    // 登出：隱藏內容，顯示登入頁
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('content').style.display = 'none';
}
