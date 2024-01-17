const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
const p5 = document.querySelector('.p5');
const p6 = document.querySelector('.p6');
const p7 = document.querySelector('.p7');
const p8 = document.querySelector('.p8');
const p9 = document.querySelector('.p9');
const p10 = document.querySelector('.p10');
const p11 = document.querySelector('.p11');
const p12 = document.querySelector('.p12');

let explain1 = document.querySelector('.explain1')

p1.addEventListener('click', seeTxt1);

function seeTxt1() {
    explain1.textContent = 'What would happen if you become disabled or develop a chronic illness and cannot take care of yourself? One of the largest expenses you could face later in life is long-term care. With the right plan in place, you can have peace of mind knowing that you will have the care you need if that day ever comes. A financial advisor can help you understand the different options available to you for long-term care planning and how those options can prepare you and your family to manage the future costs of ageing.';
}

p2.addEventListener('click', seeTxt2);

function seeTxt2() {
    explain1.textContent = 'Making decisions about how you will be taken care of if you become incapacitated and what will happen to your assets when you die are essential parts of your total wealth strategy. The estate planning process involves creating financial and legal documents and can begin when you are young. A financial advisor can help you create a robust estate plan and regularly review that plan to ensure that it reflects your wishes and goals specific to how you want your wealth transferred.';
}