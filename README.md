# 📝 Questionnaire Form - Vite + React + Tailwind CSS

A responsive and user-friendly questionnaire form built using **Vite**, **React**, and **Tailwind CSS**. The form includes fields like Full Name, Date of Birth, Age, Location, and Mobile Number with real-time validation and dynamic country-based rules.

---

## 🚀 Live Demo

🔗 **Netlify URL:** [https://questionnaire-forms.netlify.app](https://questionnaire-forms.netlify.app)

---

## 🧰 Technologies Used

- ⚛️ React (with Hooks)
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌍 Country Data (Static JSON)
- ✅ Custom Validation Logic

---

## ✨ Features

- 📌 Input Fields:
  - Full Name
  - Date of Birth (DD-MM-YYYY format)
  - Age
  - Location (Country dropdown)
  - Mobile Number (with country code validation)

- 🔍 Validations:
  - Age must match the DOB
  - Mobile number must be valid according to selected country's code
  - All fields are required

- 📱 Responsive UI:
  - Works seamlessly on both desktop and mobile devices

- 📦 Clean and maintainable code with React best practices

- 🧠 Form summary shown after successful submission

---

## 🧮 Validation Logic

- **DOB Format:** Must be in `DD-MM-YYYY`
- **Age Match:** Validated against DOB using `calculateAgeFromDOB()`
- **Mobile Number:**
  - Must be numeric
  - 12 digits for India (`+91`)
  - 13 digits for other countries

---


---

## 📸 Screenshots
### ✅ Questionnaire Form

>![Questionnaire Form](./src/assets/Screenshot%202025-08-03%20195315.png)

### 📋 Form Submission Preview

![Form Submission Preview](./src/assets/Screenshot%202025-08-03%20200345.png)


---

## 🧪 Getting Started Locally

To run this project on your local machine:

```bash
# Clone the repository
git clone https://github.com/your-username/questionnaire-form.git

# Move into the project folder
cd questionnaire-form

# Install dependencies
npm install

# Start the development server
npm run dev

📬 Contact
Malladi Venkatesh
📞 Phone: 7799472047
📧 Email: venkym7799@gmail.com
💼 LinkedIn: linkedin.com/in/venkatesh-malladi-7b0a16343
💻 GitHub: github.com/venkym7

