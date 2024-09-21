const removeBtn = document.querySelector('#remove');
const addBtn = document.querySelector('#add');
const text = document.querySelector('#text');

const statusText = document.createElement('h2');
text.appendChild(statusText);

const h3 = document.querySelector('#add h3');

let click = 0;

/* ---when we have two button--- */

let twoButton = function () {
    removeBtn.addEventListener('click', function () {
        if (click === 0) {
            statusText.style.color = '#ff0000b0';
            statusText.textContent = 'Removed';

            click = 1;
        } else {
            statusText.textContent = '';
            click = 0;
        }

    });

    addBtn.addEventListener('click', function () {
        if (click === 0) {
            statusText.style.color = '#008000b0';
            statusText.textContent = 'Added+';

            click = 1;
        } else {
            statusText.textContent = '';
            click = 0;
        }

    });
};
// twoButton();




/* ---when we have single button--- */

let singleButton = function () {

    /* to hide the remove button */

    const removeButton = document.getElementById('remove');
    removeButton.style.display = 'none';


    addBtn.addEventListener('click', function () {
        if (click === 0) {
            statusText.style.color = '#008000b0';
            addBtn.style.background = 'linear-gradient(to top, #ff0000b0, #008000)';
            h3.textContent = 'Added';
            statusText.textContent = "Added";
            setTimeout(() => {
                statusText.textContent = "";
                click = 1;
            }, 1000);
        } else if (click === 1) {
            statusText.style.color = '#ff0000b0';
            addBtn.style.background = 'linear-gradient(to bottom, #ff0000b0, #008000)';
            h3.textContent = 'Add Again!';
            statusText.textContent = "Removed";
            setTimeout(() => {
                statusText.textContent = "";
                click = 0;
            }, 1000);
        } else {
            // do nothing
        }
    });
};
singleButton();
