let cart = JSON.parse(localStorage.getItem("cart"));

     let display = document.getElementById("display");
     let myCart = document.getElementById("myCart");
     let totalMRPDiv = document.getElementById("totalMRPValue");
     let savingOnMrp = document.getElementById("savingOnMRPValue");
     let subTotal = document.getElementById("subTotalValue");
     let orderDetails = document.getElementById("orderDetailsValue");
     let youSave = document.getElementById("youSaveValue");
     var cartItems = 0;
     var totalMrp = 0;
     var totalDiscount = 0;
     var totalDiscountedPrice = 0;
     var saving = 0;

    function showCartProduct(cart){

        let divLeft = document.createElement("div");
        // let divRight = document.createElement("div");

        cart.forEach((product)=>{
            let box = document.createElement("div");
            let text = document.createElement("div");
            let og = document.createElement("div");
            let price = document.createElement("div");
            let buttons = document.createElement("div");
            let quantityBox = document.createElement("div");
            let quantityText = document.createElement("p");
            let img = document.createElement("img");
            let title = document.createElement("p");
            let discounted_price = document.createElement("p");
            let original_price = document.createElement("p");
            let off_percentage = document.createElement("p");
            let quantity = document.createElement("select");
            let one = document.createElement("option");
            let two = document.createElement("option");
            let three = document.createElement("option");
            let four = document.createElement("option");
            let five = document.createElement("option");
            let six = document.createElement("option");
            let remove = document.createElement("button");
            let wishList = document.createElement("button");
            cartItems++;
            img.src = product.img;
            title.innerText = product.title;
            discounted_price.innerText = product.discountedPrice;
            original_price.innerText = product.originalPrice;
            totalMrp = totalMrp + +(product.originalPrice);
            totalDiscount = totalDiscount + +(product.discountedPrice);
            saving = totalMrp - totalDiscount;
            // console.log(totalMrp);        
            totalMRPDiv.innerText = totalMrp;
            savingOnMrp.innerText = saving;
            subTotal.innerText = totalDiscount;
            orderDetails.innerText = totalDiscount + 49;
            youSave.innerText = saving;
            off_percentage.innerText = product.offPercentage + "off";
            quantityText.innerText = "Qty:"
            one.innerText = "1";
            two.innerText = "2";
            three.innerText = "3";
            four.innerText = "4";
            five.innerText = "5";
            six.innerText = "6";
            remove.innerHTML = "Remove";
            wishList.innerHTML = "Add To Wishlist";

            box.setAttribute("id", "box");
            text.setAttribute("id", "textBox");
            price.setAttribute("id", "price");
            quantity.setAttribute("id", "quantity");
            quantityText.setAttribute("id", "quantityText");
            quantityBox.setAttribute("id", "quantityBox")
            divLeft.setAttribute("id", "divLeft");
            divRight.setAttribute("id", "divRight");
            og.setAttribute("id", "og");
            original_price.setAttribute("id", "originalPrice");
            off_percentage.setAttribute("id", "offPercentage");
            discounted_price.setAttribute("id", "discountedPrice");
            remove.setAttribute("id", "remove");
            wishList.setAttribute("id", "wishlist");
            
            quantity.append(one, two, three, four, five, six);
            quantityBox.append(quantityText, quantity)
            buttons.append(remove, wishList)
            text.append(title, quantityBox, buttons);
            og.append(original_price, off_percentage);
            price.append(discounted_price, og);
            box.append(img, text, price);
            divLeft.append(box);


            display.append(divLeft, divRight);
            
        });
    }

    showCartProduct(cart);
    myCart.innerText = "My Cart" + "(" + cartItems + ")";





    alsoBoughtCart = [
    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/223837/ny-bae-lip-crayon-pink-bad-guy-s-choice-4_4_display_1581012898_adb0d926.jpg",
        "title": "NY Bae Mets Matte Lip Crayon | Satin Texture | Nude Pink | Enriched with Vitamin E - Bad Guy's Choice 4 (2.8 g)",
        "discountedPrice": "125",
        "originalPrice": "165",
        "offPercentage": "24%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/224075/ny-bae-creme-nail-lacquer-red-pepperoni-pizza-5-13_5_display_1631791488_445176c0.jpg",
        "title": "NY Bae Creme Nail Enamel | Pink | Creamy Paint | Long Lasting Polish | Single Stroke Application - Pepperoni Pizza 5 (6 ml)",
        "discountedPrice": "76",
        "originalPrice": "80",
        "offPercentage": "5%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/186505/ny-bae-creme-nail-lacquer-spaghetti-and-meatballs-13-10_5_display_1631788281_0b4964ca.jpg",
        "title": "NY Bae Creme Nail Enamel | Pink | Creamy Paint | Long Lasting Polish | Single Stroke Application - Spaghetti & Meatballs 13 (6 ml)",
        "discountedPrice": "60",
        "originalPrice": "80",
        "offPercentage": "25%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/141883/ny-bae-lip-crayon-plum-partying-with-mascot-5_4_display_1624347729_a7da3317.jpg",
        "title": "NY Bae Lip Crayon, Mets Matte, Plum - Partying with Mascot 5 (2.8 g)",
        "discountedPrice": "113",
        "originalPrice": "149",
        "offPercentage": "24%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/155875/purplle-nail-lacquer-matte-high-on-cooking-16-9-ml_5_display_1571390329_56b4e24a.jpg",
        "title": "Purplle Nail Lacquer, Nude, Matte - High On Cooking 16 (9 ml)",
        "discountedPrice": "112",
        "originalPrice": "149",
        "offPercentage": "25%off"
    },
    
    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/224394/purplle-mini-liquid-lipstick-brown-my-first-gossip-20-4-8-ml-20_8_display_1632905655_5646836d.jpg",
        "title": "Purplle Ultra HD Matte Mini Liquid Lipstick| Long Lasting |Transferproof |Smudgeproof|Brown - My First Gossip 20 (1.6 ml)",
        "discountedPrice": "169",
        "originalPrice": "225",
        "offPercentage": "25%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/155874/purplle-nail-lacquer-matte-high-on-gaming-15-9-ml_5_display_1571390270_6c0c9cdb.jpg",
        "title": "Purplle Nail Lacquer, Black, Matte - High On Gaming 15 (9 ml)",
        "discountedPrice": "112",
        "originalPrice": "149",
        "offPercentage": "25%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/249634/blue-heaven-walk-free-mascara-water-proof-long-lash-black-pack-12-ml-pack-of-2-12_1_display_1623834980_fce1b96a.jpg",
        "title": "Blue Heaven LASH TWIST Mascara (Water Proof - Long Lash) Black Pack (12 ml)",
        "discountedPrice": "101",
        "originalPrice": "135",
        "offPercentage": "25%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/223844/ny-bae-lip-crayon-purple-danger-strike-zone-27_1_display_1581013312_f80acb34.jpg",
        "title": "NY Bae Mets Matte Lip Crayon | Satin Texture | Pink | Enriched with Vitamin E - Danger Strike Zone 27 (2.8 g)",
        "discountedPrice": "124",
        "originalPrice": "105",
        "offPercentage": "25%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/238834/ny-bae-lip-crayon-mets-matte-sweet-spot-12-16_4_display_1625061634_cefe8eea.jpg",
        "title": "NY Bae Lip Crayon, Mets Matte, Nude - Sweet Spot 12 (2.8 g)",
        "discountedPrice": "125",
        "originalPrice": "165",
        "offPercentage": "24%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/239373/blue-heaven-non-transfer-lip-color-velvet-wine-11-29_8_display_1628658419_1a316a22.jpg",
        "title": "Blue Heaven Lip Mousse Ultra Matte - Velvet Wine 11",
        "discountedPrice": "113",
        "originalPrice": "150",
        "offPercentage": "25%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/238859/ny-bae-super-matte-lipstick-peppy-pearson-1-18_1_display_1630652963_2f0845f5.jpg",
        "title": "NY Bae Super Matte Lipstick, Nude - Peppy Pearson 1",
        "discountedPrice": "124",
        "originalPrice": "165",
        "offPercentage": "25%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/223833/ny-bae-lip-crayon-nude-gettin-ready-for-the-catcher-24-12_4_display_1625060260_ffbb21b3.jpg",
        "title": "NY Bae Mets Matte Lip Crayon | Satin Texture | Nude Pink | Enriched with Vitamin E - Gettin' Ready For The Catcher 24 (2.8 g)",
        "discountedPrice": "125",
        "originalPrice": "165",
        "offPercentage": "24%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/228957/blue-heaven-walkfree-matte-lipstick-pink-delicacy-305-82_2_display_1622692191_7e3e81dd.jpg",
        "title": "Blue Heaven Intense Matte Lipstick - Pink Frost 305",
        "discountedPrice": "75",
        "originalPrice": "100",
        "offPercentage": "25%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/236405/ny-bae-liquid-lipstick-holiday-collection-bonfire-4-gm-17_10_display_1632373185_5a6db000.jpg",
        "title": "NY Bae Confessions of a Lip-a-holic Liquid Lipstick | Primer + Matte | Fiery Pink | Long Lasting- Bonfire 3 (4.5 ml)",
        "discountedPrice": "192",
        "originalPrice": "240",
        "offPercentage": "20%off"
    },

    {
        "img": "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/224415/purplle-mini-liquid-lipstick-maroon-my-first-hook-up-11-4-8-ml-48_9_display_1632903538_2c535504.jpg",
        "title": "Purplle Ultra HD Matte Mini Liquid Lipstick| Long Lasting |Transferproof |Smudgeproof| Red - My First Hook-up 11 (1.6 ml)",
        "discountedPrice": "169",
        "originalPrice": "225",
        "offPercentage": "25%off"
    },
];


