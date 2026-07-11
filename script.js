// מאגר המידע המורחב על השחקנים לפי הדרישות החדשות
const staffData = {
    "owner-omer": {
        title: "עומר",
        rank: "בעלים",
        skin: "https://crafatar.com",
        desc: "עומר הוא בעלי השרת שנאמן וזמין זמן רב ואוהב את השרת."
    },
    "owner-ori": {
        title: "אורי",
        rank: "בעלים",
        skin: "https://crafatar.com",
        desc: "אורי הוא בעלי השרת התומך בתכנות וזמינות סבירה וגם תכנת את האתר בו אתם נמצאים!"
    },
    "builder-itamar": {
        title: "איתמר",
        rank: "בנאי",
        skin: "https://crafatar.com",
        desc: "איתמר הוא אדם סביר הטוב בבניות ומוכר בתים בתוך השרת."
    },
    "helper-afek": {
        title: "אפק",
        rank: "הלפר",
        skin: "https://crafatar.com",
        desc: "אפק הוא הלפר זמין נאמן וחברותי המשחק השרת."
    },
    "member-ofek": {
        title: "אופק",
        rank: "שחקן קהילה",
        skin: "https://crafatar.com",
        desc: "אופק הוא אדם תחרותי ומעט מרגיז שמנסה להיות ה\"אלוף\" של הקהילה."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    initIpCopy();
    initNavigation();
    initStaffModal();
});

function initIpCopy() {
    const ipBox = document.getElementById("ip-box");
    const toast = document.getElementById("toast");
    if (!ipBox || !toast) return;

    ipBox.addEventListener("click", () => {
        const ipText = ipBox.getAttribute("data-ip");
        navigator.clipboard.writeText(ipText).then(() => {
            toast.classList.add("show");
            setTimeout(() => { toast.classList.remove("show"); }, 3000);
        });
    });
}

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
            if (targetPage) targetPage.classList.add("active");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function initStaffModal() {
    const cards = document.querySelectorAll(".staff-card");
    const modal = document.getElementById("staff-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    
    const mImg = document.getElementById("modal-skin-img");
    const mTitle = document.getElementById("modal-title");
    const mBadge = document.getElementById("modal-badge");
    const mDesc = document.getElementById("modal-description");

    if (!modal || !closeBtn) return;

    cards.forEach
