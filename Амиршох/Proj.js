document.addEventListener("DOMContentLoaded", () => {

    
    const registerForm =
        document.querySelector(".register-form");
    
    if (!registerForm) {
        return;
    }
    
    
    const nameInput =
        document.getElementById("name");
    
    const nicknameInput =
        document.getElementById("nickname");
    
    const emailInput =
        document.getElementById("email");
    
    const phoneInput =
        document.getElementById("phone");
    
    const ageInput =
        document.getElementById("age");
    
    const passwordInput =
        document.getElementById("password");
    
    const passwordConfirmInput =
        document.getElementById("password-confirm");
    
    const cityInput =
        document.getElementById("city");
    
    const experienceInput =
        document.getElementById("experience");
    
    const termsInput =
        document.getElementById("terms");
    
    const submitButton =
        registerForm.querySelector(
            ".register-button"
        );
    
    
    /* =========================================
       ОШИБКИ
    ========================================= */
    
    function getErrorElement(input) {
    
        const group =
            input.closest(".input-group");
    
        if (!group) {
            return null;
        }
    
        let error =
            group.querySelector(".field-error");
    
        if (!error) {
    
            error =
                document.createElement("small");
    
            error.className =
                "field-error";
    
            group.appendChild(error);
        }
    
        return error;
    }
    
    
    function showError(input, message) {
    
        const group =
            input.closest(".input-group");
    
        const error =
            getErrorElement(input);
    
        if (!group || !error) {
            return;
        }
    
        error.textContent =
            message;
    
        group.classList.add(
            "input-error"
        );
    
        input.classList.add(
            "invalid"
        );
    }
    
    
    function clearError(input) {
    
        const group =
            input.closest(".input-group");
    
        if (!group) {
            return;
        }
    
        const error =
            group.querySelector(
                ".field-error"
            );
    
        if (error) {
            error.textContent = "";
        }
    
        group.classList.remove(
            "input-error"
        );
    
        input.classList.remove(
            "invalid"
        );
    }
    
    
    /* =========================================
       ИМЯ
    ========================================= */
    
    function validateName() {
    
        const name =
            nameInput.value.trim();
    
        if (!name) {
    
            showError(
                nameInput,
                "Введите ваше имя."
            );
    
            return false;
        }
    
        if (name.length < 2) {
    
            showError(
                nameInput,
                "Имя должно содержать минимум 2 символа."
            );
    
            return false;
        }
    
        clearError(nameInput);
    
        return true;
    }
    
    
    /* =========================================
       ПСЕВДОНИМ
    ========================================= */
    
    function validateNickname() {
    
        const nickname =
            nicknameInput.value.trim();
    
        if (!nickname) {
    
            showError(
                nicknameInput,
                "Введите псевдоним."
            );
    
            return false;
        }
    
        if (
            nickname.length < 3 ||
            nickname.length > 20
        ) {
    
            showError(
                nicknameInput,
                "Псевдоним должен содержать от 3 до 20 символов."
            );
    
            return false;
        }
    
        const nicknameRegex =
            /^[a-zA-Z0-9_]+$/;
    
        if (!nicknameRegex.test(nickname)) {
    
            showError(
                nicknameInput,
                "Используйте только латинские буквы, цифры и _."
            );
    
            return false;
        }
    
        clearError(nicknameInput);
    
        return true;
    }
    
    
    /* =========================================
       EMAIL
    ========================================= */
    
    function validateEmail() {
    
        const email =
            emailInput.value.trim();
    
        if (!email) {
    
            showError(
                emailInput,
                "Введите email."
            );
    
            return false;
        }
    
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    
        if (!emailRegex.test(email)) {
    
            showError(
                emailInput,
                "Введите корректный email."
            );
    
            return false;
        }
    
        clearError(emailInput);
    
        return true;
    }
    
    
    /* =========================================
       ТЕЛЕФОН
    ========================================= */
    
    function validatePhone() {
    
        const phone =
            phoneInput.value.trim();
    
        if (!phone) {
    
            showError(
                phoneInput,
                "Введите номер телефона."
            );
    
            return false;
        }
    
        const digits =
            phone.replace(/\D/g, "");
    
        if (
            digits.length < 10 ||
            digits.length > 15
        ) {
    
            showError(
                phoneInput,
                "Введите корректный номер телефона."
            );
    
            return false;
        }
    
        const phoneRegex =
            /^[+\d\s()\-]+$/;
    
        if (!phoneRegex.test(phone)) {
    
            showError(
                phoneInput,
                "В номере телефона есть недопустимые символы."
            );
    
            return false;
        }
    
        clearError(phoneInput);
    
        return true;
    }
    
    
    /* =========================================
       ВОЗРАСТ
    ========================================= */
    
    function validateAge() {
    
        if (!ageInput.value) {
    
            showError(
                ageInput,
                "Введите возраст."
            );
    
            return false;
        }
    
        const age =
            Number(ageInput.value);
    
        if (!Number.isInteger(age)) {
    
            showError(
                ageInput,
                "Возраст должен быть целым числом."
            );
    
            return false;
        }
    
        if (age < 14) {
    
            showError(
                ageInput,
                "Регистрация доступна с 14 лет."
            );
    
            return false;
        }
    
        if (age > 120) {
    
            showError(
                ageInput,
                "Указан недопустимый возраст."
            );
    
            return false;
        }
    
        clearError(ageInput);
    
        return true;
    }
    
    
    /* =========================================
       ПАРОЛЬ
    ========================================= */
    
    function validatePassword() {
    
        const password =
            passwordInput.value;
    
        if (!password) {
    
            showError(
                passwordInput,
                "Введите пароль."
            );
    
            return false;
        }
    
        if (password.length < 8) {
    
            showError(
                passwordInput,
                "Пароль должен содержать минимум 8 символов."
            );
    
            return false;
        }
    
        clearError(passwordInput);
    
        return true;
    }
    
    
    /* =========================================
       ПОДТВЕРЖДЕНИЕ ПАРОЛЯ
    ========================================= */
    
    function validatePasswordConfirm() {
    
        const password =
            passwordInput.value;
    
        const confirmation =
            passwordConfirmInput.value;
    
        if (!confirmation) {
    
            showError(
                passwordConfirmInput,
                "Повторите пароль."
            );
    
            return false;
        }
    
        if (password !== confirmation) {
    
            showError(
                passwordConfirmInput,
                "Пароли не совпадают."
            );
    
            return false;
        }
    
        clearError(passwordConfirmInput);
    
        return true;
    }
    
    
    /* =========================================
       ГОРОД
    ========================================= */
    
    function validateCity() {
    
        const city =
            cityInput.value.trim();
    
        if (!city) {
    
            showError(
                cityInput,
                "Введите город."
            );
    
            return false;
        }
    
        if (city.length < 2) {
    
            showError(
                cityInput,
                "Введите корректное название города."
            );
    
            return false;
        }
    
        clearError(cityInput);
    
        return true;
    }
    
    
    /* =========================================
       СОГЛАШЕНИЕ
    ========================================= */
    
    function validateTerms() {
    
        const termsBlock =
            document.querySelector(".terms");
    
        if (!termsInput.checked) {
    
            termsBlock.classList.add(
                "terms-error"
            );
    
            return false;
        }
    
        termsBlock.classList.remove(
            "terms-error"
        );
    
        return true;
    }
    
    
    /* =========================================
       ВСЯ ФОРМА
    ========================================= */
    
    function validateForm() {
    
        const nameValid =
            validateName();
    
        const nicknameValid =
            validateNickname();
    
        const emailValid =
            validateEmail();
    
        const phoneValid =
            validatePhone();
    
        const ageValid =
            validateAge();
    
        const passwordValid =
            validatePassword();
    
        const passwordConfirmValid =
            validatePasswordConfirm();
    
        const cityValid =
            validateCity();
    
        const termsValid =
            validateTerms();
    
        return (
            nameValid &&
            nicknameValid &&
            emailValid &&
            phoneValid &&
            ageValid &&
            passwordValid &&
            passwordConfirmValid &&
            cityValid &&
            termsValid
        );
    }
    
    
    /* =========================================
       СОСТОЯНИЕ КНОПКИ
    ========================================= */
    
    function updateButton() {
    
        const valid =
            nameInput.value.trim().length >= 2 &&
            nicknameInput.value.trim().length >= 3 &&
            /^[a-zA-Z0-9_]+$/.test(
                nicknameInput.value.trim()
            ) &&
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
                emailInput.value.trim()
            ) &&
            phoneInput.value.replace(/\D/g, "").length >= 10 &&
            phoneInput.value.replace(/\D/g, "").length <= 15 &&
            Number.isInteger(
                Number(ageInput.value)
            ) &&
            Number(ageInput.value) >= 14 &&
            Number(ageInput.value) <= 120 &&
            passwordInput.value.length >= 8 &&
            passwordInput.value ===
                passwordConfirmInput.value &&
            cityInput.value.trim().length >= 2 &&
            termsInput.checked;
    
        submitButton.disabled =
            !valid;
    
        submitButton.classList.toggle(
            "button-active",
            valid
        );
    }
    
    
    /* =========================================
       INPUT EVENTS
    ========================================= */
    
    nameInput.addEventListener(
        "input",
        () => {
            validateName();
            updateButton();
        }
    );
    
    nicknameInput.addEventListener(
        "input",
        () => {
            validateNickname();
            updateButton();
        }
    );
    
    emailInput.addEventListener(
        "input",
        () => {
            validateEmail();
            updateButton();
        }
    );
    
    phoneInput.addEventListener(
        "input",
        () => {
            validatePhone();
            updateButton();
        }
    );
    
    ageInput.addEventListener(
        "input",
        () => {
            validateAge();
            updateButton();
        }
    );
    
    passwordInput.addEventListener(
        "input",
        () => {
    
            validatePassword();
    
            if (
                passwordConfirmInput.value.length > 0
            ) {
                validatePasswordConfirm();
            }
    
            updateButton();
        }
    );
    
    passwordConfirmInput.addEventListener(
        "input",
        () => {
            validatePasswordConfirm();
            updateButton();
        }
    );
    
    cityInput.addEventListener(
        "input",
        () => {
            validateCity();
            updateButton();
        }
    );
    
    termsInput.addEventListener(
        "change",
        () => {
            validateTerms();
            updateButton();
        }
    );
    
    
    /* =========================================
       СОЗДАНИЕ АККАУНТА
    ========================================= */
    
    registerForm.addEventListener(
        "submit",
        (event) => {
    
            event.preventDefault();
    
            if (!validateForm()) {
                return;
            }
    
    
            const user = {
    
                name:
                    nameInput.value.trim(),
    
                nickname:
                    nicknameInput.value.trim(),
    
                email:
                    emailInput.value.trim(),
    
                phone:
                    phoneInput.value.trim(),
    
                age:
                    Number(ageInput.value),
    
                city:
                    cityInput.value.trim(),
    
                experience:
                    experienceInput.value
    
            };
    
    
            localStorage.setItem(
                "futurework_user",
                JSON.stringify(user)
            );
    
    
            window.location.href =
                "cabinet.html";
        }
    );
    
    
    /* =========================================
       START
    ========================================= */
    
    updateButton();
    
    
    });
    