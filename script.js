// Declara Variáveis Globais para trabalhar com os elementos
var borda = document.querySelector("#borda");
var leftTop = document.querySelector('input#leftTop')
var rightTop = document.querySelector('input#rightTop')
var leftBottom = document.querySelector('input#leftBottom')
var rightBottom = document.querySelector('input#rightBottom')
var campo = document.querySelector('#campo')
var resultado = document.querySelector('#resultado')

// Altera a borda em tempo real
function alterar(valor, opcao){
    switch (opcao) {
        case 'LT':
            borda.style.borderTopLeftRadius = `${valor}px` // altera a borda em tempo real
            break; 
        case 'RT':  
            borda.style.borderTopRightRadius = `${valor}px`
            break;
        case 'LB':  
            borda.style.borderBottomLeftRadius = `${valor}px`               
            break; 
        case 'RB':  
            borda.style.borderBottomRightRadius = `${valor}px`               
            break;                                                
        default:
            break;
    }
    codigo()    
}

// Chamada na função alterar(), transforma as propriedades em texto CSS e lança para área de cópia
function codigo() {
    campo.value = ''     
    let lt = ''
    let rt = ''
    let lb = ''
    let rb = ''
    if(leftTop.value != ''){
        lt = `border-top-left-radius: ${leftTop.value}px;`               
    }
    if(rightTop.value != '') {
        rt = `border-top-right-radius: ${rightTop.value}px;`
    }
    if(leftBottom.value != '') {
        lb = `border-bottom-left-radius: ${leftBottom.value}px;`
    }
    if(rightBottom.value != '') {
        rb = `border-bottom-right-radius: ${rightBottom.value}px;`
    }
    campo.value += lt
    campo.value += rt
    campo.value += lb
    campo.value += rb
    resultado.appendChild(campo)
}    

// Clica pra copiar todo o código CSS gerado
function copiar() {  
    /* Select the text field */
    campo.select();
    campo.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
}

