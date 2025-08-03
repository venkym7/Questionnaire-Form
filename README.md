# 📝 Questionnaire Form - Vite + React + Tailwind CSS

A responsive and validated user data collection form built using **Vite**, **React**, and **Tailwind CSS**. This form captures personal details, validates input based on country code, and displays a preview after submission.

---

## 🚀 Live Demo

🌐 Netlify: [https://questionnaire-forms.netlify.app](https://questionnaire-forms.netlify.app)

---

## 🧰 Technologies Used

- ⚛️ React (with Hooks)
- ⚡ Vite
- 🎨 Tailwind CSS
- 📄 Country Data (Local JSON-like file)

---

## ✨ Features

- 📥 Input fields for:
  - Full Name
  - Date of Birth (DD-MM-YYYY)
  - Age (auto-compared with DOB)
  - Location (country selector with code)
  - Mobile Number (validation based on country code)
- 📆 Age is auto-validated from DOB
- 📱 Mobile number length changes based on selected country (+91 → 12 digits, others → 13 digits)
- 🛡️ Real-time validation with error messages
- 📋 Displays submitted form data in a preview section after submission
- 🌈 Responsive, modern design using Tailwind CSS

---

## 🧠 Validation Logic

- **DOB Format Check:** Must match `DD-MM-YYYY`
- **Age Check:** Must match age calculated from DOB
- **Country Code Check:** Country selection determines expected mobile length
- **Mobile Validation:** Accepts only digits with country-specific length
- **Form Submission:** Blocked unless all validations pass

---


---

## 📸 Screenshots

### ✅ Questionnaire Form

*(Add screenshot here)*

### 📋 Form Submission Preview

*(Add screenshot here)*

---
##  Clone the repository
git clone https://github.com/your-username/questionnaire-form.git
cd questionnaire-form

## Install dependencies
npm install

## Start the development server
npm run dev

##📬 Contact
VENKATESH MALLADI
📞 Phone: 7799472047
📧 Email: venkym7799@gmail.com
💼 LinkedIn: linkedin.com/in/venkatesh-malladi-7b0a16343
💻 GitHub: github.com/venkym7
