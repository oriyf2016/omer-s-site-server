document.addEventListener("DOMContentLoaded", () => {
    initIpCopy();
    initNavigation();
    initStaffModal();
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
            toast.classList.add("show");
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

            navButtons.forEach(btn => btn.classList.remove("active"));
            pages.forEach(page => page.classList.remove("active"));

            button.classList.add("active");
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                targetPage.classList.add("active");
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

/**
 * מנגנון המודל המורחב לחברי הצוות (אפק אדמין ואופק הלפר)
 */
function initStaffModal() {
    const staffCards = document.querySelectorAll(".staff-card");
    const modal = document.getElementById("staff-modal");
    const modalClose = document.querySelector(".modal-close");
    
    const modalTitle = document.getElementById("modal-title");
    const modalRank = document.getElementById("modal-rank");
    const modalDesc = document.getElementById("modal-desc");
    const modalSkinImg = document.getElementById("modal-skin-img");

    const staffData = {
        ori: {
            title: "אורי",
            rank: "בעלים",
            desc: "אורי הוא בעלי השרת התומך בתכנות וזמינות סבירה וגם תכנת את האתר בו אתם נמצאים!",
            skin: "https://surgeplay.com",
            colorClass: "rank-owner"
        },
        omer: {
            title: "עומר",
            rank: "בעלים",
            desc: "עומר הוא בעלי השרת שנאמן וזמין זמן רב ואוהב את השרת.",
            skin: "https://surgeplay.com
