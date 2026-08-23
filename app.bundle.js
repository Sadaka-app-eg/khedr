
<!-- ============ TRANSLATIONS & UI LOGIC ============ -->
<script>
const translations = {
  ar: {
    brand: "KHEDR & PHYSIO",
    nav_home: "الرئيسية",
    nav_years: "الفرق الدراسية",
    nav_courses: "الكورسات والباقات",
    nav_features: "مميزات المنصة",
    nav_honors: "لوحة الشرف",
    nav_instructor: "عن الشارح",
    hero_eyebrow: "محمود خضر — شارح ومدرس للمواد الطبية والأكاديمية بكلية العلاج الطبيعي بخبرة سنتين في التدريس الشامل",   
    hero_title: "رحلتك بتبدأ مع <span class='text-amber-300'>خِـضـر</span><br/>خُد أول خطوة.. وأنت واثق",
    hero_sub: "تجربة تعليمية متكاملة تستحق تبدأ بيها لأن كل تفصيلة مصممة علشانك",
    hero_cta1: "سجل وخد أول خطوة",
    hero_footer_note: "منصة خِضر: أفضل منصة تعليمية مخصصة لطلاب علاج طبيعي",
    years_eyebrow: "المسارات الجامعية",
    years_title: "السنوات الدراسية",
    years_sub: "احجز اشتراكك دلوقتي وابدأ مذاكرة مقررات الفرقة الأولى والثانية على موبايلك، التابلت أو اللابتوب الخاص بيك.",
    year1_title: "الفرقة الأولى",
    year1_desc: "Anatomy, Physiology, Histology, Intro to Biomechanics, Biophysics.",
    year2_title: "الفرقة الثانية",
    year2_desc: "Biomechanics, Electrotherapy, Hydrotherapy, Kinesiology, Pathology.",
    btn_enter_year1: "دخول مقررات الفرقة الأولى ←",
    btn_enter_year2: "دخول مقررات الفرقة الثانية ←",
    btn_years_cta: "انشئ حسابك الآن",
    courses_eyebrow: "مكتبة المقررات والترم الأول",
    courses_title: "الكورسات والباقات المتاحة",
    flt_all: "الكل",
    flt_y1: "سنة أولى",
    flt_y2: "سنة ثانية",
    flt_pkg: "الباقات الموفرة",
    feat_eyebrow: "لماذا منصتنا؟",
    feat_title: "إيه اللي هتلاقيه على المنصة؟",
    f1_title: "شرح مبسط ومركز",
    f1_desc: "شرح النظريات والمفاهيم الطبية بطريقة الفهم الإكلينيكي بعيد عن التعقيد الأكاديمي.",
    f2_title: "نماذج امتحانات بنفس النظام",
    f2_desc: "امتحانات MCQ وOSCE تفاعلية بنفس شكل الامتحانات الجامعية علشان تعيش جو الامتحان.",
    f3_title: "متابعة دورية وتقييم مستمر",
    f3_desc: "تقدمك بيتراجع أسبوعياً وبنقدملك توصيات حسب نقاط ضعفك ومتابعة أول بأول.",
    honor_title: "أوائل خِـــضـر",
    honor_sub: "أسماء وصلت لأعلى التقديرات والدرجات في كليات العلاج الطبيعي، ودي حصيلة سنين من الشرح والمتابعة",
    h1: "طالب بتقدير امتياز",
    h2: "الأول على دفعته",
    h3: "دفعات 2021 - 2026",
    h4: "نسبة اجتياز الـ OSCE",
    rev_title: "طلاب قالوا إيه عنا؟",
    r1_text: "\"بعد ما انضميت للمنصة مع دكتور خضر، بقيت أفهم الميكانيكا الحيوية من أول محاضرة بدل الحفظ.\"",
    inst_eyebrow: "عن الشارح ومؤسس المنصة",
    inst_name: "محمود خضر",
    inst_bio: "شارح ومدرس للمواد الطبية والأكاديمية بكلية العلاج الطبيعي بخبرة سنتين في التدريس الشامل، يركز على تقديم شرح مبسط، منظم، وعملي يساعد الطلاب على فهم الأساسيات والتطبيق والتجهيز بثقة للامتحانات.",
    auth_tab_login: "تسجيل الدخول",
    auth_tab_register: "حساب جديد",
    auth_name: "الاسم بالكامل (ثلاثي كما بالبطاقة)",
    auth_phone: "رقم الهاتف (واتساب)",
    auth_year: "الفرقة الدراسية",
    auth_email: "البريد الإلكتروني",
    auth_password: "كلمة المرور (6 حروف أو أرقام على الأقل)",
    auth_login_btn: "تسجيل الدخول",
    auth_register_btn: "إنشاء الحساب وبدء التعلم 🚀",
    auth_back_home: "اضغط على اللوجو للعودة للرئيسية",
    opt_y1: "الفرقة الأولى (First Year)",
    opt_y2: "الفرقة الثانية (Second Year)",
    support_text: "تيم الدعم الفني متاح للمساعدة",
    foot_about: "المنصة التعليمية الأولى المتخصصة لطلاب وخريجي العلاج الطبيعي لتبسيط العلوم الحركية والإكلينيكية.",
    foot_pages: "الصفحات",
    foot_social: "السوشيال ميديا",
    foot_contact: "تواصل معنا",
    foot_fb: "فيسبوك",
    foot_ig: "انستجرام",
    foot_tt: "تيك توك",
    foot_yt: "يوتيوب",
    foot_li: "لينكد إن",
    foot_support_team: "تيم الدعم الفني",
    menu_student_dash: "لوحة تحكم الطالب",
    menu_admin_dash: "لوحة المشرف",
    menu_logout: "تسجيل الخروج",
    foot_rights: "جميع الحقوق محفوظة © 2026 KHEDR & PHYSIO"
  },
  en: {
    brand: "KHEDR & PHYSIO",
    nav_home: "Home",
    nav_years: "Academic Years",
    nav_courses: "Courses & Packages",
    nav_features: "Features",
    nav_honors: "Honor Board",
    nav_instructor: "Instructor",
    hero_eyebrow: "Mahmoud Khedr — Physiotherapy Instructor",
    hero_title: "Your Journey Starts with <span class='text-amber-300'>KHEDR</span><br/>Take the First Step with Confidence",
    hero_sub: "A complete educational experience designed specifically for physical therapy students.",
    hero_cta1: "Sign Up & Start",
    hero_footer_note: "Khedr Platform: The premier educational platform for physical therapy students",
    years_eyebrow: "University Tracks",
    years_title: "Academic Years & Levels",
    years_sub: "Enroll now and start studying physical therapy subjects on your mobile, tablet, or laptop.",
    year1_title: "First Year",
    year1_desc: "Anatomy, Physiology, Histology, Intro to Biomechanics, Biophysics.",
    year2_title: "Second Year",
    year2_desc: "Biomechanics, Electrotherapy, Hydrotherapy, Kinesiology, Pathology.",
    btn_enter_year1: "Enter Year 1 Courses →",
    btn_enter_year2: "Enter Year 2 Courses →",
    btn_years_cta: "Create Your Account",
    courses_eyebrow: "Courses & First Term Library",
    courses_title: "Available Courses & Packages",
    flt_all: "All",
    flt_y1: "Year 1",
    flt_y2: "Year 2",
    flt_pkg: "Bundles",
    feat_eyebrow: "Why Our Platform?",
    feat_title: "What You'll Find on the Platform",
    f1_title: "Simplified Clinical Learning",
    f1_desc: "Medical theories explained with clinical understanding away from academic complexity.",
    f2_title: "Realistic Exam Simulations",
    f2_desc: "Interactive MCQ and OSCE exams mimicking real university exam environments.",
    f3_title: "Continuous Progress Tracking",
    f3_desc: "Weekly progress reviews with personalized recommendations for your weak areas.",
    honor_title: "Top Khedr Alumni",
    honor_sub: "Students who achieved top honors in physical therapy faculties after years of dedication",
    h1: "Excellence Students",
    h2: "Top of Batch",
    h3: "Batches 2021 - 2026",
    h4: "OSCE Pass Rate",
    rev_title: "What Students Say",
    r1_text: "\"After joining Dr. Khedr's platform, Biomechanics became crystal clear from lecture one.\"",
    inst_eyebrow: "About The Tutor & Founder",
    inst_name: "Mahmoud Khedr",
    inst_bio: "Physiotherapy student and medical instructor with 2 years of comprehensive teaching experience, focusing on structured, simplified clinical education.",
    auth_tab_login: "Log In",
    auth_tab_register: "New Account",
    auth_name: "Full Name (as in National ID)",
    auth_phone: "Phone Number (WhatsApp)",
    auth_year: "Academic Year",
    auth_email: "Email Address",
    auth_password: "Password (at least 6 characters)",
    auth_login_btn: "Log In",
    auth_register_btn: "Create Account & Start Learning 🚀",
    auth_back_home: "Click Logo to Return Home",
    opt_y1: "First Year",
    opt_y2: "Second Year",
    support_text: "Technical Support Team Available",
    foot_about: "The premier educational platform for physical therapy students and graduates.",
    foot_pages: "Pages",
    foot_social: "Social Media",
    foot_contact: "Contact Us",
    foot_fb: "Facebook",
    foot_ig: "Instagram",
    foot_tt: "TikTok",
    foot_yt: "YouTube",
    foot_li: "LinkedIn",
    foot_support_team: "Support Team",
    menu_student_dash: "Student Dashboard",
    menu_admin_dash: "Admin Dashboard",
    menu_logout: "Log Out",
    foot_rights: "All Rights Reserved © 2026 KHEDR & PHYSIO"
  }
};





