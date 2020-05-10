
     // parametry //
    let activeElement = 0;



 

    const colorImgHtml = document.querySelector('.color');
    const grayImgHtml = document.querySelector('.gray');
    const h1Html = document.querySelector('.member h1');
    const h2Html = document.querySelector('.member h2');

    const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
    const grayImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
    const namesImages = ['Anna Baugart', 'Marek Feliksiak', 'Arek Pawłowicz'];
    const professionsImages = ['Programistka JS', "Designer", 'Front End Developer'];
    
    function changeElement() {
        activeElement++;
        if(activeElement == 3) {
            activeElement = -1; 
        }

     colorImgHtml.src = colorImages[activeElement];  
     grayImgHtml.src = grayImages[activeElement]; 
     h1Html.textContent = namesImages[activeElement]; 
     h2Html.textContent = professionsImages[activeElement]; 
}
    setInterval(changeElement, 4000)
    