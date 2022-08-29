(function(){
    var msg_envoyes = document.querySelectorAll('#content-users li');
    var pGauche = document.querySelector('#one-content .msg-content')
    var DivpGauche = document.querySelector('#one-content .cont')
    var input = document.querySelector('#input')
    var textarea = document.querySelector('textarea')


    for (let index = 0; index < msg_envoyes.length; index++) {
        var msg_envoye = msg_envoyes[index];
        msg_envoye.addEventListener('click',function(){
            var name = document.querySelector('#p-droite .title')
            var photo = document.querySelector('#p-droite .photo img')
            name.innerText = this.querySelector('.msg-name').innerText
            photo.src = this.querySelector('.msg-profil img').src
        })
        var box = function(e){
            this.style.borderRadius = '20px';
            this.style.boxShadow = '0px 0px 5px #dbeeff';
            this.style.backgroundColor = 'rgb(248, 248, 248)';
            e.preventDefault();
        }
        var boxout = function(e){
            this.style.border = null;
            this.style.boxShadow = null;
            this.style.backgroundColor = null;
            e.preventDefault();
        }
        msg_envoye.addEventListener('mouseover',box)
        msg_envoye.addEventListener('mouseout',boxout)
    }
    var paragraphe = function(){
        var nP = pGauche.innerText;
        if(DivpGauche.clientWidth>=710){
            nP =''
            for (let i = 0; i < 80; i++) {
                nP+=pGauche.innerText[i];
            }
            return nP+'....'
        }
        if(DivpGauche.clientWidth>=400){
            nP =''
            for (let i = 0; i < 50; i++) {
                nP+=pGauche.innerText[i];
            }
            return nP+'....'
        }
        if(DivpGauche.clientWidth>=371){
            nP =''
            for (let i = 0; i < 29; i++) {
                nP+=pGauche.innerText[i];
            }
            return nP+'....'
        }
        if(DivpGauche.clientWidth>=360){
            nP =''
            for (let i = 0; i < 29; i++) {
                nP+=pGauche.innerText[i];
            }
            return nP+'....'
        }
        if(DivpGauche.clientWidth>=300){
            nP =''
            for (let i = 0; i < 24; i++) {
                nP+=pGauche.innerText[i];
            }
            return nP+'....'
        }
        
        if(DivpGauche.clientWidth>=200){
            nP =''
            for (let i = 0; i < 15; i++) {
                nP+=pGauche.innerText[i];
            }
            return nP+'....'
        }
        return nP
    }
    pGauche.innerHTML = paragraphe()
    setInterval(() => {
        console.log(textarea)
    }, 5000);
    input.addEventListener('keyup',function(e){
        if(e.key==="Enter"){
            alert('enter touch')
        }
        var value = input.value
        var textarea = document.createElement('textarea')
        textarea.id="input"
        textarea.value=value
        input.parentElement.children[1].style.display='none'
        input.parentElement.children[2].style.display='none'
        console.log(input.parentElement.children[3])
        textarea.style.width="80%"
        textarea.style.padding="5px"
        
        input.parentElement.replaceChild(textarea,input)
        textarea.focus()
    })
})()