//alsoBought carousell
    (function() {
            let carousellContent = document.querySelector('#carousellContent');
            let carousellLeftBtn = document.querySelector('#carousellLeftBtn');
            let carousellRightBtn = document.querySelector('#carousellRightBtn');

            let carousellLeftValue = 0;
            let totalWidth = carousellContent.getBoundingClientRect().width;
            let widthToMove = 250 + 16 + 250 + 16;
            let arrowBtnWidth = 50;
            let noOfSlides = (totalWidth / widthToMove);
            let currentSlide = 1;

            carousellLeftBtn.addEventListener('click', moveCarousellRight);
            carousellRightBtn.addEventListener('click', moveCarousellLeft);
            manageButtons();
            
            function moveCarousellLeft(){

                if(currentSlide == 1)
                {
                    carousellLeftValue -= widthToMove - arrowBtnWidth;
                } 
                else
                {
                    carousellLeftValue -= widthToMove;
                }

                currentSlide++;
                manageButtons();

                carousellContent.style.left = `${carousellLeftValue}px`;

            }

            function moveCarousellRight(){
                
                if(currentSlide == 2)
                {
                    carousellLeftValue = 8;
                } 
                else
                {
                    carousellLeftValue += widthToMove;
                }

                currentSlide--;
                manageButtons();

                carousellContent.style.left = `${carousellLeftValue}px`;
            }

            function manageButtons(){
                if (currentSlide == noOfSlides - 1)
                {
                    carousellRightBtn.classList.remove("show");
                }
                else
                {
                    carousellRightBtn.classList.add("show");
                }

                if (currentSlide == 1)
                {
                    carousellLeftBtn.classList.remove("show");
                }
                else
                {
                    carousellLeftBtn.classList.add("show");
                }
            }

        })();

        let carousell_content = document.getElementById("carousellContent");

function displayBoxes(){
    
    alsoBoughtCart.forEach((lipstick) => {

        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("p");
        let discounted_price = document.createElement("p");
        let original_price = document.createElement("p");
        let off_percentage = document.createElement("p");
        let carousellPrice = document.createElement("div")

        img.src = lipstick.img;
        title.innerText = lipstick.title;
        discounted_price.innerText = lipstick.discountedPrice;
        original_price.innerText = lipstick.originalPrice;
        off_percentage.innerText = lipstick.offPercentage;

        title.setAttribute("id", "ABmainTitle");
        discounted_price.setAttribute("id", "ABdiscountedPrice");
        original_price.setAttribute("id", "ABoriginalPrice");
        off_percentage.setAttribute("id", "ABoffPercentage");
        carousellPrice.setAttribute("id", "carousellPrice");
        img.setAttribute("class", "ABimg");

        title.style.whiteSpace = "nowrap";
        title.style.overflow = "hidden";
        title.style.textOverflow = "ellipsis"; 

        div.setAttribute("class", "box");
        carousellPrice.append( discounted_price, original_price, off_percentage);
        div.append(img, title, carousellPrice);
        carousell_content.append(div);
    });
}

displayBoxes();