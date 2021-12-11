
// const app = new Vue({
//   el: "#app",
//   data:{
//     test:"text",
//     list: [
//       {
//         name: "Bob",
//         age: 69
//       },
//       {
//         nane: "Alice",
//         age: 42
//       }
//     ]
//   },
//   methods:{
//     changeText: function(txt) {
//       this.text=txt
//     },
//     addItem:function(){
//       this.list.push({name:"Jerry", age: 35})
//     }
//   }
// });



var cartItems = 0;
var newItem = 0;

$(document).ready(function(){

    ///// CHECK IF STORE IS EMPTY
    // var a = 1;
    // while (a = 1) {
    //   if ($('.container').is(':empty')) {
    //     let ele = document.getElementById('container');
    //     ele.innerHTML += 'Store Is Empty!';
    //     a = 0;
    //   }
    // }
    /////



    // myCart Button, add items to cart.
    $(".topnav").on('click', '#myCart',function() {
        cartItems = 0;
        document.getElementById("cartItems").innerHTML = cartItems;
        console.log("Removing all items from cart.")
        $(".cart").children().detach().prependTo('.inventory');
    });

    // Add the Cart button to the upper right corner.
    $('.topnav').append($("<button type=\"button\" id=\"myCart\">Cart:<a id=\"cartItems\">0</a></button>"));

    // Generates new product
    $('#add_div').on('click', function(){
        newItem++;
        $('#container').append($("<div id='"+newItem+"' class='item'>"+'<img width="100" height="100" onerror=\'this.src="noimage.png"\' src=\'testimage-wrong.png\'/>'+'<button id="add_to_cart">Add to Cart</button>'));
    });

    // Remove item and move to cart
    $("#container").on("click", "#add_to_cart", function() {
        console.log("Removing"+$(this).parent().attr('id'));
        $(this).parent().remove();
    });

    // Checks if image src is valid
    $(document).ready(function(){
        $("img").bind("error",function(){
            // Replacing image source
            $(this).attr("src","noimage.png");
        });
    });

    var products = [
        {
            id:0,
            name:"Jazzmaster",
            instrument_type: "Guitar",
            brand: "Fender",
            price:"100.00",
            image:"https://www.fmicassets.com/Damroot/ZoomJpg/10001/0149753305_gtr_frt_001_rr.jpg",
            color:"red"

        },
        {
            id:1,
            name:"GB1K",
            instrument_type: "piano",
            brand: "Yamaha",
            price:"200.00",
            image:"https://usa.yamaha.com/files/GB1K-1-Polished_Ebony_735x735_f47b5f5720673bf28f3d6fdaa097211f.jpg",
            color:"green"
        },
        {
            id:2,
            name:"S60 ",
            instrument_type: "guitar",
            brand: "Maton",
            price:"300.00",
            image: "https://maton.com.au/images/made/assets/uploads/products/S60_Front_900_422_s.png",
            color:"blue"
        },
        {
            id:3,
            name:"Mustang",
            instrument_type: "guitar",
            brand: "Fender",
            price:"400.00",
            image:"https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/0149783300_gtr_frt_001_rr.jpg",
            color:"red"
        },
        {
            id:4,
            name:"Genos",
            instrument_type: "piano",
            brand: "Yamaha",
            price:"500.00",
            image:"https://www.yamaha.com/yamahavgn/PIM/Images/8A3C6B12968B494FBCC42149AA259E0D_12075_735x735_e2522531b00e783a7be1ddf610486a3c.jpg",
            color:"green"
        },
        {
            id:5,
            name:"SRS808",
            instrument_type: "guitar",
            brand: "Maton",
            price:"600.00",
            image: "https://maton.com.au/assets/uploads/products/SRS808.png",
            color:"blue"
        }
    ];

    // $('body').append('<form><p>Enter New Item</p><input type="text" id="name" name="name"><br><input type="text" id="price" name="price"><br><input type="text" id="color" name="value"><br><button type="button" onclick="sendData();">Create New</button><br><input type="submit"  value="Submit" id="g"></form>');
    $('body').append('<form><p>Enter new item</p><label for="name">Name:</label><input type="text" id="name" name="name"><br><label for="price">Price:</label><input type="text" id="price" name="price"><br><label for="color">Color:</label><input type="text" id="color" name="color"><br><label for="brand">Brand:</label><input type="text" id="brand" name="brand"><br><label for="instrument_type">Instrument Type:</label><input type="text" id="instrument_type" name="instrument_type"><br><input type="submit" value="Submit" id="g"></form>');


    // $( "form" ).submit(function( event ) {
    //   console.log( $( this ).serializeArray() );
    //   $( this ).serializeArray();
    //   event.preventDefault();
    // });


    $( "form" ).submit(function( event ) {
        console.log( $( this ).serializeArray() );
        var newItem = $( this ).serializeArray();
        event.preventDefault();
        products.push(newItem);
        console.log(products);
    });




    // When item image is clicked make details pop up
    function popUp(idx) {
        var that = this;

        this.ele = document.createElement("div");
        this.ele.classList.add("popUp");
        this.imgEle = document.createElement("img");
        this.imgEle.setAttribute("src", products[idx].image);
        this.nameEle = document.createElement("p");
        this.nameEle.innerHTML ="Name: " + products[idx].name;
        this.priceEle = document.createElement("p");
        this.priceEle.innerHTML ="Price: $" + products[idx].price;

        this.instEle = document.createElement("p");
        this.instEle.innerHTML = "Instrument Type:" + products[idx].instrument_type;
        this.brandEle = document.createElement("p");
        this.brandEle.innerHTML = "Brand:" + products[idx].brand;

        this.ele.appendChild(this.imgEle);
        this.ele.appendChild(this.nameEle);
        this.ele.appendChild(this.priceEle);
        this.ele.appendChild(this.instEle);
        this.ele.appendChild(this.brandEle);

        // Click off to Exit popUp
        this.ele.addEventListener("click", function() {
            that.ele.style.display = "none";
        });
        document.body.appendChild(this.ele);
    }

    function items() {
        var that = this;
        this.products = [];
        this.ele = document.createElement("div");
        this.ele.classList.add("inventory");

        for (let i = 0; i < products.length; i++) {
            this.products.push(new fruit(i));
            //popUp only when image is clicked on
            this.products[i].imgEle.addEventListener("click", function(){
                var pop = new popUp(i);
            });
            this.ele.appendChild(this.products[i].ele);
        }
        document.body.appendChild(this.ele);
    }

    function addToCart(idx) {
        cartItems++;
        console.log(cartItems);
        document.getElementById("cartItems").innerHTML = cartItems;

        $(".item").on("click", ".add_to_cart", function() {
            console.log("Removing"+$(this).parent().attr('class'));
            $(this).parent().detach().appendTo('.cart');
            // add element to cart array...???

            if ($('.container').is(':empty')) {
                // let ele = document.getElementById('container');
                // ele.innerHTML += 'Store Is Empty!';
                $(this).parent().detach().appendTo('.cart');
            }

        });
    }

    function fruit(idx) {
        var that = this;

        this.ele = document.createElement("div");
        this.ele.classList.add("item");
        this.imgEle = document.createElement("img");
        this.imgEle.setAttribute("src", products[idx].image);
        this.nameEle = document.createElement("p");
        this.nameEle.innerHTML = "Name:" + products[idx].name;
        this.priceEle = document.createElement("p");
        this.priceEle.innerHTML = "Price:" + products[idx].price;
        // this.
        this.instEle = document.createElement("p");
        this.instEle.innerHTML = "Instrument Type:" + products[idx].instrument_type;
        this.brandEle = document.createElement("p");
        this.brandEle.innerHTML = "Brand:" + products[idx].brand;


        this.btnEle = document.createElement("button");
        this.btnEle.classList.add("add_to_cart");
        this.btnEle.innerHTML = "Add to Cart";
        this.btnEle.addEventListener("click", addToCart);

        // Change Background color on mouse hover
        this.ele.addEventListener("mouseover", function() {
            that.ele.style.backgroundColor = products[idx].color;
        });
        this.ele.addEventListener("mouseout", function(){
            that.ele.style.backgroundColor = "white";
        });
        this.ele.appendChild(this.imgEle);
        this.ele.appendChild(this.nameEle);
        this.ele.appendChild(this.priceEle);
        this.ele.appendChild(this.instEle);
        this.ele.appendChild(this.brandEle);
        this.ele.appendChild(this.btnEle);
        document.body.appendChild(this.ele);
    }

    var restockStore = new items();

});




