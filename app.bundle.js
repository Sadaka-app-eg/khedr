// تشغيل واجهة المنصة مباشرة داخل الذاكرة
fetch("app.view.html")
  .then((res) => res.text())
  .then((html) => {
    document.open();
    document.write(html);
    document.close();
  })
  .catch((err) => console.error("Error loading app view:", err));
