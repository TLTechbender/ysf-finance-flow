const faq = document.querySelectorAll(".faq");
const dropDown = document.querySelectorAll(".answer");
const faqButton = document.querySelectorAll(".accordion-btn");

/*=======Logic for the accordion*==========*/

faq.forEach((question,index)=>{
    question.addEventListener('click', ()=>{
        dropDownLogic(index);
        switcher(index);
    });
  });
  
  
  const dropDownLogic = (i) =>{
    dropDown[i].classList.toggle('show-answer');
        
  }

  const switcher =(i)=>{
    if(faqButton[i].className.includes("fa-plus")){
        faqButton[i].classList.remove("fa-plus");
        faqButton[i].classList.add("fa-minus");
    }else{
        faqButton[i].classList.remove("fa-minus");
        faqButton[i].classList.add("fa-plus");
    }
  }
  