// function sendData() {
//     var name = document.getElementById('name').value;
//     // if (!(typeof name === 'undefined') && name!=null && name.trim()!='') {
//     //     products.push(name);
//     // }

//     var price = document.getElementById('price').value;
//     // if (!(typeof name === 'undefined') && name!=null && name.trim()!='') {
//     //   products.push(price);
//     // }

//     var color = document.getElementById('color').value;
//     // if (!(typeof name === 'undefined') && name!=null && name.trim()!='') {
//     //     products.push(color);
//     // }

//     products.push(name, price, color);

//     console.log(products);
// }






// var products = [
//   {
//     id:0,
//     name:"Fender Jazzmaster",
//     price:"100.00",
//     image:"https://www.fmicassets.com/Damroot/ZoomJpg/10001/0149753305_gtr_frt_001_rr.jpg",
//     color:"red"
//   },
//   {
//     id:1,
//     name:"Yamaha GB1K",
//     price:"200.00",
//     image:"https://usa.yamaha.com/files/GB1K-1-Polished_Ebony_735x735_f47b5f5720673bf28f3d6fdaa097211f.jpg",
//     color:"green"
//   },
//   {
//     id:2,
//     name:"Maton S60 ",
//     price:"300.00",
//     image: "https://maton.com.au/images/made/assets/uploads/products/S60_Front_900_422_s.png",
//     color:"blue"
//   },
//   {
//     id:3,
//     name:"Fender Mustang",
//     price:"400.00",
//     image:"https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/0149783300_gtr_frt_001_rr.jpg",
//     color:"red"
//   },
//   {
//     id:4,
//     name:"Yamaha Genos",
//     price:"500.00",
//     image:"https://www.yamaha.com/yamahavgn/PIM/Images/8A3C6B12968B494FBCC42149AA259E0D_12075_735x735_e2522531b00e783a7be1ddf610486a3c.jpg",
//     color:"green"
//   },
//   {
//     id:5,
//     name:"Maton SRS808",
//     price:"600.00",
//     image: "https://maton.com.au/assets/uploads/products/SRS808.png",
//     color:"blue"
//   }
// ];



// function objectifyForm(products) {
//   //serialize data function
//   console.log("serilizing array");
//   var returnArray = {};
//   for (var i = 0; i < products.length; i++){
//       returnArray[products[i]['name']] = products[i]['value'];
//   }
//   return returnArray;
//   console.log(returnArray);
// }
