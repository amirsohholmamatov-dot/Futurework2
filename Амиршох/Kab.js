document.addEventListener("DOMContentLoaded", () => {

    
    /*
        Получаем сохранённый аккаунт.
    
        Если пользователь уже зарегистрировался
        через Amir.js — здесь будут его настоящие данные.
    */
    
    const savedUser =
        localStorage.getItem(
            "futurework_user"
        );
    
    
    /*
        Если аккаунта пока нет,
        используем тестовые данные.
    
        Благодаря этому cabinet.html
        можно открыть напрямую и посмотреть дизайн.
    */
    
    let user;
    
    
    if (savedUser) {
    
        try {
    
            user =
                JSON.parse(savedUser);
    
        } catch (error) {
    
            user = null;
    
        }
    
    }
    
    
    if (!user) {
    
        user = {
    
            name: "Александр",
    
            nickname: "FutureAlex",
    
            email: "example@gmail.com",
    
            phone: "+998 90 123 45 67",
    
            age: 18,
    
            city: "Ташкент",
    
            experience: "beginner"
    
        };
    
    }
    
    
    /* =========================================
       ЭЛЕМЕНТЫ
    ========================================= */
    
    const welcomeName =
        document.getElementById(
            "welcome-name"
        );
    
    const avatar =
        document.getElementById(
            "avatar"
        );
    
    const userName =
        document.getElementById(
            "user-name"
        );
    
    const userNickname =
        document.getElementById(
            "user-nickname"
        );
    
    const userEmail =
        document.getElementById(
            "user-email"
        );
    
    const userPhone =
        document.getElementById(
            "user-phone"
        );
    
    const userAge =
        document.getElementById(
            "user-age"
        );
    
    const userCity =
        document.getElementById(
            "user-city"
        );
    
    const userExperience =
        document.getElementById(
            "user-experience"
        );
    
    
    /* =========================================
       ИМЯ
    ========================================= */
    
    if (welcomeName) {
    
        welcomeName.textContent =
            `Привет, ${user.name}!`;
    
    }
    
    
    if (avatar) {
    
        avatar.textContent =
            user.name
                ? user.name
                    .charAt(0)
                    .toUpperCase()
                : "F";
    
    }
    
    
    /* =========================================
       ПРОФИЛЬ
    ========================================= */
    
    if (userName) {
    
        userName.textContent =
            user.name || "Не указано";
    
    }
    
    
    if (userNickname) {
    
        userNickname.textContent =
            user.nickname || "Не указано";
    
    }
    
    
    if (userEmail) {
    
        userEmail.textContent =
            user.email || "Не указано";
    
    }
    
    
    if (userPhone) {
    
        userPhone.textContent =
            user.phone || "Не указано";
    
    }
    
    
    if (userAge) {
    
        userAge.textContent =
            user.age || "Не указано";
    
    }
    
    
    if (userCity) {
    
        userCity.textContent =
            user.city || "Не указано";
    
    }
    
    
    /* =========================================
       ОПЫТ
    ========================================= */
    
    const experienceNames = {
    
        student:
            "Ученик / школьник",
    
        beginner:
            "Начинающий",
    
        junior:
            "Junior",
    
        middle:
            "Middle",
    
        senior:
            "Senior",
    
        expert:
            "Эксперт"
    
    };
    
    
    if (userExperience) {
    
        userExperience.textContent =
            experienceNames[
                user.experience
            ] || "Не указан";
    
    }
    
    
    /* =========================================
       ВЫХОД
    ========================================= */
    
    const logoutButton =
        document.getElementById(
            "logout-button"
        );
    
    
    if (logoutButton) {
    
        logoutButton.addEventListener(
            "click",
            () => {
    
                localStorage.removeItem(
                    "futurework_user"
                );
    
                window.location.href =
                    "index.html#register";
    
            }
        );
    
    }
    
    
    });
    