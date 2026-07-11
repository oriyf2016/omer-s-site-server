document.addEventListener("DOMContentLoaded", () => {
    initIpCopy();
    initNavigation();
});

/**
 * מנגנון העתקת כתובת השרת בלחיצה אחת מלווה בהתראה קופצת
 */
function initIpCopy() {
    const ipBox = document.getElementById("ip-box");
    const toast = document.getElementById("toast");

    if (!ipBox || !toast) return;

    ipBox.addEventListener("click", () => {
        const ipText = ipBox.getAttribute("data-ip");
        
        navigator.clipboard.writeText(ipText).then(() => {
            // הצגת ההתראה באפקט כניסה חלק
            toast.classList.add("show");
            
            // העלמת ההתראה לאחר 3 שניות
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        }).catch(err => {
            console.error("שגיאה בתהליך העתקת הכתובת: ", err);
        });
    });
}

/**
 * מנגנון החלפת עמודים אמיתי (SPA) ללא צורך בגלילה
 */
function initNavigation() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page-content");

    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            
            const targetPageId = button.getAttribute("data-target");

            // הסרת מחלקת active מכל הכפתורים והעמודים
            navButtons.forEach(btn => btn.classList.remove("active"));
            pages.forEach(page => page.classList.remove("active"));

            // הוספת מחלקת active לכפתור ולעמוד שנבחרו
            button.classList.add("active");
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                targetPage.classList.add("active");
            }
            
            // גלילה אוטומטית לראש העמוד למקרה שהמשתמש היה למטה
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}
