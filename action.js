let r=document.getElementById('reg');
let cl=document.getElementById('close');
let su=document.getElementById('su');
let signup=document.getElementById('signup');
let mbtn2=document.getElementById('mbtn2');
let si=document.getElementById('si')
        
        
    su.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        si.style.display = 'none';
        signup.style.display = 'block';
    });

    mbtn2.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        si.style.display = 'block';
        signup.style.display = 'none';
    });
    cl.addEventListener('click',()=>{
        r.style.display="none"
    })