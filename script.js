const button = document.getElementById('button1');
const button1 = document.getElementById('button2');
const wrapper = document.getElementById('wrapper');

button.addEventListener('click', function() {
    
    console.log('click');
    const button2 = document.createElement('button');
    button2.innerHTML = 'YAMETE KUDASAI';
    wrapper.appendChild(button2);
    button2.addEventListener('click', function() {
        console.log('click');
        wrapper.innerHTML = '';
    });
});

button1.addEventListener('click', function() {
    console.log('click');
    wrapper.innerHTML = '';
});