window.openAuthView = function(tab = 'login') {
  const authSec = document.getElementById("authSection");
  if (authSec) {
    authSec.classList.remove("hidden");
    setAuthTab(tab);
    document.body.style.overflow = "hidden"; // منع التمرير في الصفحة الخلفية
  }
};

window.closeAuthView = function() {
  const authSec = document.getElementById("authSection");
  if (authSec) {
    authSec.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
};

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // 1. ترجمة العناصر ذات الوسم data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict && dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 2. تحديث الحقول النصية (Placeholders)
  if (lang === "en") {
    const regName = document.getElementById("regName");
    if (regName) regName.placeholder = "e.g. Mahmoud Ahmed Khedr";
  } else {
    const regName = document.getElementById("regName");
    if (regName) regName.placeholder = "مثال: محمود أحمد خضر";
  }

  // 3. ترجمة أزرار الفلاتر
  const fltAll = document.getElementById("flt-all");
  const fltY1 = document.getElementById("flt-y1");
  const fltY2 = document.getElementById("flt-y2");
  const fltPkg = document.getElementById("flt-pkg");

  if (fltAll) fltAll.textContent = dict.flt_all || "All";
  if (fltY1) fltY1.textContent = dict.flt_y1 || "Year 1";
  if (fltY2) fltY2.textContent = dict.flt_y2 || "Year 2";
  if (fltPkg) fltPkg.textContent = dict.flt_pkg || "Bundles";

  // 4. تحديث زر الـ CTA
  const yearsCta = document.getElementById("yearsCtaBtn");
  if (yearsCta) {
    if (window.isUserLoggedIn) {
      yearsCta.textContent = lang === "en" ? "Explore Courses 📚" : "تصفح المقررات الدراسية 📚";
    } else {
      yearsCta.textContent = dict.btn_years_cta || "انشئ حسابك الآن";
    }
  }

  const langLabel = document.getElementById("langLabel");
  if (langLabel) langLabel.textContent = lang === "ar" ? "EN" : "AR";

  // 5. إعادة رسم الكتالوج فوراً
  renderCatalog();
}
function toggleLanguage() {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

// دالة فتح وإغلاق القائمة مع تدوير الأيقونة
window.toggleDrawer = function() {
  const drawer = document.getElementById("drawer");
  const iconBars = document.getElementById("iconBars");
  const iconAtom = document.getElementById("iconAtom");
  if (!drawer) return;

  const isClosed = drawer.classList.contains("hidden");
  drawer.classList.toggle("hidden", !isClosed);
  
  if (iconBars && iconAtom) {
    if (isClosed) {
      // عند الفتح: إخفاء الـ 3 شرط وإظهار النجمة الدوارة
      iconBars.classList.add("hidden");
      iconAtom.classList.remove("hidden");
    } else {
      // عند الإغلاق: إعادة الـ 3 شرط
      iconBars.classList.remove("hidden");
      iconAtom.classList.add("hidden");
    }
  }
};

window.handleLogoutClick = async function() {
  if (window.authInstance) {
    await window.authInstance.signOut();
    localStorage.removeItem("khedr_user_active");
    location.reload();
  }
};

function setAuthTab(tab) {
  const isLogin = tab === "login";
  document.getElementById("loginForm").classList.toggle("hidden", !isLogin);
  document.getElementById("registerForm").classList.toggle("hidden", isLogin);
  document.getElementById("registerForm").classList.toggle("flex", !isLogin);
  document.getElementById("tabLoginBtn").classList.toggle("active", isLogin);
  document.getElementById("tabRegisterBtn").classList.toggle("active", !isLogin);

  // إغلاق نموذج استعادة كلمة المرور لو كان مفتوحاً
  const forgotForm = document.getElementById("forgotPasswordForm");
  if (forgotForm) {
    forgotForm.classList.add("hidden");
    forgotForm.classList.remove("flex");
  }

  const tabsNav = document.getElementById("authTabsNav");
  if (tabsNav) tabsNav.classList.remove("hidden");
}

window.openForgotPasswordView = function() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("flex");

  const forgotForm = document.getElementById("forgotPasswordForm");
  forgotForm.classList.remove("hidden");
  forgotForm.classList.add("flex");

  // إخفاء تبويبات دخول/تسجيل مؤقتاً عشان التركيز على نموذج الاستعادة
  const tabsNav = document.getElementById("authTabsNav");
  if (tabsNav) tabsNav.classList.add("hidden");

  // تصفير أي رسائل قديمة
  document.getElementById("forgotError").classList.add("hidden");
  document.getElementById("forgotSuccess").classList.add("hidden");
};

window.closeForgotPasswordView = function() {
  setAuthTab("login");
};

