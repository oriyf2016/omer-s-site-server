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
 * מנגנון המודל המורחב לחברי הצוות על סמך נתוני הטקסטים שהגדרת
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
            skin: "https://surgeplay.com",
            colorClass: "rank-owner"
        },
        itamar: {
            title: "איתמר",
            rank: "בנאי",
            desc: "איתמר הוא אדם סביר הטוב בבניות ומוכר בתים בתוך השרת.",
            skin: "https://surgeplay.com",
            colorClass: "rank-builder"
        },
        afek: {
            title: "אפק",
            rank: "הלפר",
            desc: "אפק הוא הלפר זמין נאמן וחברותי המשחק בשרת.",
            skin: "https://surgeplay.com",
            colorClass: "rank-helper"
        },
        ofek: {
            title: "אופק",
            rank: "מודרייטור",
            desc: "אופק הוא אדם תחרותי ומעט מרגיז שמנסה להיות ה'אלוף' של הקהילה. (בקושי זמין)",
            skin: "https://surgeplay.com",
            colorClass: "rank-moderator"
        }
    };

    if (!modal || !modalClose) return;

    staffCards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-staff");
            const data = staffData[id];

            if (data) {
                modalTitle.textContent = data.title;
                modalRank.textContent = data.rank;
                modalDesc.textContent = data.desc;
                modalSkinImg.src = data.skin;

                modalRank.className = "rank-badge";
                
                if (data.colorClass === "rank-owner") { modalRank.style.backgroundColor = "rgba(255, 71, 87, 0.15)"; modalRank.style.color = "#ff4757"; }
                if (data.colorClass === "rank-moderator") { modalRank.style.backgroundColor = "rgba(255, 165, 2, 0.15)"; modalRank.style.color = "#ffa502"; }
                if (data.colorClass === "rank-builder") { modalRank.style.backgroundColor = "rgba(46, 213, 115, 0.15)"; modalRank.style.color = "#2ed573"; }
                if (data.colorClass === "rank-helper") { modalRank.style.backgroundColor = "rgba(30, 144, 255, 0.15)"; modalRank.style.color = "#1e90ff"; }

                modal.classList.add("active");
            }
        });
    });

    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
}
