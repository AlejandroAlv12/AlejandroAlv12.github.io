(function(){

    const sliders=[...document.querySelectorAll('.testimony__body')];
    // se colocan 3 puntos para que en vez de ser un nodo de elementos sea un "Array"

    const buttomNext= document.querySelector('#next');
    const buttomBefore= document.querySelector('#before');
    let value;

    buttomNext.addEventListener('click' , ()=>{
        changePosition(1);
    });
    buttomBefore.addEventListener('click' , ()=>{
        changePosition(-1);
    });

    const changePosition=(add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
      value = Number(currentTestimony);
      value += add;

      sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
      //el lenght nos dice cuantos elemetos hay en el array(en este caso 3 data-id="1","2","3")
      if(value === sliders.length+1 || value===0){
        value=value===0 ? sliders.length:1;
        
      }
      sliders[value-1].classList.add('testimony__body--show');


    }
})();