function animateCount(el) {
  const target = parseInt(el.getAttribute("data-count"), 10);
  const duration = 1200;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(progress * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

window.addEventListener('scroll', () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const bar = document.getElementById('scrollProgress');
  if (bar) bar.style.width = scrolled + '%';
});
window.catalogData = {
  c_medterm: {
    id: "c_medterm",
    type: "single",
    year: "all",
    code: { ar: "عام", en: "Gen" },
    category: { ar: "متاح لجميع الفرق • أساسيات طبية", en: "All Years • Medical Basics" },
    title: { ar: "Medical Terminology — كورس المصطلحات الطبية", en: "Medical Terminology Course" },
    desc: { ar: "تعلم أصول المصطلحات الطبية (Prefix, Root, Suffix) مع تطبيقات سريرية.", en: "Master medical roots, prefixes, suffixes & clinical medical jargon." },
    badge: { ar: "متاح للجميع 🎓", en: "Available for All 🎓" },
    price: "399",
    oldPrice: "550.00",
    img: "image/med_term.png",
    lessons: []
  },
  pkg_y1s1: {
    id: "pkg_y1s1",
    type: "package",
    year: "y1",
    category: { ar: "الفرقة الأولى • ترم أول كامل", en: "Year 1 • Full Semester 1" },
    title: { ar: "باقة الفرقة الأولى (الترم الأول كامل - 4 مواد)", en: "Year 1 Full Bundle (4 Specialized Courses)" },
    sub: { ar: "تشمل Anatomy 1, Physiology 1, Histology 1, Biophysics 1 بالكامل مع ورش العملي وبنك الأسئلة.", en: "Complete bundle including Anatomy, Physiology, Histology & Biophysics with OSCE workshops." },
    badge: { ar: "وفر 400 ج 🔥", en: "Save 400 EGP 🔥" },
    price: "1,499",
    oldPrice: "1,899.00",
    img: "image/pkg_y1s1.png",
    courses: [
      { name: "Anatomy 1 (تشريح عام وأطراف)", desc: "Terminology, Bones, Muscles & Limb Anatomy", id: "c_anat1" },
      { name: "Physiology 1 (وظائف الأعضاء)", desc: "Cell, Homeostasis, Blood & CVS", id: "c_phys1" },
      { name: "Histology 1 (علم الأنسجة)", desc: "Epithelial, Connective & Muscle Tissues", id: "c_hist1" },
      { name: "Biophysics 1 (الفيزياء الحيوية)", desc: "Mechanics, Heat, Sound & Electricity", id: "c_bioph1" }
    ]
  },
  pkg_y2s1: {
    id: "pkg_y2s1",
    type: "package",
    year: "y2",
    category: { ar: "الفرقة الثانية • ترم أول كامل", en: "Year 2 • Full Semester 1" },
    title: { ar: "باقة الفرقة الثانية (الترم الأول كامل - 6 مواد)", en: "Year 2 Full Bundle (6 Specialized Courses)" },
    sub: { ar: "تشمل Anatomy 3, Biomechanics 2, Hydrotherapy, Electrotherapy, Tests & Measurements, Neurophysiology.", en: "Includes Anatomy 3, Biomechanics 2, Hydro, Electro, Tests & Neurophysiology." },
    badge: { ar: "وفر 895 ج 🔥", en: "Save 895 EGP 🔥" },
    price: "2,499",
    oldPrice: "3,394.00",
    img: "image/pkg_y2s1.png",
    courses: [
      { name: "Anatomy 3 (تشريح تخصصي)", desc: "Head, Neck, Trunk & Nervous System", id: "c_anat3" },
      { name: "Biomechanics 2 (ميكانيكا حيوية)", desc: "Upper/Lower Limb, Spine & Gait", id: "c_biomech2" },
      { name: "Hydrotherapy (علاج مائي)", desc: "Buoyancy & Hydrodynamics", id: "c_hydro" },
      { name: "Electrotherapy (علاج كهربائي)", desc: "TENS, NMES, Ultrasound & Safety", id: "c_electro" },
      { name: "Tests & Measurements (تقييم وقياسات)", desc: "ROM, Goniometry & MMT", id: "c_tests" },
      { name: "Neurophysiology (فسيولوجيا عصبية)", desc: "Synapse, Reflexes & Motor Control", id: "c_neuro" }
    ]
  },
  c_anat1: {
    id: "c_anat1",
    type: "single",
    year: "y1",
    code: { ar: "1ع", en: "Y1" },
    category: { ar: "الفرقة الأولى • ترم أول", en: "Year 1 • Term 1" },
    title: { ar: "Anatomy 1 — كورس التشريح العام", en: "Anatomy 1 — General Anatomy Course" },
    desc: { ar: "دراسة شاملة لـ Anatomical position, Planes, Bones, Joints, Muscles, Upper & Lower limbs.", en: "Comprehensive study of Anatomical Planes, Bones, Joints, Muscular System & Extremities." },
    price: "599",
    oldPrice: "750.00",
    img: "image/anatomy1.png",
    lessons: []
  },
  c_phys1: {
    id: "c_phys1",
    type: "single",
    year: "y1",
    code: { ar: "1ع", en: "Y1" },
    category: { ar: "الفرقة الأولى • ترم أول", en: "Year 1 • Term 1" },
    title: { ar: "Physiology 1 — وظائف الأعضاء", en: "Physiology 1 — General Physiology" },
    desc: { ar: "تغطية شاملة لـ Cell physiology, Homeostasis, Blood, CVS, Respiratory system.", en: "Full coverage of Cell physiology, Homeostasis, Blood & Cardiovascular system." },
    price: "499",
    oldPrice: "599.00",
    img: "image/physiology1.png",
    lessons: []
  },
  c_hist1: {
    id: "c_hist1",
    type: "single",
    year: "y1",
    code: { ar: "1ع", en: "Y1" },
    category: { ar: "الفرقة الأولى • ترم أول", en: "Year 1 • Term 1" },
    title: { ar: "Histology 1 — علم الأنسجة", en: "Histology 1 — General Histology" },
    desc: { ar: "دراسة Cell structure, Epithelial tissue, Connective tissue, Muscle tissue.", en: "Study of Cell structure, Epithelial tissue, Connective tissue & Muscular tissue." },
    price: "399",
    oldPrice: "550.00",
    img: "image/histology1.png",
    lessons: []
  },
  c_bioph1: {
    id: "c_bioph1",
    type: "single",
    year: "y1",
    code: { ar: "1ع", en: "Y1" },
    category: { ar: "الفرقة الأولى • ترم أول", en: "Year 1 • Term 1" },
    title: { ar: "Biophysics 1 — الفيزياء الحيوية", en: "Biophysics 1 — Medical Biophysics" },
    desc: { ar: "تطبيقات Mechanics, Pressure, Heat, Light, Sound في العلاج الطبيعي.", en: "Applications of Mechanics, Heat, Light & Electricity in Physical Therapy." },
    price: "399",
    oldPrice: "550.00",
    img: "image/biophysics1.png",
    lessons: []
  },
  c_anat3: {
    id: "c_anat3",
    type: "single",
    year: "y2",
    code: { ar: "2ع", en: "Y2" },
    category: { ar: "الفرقة الثانية • ترم أول", en: "Year 2 • Term 1" },
    title: { ar: "Anatomy 3 — التشريح المتقدم", en: "Anatomy 3 — Advanced Regional Anatomy" },
    desc: { ar: "تشريح Head & neck, Trunk, Nervous system, Major nerves & vessels.", en: "Detailed anatomy of Head, Neck, Trunk & Neuroanatomy." },
    price: "599",
    oldPrice: "650.00",
    img: "image/anatomy3.png",
    lessons: []
  },
  c_biomech2: {
    id: "c_biomech2",
    type: "single",
    year: "y2",
    code: { ar: "2ع", en: "Y2" },
    category: { ar: "الفرقة الثانية • ترم أول", en: "Year 2 • Term 1" },
    title: { ar: "Biomechanics 2 — الميكانيكا الحيوية 2", en: "Biomechanics 2 — Advanced Kinesiology" },
    desc: { ar: "تحليل مفاصل Shoulder, Elbow, Wrist, Hip, Knee, Ankle, Spine, Gait.", en: "Kinematic and kinetic analysis of Peripheral Joints, Spine & Gait Cycle." },
    price: "599",
    oldPrice: "750.00",
    img: "image/biomechanics2.png",
    lessons: []
  },
  c_hydro: {
    id: "c_hydro",
    type: "single",
    year: "y2",
    code: { ar: "2ع", en: "Y2" },
    category: { ar: "الفرقة الثانية • ترم أول", en: "Year 2 • Term 1" },
    title: { ar: "Hydrotherapy — العلاج المائي", en: "Hydrotherapy — Aquatic Physical Therapy" },
    desc: { ar: "دراسة Buoyancy, Hydrostatic pressure, Hydrodynamics, Exercises.", en: "Hydrodynamics, buoyancy, aquatic techniques & therapeutic pools." },
    price: "499",
    oldPrice: "600.00",
    img: "image/hydrotherapy.png",
    lessons: []
  },
  c_electro: {
    id: "c_electro",
    type: "single",
    year: "y2",
    code: { ar: "2ع", en: "Y2" },
    category: { ar: "الفرقة الثانية • ترم أول", en: "Year 2 • Term 1" },
    title: { ar: "Electrotherapy — العلاج الكهربائي", en: "Electrotherapy — Clinical Modalities" },
    desc: { ar: "أجهزة TENS, NMES, Ultrasound, Parameters & Safety.", en: "TENS, NMES, Ultrasound parameters, indications and safety protocols." },
    price: "399",
    oldPrice: "500.00",
    img: "image/electrotherapy.png",
    lessons: []
  },
  c_tests: {
    id: "c_tests",
    type: "single",
    year: "y2",
    code: { ar: "2ع", en: "Y2" },
    category: { ar: "الفرقة الثانية • ترم أول", en: "Year 2 • Term 1" },
    title: { ar: "Tests & Measurements — التقييم والقياسات", en: "Tests & Measurements — Physical Assessment" },
    desc: { ar: "تطبيقات ROM, Goniometry, MMT, Anthropometry, Functional tests.", en: "Clinical assessment of ROM, Goniometry, MMT and functional tests." },
    price: "599",
    oldPrice: "650.00",
    img: "image/tests_measurements.png",
    lessons: []
  },
  c_neuro: {
    id: "c_neuro",
    type: "single",
    year: "y2",
    code: { ar: "2ع", en: "Y2" },
    category: { ar: "الفرقة الثانية • ترم أول", en: "Year 2 • Term 1" },
    title: { ar: "Neurophysiology — الفسيولوجيا العصبية", en: "Neurophysiology — Clinical Neurophysiology" },
    desc: { ar: "دراسة Neuron, Synapse, Sensory & Motor systems, Reflexes.", en: "Action potentials, neuromuscular transmission, motor pathways & reflexes." },
    price: "499",
    oldPrice: "650.00",
    img: "image/neurophysiology.png",
    lessons: []
  }
};

let currentFilter = "all";
window.currentItemData = null;
let currentOpenedPkgId = "pkg_y1s1";

// دوال تكبير الصورة
window.openImageLightbox = function(imgSrc) {
  const modal = document.getElementById("imageLightboxModal");
  const img = document.getElementById("lightboxImg");
  if (modal && img) {
    img.src = imgSrc;
    modal.classList.remove("hidden");
  }
};

window.closeImageLightbox = function() {
  const modal = document.getElementById("imageLightboxModal");
  if (modal) modal.classList.add("hidden");
};

// إغلاق النافذة عند الضغط في الخلفية
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageLightboxModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeImageLightbox();
    });
  }
});

