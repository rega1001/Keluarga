const panels = document.querySelectorAll('.panel');
const sections = document.querySelectorAll('.content-section');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
    // Hapus status aktif dari semua panel dan konten
    panels.forEach(p => p.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    // Aktifkan panel dan konten yang diklik
    const targetId = panel.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
    panel.classList.add('active');
    });
});

// document.addEventListener('contextmenu', event => event.preventDefault());
// document.addEventListener('keydown', function(e) {
//     if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
//       e.preventDefault();
//     }
//   });