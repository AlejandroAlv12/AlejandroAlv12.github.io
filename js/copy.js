function CopiarUrl(){
    const footer=document.querySelector(".contact__button__header");
    
    let url=document.getElementById('number');
    navigator.clipboard.writeText(url.textContent);

    var copied=document.getElementById("copied");

    copied.style.display="var(--show)";
    copied.style.marginTop="0px";
    copied.style.scale="1";
    copied.style.filter="blur(0px)";

    setTimeout(function CopiarUrl(){
    copied.style.display=null;
    copied.style.marginTop=null;
    copied.style.scale=null;
    copied.style.filter=null;
    },2500);
};
