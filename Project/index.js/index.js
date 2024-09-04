//HOME

        //home redirect
        document.getElementById('logo').addEventListener('click', () => {
            location.href = "/Project/Home/index.html"
        });
        
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

            let month = 1;
            document.getElementById("plus").addEventListener("click", () => {
            if (month < 6) document.getElementById("months").innerHTML = ++month;
            const Price = 50000 * month;
            document.getElementById("price-front").innerHTML = "&#8358 "+ Price.toLocaleString("en-GB");
        });
        


            document.getElementById("minus").addEventListener("click", () => {
            if (month > 1) {
                document.getElementById("months").innerHTML = --month;
                const Price = 50000 * month;
                document.getElementById("price-front").innerHTML = "&#8358 "+ Price.toLocaleString("en-GB");
            }
                    });

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
            const Name = document.getElementById("Name").value;
            const Age = document.getElementById("Age").value;
            const selection = document.getElementById('select1').value;
            const selection2 = document.getElementById('select2').value;

            const Person = {};
            function Approved() {
            // if (Name) {
            //     document.getElementById("Name").style.border = "red";
            // } else {
            //     document.getElementById("Confirm").style.display = "flex";
            //     document.getElementById("Container").style.filter = "blur(5px)";
            // }

                Name.push
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
            }


