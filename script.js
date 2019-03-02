//Home page
var xmlhttp = new XMLHttpRequest();
var url = "https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json";
xmlhttp.open("GET", url);
xmlhttp.send();

var bar = document.createElement("div");
bar.id = "menu3";

var a1 = document.createElement("a");
var a1text = document.createTextNode("Home");
a1.className = "current";
a1.appendChild(a1text);

var a2 = document.createElement("a");
var a2text = document.createTextNode("About");
a2.appendChild(a2text);

var a3 = document.createElement("a");
var a3text = document.createTextNode("Contact Us");
a3.appendChild(a3text);

var a4 = document.createElement("a");
var a4text = document.createTextNode("Cart");
a4.appendChild(a4text);

a1.id = "home";
a2.id = "about";
a3.id = "contact";
a4.id = "cartbutton";

bar.appendChild(a1);
bar.appendChild(a2);
bar.appendChild(a3);
bar.appendChild(a4);

document.body.appendChild(bar);

var bar2 = document.createElement("div");
bar2.id = "menu3sub";

document.body.appendChild(bar2);

var cartt = [];
var pqty = 1;



//products
xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4) {

        var obj = JSON.parse(xmlhttp.responseText);

        //------------------Aboutus div----------------------------
        var about = document.getElementById('top');

        /*------------------contactus div----------------------------*/
        var contact = document.getElementsByClassName('containerform')[0];

        /*--------------------------------------HOME DIV-------------------------------------------*/
        //container
        var container = document.createElement('div');
        container.className = 'container';

        //row div
        var row = document.createElement("div");
        row.className = "row";

        //to center the body
        var center = document.createElement("center");
        center.appendChild(row);
        container.appendChild(center);
        document.body.appendChild(container);

        for (var i = 0; i < obj.ProductCollection.length; i++) {

            //3 columns divs
            var column = document.createElement("div");
            column.className = "column";

            var card = document.createElement("div");
            card.className = "card";
            card.setAttribute('id', obj.ProductCollection[i]['ProductId']);

            //title
            var title = document.createElement('h3');
            title.style.color = "black";
            var text = document.createTextNode(obj.ProductCollection[i]['Name']);
            title.appendChild(text);
            card.appendChild(title);

            //image of product
            var img = document.createElement("img");
            var center = document.createElement("center");
            img.setAttribute('src', obj.ProductCollection[i]['ProductPicUrl']);
            img.setAttribute('width', 200);
            img.setAttribute('height', 200);
            center.appendChild(img);
            card.appendChild(center);
            column.appendChild(card);
            row.appendChild(column);

            //price of product
            var price = document.createElement("h3");
            price.style.color = "black";
            price.style.clear = "right";
            var pr = document.createTextNode("$" + obj.ProductCollection[i]['Price']);
            price.appendChild(pr);
            card.appendChild(price);

            //add to cart
            var cart = document.createElement("p");
            var but = document.createElement("button");
            but.setAttribute('id', obj.ProductCollection[i]['ProductId']);
            var textbut = document.createTextNode("Add to cart");
            but.appendChild(textbut);
            cart.appendChild(but);
            card.appendChild(cart);

            //cart pop up
            var divcart = document.createElement("div");
            divcart.id = "cart";
            divcart.style.display = "none";

            var citem = document.createElement("p");
            divcart.appendChild(citem);

            document.body.appendChild(divcart);

            if (localStorage.getItem('cart')) {
                cartt = JSON.parse(localStorage.getItem("cart"));

                showCartdiv();

            }

            //home add to cart button
            but.addEventListener("click", function(event) {
                var index = obj.ProductCollection.findIndex(x => x.ProductId == this.id);
                addtocart(index);
                event.stopPropagation();
            });

            /*-----------cart div-------------------------------*/

            var tablecont = document.getElementById('tablecont');

            var carttable = document.getElementById('carttable');

            tablecont.appendChild(carttable);

            //cart details
            divcart.addEventListener('click', function() {
                if ((row.style.display = "block") ||
                    (contact.style.display = "block") ||
                    (details.style.display = "block") ||
                    (about.style.display = "block")) {

                    a1.classList.remove("current");
                    a2.classList.remove("current");
                    a3.classList.remove("current");
                    a4.classList.add("current");
                    row.style.display = "none";
                    contact.style.display = "none";
                    details.style.display = "none";
                    about.style.display = "none";
                    tablecont.style.display = "block"
                    document.body.appendChild(tablecont);
                } else {
                    tablecont.style.display = "none";
                }

                showCart();
            });



            /*---------------------------Details div------------------*/
            //product details div
            var details = document.createElement('div');
            var header = document.createElement('header');
            var h4 = document.createElement("h4");
            var txt = document.createTextNode("");
            h4.appendChild(txt);
            header.appendChild(h4);
            details.appendChild(header);

            var section = document.createElement("section");
            var nav = document.createElement("nav");
            var image = document.createElement("img");
            nav.appendChild(image);
            section.appendChild(nav);

            var article = document.createElement("article");
            var h5 = document.createElement("h5");
            var tx = document.createTextNode("");
            h5.appendChild(tx);
            article.appendChild(h5);
            section.appendChild(article);

            var desc = document.createElement("p");
            var det = document.createTextNode("");
            desc.appendChild(det);
            article.appendChild(desc);

            var article2 = document.createElement("div");
            article2.className = "card2";

            var av = document.createElement('p');
            var avtex = document.createTextNode("");
            av.appendChild(avtex);
            article2.appendChild(av);

            var price = document.createElement('p');
            price.className = "price";
            var pricetext = document.createTextNode("");
            price.appendChild(pricetext);
            article2.appendChild(price);

            var quantitylabel = document.createElement("p");
            quantitylabel.className = "le";
            var qtext = document.createTextNode("Quantity:");
            quantitylabel.appendChild(qtext);
            article2.appendChild(quantitylabel);

            var qinput = document.createElement("input");
            qinput.setAttribute('type', "text");
            qinput.id = "ip2";
            qinput.defaultValue = 1;
            article2.appendChild(qinput);

            var cartbutton = document.createElement("p");
            var bu = document.createElement("button");
            var textbutton = document.createTextNode("Add to cart");
            bu.appendChild(textbutton);
            cartbutton.appendChild(bu);
            article2.appendChild(cartbutton);
            section.appendChild(article2);
            details.appendChild(section);


            //product details
            card.addEventListener('click', function() {
                var index = obj.ProductCollection.findIndex(x => x.ProductId == this.id);
                if (row.style.display = "block") {
                    document.body.appendChild(details);
                    a1.classList.remove("current");
                    row.style.display = "none";
                    contact.style.display = "none";
                    tablecont.style.display = "none";
                    about.style.display = "none";
                    details.style.display = "block"
                } else {
                    row.style.display = "block";
                    details.style.display = "none";
                }

                var textnode = document.createTextNode(obj.ProductCollection[index]['Name']);
                h4.replaceChild(textnode, h4.childNodes[0]);

                var imagenode = document.createElement('img');
                imagenode.setAttribute('src', obj.ProductCollection[index]['ProductPicUrl']);
                nav.replaceChild(imagenode, nav.childNodes[0]);

                var textnode1 = document.createTextNode(obj.ProductCollection[index]['Category']);
                h5.replaceChild(textnode1, h5.childNodes[0]);

                var textnode2 = document.createTextNode(obj.ProductCollection[index]['Description']);
                desc.replaceChild(textnode2, desc.childNodes[0]);

                var textnode3 = document.createTextNode("$" + obj.ProductCollection[index]['Price']);
                price.replaceChild(textnode3, price.childNodes[0]);

                var newbutton = document.createElement("button");
                var textbutton = document.createTextNode("Add to cart");
                newbutton.appendChild(textbutton);
                cartbutton.replaceChild(newbutton, cartbutton.childNodes[0])


                var qinput = document.createElement("input");
                qinput.setAttribute('type', "text");
                qinput.id = "ip2";
                qinput.defaultValue = 1;
                article2.replaceChild(qinput, article2.childNodes[3]);

                //add to cart button inside details
                newbutton.addEventListener('click', function() {
                    var q = qinput.value;
                    event.preventDefault();

                    var maxqty = obj.ProductCollection[index]['Quantity'];
                    var pprice = obj.ProductCollection[index]['Price'];
                    var pname = obj.ProductCollection[index]['Name'];
                    var avail = obj.ProductCollection[index]['Status'];
                    var img = obj.ProductCollection[index]['ProductPicUrl']

                    // update qty if product is already present
                    for (var j in cartt) {
                        if (cartt[j].Product == pname) {
                            if (cartt[j].Qty + Number(q) <= maxqty) {
                                cartt[j].Qty += Number(q);

                            } else {
                                alert("Product is out of stock");
                                cartt[j].Status = "Out of stock";
                            }
                            showCartdiv();
                            saveCart();
                            return;
                        }
                    }

                    var item = {
                        Image: img,
                        ID: obj.ProductCollection[index]['ProductId'],
                        Product: pname,
                        Price: pprice,
                        Qty: Number(qinput.value),
                        Status: avail,
                        Maxqty: maxqty
                    };
                    cartt.push(item);
                    saveCart();
                    showCartdiv();

                    qinput.defaultValue = 1;

                });

                event.stopPropagation();

            });

        }

        //home click
        a1.addEventListener("click", function() {
            if ((row.style.display = "none") ||
                (details.style.display = "none") || (about.style.display = "none")) {
                a1.classList.add("current");
                a2.classList.remove("current");
                a3.classList.remove("current");
                a4.classList.remove("current");
                row.style.display = "block";
                details.style.display = "none";
                contact.style.display = "none";
                tablecont.style.display = "none";
                about.style.display = "none";
            }
            details.style.display = "none";
            event.stopPropagation();

        });

        //about us click
        a2.addEventListener("click", function() {
            if ((row.style.display = "block") || (contact.style.display = "block") || (details.style.display = "block") ||
                (tablecont.style.display = "block") || (about.style.display = "none")) {
                a2.classList.add("current");
                a1.classList.remove("current");
                a3.classList.remove("current");
                a4.classList.remove("current");
                row.style.display = "none";
                details.style.display = "none";
                contact.style.display = "none";
                tablecont.style.display = "none";
                about.style.display = "block";
            }

            document.body.appendChild(about);
            console.log(about);

            event.stopPropagation();
        });

        //contactus click
        a3.addEventListener("click", function() {
            if ((row.style.display = "block") || (details.style.display = "block") ||
                (tablecont.style.display = "block") || (about.style.display = "block")) {

                a3.classList.add("current");
                a2.classList.remove("current");
                a1.classList.remove("current");
                a4.classList.remove("current");
                row.style.display = "none";
                details.style.display = "none";
                about.style.display = "none";
                tablecont.style.display = "none";
                contact.style.display = "block";
            }
            document.body.appendChild(contact);
            var form = document.forms['form'];
            var fbutton = document.forms['form']['submit'];
            fbutton.addEventListener('click', function(event) {
                event.preventDefault();
                var obj = {

                    name: document.forms['form']['name'].value,
                    subject: document.forms['form']['subject'].value,
                    message: document.forms['form']['message'].value,
                    email: document.forms['form']['email'].value,
                };

                if (obj.name == "")
                    alert("Please enter your Name");
                else if (obj.subject == "")
                    alert("Please enter your Subject");
                else if (obj.email == "")
                    alert("Please enter your Email");
                else {
                    var xhttp = new XMLHttpRequest();
                    xhttp.open("POST", "http://js.vacsera.com/api/final-project");
                    xhttp.setRequestHeader("Content-type", "application/json");
                    xhttp.send(JSON.stringify(obj));
                    console.log(JSON.stringify(obj));

                    form.reset();
                }

            });

            event.stopPropagation();
        });

        //cart click
        a4.addEventListener("click", function() {
            if ((row.style.display = "block") ||
                (contact.style.display = "block") ||
                (details.style.display = "block") ||
                (about.style.display = "block")) {
                a1.classList.remove("current");
                a2.classList.remove("current");
                a3.classList.remove("current");
                a4.classList.add("current");
                document.body.appendChild(tablecont);
                row.style.display = "none";
                contact.style.display = "none";
                details.style.display = "none";
                about.style.display = "none";
                tablecont.style.display = "block"

            } else {
                tablecont.style.display = "none";
            }

            showCart();

            event.stopPropagation();
        });

        function addtocart(index) {
            if (localStorage.getItem('cart')) {
                cartt = JSON.parse(localStorage.getItem("cart"));
                showCartdiv();
            }

            event.preventDefault();

            var maxqty = obj.ProductCollection[index]['Quantity'];
            var pprice = obj.ProductCollection[index]['Price'];
            var pname = obj.ProductCollection[index]['Name'];
            var avail = obj.ProductCollection[index]['Status'];
            var img = obj.ProductCollection[index]['ProductPicUrl']

            // update qty if product is already present
            for (var j in cartt) {
                if (cartt[j].Product == pname) {
                    if (cartt[j].Qty < maxqty) {
                        cartt[j].Qty += 1;

                    } else {
                        alert("Product is out of stock");
                        cartt[j].Status = "Out of stock";
                    }
                    showCartdiv();
                    saveCart();
                    return;
                }
            }

            var item = {
                Image: img,
                ID: obj.ProductCollection[index]['ProductId'],
                Product: pname,
                Price: pprice,
                Qty: pqty,
                Status: avail,
                Maxqty: maxqty
            };
            cartt.push(item);
            saveCart();
            showCartdiv();
        }


        function saveCart() {
            if (window.localStorage) {
                localStorage.cart = JSON.stringify(cartt);
                event.stopPropagation();
            }
        }


        function updateitem() {
            var qtyTotal = 0;
            var totalsum = 0;
            for (var i = 0; i < cartt.length; i++) {

                qtyTotal += cartt[i].Qty;
                totalsum += (cartt[i].Qty * cartt[i].Price);

            }
            citem.innerHTML = qtyTotal + " Total: $" + totalsum;
        }

        function showCart() {
            var cartdata = '<tr><th></th><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
            var totalqty = 0;
            var totalsum = 0;
            for (i = 0; i < cartt.length; i++) {

                cartdata += "<tr><td><center><img width = 70 src=" + cartt[i].Image +
                    "></img></center></td><td>" + cartt[i].Product + "</td><td>" + cartt[i].Qty + "</td><td> $" +
                    cartt[i].Price + "</td><td> $" + cartt[i].Qty * cartt[i].Price + "</td></tr>";

                totalqty += cartt[i].Qty;
                totalsum += (cartt[i].Qty * cartt[i].Price);

            }
            cartdata += '<tr style= "background-color: #f2f2f2;"><td> Total: </td><td></td><td>' + totalqty + '</td> <td></td> <td> $' + totalsum + '</td> </tr>'
            document.getElementById('carttable').innerHTML = cartdata

        }

        function showCartdiv() {
            if (cartt.length == 0) {
                divcart.style.display = "none";
                return;
            } else {
                divcart.style.display = "block";

            }
            updateitem();
        }

    }
}