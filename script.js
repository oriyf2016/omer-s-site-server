document.addEventListener("DOMContentLoaded", () => {
    initIpCopy();
    fetchServerStatus();
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
 * משיכת כמות השחקנים המחוברים בזמן אמת באמצעות ה-API הציבורי של MC-API
 */
function fetchServerStatus() {
    const playerCountElement = document.getElementById("player-count");
    const ipBox = document.getElementById("ip-box");
    
    if (!playerCountElement || !ipBox) return;
    
    const serverIp = ipBox.getAttribute("data-ip");

    // שימוש ב-API חינמי לקבלת נתוני שרת מיינקראפט
    fetch(`https://mcstatus.io{serverIp}`)
        .then(response => response.json())
        .then(data => {
            if (data.online) {
                const onlinePlayers = data.players.online;
                playerCountElement.textContent = `${onlinePlayers} שחקנים מחוברים כרגע`;
            } else {
                playerCountElement.textContent = "השרת בתחזוקה / לא מקוון";
            }
        })
        .catch(err => {
            console.error("לא ניתן היה למשוך נתוני שחקנים:", err);
            playerCountElement.textContent = "כנסו לשחק איתנו!";
        });
}
