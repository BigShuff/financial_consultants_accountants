const educationTxtContent = 'Some people begin to make a plan for paying education tuition as soon as their child is born. Even if you didn’t start early, education planning can help you put your child through education without facing unexpectedly large expenditures. A financial advisor can guide you in understanding the best ways to save for future education costs and how to fund potential gaps, explain how to reduce out-of-pocket costs, and advise you on eligibility for financial aid and grants.';

const personalTxtContent = 'With a personal pension you pay regular monthly amounts or a lump sum to a pension provider who invests it on your behalf. Other people and family members can pay a personal pension on your behalf. If you would like to discuss education planning please contact me.'

const investmentsTxtContent = 'One key to investment success is developing a tax efficient strategy – one that minimizes the amount of taxes you have to pay on the money your investments earn. Reducing your taxes leaves more money to contribute to your investments. A financial advisor can help you use charitable giving and investment strategies to minimize the amount you must pay in taxes, and they can show you how to withdraw your money in retirement in a way that also minimizes your tax burden.';

const retirementTxtContent = 'Making sure you have enough money to live on after you retire is an important part of financial planning. Planning and saving for retirement usually begin early in your career, but as retirement day gets closer, you’ll want to review and possibly revise the plan. If you didn’t start early, it’s not too late to plan for a comfortable retirement. A financial advisor can help you quantify and prioritize retirement goals, make a plan to accumulate and invest your money.';

// create a copy of the button classes
const education = document.querySelector('.education');
const personal = document.querySelector('.personal');
const investments = document.querySelector('.investments');
const retirement = document.querySelector('.retirement');

const explainTxt = document.querySelector('.explainTxt')

education.addEventListener('click', seeTxt1);


function seeTxt1() {
    const divElement = document.querySelector('.explainTxt');

    if (divElement.textContent.trim().length > 0) {
        explainTxt.style.opacity = '0';
        setTimeout(addTxt, 2000);
        function addTxt() {
            explainTxt.textContent = educationTxtContent;
            explainTxt.style.opacity = '1';
        }
    } else {
        explainTxt.textContent = educationTxtContent;
        explainTxt.style.opacity = '1';

    }
}

personal.addEventListener('click', seeTxt2);

function seeTxt2() {
    const divElement = document.querySelector('.explainTxt');

    if (divElement.textContent.trim().length > 0) {
        explainTxt.style.opacity = '0';
        setTimeout(addTxt, 2000);
        function addTxt() {
            explainTxt.textContent = personalTxtContent;
            explainTxt.style.opacity = '1';
        }
    } else {
        explainTxt.textContent = personalTxtContent;
        explainTxt.style.opacity = '1';

    }
}

investments.addEventListener('click', seeTxt3);

function seeTxt3() {
    const divElement = document.querySelector('.explainTxt');

    if (divElement.textContent.trim().length > 0) {
        explainTxt.style.opacity = '0';
        setTimeout(addTxt, 2000);
        function addTxt() {
            explainTxt.textContent = investmentsTxtContent;
            explainTxt.style.opacity = '1';
        }
    } else {
        explainTxt.textContent = investmentsTxtContent;
        explainTxt.style.opacity = '1';
    }
}

retirement.addEventListener('click', seeTxt4);

function seeTxt4() {
    const divElement = document.querySelector('.explainTxt');

    if (divElement.textContent.trim().length > 0) {
        explainTxt.style.opacity = '0';
        setTimeout(addTxt, 2000);
        function addTxt() {
            explainTxt.textContent = retirementTxtContent;
            explainTxt.style.opacity = '1';
        }
    } else {
        explainTxt.textContent = retirementTxtContent;
        explainTxt.style.opacity = '1';
    }
}


const download = document.querySelector('.download');

download.addEventListener('click', () => {
    alert('This would trigger a download on a live site.')
});

