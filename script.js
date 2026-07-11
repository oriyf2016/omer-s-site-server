document.addEventListener("DOMContentLoaded", () => {
    initIpCopy();
    initNavigation();
    initStaffModal();
});

/**
 * מאגר הנתונים המורחב של חברי הצוות לפתיחת חלון מידע
 */
const staffData = {
    ori: {
        title: "אורי",
        rank: "בעלים",
        mcName: "Oriyf2016",
        desc: "אורי הוא בעלי השרת התומך בתכנות וזמינות סבירה וגם תכנת את האתר בו אתם נמצאים!",
        skin: "https://crafatar.com"
    },
    omer: {
        title: "עומר",
        rank: "בעלים",
        mcName: "Binja12345",
        desc: "עומר הוא בעלי השרת שנאמן וזמין זמן רב ואוהב את השרת.",
        skin: "https://crafatar.com"
    },
    itamar: {
        title: "איתמר",
        rank: "בנאי",
        mcName: "itamarSkull",
        desc: "איתמר הוא אדם סביר הטוב בבניות ומוכר בתים בתוך השרת.",
        skin: "https://crafatar.com"
    
