(function(){
    let s_one=document.querySelector(".section_one")
    let header_c=document.querySelector(".h_container")
 
//premiere section occupant 80% de la taille de l'ecran sur le scree xl
    
    let screen=window.screen.height;
    let s_one_height=((screen*70)/100)-header_c.getBoundingClientRect().height
    s_one.style.height=s_one_height+"px"
    
})();