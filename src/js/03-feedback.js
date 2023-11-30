import throttle from 'lodash.throttle';
const update = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const parse = JSON.parse(localStorage.getItem(update));
if (parse) {
    form.elements.email.value = parse.email ?? '';
    form.elements.message.value = parse.message ?? '';
}
const onform = () => {
    const formData = form.elements;
    const object = {};
    object.email = formData.email.value;
    object.message = formData.message.value;
    localStorage.setItem(update, JSON.stringify(object));
}
form.addEventListener('input', throttle(onform, 500));
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (localStorage.getItem(update)) {
        localStorage.removeItem(update);
        form.reset();
    }
    console.log(JSON.parse(localStorage.getItem(update)));
}
);