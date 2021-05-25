
var addBtns = document.querySelectorAll(".add-product")

for(let i=0; i<addBtns.length;i++){
    addBtns[i].addEventListener("click",function(){
        addBtns[i].nextElementSibling.value++
        addBtns[i].parentNode.nextElementSibling.nextElementSibling.innerText=
            addBtns[i].nextElementSibling.value*addBtns[i].parentNode.previousElementSibling.innerText
        Totalprice()
    })
    
}
    
var minusBtns = document.querySelectorAll(".minus-a-product")

for(let i=0; i<minusBtns.length;i++){
    minusBtns[i].addEventListener("click",function(){
        if(minusBtns[i].previousElementSibling.value>1){
            minusBtns[i].previousElementSibling.value--
            minusBtns[i].parentNode.nextElementSibling.nextElementSibling.innerText=
                minusBtns[i].previousElementSibling.value*minusBtns[i].parentNode.previousElementSibling.innerText
            Totalprice()
        }
    })
    
}


var removeBtn = document.querySelectorAll(".remove-product")

for(let i=0;i<removeBtn.length;i++){
    removeBtn[i].addEventListener("click",function(){
        removeBtn[i].parentNode.parentNode.remove()
        Totalprice()
    })
}

var like = document.querySelectorAll(".fa-heart")
for(let i=0; i<like.length;i++)
{
    like[i].addEventListener("click",function(){
        if(like[i].style.color==="rgb(250, 0, 0)"){
            like[i].style.color="rgb(163, 198, 255)"
        }else
        {
            like[i].style.color="rgb(250, 0, 0)";
        }
    })
}


        function Totalprice() {

            var subtotal = 0;

            /* Sum up row totals */
            $('.product').each(function () {
                subtotal += parseFloat($(this).children('.product-line-price').text());
            });
            document.querySelector(".totals-value").innerText = subtotal.toFixed(2);
        }