function renderCatalog() {
  const container = document.getElementById("coursesSlider");
  if (!container) return;

  const lang = currentLang; // "ar" أو "en"
  const isEn = lang === "en";

  // 1. فلترة العناصر حسب القسم المختار
  let items = Object.values(window.catalogData).filter(item => {
    if (currentFilter === "all") return true;
    if (currentFilter === "pkg") return item.type === "package";
    if (currentFilter === "y1") return item.year === "y1" || item.year === "all";
    if (currentFilter === "y2") return item.year === "y2" || item.year === "all";
    return true;
  });

  // 2. الفرز الذكي: رفع الكورسات المشترك بها الطالب لتظهر أولاً في البداية تلقائياً
  items.sort((a, b) => {
    const aEnrolled = a.isEnrolled ? 1 : 0;
    const bEnrolled = b.isEnrolled ? 1 : 0;
    return bEnrolled - aEnrolled; // المشترك فيه (1) يسبق غير المشترك (0)
  });

  if (items.length === 0) {
    container.innerHTML = `<div class="w-full text-center py-12 text-slate-400 font-bold">${isEn ? 'No courses available.' : 'لا توجد كورسات متاحة.'}</div>`;
    return;
  }

  container.innerHTML = items.map(item => {
    const isPkg = item.type === "package";
    const codeBadge = isPkg ? "⭐" : (typeof item.code === "object" ? item.code[lang] : item.code);
    
    // استخراج النصوص حسب اللغة المحددة
    const titleText = typeof item.title === "object" ? item.title[lang] : item.title;
    const categoryText = typeof item.category === "object" ? item.category[lang] : item.category;
    const descText = isPkg 
      ? (typeof item.sub === "object" ? item.sub[lang] : item.sub)
      : (typeof item.desc === "object" ? item.desc[lang] : item.desc);
    const badgeText = item.badge ? (typeof item.badge === "object" ? item.badge[lang] : item.badge) : "";
    
    const priceText = `${item.price} ${isEn ? 'EGP' : 'ج.م'}`;
    const oldPriceText = `${item.oldPrice} ${isEn ? 'EGP' : 'ج.م'}`;

    return `
      <article class="min-w-[300px] sm:min-w-[340px] md:min-w-[370px] max-w-[370px] shrink-0 snap-start card-hover rounded-3xl overflow-hidden border ${isPkg ? "border-brand shadow-rose-950/20" : "border-slate-800"} bg-[#0F1D2D] p-3.5 shadow-2xl flex flex-col justify-between relative transition-all duration-300">
        
        <!-- صورة الكورس بدون أي نصوص أو طبقات عند التمرير -->
        <div onclick="openImageLightbox('${item.img}')" class="rounded-2xl overflow-hidden relative aspect-[4/3] w-full bg-[#07111D] border border-slate-700/50 flex items-center justify-center cursor-pointer">
          ${badgeText ? `<span class="absolute top-2.5 start-2.5 z-10 text-[10px] font-black bg-amber-400 text-slate-900 px-2.5 py-1 rounded-md shadow-md">${badgeText}</span>` : ""}
          <img src="${item.img}" alt="${titleText}" class="w-full h-full object-cover object-top rounded-xl hover:scale-105 transition duration-300" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');" />          
          <div class="hidden flex flex-col items-center justify-center text-center p-4 text-rose-300">
            <span class="text-3xl mb-1">${isPkg ? '📦' : '🩺'}</span>
            <span class="font-bold text-xs">${titleText}</span>
          </div>
        </div>

        <div class="p-3 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-start gap-2.5">
              <span class="w-6 h-6 rounded-lg ${isPkg ? "bg-amber-400 text-slate-900" : "bg-brand/30 border border-brand text-rose-300"} font-black text-xs flex items-center justify-center shrink-0 mt-0.5">${codeBadge}</span>
              <h3 class="font-black text-sm md:text-base text-slate-100 leading-snug line-clamp-2">${titleText}</h3>
            </div>

            <div class="mt-3 flex items-baseline justify-between">
              <div class="flex items-baseline gap-2">
                <span class="text-lg md:text-xl font-black ${isPkg ? "text-amber-400" : "text-rose-400"} num-font">${priceText}</span>
                <span class="text-xs font-bold text-slate-400 line-through num-font">${oldPriceText}</span>
              </div>
              <span class="text-[10px] font-bold text-slate-400">${categoryText}</span>
            </div>

            <div class="mt-2.5 pt-2.5 border-t border-slate-800/80 text-[11px] text-slate-300 space-y-1">
              <p class="font-semibold text-slate-400 line-clamp-2">${descText}</p>
              <button onclick="${isPkg ? `openPackageDetails('${item.id}')` : `openCourseView('${item.id}')`}" class="text-rose-400 font-bold hover:underline">
                ${isEn ? 'View Full Details →' : 'عرض باقي التفاصيل ←'}
              </button>
            </div>
          </div>

          <div class="space-y-2 pt-1">
            <button onclick="${isPkg ? `openPackageDetails('${item.id}')` : `openCourseView('${item.id}')`}" class="w-full py-2.5 rounded-xl border border-cyan-500/40 text-cyan-300 font-black text-xs hover:bg-cyan-500/10 transition">
              ${isEn ? 'Access Content' : 'الدخول للمحتوى'}
            </button>
            
            ${item.isEnrolled ? `
              <div class="w-full py-2.5 rounded-xl bg-emerald-600/90 text-white font-black text-xs text-center shadow-lg border border-emerald-400/40 flex items-center justify-center gap-1.5 cursor-default">
                <span>✓</span>
                <span>${isEn ? 'Enrolled' : 'مشترك في الكورس'}</span>
              </div>
            ` : `
              <button onclick="${isPkg ? `openPackageDetails('${item.id}')` : `openCourseView('${item.id}')`}" class="w-full py-2.5 rounded-xl bg-brand hover:bg-rose-900 text-white font-black text-xs shadow-lg transition">
                ${isEn ? 'Subscribe Now 🚀' : 'الاشتراك الآن 🚀'}
              </button>
            `}
          </div>
        </div>

      </article>
    `;
  }).join("");
}

