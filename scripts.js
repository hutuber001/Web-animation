
    var schroeflinks1 = document.querySelector('.schroeflinks1');
    var schroeflinks2 = document.querySelector('.schroeflinks2');

function schroef {

    schroeflinks1.classList.toggle('active');
    schroeflinks2.classList.toggle('active');
}

schroeflinks1.addEventListener('click', schroef);
schroeflinks2.addEventListener('click', schroef);
