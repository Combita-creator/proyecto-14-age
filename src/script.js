import { DateTime } from 'luxon';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

flatpickr('#birthdate', {
    dateFormat: 'd/m/Y',
    maxDate: 'today'
});

const form = document.getElementById('age-form');
const birthdateInput = document.getElementById('birthdate');
const resultContainer = document.getElementById('result-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const rawDate = birthdateInput.value;

    if (!rawDate) {
        resultContainer.textContent = 'Por favor selecciona una fecha.';
        return;
    }

    const birthDate = DateTime.fromFormat(rawDate, 'dd/MM/yyyy');
    const now = DateTime.now();
    const diff = now.diff(birthDate, ['years', 'months']).toObject();
    
    const years = Math.floor(diff.years);
    const months = Math.floor(diff.months);

    resultContainer.innerHTML = `You are <strong>${years}</strong> years <strong>${months}</strong> months old`;
});