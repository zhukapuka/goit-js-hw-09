const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
document.addEventListener('DOMContentLoaded', () => {
  try {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || '';
      formData.message = parsedData.message || '';
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
});
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (error) {
    console.error('Error saving data:', error);
  }
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
