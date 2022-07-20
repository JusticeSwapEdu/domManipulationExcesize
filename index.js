document.body.innerHTML +=  "<header id='header1'>JaVaScRiPt Made This</header>|"
document.body.innerHTML +=  "<span id='sp1'>ByJustice Alexander Swapshire </span>|"
document.body.innerHTML += "<span id='sp2'>( haki kubadilishananchi)</span>"


    document.getElementById("header1").style.textAlign = "center"
    document.getElementById("header1").style.verticalalign = "text-top" 
    document.getElementById("header1").style.fontSize = '40px'
    document.getElementById("header1").style.color = "violet"
            
        document.getElementById("sp1").style.color = "red"

        //   document.getElementById("theme-one").addEventListener('click', function onClick(event){
        //         document.body.style.backgroundColor = 'red';

        //    });
        //   document.getElementById("theme-two").addEventListener('click', function onClick(event){
        //       document.body.style.backgroundColor = 'blue';

        //  //  });
        // function changeColor(getColor){
        //     let bg = document.querySelector('.bg');
        //     let themedropdown = getColor.value;
        //     bg.style.background = themedropdown;

        // }

            var message = document.querySelector(".message")
                message.textContent="steve"
            var msg2 = document.getElementById("msg2")
                msg2.textContent="bob" 

      

            var btnClr = document.getElementById("clear")
            console.log(btnClr)
            var inputs= document.querySelector('.messages')
                console.log(inputs)

                btnClr.addEventListener('click', () => {
                    inputs.textContent = ""
                })