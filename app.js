    var circle = document.getElementById('gun');
    window.addEventListener('mousemove',function(e){
        console.log(e.clientX , e.clientY);
        circle.style.left = e.clientX - 12 + 'px';
        circle.style.top = e.clientY - 12 + 'px';
    })
