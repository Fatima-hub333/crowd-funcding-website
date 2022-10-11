const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.header_items');
const overlays = document.querySelector('#overlay');
const header = document.querySelector('#header');
const hr = document.querySelectorAll('.days_left_container hr');
const bookmarkP = document.querySelector('.bookmark h3');
const bookmark = document.querySelector('.bookmark');


//create a load Function to check some things
const back_items = document.querySelectorAll('.back_items form');
const back_items_wrapper = document.querySelectorAll('.back_items_wrapper');




menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    if (menu.classList.contains('is-active')){
        overlays.classList.add('overlay');
        header.style.zIndex  = '999';
     }
     else{
         overlays.classList.remove('overlay');
         header.style.zIndex  = '9';
     }
});

//create style for hr tag
const hrStyles = {
    display : 'block',
    width   : '50px',
    margin  : '0 auto'
};

function toggleBookmark(){
     if (window.innerWidth <= 480){
        bookmarkP.style.display = 'none';
        bookmark.style.width = 'auto';
    }else{
        bookmarkP.style.display = 'inline-block';
        bookmark.style.width = '200px';
    }
}

window.addEventListener('load',()=>{
    toggleBookmark();
});

window.addEventListener('resize',()=>{
    if (window.innerWidth <= 768){
        hr.forEach(item => {
            Object.assign(item.style,hrStyles);
        });
    }
    else{
        hr.forEach(item => {
           item.style.display = 'none';
        });
    }
    toggleBookmark();
});

//create click eventlistener for bookmark
bookmark.addEventListener('click',()=>{
    bookmark.classList.toggle('svgActive');
    if (bookmark.classList.contains('svgActive')){
        bookmarkP.innerHTML = "Bookmarked";
    }
    else{
        bookmarkP.innerHTML = "Bookmark";
    }
});

const radioBtn = document.querySelectorAll('.back_items_wrapper input[type=radio]');
let parent;
let formActive;
for(let i = 0; i < radioBtn.length; i++){
    radioBtn[i].addEventListener('click', ()=>{
       if (radioBtn[i].checked){
           parent = radioBtn[i].parentNode.parentNode;
            _parent = radioBtn[i].parentNode;
           parent.style.transition = ".3s ease-in-out";
           parent.style.border = "2px solid #3cb4ac";
           _parent.style.borderBottom = "3px solid #f1f1f1";

            if (radioBtn[i].id !== 'pledge')
            {
                formActive =  _parent.nextElementSibling;
                formActive.classList.remove('formElement');
                formActive.classList.add('formActive');
            }
       }
       //to change unchecked readio buttons to their defualt
       for(let i =0; i < radioBtn.length; i++){
            if (!radioBtn[i].checked){
                parent = radioBtn[i].parentNode.parentNode;
                _parent = radioBtn[i].parentNode;
                parent.style.border = "1px solid #f1f1f1";
                _parent.style.borderBottom = "1px solid #f1f1f1";
                if (radioBtn[i].id !== 'pledge')
                {
                    formActive =  _parent.nextElementSibling;
                    formActive.classList.remove('formActive');
                    formActive.classList.add('formElement');
                }
            }
        }
    });
}

const closeModalBtn = document.querySelector('#closeBtn');
const openModalBtn = document.querySelector('#back_this_project');
const openModal = document.querySelector('#modal_container');
const over = document.querySelector('#over');
const modalokay = document.querySelector('#thanks');

openModalBtn.addEventListener('click',()=>{
    over.classList.add('over');
    openModal.classList.remove('modal_container');
    openModal.classList.add('modalActive');
});

closeModalBtn.addEventListener('click',()=>{
    over.classList.remove('over');
    openModal.classList.remove('modalActive');
    openModal.classList.add('modal_container');
});

const btnContinue = document.querySelectorAll('.back_items form div div');
const btngotIt = document.querySelector('#thanks button');
btnContinue.foreach(item=>{
    item.addEventListener('click',()=>
        {
            openModal.classList.remove('modalActive');
            openModal.classList.remove('modal_container');
            openModal.classList.remove('thanksActive');
            over.classList.add('over');
            modalokay.classList.add('thanks');
        }
    );
    break;
});

btngotIt.addEventListener('click',()=>{
    over.classList.remove('over');
    openModal.classList.remove('modalActive');
    modalokay.classList.remove('thanks');
    modalokay.classList.add('thanksActive')
    openModal.classList.add('modal_container');
});
   
