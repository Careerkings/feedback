 

   smileyEls = document.querySelectorAll('.smiley');
   btnEl = document.getElementById('btn');
   containerEl = document.querySelector('.container');
   var selectedRating = '';

   smileyEls.forEach((smileyEl) => {
    smileyEl.addEventListener('click', (e) => {
          removeActive();
      smileyEl.classList.add('active');
     selectedRating = e.target.parentNode.innerText
      console.log(selectedRating)
   })
   }
);


const removeActive = () => {
    smileyEls.forEach((smileyEl) => {
        smileyEl.classList.remove('active')
       
})
};

const handleClick = (e) => {
    if (selectedRating) {
    containerEl.innerHTML = `<h1> Thank you for your Feedback</h1>
                          <p>your feedback was ${selectedRating}</p>`

    } else {

        containerEl.innerHTML = 
        ` <p>pls, pick an emoji</p>`
    }


}
   
btnEl.addEventListener('click', handleClick);























































/*sadEl = document.querySelector('.sad');
neutralEl = document.querySelector('.neutral');
satisfiedEl = document.querySelector('.satisfied');

const handleSad = () => {
    sadEl.classList.add('active')
    neutralEl.classList.remove('active')
    satisfiedEl.classList.remove('active')

};
sadEl.addEventListener('click', handleSad);

const handleNeutral = () => {
    neutralEl.classList.add('active')
    sadEl.classList.remove('active')
    satisfiedEl.classList.remove('active')

};
neutralEl.addEventListener('click', handleNeutral);

const handleSatisfied = () => {
    satisfiedEl.classList.add('active')
    neutralEl.classList.remove('active')
    sadEl.classList.remove('active')

};
satisfiedEl.addEventListener('click', handleSatisfied);*/