function scrollSlider(direction) {
  const slider = document.getElementById("coursesSlider");
  if (!slider) return;
  const scrollAmount = 390;
  if (direction === "left") {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
}

function filterCourses(type) {
  currentFilter = type;
  document.querySelectorAll(".filter-tab").forEach(btn => {
    btn.classList.remove("active", "text-white", "bg-brand");
    btn.classList.add("text-slate-400");
  });
  const activeBtn = document.getElementById(`flt-${type}`);
  if (activeBtn) {
    activeBtn.classList.add("active", "text-white", "bg-brand");
    activeBtn.classList.remove("text-slate-400");
  }
  renderCatalog();
}

function goToYearCourses(yearKey) {
  filterCourses(yearKey);
  const coursesSection = document.getElementById("courses");
  if (coursesSection) coursesSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openPackageDetails(pkgKey) {
  const data = window.catalogData[pkgKey];
  if (!data) return;
  currentOpenedPkgId = pkgKey;

  const titleText = typeof data.title === "object" ? data.title[currentLang] : data.title;
  const subText = typeof data.sub === "object" ? data.sub[currentLang] : data.sub;
  const badgeText = typeof data.badge === "object" ? data.badge[currentLang] : data.badge;

  document.getElementById("pkgTitle").textContent = titleText;
  document.getElementById("pkgBadge").textContent = badgeText;
  document.getElementById("pkgSub").textContent = subText;
  document.getElementById("pkgPrice").textContent = `${data.price} ج.م`;
  document.getElementById("pkgOldPrice").textContent = `${data.oldPrice} ج.م`;
  document.getElementById("pkgSave").textContent = "خصم مخصص للترم الأول";

  const listEl = document.getElementById("pkgCoursesList");
  listEl.innerHTML = data.courses.map(c => `
    <div class="rounded-2xl border border-slate-800 bg-[#0F1D2D] p-4 flex items-center justify-between shadow-sm">
      <div>
        <h4 class="text-xs md:text-sm font-black text-slate-100">${c.name}</h4>
        <p class="text-[11px] opacity-60 mt-1 text-slate-400">${c.desc}</p>
      </div>
      <button onclick="closePackageDetails(); openCourseView('${c.id}')" class="text-[10px] font-black px-3 py-1.5 rounded-lg bg-brand text-white hover:bg-rose-900 shrink-0">
        معاينة المادة
      </button>
    </div>
  `).join("");

  ["mainNavbar", "drawer", "hero", "years", "courses", "features", "honors", "reviews", "instructor", "authSection", "mainFooter", "supportFloatingWidget"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  const view = document.getElementById("packageDetailsView");
  if (view) view.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closePackageDetails() {
  document.getElementById("packageDetailsView").classList.add("hidden");
  
  ["mainNavbar", "hero", "courses", "features", "honors", "reviews", "instructor", "mainFooter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("hidden");
  });

  if (!window.isUserLoggedIn) {
    const years = document.getElementById("years");
    const filter = document.getElementById("coursesFilterBar");
    const support = document.getElementById("supportFloatingWidget");
    if (years) years.classList.remove("hidden");
    if (filter) filter.classList.remove("hidden");
    if (support) support.classList.remove("hidden");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}


// إغلاق صفحة الكورس وإظهار الهيدر مجدداً
function closeCourseView() {
  document.getElementById("courseView").classList.add("hidden");
  
  // إعادة إظهار الخط الأصفر
  const scrollBar = document.getElementById("scrollProgress");
  if (scrollBar) scrollBar.classList.remove("hidden");

  // إعادة إظهار النافبار وباقي عناصر الرئيسية
  ["mainNavbar", "hero", "courses", "features", "honors", "reviews", "instructor", "mainFooter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("hidden");
  });

  if (!window.isUserLoggedIn) {
    const years = document.getElementById("years");
    const filter = document.getElementById("coursesFilterBar");
    const support = document.getElementById("supportFloatingWidget");
    if (years) years.classList.remove("hidden");
    if (filter) filter.classList.remove("hidden");
    if (support) support.classList.remove("hidden");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}
// فتح صفحة الكورس
function openCourseView(courseId) {
  const crs = window.catalogData[courseId] || window.catalogData["c_anat1"];
  window.currentItemData = crs;

  // التحقق الحازم من الاشتراك (سواء من الكتالوج أو من بيانات الطالب المحفوظة)
  const enrolledList = window.currentUserData?.enrolledCourses || [];
  const isUserEnrolled = crs.isEnrolled || enrolledList.includes(courseId);
  crs.isEnrolled = isUserEnrolled;

  const catEl = document.getElementById("crsCategory");
  const titleEl = document.getElementById("crsTitle");
  const descEl = document.getElementById("crsDesc");
  const priceEl = document.getElementById("crsPrice");
  const guestBanner = document.getElementById("courseGuestBanner");

  if (catEl) catEl.textContent = typeof crs.category === "object" ? crs.category[currentLang] : crs.category;
  if (titleEl) titleEl.textContent = typeof crs.title === "object" ? crs.title[currentLang] : crs.title;
  if (descEl) descEl.textContent = typeof crs.desc === "object" ? crs.desc[currentLang] : crs.desc;
  if (priceEl) priceEl.textContent = `${crs.price} ج.م`;

  // 1. إخفاء بانر السعر تماماً للمشترك
  if (guestBanner) {
    if (isUserEnrolled) {
      guestBanner.classList.add("hidden");
    } else {
      guestBanner.classList.remove("hidden");
    }
  }

  // 2. إخفاء وتصفير مشغلات الفيديو والـ PDF والكويز
  closeVideoPlayer();
  const pdfContainer = document.getElementById("pdfViewerContainer");
  const pdfIframe = document.getElementById("pdfIframe");
  const quizSection = document.getElementById("quizSection");
  if (pdfIframe) pdfIframe.src = "";
  if (pdfContainer) pdfContainer.classList.add("hidden");
  if (quizSection) quizSection.classList.add("hidden");

  // 3. إخفاء الخط الأصفر العلوي وباقي أقسام الموقع
  const scrollBar = document.getElementById("scrollProgress");
  if (scrollBar) scrollBar.classList.add("hidden");

  ["mainNavbar", "drawer", "hero", "years", "courses", "features", "honors", "reviews", "instructor", "authSection", "mainFooter", "supportFloatingWidget"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  const courseView = document.getElementById("courseView");
  if (courseView) courseView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 4. جلب المحاضرات الحية من الفايربيز
  if (typeof window.loadFirestoreLectures === "function") {
    window.loadFirestoreLectures(courseId);
  }
}

// دالة إغلاق مشغل الفيديو
window.closeVideoPlayer = function() {
  const wrapper = document.getElementById("videoContainerWrapper");
  const iframe = document.getElementById("videoIframe");
  if (iframe) iframe.src = "";
  if (wrapper) wrapper.classList.add("hidden");
  if (typeof stopWatermark === "function") stopWatermark();
};

window.renderDynamicLessonsAccordion = function(lessonsList) {
  const container = document.getElementById("lessonsList");
  if (!container) return;

  const crs = window.currentItemData;
  const isEnrolled = crs && crs.isEnrolled;

  if (!lessonsList || lessonsList.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-[#0F1D2D] rounded-2xl border border-slate-800 text-slate-400 text-xs">
        لم يقم المشرف بنشر محاضرات لهذا المقرر حتى الآن.
      </div>
    `;
    return;
  }

  container.innerHTML = lessonsList.map((lec, index) => {
    const isFree = lec.isFree === true || lec.isFree === "true";
    const canAccess = isFree || isEnrolled;
    const isLocked = !canAccess;

    let lecTitle = lec.title;
    if (typeof lecTitle === "object" && lecTitle !== null) {
      lecTitle = lecTitle[currentLang] || lecTitle.ar || lecTitle.en || "محاضرة";
    }
    let lecDesc = lec.desc || "";
    if (typeof lecDesc === "object" && lecDesc !== null) {
      lecDesc = lecDesc[currentLang] || lecDesc.ar || lecDesc.en || "";
    }

    return `
      <div class="rounded-2xl border border-slate-800 bg-[#0F1D2D] overflow-hidden transition-all duration-300 shadow-md">
        
        <!-- عنوان المحاضرة -->
        <button type="button" onclick="toggleLectureAccordion('lec_body_${index}')" class="w-full p-4 flex items-center justify-between text-start hover:bg-slate-800/40 transition">
          <div class="relative flex items-center gap-3">
            <span class="w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${isLocked ? 'bg-slate-800 text-slate-500' : 'bg-brand text-white'}">
              ${isLocked ? '🔒' : index + 1}
            </span>
            <div>
              <h4 class="text-xs sm:text-sm font-black text-white">${lecTitle}</h4>
              <span class="text-[10px] text-slate-400 block mt-0.5">
                ${isFree ? '🔓 معاينة مجانية' : (isLocked ? '🔒 يتطلب اشتراك' : 'محتوى متاح بالكامل')}
              </span>
            </div>
          </div>
          <span class="text-xs text-slate-400 transition-transform duration-200" id="icon_lec_body_${index}">▼</span>
        </button>

        <!-- التفرعات المنسدلة -->
        <div id="lec_body_${index}" class="border-t border-slate-800/80 bg-[#07111D]/80 p-3 space-y-3">
          ${isLocked ? `
            <div class="p-3 text-center text-[11px] text-amber-300 font-bold bg-amber-950/30 rounded-xl border border-amber-800/30">
              🔒 المحاضرة مغلقة. اشترك في المادة لفتح الفيديو والملفات والكويزات.
            </div>
          ` : `
            <!-- 1. صف تشغيل الفيديو والمشغل الداخلي المدمج -->
            ${lec.videoUrl ? `
              <div class="p-3.5 rounded-2xl bg-[#0F1D2D] border border-slate-800 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <span class="text-lg text-rose-400">🎥</span>
                    <div>
                      <span class="block text-xs font-black text-white">فيديو الشرح</span>
                      <span class="block text-[10px] text-slate-400">مشاهدة بجودة عالية</span>
                    </div>
                  </div>
                  <button id="btn_play_${index}" onclick="playInlineVideo('${index}', '${lec.videoUrl.replace(/'/g, "\\'")}')" class="px-4 py-2 rounded-xl bg-brand hover:bg-rose-900 text-white text-xs font-black transition shadow cursor-pointer">
                    تشغيل الفيديو ▶
                  </button>
                </div>

                <!-- حاوية الفيديو المدمجة الملمومة تحت الزر مباشرة -->
                <div id="inline_player_${index}" class="hidden pt-2 space-y-2 border-t border-slate-800/80">
                  <div id="videoContainer_${index}" class="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-black border border-slate-700 aspect-video relative flex items-center justify-center shadow-xl">
                    
                    <!-- العلامة المائية للطالب -->
                    <div id="watermark_${index}" class="hidden absolute z-30 pointer-events-none text-slate-300/40 font-bold text-xs md:text-sm tracking-wide transition-all duration-1000 select-none">
                      <span class="wm-text"></span>
                    </div>

                    <!-- زر التكبير الذكي -->
                    <button type="button" onclick="toggleCustomFullscreen('videoContainer_${index}')" class="absolute bottom-3 end-3 z-40 bg-black/70 hover:bg-black/90 text-white p-2 rounded-xl border border-white/20 text-xs font-bold transition flex items-center gap-1 cursor-pointer">
                      <span>⛶</span>
                      <span class="text-[10px]">ملء الشاشة</span>
                    </button>

                    <iframe id="iframe_${index}" class="w-full h-full border-0" src="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>

                  <!-- زر إغلاق الفيديو بجانبه -->
                  <div class="flex justify-end max-w-2xl mx-auto">
                    <button onclick="closeInlineVideo('${index}')" class="text-[11px] font-bold text-rose-400 hover:text-white px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 transition">
                      إغلاق الفيديو ✕
                    </button>
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- 2. فتح ملف الـ PDF -->
            ${lec.pdfUrl ? `
              <div class="p-3 rounded-xl bg-[#0F1D2D] border border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <span class="text-lg text-amber-400">📑</span>
                  <div>
                    <span class="block text-xs font-black text-white">المذكرات والتفريغات (PDF)</span>
                    <span class="block text-[10px] text-slate-400">ملخص المحاضرة</span>
                  </div>
                </div>
                <button onclick="openPdfViewer('${lec.pdfUrl}')" class="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold transition cursor-pointer">
                  معاينة 👁️
                </button>
              </div>
            ` : ''}

            <!-- 3. تشغيل الكويز -->
            ${lec.quiz && lec.quiz.length > 0 ? `
              <div class="p-3 rounded-xl bg-[#0F1D2D] border border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <span class="text-lg text-emerald-400">📝</span>
                  <div>
                    <span class="block text-xs font-black text-white">اختبار تقييمي</span>
                    <span class="block text-[10px] text-slate-400">${lec.quiz.length} أسئلة MCQ</span>
                  </div>
                </div>
                <button onclick='startInteractiveQuiz(${JSON.stringify(lec.quiz)}, "${lec.id || index}")' class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-black transition shadow cursor-pointer">
                  بدء الاختبار ⏱️
                </button>
              </div>
            ` : ''}
          `}
        </div>
      </div>
    `;
  }).join("");
};
// دالة تحويل روابط اليوتيوب والفيديو
function formatEmbedUrl(url) {
  if (!url) return "";
  let formatted = url.trim();

  if (!formatted.startsWith("http://") && !formatted.startsWith("https://")) {
    formatted = "https://" + formatted;
  }

  if (formatted.includes("youtube.com/watch?v=")) {
    formatted = formatted.replace("watch?v=", "embed/");
  } else if (formatted.includes("youtu.be/")) {
    formatted = formatted.replace("youtu.be/", "www.youtube.com/embed/");
  } else if (formatted.includes("youtube.com/shorts/")) {
    formatted = formatted.replace("shorts/", "embed/");
  }

  if (formatted.includes("youtube.com/embed/")) {
    const separator = formatted.includes("?") ? "&" : "?";
    return `${formatted}${separator}autoplay=1&fs=0&rel=0`;
  }

  return formatted;
}

let currentActiveInlinePlayer = null;

// تشغيل الفيديو داخل نفس الكارت تحت الزر
window.playInlineVideo = function(index, videoUrl) {
  // إغلاق أي مشغل آخر مفتوح
  if (currentActiveInlinePlayer !== null && currentActiveInlinePlayer !== index) {
    window.closeInlineVideo(currentActiveInlinePlayer);
  }

  const playerBox = document.getElementById(`inline_player_${index}`);
  const iframe = document.getElementById(`iframe_${index}`);
  
  if (!playerBox || !iframe || !videoUrl) return;

  iframe.src = formatEmbedUrl(videoUrl);
  playerBox.classList.remove("hidden");
  currentActiveInlinePlayer = index;

  // تشغيل العلامة المائية للمشغل الحالي
  startInlineWatermark(index);
};

// إغلاق الفيديو المدمج
window.closeInlineVideo = function(index) {
  const playerBox = document.getElementById(`inline_player_${index}`);
  const iframe = document.getElementById(`iframe_${index}`);
  
  if (iframe) iframe.src = "";
  if (playerBox) playerBox.classList.add("hidden");
  stopInlineWatermark(index);
  if (currentActiveInlinePlayer === index) currentActiveInlinePlayer = null;
};

// تشغيل العلامة المائية داخل المشغل المحدد
let inlineWmInterval = null;
function startInlineWatermark(index) {
  const wm = document.getElementById(`watermark_${index}`);
  if (!wm) return;

  const user = window.currentUserData;
  const authUser = window.authInstance?.currentUser;
  const name = user?.fullName || authUser?.displayName || "طالب مسجل";
  const phone = user?.phone || user?.email || "";

  const textSpan = wm.querySelector(".wm-text");
  if (textSpan) textSpan.textContent = `KHEDR & PHYSIO • ${name} • ${phone}`;
  wm.classList.remove("hidden");

  if (inlineWmInterval) clearInterval(inlineWmInterval);
  inlineWmInterval = setInterval(() => {
    const topPos = Math.floor(Math.random() * 70) + 15;
    const leftPos = Math.floor(Math.random() * 60) + 15;
    wm.style.top = `${topPos}%`;
    wm.style.left = `${leftPos}%`;
  }, 4000);
}

function stopInlineWatermark(index) {
  const wm = document.getElementById(`watermark_${index}`);
  if (wm) wm.classList.add("hidden");
  if (inlineWmInterval) {
    clearInterval(inlineWmInterval);
    inlineWmInterval = null;
  }
}

// دالة التكبير المخصصة للحاوية المدمجة
window.toggleCustomFullscreen = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const isFs = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

  if (!isFs) {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
};

// دالة فتح وغلق التفرعات
window.toggleLectureAccordion = function(id) {
  const body = document.getElementById(id);
  const icon = document.getElementById("icon_" + id);
  if (body) {
    body.classList.toggle("hidden");
    if (icon) {
      icon.style.transform = body.classList.contains("hidden") ? "rotate(0deg)" : "rotate(180deg)";
    }
  }
};





let currentSelectedToPay = { id: "", title: "", price: "" };

function openPaymentModal(id, title, price) {
  if (!window.isUserLoggedIn) {
    alert("🔒 يرجى تسجيل الدخول أو إنشاء حساب على المنصة أولاً لتتمكن من الاشتراك.");
    closeCourseView();
    closePackageDetails();
    const authSection = document.getElementById("authSection");
    if (authSection) {
      authSection.classList.remove("hidden");
      authSection.scrollIntoView({ behavior: "smooth", block: "center" });
      setAuthTab("login");
    }
    return;
  }

  currentSelectedToPay = { id, title, price };
  document.getElementById("payModalTitle").textContent = `الاشتراك في: ${title}`;
  document.getElementById("payModalPrice").textContent = `المبلغ المطلوب: ${price}`;

  const sendBtn = document.getElementById("sendProofBtn");
  sendBtn.onclick = function() {
    closePaymentModal();
    if (typeof window.handleSubscribe === "function") {
      window.handleSubscribe(currentSelectedToPay.id, currentSelectedToPay.title);
    }
  };

  document.getElementById("paymentModal").classList.remove("hidden");
}

function closePaymentModal() {
  document.getElementById("paymentModal").classList.add("hidden");
}

function handlePkgSubscribe() {
  const data = window.catalogData[currentOpenedPkgId];
  if (data) {
    openPaymentModal(data.id, data.title, data.price);
  }
}

function toggleCourseEnrollment() {
  if (!window.currentItemData) return;
  if (window.currentItemData.isEnrolled) {
    alert("✅ أنت مشترك بالفعل في هذا المقرر ومفتوح لك بالكامل!");
    return;
  }
  openPaymentModal(window.currentItemData.id, window.currentItemData.title, window.currentItemData.price);
}

window.toggleSupportComplete = function(show) {
  const mainBox = document.getElementById("supportMainBox");
  const reopenBtn = document.getElementById("supportReopenBtn");

  if (show) {
    if (mainBox) mainBox.classList.remove("hidden");
    if (reopenBtn) reopenBtn.classList.add("hidden");
  } else {
    if (mainBox) mainBox.classList.add("hidden");
    if (reopenBtn) reopenBtn.classList.remove("hidden");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("ar");
  setAuthTab("login");
  renderCatalog();

  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.addEventListener("click", toggleLanguage);

  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        const countEl = entry.target.querySelector("[data-count]");
        if (countEl && !countEl.dataset.counted) {
          countEl.dataset.counted = "true";
          animateCount(countEl);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

  // فتح الكورس تلقائياً إذا كان قادماً من لوحة الطالب
  const urlParams = new URLSearchParams(window.location.search);
  const openCrsId = urlParams.get('openCourse');
  if (openCrsId && window.catalogData && window.catalogData[openCrsId]) {
    setTimeout(() => { openCourseView(openCrsId); }, 400);
  }
});

</script>

<!-- ============ FIREBASE MODULE ============ -->
<script type="module">

import { updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";





  // فتح عارض الـ PDF
  window.openPdfViewer = function(pdfUrl) {
    const pdfContainer = document.getElementById("pdfViewerContainer");
    const pdfIframe = document.getElementById("pdfIframe");
    if (pdfContainer && pdfIframe) {
      pdfIframe.src = pdfUrl + "#toolbar=0";
      pdfContainer.classList.remove("hidden");
      pdfContainer.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // تشغيل الكويز وحفظ الدرجة في وثيقة الطالب
  window.startInteractiveQuiz = function(quizQuestions, lectureId) {
    const quizSection = document.getElementById("quizSection");
    const quizList = document.getElementById("quizQuestionsList");
    const scoreBadge = document.getElementById("quizScoreBadge");
    const submitBtn = document.getElementById("submitQuizBtn");

    if (!quizSection || !quizList) return;

    if (scoreBadge) scoreBadge.classList.add("hidden");
    if (submitBtn) submitBtn.disabled = false;

    quizList.innerHTML = quizQuestions.map((q, idx) => `
      <div class="p-4 rounded-2xl bg-[#07111D] border border-slate-800 space-y-3">
        <h4 class="text-xs font-black text-white leading-5">${idx + 1}. ${q.question}</h4>
        <div class="space-y-2">
          ${q.options.map((opt, optIdx) => `
            <label class="flex items-center gap-2 p-2.5 rounded-xl bg-[#0F1D2D] hover:bg-slate-800 text-xs text-slate-300 cursor-pointer border border-transparent has-[:checked]:border-amber-400 has-[:checked]:text-amber-300 transition">
              <input type="radio" name="q_${idx}" value="${optIdx}" required class="accent-rose-600" />
              <span>${opt}</span>
            </label>
          `).join("")}
        </div>
      </div>
    `).join("");

    quizSection.classList.remove("hidden");
    quizSection.scrollIntoView({ behavior: "smooth", block: "center" });

    // تصحيح الكويز وحفظ النتيجة تلقائياً للطالب
    document.getElementById("studentQuizForm").onsubmit = async function(e) {
      e.preventDefault();
      let score = 0;
      quizQuestions.forEach((q, idx) => {
        const sel = document.querySelector(`input[name="q_${idx}"]:checked`);
        if (sel && parseInt(sel.value, 10) === q.correctIndex) {
          score++;
        }
      });

      scoreBadge.textContent = `نتيجتك: ${score} من ${quizQuestions.length}`;
      scoreBadge.classList.remove("hidden");
      submitBtn.disabled = true;

      // حفظ النتيجة في قاعدة بيانات الطالب
      const user = auth.currentUser;
      if (user) {
        try {
          await updateDoc(doc(db, "students", user.uid), {
            [`quizScores.${lectureId}`]: {
              score: score,
              total: quizQuestions.length,
              completedAt: new Date().toISOString()
            }
          });
        } catch (err) {
          console.error("Error saving quiz score:", err);
        }
      }

      alert(`🎉 أحسنت! نتيجتك هي: ${score} من ${quizQuestions.length} وتم تسجيلها في سجلك الأكاديمي.`);
    };
  };

import { 
    auth, 
    db, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    signOut,
    doc, 
    setDoc, 
    getDoc, 
    serverTimestamp, 
    onAuthStateChanged,
    sendPasswordResetEmail
  } from "./firebase-config.js";
  import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

  const ADMIN_EMAILS = [
  "ahmedmohamedhosny100@gmail.com",
  "admin@khedr.com",
  "khedr@physio.com"
];

  window.authInstance = auth;

  window.currentUserData = null;
  window.isUserLoggedIn = false;

  // منع وميض شاشات تسجيل الدخول إذا كان المستخدم مسجلاً مسبقاً
if (localStorage.getItem("khedr_user_active") === "true") {
  const authSection = document.getElementById("authSection");
  const heroGuestCta = document.getElementById("heroGuestCta");
  const supportWidget = document.getElementById("supportFloatingWidget");
  const yearsSection = document.getElementById("years");
  const filterBar = document.getElementById("coursesFilterBar");

  if (authSection) authSection.classList.add("hidden");
  if (heroGuestCta) heroGuestCta.classList.add("hidden");
  if (supportWidget) supportWidget.classList.add("hidden");
  if (yearsSection) yearsSection.classList.add("hidden");
  if (filterBar) filterBar.classList.add("hidden");
}

  function showError(elId, msg) {
    const el = document.getElementById(elId);
    if (el) {
      el.textContent = msg;
      el.classList.remove("hidden");
    }
  }

  onAuthStateChanged(auth, async (user) => {


const guestActions = document.getElementById("drawerGuestActions");
    const studentActions = document.getElementById("drawerStudentActions");
    const adminActions = document.getElementById("drawerAdminActions");
    const authSection = document.getElementById("authSection");

    const heroGuestCta = document.getElementById("heroGuestCta");
    const heroUserCta = document.getElementById("heroUserCta");
    const heroUserName = document.getElementById("heroUserName");



    if (user) {
      window.isUserLoggedIn = true;
      localStorage.setItem("khedr_user_active", "true");
      if (authSection) authSection.classList.add("hidden");
      // إخفاء زر الدعم الفني للطالب المسجل
      const supportWidget = document.getElementById("supportFloatingWidget");
      if (supportWidget) supportWidget.classList.add("hidden");

      const displayName = user.displayName || user.email.split('@')[0];

      // تبديل زر الهيرو للترحيب بالطالب
      if (heroGuestCta) heroGuestCta.classList.add("hidden");
      if (heroUserCta) heroUserCta.classList.remove("hidden");
      if (heroUserName) heroUserName.textContent = displayName;

      // تعديل زر المسارات الجامعية
      const yearsCta = document.getElementById("yearsCtaBtn");
      if (yearsCta) {
        yearsCta.href = "#courses";
        yearsCta.textContent = currentLang === "en" ? "Explore Courses 📚" : "تصفح المقررات الدراسية 📚";
      }

      // تحديد محتوى القائمة: مشرف أم طالب
      const userEmail = (user.email || "").toLowerCase().trim();
      const isAdmin = ADMIN_EMAILS.some(admin => admin.toLowerCase().trim() === userEmail);

      if (guestActions) guestActions.classList.add("hidden");

      if (isAdmin) {
        if (adminActions) { adminActions.classList.remove("hidden"); adminActions.classList.add("flex"); }
        if (studentActions) studentActions.classList.add("hidden");
      } else {
        if (studentActions) { studentActions.classList.remove("hidden"); studentActions.classList.add("flex"); }
        if (adminActions) adminActions.classList.add("hidden");
      }

try {
        const studentDoc = await getDoc(doc(db, "students", user.uid));
        if (studentDoc.exists()) {
          window.currentUserData = studentDoc.data();
          const enrolledCourses = window.currentUserData.enrolledCourses || [];
          const userYear = window.currentUserData.academicYear || "y1"; // y1 أو y2
          
          enrolledCourses.forEach(cId => {
            if (window.catalogData && window.catalogData[cId]) {
              window.catalogData[cId].isEnrolled = true;
            }
          });

          // تفعيل الباقات تلقائياً عند الاشتراك
          if (window.catalogData && window.catalogData["pkg_y1s1"]) {
            const y1Subjects = ["c_anat1", "c_phys1", "c_hist1", "c_bioph1"];
            const hasAllY1 = y1Subjects.every(sub => enrolledCourses.includes(sub));
            if (hasAllY1 || enrolledCourses.includes("pkg_y1s1") || enrolledCourses.includes("bundle_y1_t1")) {
              window.catalogData["pkg_y1s1"].isEnrolled = true;
            }
          }

// 1. إخفاء سكشن السنوات الدراسية وشريط الفلاتر نهائياً للطالب المسجل
          const yearsSec = document.getElementById("years");
          const filterBar = document.getElementById("coursesFilterBar");
          if (yearsSec) yearsSec.classList.add("hidden");
          if (filterBar) filterBar.classList.add("hidden");

          // 2. إظهار مقررات الفرقة المسجل بها الطالب تلقائياً (y1 أو y2)
          if (userYear === "y2") {
            filterCourses("y2");
          } else {
            filterCourses("y1");
          }

          if (window.currentItemData && enrolledCourses.includes(window.currentItemData.id)) {
            window.currentItemData.isEnrolled = true;
          }
        }
      } catch (e) {
        console.error("خطأ أثناء جلب بيانات الطالب:", e);
      }
    } else {

      // إظهار سكشن السنوات والفلاتر للزوار
      const yearsSec = document.getElementById("years");
      const filterBar = document.getElementById("coursesFilterBar");
      if (yearsSec) yearsSec.classList.remove("hidden");
      if (filterBar) filterBar.classList.remove("hidden");
filterCourses("all"); // لإعادة عرض كل المقررات للزائر
      // إظهار زر الدعم الفني للزائر غير المسجل
      const supportWidget = document.getElementById("supportFloatingWidget");
      if (supportWidget) supportWidget.classList.remove("hidden");
      window.isUserLoggedIn = false;
      window.currentUserData = null;
   if (guestActions) { guestActions.classList.remove("hidden"); guestActions.classList.add("flex"); }
      if (studentActions) studentActions.classList.add("hidden");
      if (adminActions) adminActions.classList.add("hidden");
      if (heroGuestCta) heroGuestCta.classList.remove("hidden");
      if (heroUserCta) heroUserCta.classList.add("hidden");
      const yearsCta = document.getElementById("yearsCtaBtn");
      if (yearsCta) {
        yearsCta.href = "#authSection";
        yearsCta.textContent = currentLang === "en" ? "Create Your Account" : "انشئ حسابك الآن";
      }
    }
  });

  window.handleSubscribe = function(itemId, itemTitle) {
    const user = auth.currentUser;
    if (!user) {
      const authSec = document.getElementById("authSection");
      if (authSec) {
        authSec.classList.remove("hidden");
        authSec.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      alert("⚠️ يرجى تسجيل الدخول أو إنشاء حساب أولاً للاشتراك.");
      return;
    }

    if (window.currentItemData && window.currentItemData.isEnrolled) {
      alert("✅ أنت مشترك بالفعل في هذا المحتوى ومفتوح لك بالكامل!");
      return;
    }

    const studentName = user.displayName || "طالب";
    const studentPhone = window.currentUserData?.phone || "غير مسجل";
    const telegramUser = "Khedr_physio";
    
    const message = encodeURIComponent(
      `مرحباً دكتور محمود 👋\nأنا الطالب: ${studentName}\nرقم الهاتف: ${studentPhone}\nالإيميل: ${user.email}\n\nأرغب في تفعيل الاشتراك في:\n📚 ${itemTitle || itemId}`
    );
    
    window.open(`https://t.me/${telegramUser}?text=${message}`, "_blank");
  };

  const navLogoutBtn = document.getElementById("navLogoutBtn");
  if (navLogoutBtn) {
    navLogoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      localStorage.removeItem("khedr_user_active");
      location.reload();
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = document.getElementById("loginSubmitBtn");
      if (btn) btn.disabled = true;
      try {
        await signInWithEmailAndPassword(
          auth, 
          document.getElementById("loginEmail").value.trim(), 
          document.getElementById("loginPassword").value
        );
closeAuthView();


      } catch (err) {
        showError("loginError", "بيانات الدخول غير صحيحة");
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  }
// تشغيل نموذج استعادة كلمة المرور
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = document.getElementById("forgotSubmitBtn");
      const errEl = document.getElementById("forgotError");
      const successEl = document.getElementById("forgotSuccess");
      const email = document.getElementById("forgotEmail").value.trim();

      errEl.classList.add("hidden");
      successEl.classList.add("hidden");
      btn.disabled = true;
      btn.textContent = "⏳ جارٍ الإرسال...";

      try {
        await sendPasswordResetEmail(auth, email);
        successEl.textContent = "✅ تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني بنجاح!";
        successEl.classList.remove("hidden");
        forgotPasswordForm.reset();
      } catch (err) {
        let msg = "⚠️ حدث خطأ أثناء إرسال الرابط، حاول مرة أخرى.";
        if (err.code === "auth/user-not-found") msg = "⚠️ لا يوجد حساب مسجل بهذا البريد الإلكتروني.";
        else if (err.code === "auth/invalid-email") msg = "⚠️ البريد الإلكتروني غير صالح.";
        else if (err.code === "auth/too-many-requests") msg = "⚠️ محاولات كثيرة، حاول بعد قليل.";
        errEl.textContent = msg;
        errEl.classList.remove("hidden");
      } finally {
        btn.disabled = false;
        btn.textContent = "إرسال رابط إعادة التعيين 📩";
      }
    });
  }
const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    // منع كتابة أي حروف والسماح بالأرقام فقط داخل حقل الهاتف
    const phoneInput = document.getElementById("regPhone");
    if (phoneInput) {
      phoneInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
      });
    }

    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = document.getElementById("registerSubmitBtn");
      const errEl = document.getElementById("registerError");
      if (errEl) errEl.classList.add("hidden");

      const name = document.getElementById("regName").value.trim();
      const phone = document.getElementById("regPhone").value.trim();
      const academicYear = document.getElementById("regYear").value;
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value;

      // 1. التحقق من صحة الاسم (ثلاثي على الأقل)
      if (name.split(/\s+/).length < 2) {
        showError("registerError", "⚠️ يرجى كتابة اسمك ثنائياً أو ثلاثياً على الأقل");
        return;
      }

      // 2. التحقق من صحة رقم الموبايل المصري (11 رقم يبدأ بـ 010, 011, 012, 015)
      const egyptianPhoneRegex = /^01[0125][0-9]{8}$/;
      if (!egyptianPhoneRegex.test(phone)) {
        showError("registerError", "⚠️ رقم الهاتف غير صحيح، يجب أن يكون 11 رقماً ويبدأ بـ (010 أو 011 أو 012 أو 015)");
        return;
      }

      if (btn) btn.disabled = true;

      try {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name });

const university = document.getElementById("regUniversity").value.trim();

await setDoc(doc(db, "students", cred.user.uid), {
  fullName: name,
  phone: phone,
  academicYear: academicYear,
  university: university || "غير محدد", // <-- إضافة حقل الجامعة
  email: email,
  enrolledCourses: [],
  createdAt: serverTimestamp()
});

        alert("🎉 تم إنشاء الحساب بنجاح!");
        window.location.href = "dashboard.html";

      } catch (err) {
        let msg = "تعذر إنشاء الحساب";
        if (err.code === "auth/email-already-in-use") msg = "⚠️ البريد الإلكتروني مسجل بالفعل";
        else if (err.code === "auth/weak-password") msg = "⚠️ كلمة المرور يجب ألا تقل عن 6 خانات";
        else if (err.code === "auth/invalid-email") msg = "⚠️ البريد الإلكتروني غير صالح";
        showError("registerError", msg);
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  }

  
  // ============ ANTI-LEAK & FLOATING WATERMARK LOGIC ============
let watermarkInterval = null;

function startWatermark() {
  const wm = document.getElementById("videoWatermark");
  const dataEl = document.getElementById("wmStudentData");
  if (!wm || !dataEl) return;

  const user = window.currentUserData;
  const authUser = window.authInstance?.currentUser;

  // جلب اسم وهاتف الطالب لإظهارهم كعلامة مائية
  const name = user?.fullName || authUser?.displayName || "طالب مسجل";
  const phone = user?.phone || "";
  const email = user?.email || authUser?.email || "";

  dataEl.textContent = `KHEDR & PHYSIO • ${name} • ${phone || email}`;
  wm.classList.remove("hidden");

  // تحريك العلامة المائية عشوائياً كل 4 ثوانٍ لمنع قصها بالمونتاج
  if (watermarkInterval) clearInterval(watermarkInterval);
  watermarkInterval = setInterval(() => {
    const topPos = Math.floor(Math.random() * 75) + 10; // بين 10% و 85%
    const leftPos = Math.floor(Math.random() * 65) + 10; // بين 10% و 75%
    const opacity = (Math.random() * 0.25 + 0.25).toFixed(2); // شفافية متغيرة

    wm.style.top = `${topPos}%`;
    wm.style.left = `${leftPos}%`;
    wm.style.opacity = opacity;
  }, 4000);
}

function stopWatermark() {
  const wm = document.getElementById("videoWatermark");
  if (wm) wm.classList.add("hidden");
  if (watermarkInterval) {
    clearInterval(watermarkInterval);
    watermarkInterval = null;
  }
}

// تعطيل كليك يمين واختصارات لوحة المفاتيح لمنع الفحص والطباعة وتصوير الشاشة
document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  // منع F12، Ctrl+U، Ctrl+Shift+I، Ctrl+Shift+J، Ctrl+P، Ctrl+S
  if (
    e.key === "F12" ||
    (e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "s" || e.key === "S" || e.key === "p" || e.key === "P")) ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c"))
  ) {
    e.preventDefault();
    return false;
  }
});


// دالة تحميل المحاضرات المرفوعة من المشرف للكورس المفتوح
window.loadFirestoreLectures = async function(courseId) {
  const listEl = document.getElementById("lessonsList");
  if (!listEl) return;
  listEl.innerHTML = `<div class="p-4 text-center text-xs text-slate-400">جارٍ جلب المحاضرات المنشورة...</div>`;

  try {
    const q = query(collection(db, "lectures"), where("courseId", "==", courseId));
    const snap = await getDocs(q);

    if (snap.empty) {
      // إذا لم يرفع المشرف دروساً بعد
      const defaultLessons = window.catalogData[courseId]?.lessons || [];
      window.renderDynamicLessonsAccordion(defaultLessons);
      return;
    }

    const liveLessons = [];
    snap.forEach(docSnap => {
      liveLessons.push({ id: docSnap.id, ...docSnap.data() });
    });

  // ترتيب المحاضرات تصاعدياً حسب رقم المحاضرة المختار
    liveLessons.sort((a, b) => (a.order || 0) - (b.order || 0));

    window.renderDynamicLessonsAccordion(liveLessons);
  } catch (err) {
    console.error("Error fetching live lectures:", err);
    window.renderDynamicLessonsAccordion([]);
  }
};

// تشغيل اختبار الـ MCQ وعرض الأسئلة
window.renderLessonQuiz = function(quizArray) {
  const quizSection = document.getElementById("quizSection");
  const quizList = document.getElementById("quizQuestionsList");
  const scoreBadge = document.getElementById("quizScoreBadge");
  const submitBtn = document.getElementById("submitQuizBtn");

  if (!quizArray || quizArray.length === 0) {
    if (quizSection) quizSection.classList.add("hidden");
    return;
  }

  if (scoreBadge) scoreBadge.classList.add("hidden");
  if (submitBtn) submitBtn.disabled = false;

  quizList.innerHTML = quizArray.map((q, idx) => `
    <div class="p-4 rounded-2xl bg-[#07111D] border border-slate-800 space-y-3">
      <h4 class="text-xs font-black text-white leading-5">${idx + 1}. ${q.question}</h4>
      <div class="space-y-2">
        ${q.options.map((opt, optIdx) => `
          <label class="flex items-center gap-2 p-2 rounded-xl bg-[#0F1D2D] hover:bg-slate-800 text-xs text-slate-300 cursor-pointer border border-transparent has-[:checked]:border-amber-400 has-[:checked]:text-amber-300">
            <input type="radio" name="question_${idx}" value="${optIdx}" required class="accent-rose-600" />
            <span>${opt}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");

  quizSection.classList.remove("hidden");

  // تصحيح الاختبار عند الإرسال
  document.getElementById("studentQuizForm").onsubmit = function(e) {
    e.preventDefault();
    let score = 0;
    quizArray.forEach((q, idx) => {
      const selected = document.querySelector(`input[name="question_${idx}"]:checked`);
      if (selected && parseInt(selected.value, 10) === q.correctIndex) {
        score++;
      }
    });

    scoreBadge.textContent = `نتيجتك: ${score} من ${quizArray.length}`;
    scoreBadge.classList.remove("hidden");
    submitBtn.disabled = true;
    alert(`🎉 أحسنت! نتيجتك في الاختبار هي: ${score} / ${quizArray.length}`);
  };
};
// إغلاق القائمة تلقائياً عند النقر في أي مكان خارجها
document.addEventListener("click", (e) => {
  const drawer = document.getElementById("drawer");
  const drawerBtn = document.getElementById("drawerBtn");
  if (drawer && !drawer.classList.contains("hidden")) {
    if (!drawer.contains(e.target) && !drawerBtn.contains(e.target)) {
      toggleDrawer();
    }
  }
});
// دالة زر المسارات الجامعية الذكية
window.handleYearsCtaClick = function() {
  if (window.isUserLoggedIn) {
    // إذا كان مسجلاً يوجهه لقسم الكورسات
    const coursesSec = document.getElementById("courses");
    if (coursesSec) coursesSec.scrollIntoView({ behavior: "smooth" });
  } else {
    // إذا كان زائراً يفتح له نافذة إنشاء الحساب فوراً
    openAuthView('register');
  }
};
</script>
