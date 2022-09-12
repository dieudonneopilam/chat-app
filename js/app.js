(function(){
    var msg_envoyes = document.querySelectorAll('#content-users li');
    var p = document.querySelectorAll('.msg-content')
    var input = document.querySelector('#input')
    var btnSearch = document.querySelector('#searchInput');
    var msgEnvoyers = document.querySelectorAll('#one-content')
    var divsearch = document.querySelector('#resultSearch')
    // creatio de element paragraphe de resultat de recherche
    var pSearch = document.createElement('p');

    
    for (let index = 0; index < msg_envoyes.length; index++) {
        var msg_envoye = msg_envoyes[index];
        msg_envoye.addEventListener('click',function(){
            var name = document.querySelector('#p-droite .title')
            var photo = document.querySelector('#p-droite .photo img')
            name.innerText = this.querySelector('.msg-name').innerText
            photo.src = this.querySelector('.cont img').src
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

    var reduire = function(p,tailleEcranUser){
        var nP = ''
        if(tailleEcranUser>=710){
            nP =''
            for (let i = 0; i < 80; i++) {
                nP+=p.innerText[i];
            }
            nP+='....'
        }else if(tailleEcranUser>=400){
            nP =''
            for (let i = 0; i < 50; i++) {
                nP+=p.innerText[i];
            }
            nP+='....'
        }else if(tailleEcranUser>=371){
            nP =''
            for (let i = 0; i < 29; i++) {
                nP+=p.innerText[i];
            }
            nP+='....'
        }else if(tailleEcranUser>=360){
            nP =''
            for (let i = 0; i < 29; i++) {
                nP+=p.innerText[i];
            }
            return nP+'....'
        }else if(tailleEcranUser>=300){
            nP =''
            for (let i = 0; i < 24; i++) {
                nP+=p.innerText[i];
            }
            nP+='....'
        }else if(tailleEcranUser>=200){
            nP =''
            for (let i = 0; i < 15; i++) {
                nP+=p.innerText[i];
            }
            nP+='....'
        }
        return nP;
    }
    var reduireMessageUser = function(lesParagraph){
        var msgRetour ;
        
        for (let i = 0; i < lesParagraph.length; i++) {
            var paragraphe =lesParagraph[i];
            var tailleEcranUser = paragraphe.parentElement.clientWidth;
            
            msgRetour = reduire(paragraphe,tailleEcranUser);
            paragraphe.innerText = msgRetour
        }
    }

    reduireMessageUser(p)

    // input.addEventListener('keyup',function(e){
    //     var value = input.value
    //     var textarea = document.createElement('textarea')
    //     textarea.id="input"
    //     textarea.value=value
    //     input.parentElement.children[1].style.display='none'
    //     input.parentElement.children[2].style.display='none'
    //     console.log(input.parentElement.children[3])
    //     textarea.style.width="80%"
    //     textarea.style.padding="5px"
        
    //     input.parentElement.replaceChild(textarea,input)
    //     textarea.focus()
    // })


    btnSearch.addEventListener('keyup',function(){
        
    })

    //
    
    
    var b = window.document.querySelector("body")
    b.scrollTop=b.scrollHeight

    //validation du formulaire

    var form = document.querySelector('#form')
    var message = document.querySelector('#input')

    form.addEventListener('submit',function(e){
        if(message!=""){
            
        }else{
            
        }
    })
})()