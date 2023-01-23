const iconEl = document.querySelector('.close-icon');
 const containerEl = document.querySelector('.container');
 const btnEl = document.querySelector('.btn');
 const popupEl = document.querySelector('.popup_container');

 btnEl.addEventListener('click', ()=>{
                    containerEl.classList.add("active");
                    popupEl.classList.remove("active");
 })

 iconEl.addEventListener('click', () =>{
                    containerEl.classList.remove("active");
                    popupEl.classList.add("active");    
 })