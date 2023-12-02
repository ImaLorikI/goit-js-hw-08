import throttle from 'lodash.throttle';

const update = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const parse = JSON.parse(localStorage.getItem(update));

if (parse) {
  form.querySelector('input').value = parse.email ?? '';
  form.querySelector('textarea').value = parse.message ?? '';
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
    console.log(JSON.parse(localStorage.getItem(update)));
    form.reset();
    localStorage.getItem(update);
    localStorage.removeItem(update);
}
);