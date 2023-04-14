

const users = document.querySelectorAll(".profilecontainer")
const chats = document.querySelectorAll(".chat")

users.forEach((user, userindex) => {
    user.addEventListener("click", (event) => {
        users.forEach(u => u.classList.remove("active"))
        user.classList.add("active")
        chats.forEach(c => c.classList.remove("active"))
        chats[userindex].classList.add("active");

        // .chats içerisinde bulunan .profilecontainer içerisindeki h1 etiketlerinin textContent'ini alıyoruz.
        //  index ile bulduğumuz h1 etiketinin textContent'ini .rightheader .rightprofile h1 etiketinin textContent'ine atıyoruz.

        const name = users[userindex].querySelector('h1').textContent;
        const img = users[userindex].querySelector('img').src;

        document.querySelector('.rightheader .rightprofile h1').textContent = name;
        document.querySelector('.rightheader img').src = img;
    })
});