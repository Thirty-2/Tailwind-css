//HOME

        //home redirect
        function logo(){
            location.href = "/Project/Home/index.html"
        }
        
        //menu
            document.getElementById('menu-open').addEventListener('click', () => {
                document.getElementById('ham').style.display = "flex"
                document.getElementById('menu-open').style.display = "none"
            })

            document.getElementById('menu-close').addEventListener('click', () => {
                document.getElementById('ham').style.display = "none"
                document.getElementById('menu-open').style.display = "flex"
            })


        // Theme
            document.getElementById('Switch2').addEventListener('click', () => {
                document.getElementById('ham').style.backgroundColor = "gray"
                document.getElementById('theme-C').style.backgroundColor = "white"
                document.getElementById('Switch1').style.display = "block"
                document.getElementById('Switch2').style.display = "none"
                document.getElementById('header').style.backgroundColor = "gray"
                document.getElementById('footer').style.backgroundColor = "gray"
                document.getElementById('footer').style.color = "white"
            })

            document.getElementById('Switch1').addEventListener('click', () => {
                document.getElementById('ham').style.backgroundColor = "white"
                document.getElementById('header').style.backgroundColor = "white"
                document.getElementById('theme-C').style.backgroundColor = "black"
                document.getElementById('Switch2').style.display = "block"
                document.getElementById('Switch1').style.display = "none"
                document.getElementById('footer').style.backgroundColor = "hsl(210, 100%, 53%)"
                document.getElementById('footer').style.color = "black"
            })


//EROLE
//duration
//front end

        //     const Person = {};

        //     let month = 1;
        //     document.getElementById("plus").addEventListener("click", () => {
        //     if (month < 6) document.getElementById("months").innerHTML = ++month;
        //     const Price = 50000 * month;
        //     document.getElementById("price-front").innerHTML = "&#8358 "+ Price.toLocaleString("en-GB");
        // });
        


        //     document.getElementById("minus").addEventListener("click", () => {
        //     if (month > 1) {
        //         document.getElementById("months").innerHTML = --month;
        //         const Price = 50000 * month;
        //         document.getElementById("price-front").innerHTML = "&#8358 "+ Price.toLocaleString("en-GB");
        //     }
        //             });

//back end 
            // let month2 = 1;
            // document.getElementById('plus2').addEventListener('click', () => {
            //     if(month2 < 6)
            //     document.getElementById('months2').innerHTML = ++month2;
            //     const Price2 = 50000*month2;
            //     document.getElementById('price-front2').innerHTML = Price2.toLocaleString('en-GB');
            // })

            // document.getElementById('minus2').addEventListener('click', () => {
            //     if (month2 > 1 ){
            //         document.getElementById('months2').innerHTML = --month2;
            //         const Price2 = 50000*month2;
            //         document.getElementById('price-front2').innerHTML = Price2.toLocaleString('en-GB');
            //     }
            // })


//Approved


    //form
    

    
    function Submit(){
        const selectElement = document.getElementById('Select');
    
        const selectedOptions = selectElement.selectedOptions;
        const Name = document.getElementById('userName').value;
        const Age = document.getElementById('userAge').value;
        if(!Name){
            document.getElementById('userName').style.outline = "1px solid red"
            document.getElementById('error-txt').style.display = "flex"

        }if(!Age){
            document.getElementById('userAge').style.outline = "1px solid red"
            document.getElementById('error-txt2').style.display = "flex"
        } else {
            setTimeout(() => {
                document.getElementById('Confirm').style.display = "flex"
                document.getElementById('Container').style.filter = "blur(5px)"
                document.getElementById('footer').style.filter = "blur(5px)"
            })
            setTimeout(() => {
                document.getElementById('Confirm').style.display = "none"
                document.getElementById('Container').style.filter = "none"
                document.getElementById('footer').style.filter = "none"
            }, 3000)

            document.getElementById('userName').style.outline = "1px solid green"
            document.getElementById('userAge').style.outline = "1px solid green"
            document.getElementById('error-txt').style.display = "none" 

            setInterval(() => {
                document.getElementById('form').style.display = "none"
                document.getElementById('Middle').style.display = "flex"
            }, 3000)

            document.getElementById('course').innerHTML = document.getElementById('courseName').innerHTML;

            document.getElementById('duration').innerHTML = document.getElementById('courseDuration').innerHTML;

            document.getElementById('fees').innerHTML = document.getElementById('courseFees').innerHTML;

            document.getElementById('name').innerHTML = document.getElementById('userName').value;
            document.getElementById('age').innerHTML = document.getElementById('userAge').value;

            for (const option of selectedOptions) {
                document.getElementById('gender').innerHTML = option.value;
            }
        }

    }
            


    //footer
            function facebook(){
                location.href = "https://www.facebook.com/zionstudycenter/"
            }

            function twitter(){
                location.href = "https://x.com/ZionStudyCentre?mx=2"
            }

            function insta(){
                location.href = "https://www.instagram.com/zionstudy1/"
            };

//support
            function support(){
                document.getElementById('Support-main').style.display ="flex"
            }
            function supportno(){
                document.getElementById('Support-main').style.display ="none"
            }

            function follow(){
                location.href = "/Project/footer/support.html"
            }
