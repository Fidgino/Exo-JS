const allInputs = document.querySelectorAll('input');
const button = document.querySelector('button');


for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('keyup', () => {
        const regex = /[0-9]/g;
        let found = regex.test(allInputs[i].value);
        if (found) {
            if (allInputs[i - 1]) {
                allInputs[i - 1].disabled = true;
            }
            if (allInputs[i + 1]) {
                allInputs[i + 1].disabled = false;
                allInputs[i + 1].focus();
            }
        }
        else {
            if (allInputs[i - 1]) {
                allInputs[i - 1].disabled = false;
                allInputs[i - 1].focus();
            }
            if (allInputs[i + 1]) {
                allInputs[i].value = '';
                allInputs[i + 1].disabled = true;
            }
        }
    });
};