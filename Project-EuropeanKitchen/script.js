const menu = [{
        id: 1,
        title: "Fleisch Rouladen",
        category: "German",
        price: 11.49,
        img: "https://www.foodies-magazin.de/wp-content/uploads/2018/10/Fotolia_Rinderrouladen_Fo_1024x682.jpg",
    }, {
        id: 2,
        title: "Labskaus",
        category: "German",
        price: 8.99,
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/labskaus-d47f46a2-e305-4d2b-a477-ac6f2b79701e.jpg"
    }, {
        id: 3,
        title: "Schnitzel",
        category: "German",
        price: 15.59,
        img: "https://www.simplyrecipes.com/thmb/Fn4mOjcb_KxZJHPgkbCH22Qbz6Q=/4256x2832/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chicken-Schnitzel-LEAD-07-d2bcfa86a4b34eb0afaad2840b757c0e.jpg",
    }, {
        id: 4,
        title: "Margherita Pizza",
        category: "Italian",
        price: 7.99,
        img: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/09/pizza-margherita-tarifi-yeni-2018.jpg",
    }, {
        id: 5,
        title: "Pasta al Sugo Arrabbiata",
        category: "Italian",
        price: 9.49,
        img: "https://www.recipesfromitaly.com/wp-content/uploads/2022/05/penne-all-arrabiata_spicy-Italian-tomato-pasta-recipe-1x1-1200x1200-1.jpg",
    }, {
        id: 6,
        title: "Lasagna",
        category: "Italian",
        price: 9.49,
        img: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    }, {
        id: 7,
        title: "Kebap",
        category: "Turkish",
        price: 5.99,
        img: "https://images.deliveryhero.io/image/fd-tr/LH/us9l-hero.jpg",
    }, {
        id: 8,
        title: "Lahmacun",
        category: "Turkish",
        price: 4.99,
        img: "https://cdn.yemek.com/mncrop/940/625/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    }, {
        id: 9,
        title: "Baklava",
        category: "Turkish",
        price: 12.99,
        img: "https://cdn.yemek.com/mncrop/940/625/uploads/2017/06/fistikli-baklava-yemekcom1.jpg",
    }

]

const buttonSection = document.querySelector(".btn-container");
const menuSection = document.querySelector(".section-center");

const createButtons = () => {
    let allButtons = `
    <button id="all" class="btn btn-outline-dark btn-item" type="button">
      All
    </button>
    <button id="german" class="btn btn-outline-dark btn-item" type="button">
      German
    </button>
    <button id="italian" class="btn btn-outline-dark btn-item" type="button">
      Italian
    </button>
    <button id="turkish" class="btn btn-outline-dark btn-item" type="button">
      Turkish
    </button>
  `
    buttonSection.innerHTML = allButtons;
}
createButtons();

const createFoods = (food) => {
    let html = `
    <div class="menu-items col-lg-6 col-sm-12">
      <img class="photo" src="${food.img}" alt="${food.title}">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${food.title}</h4>
          <h4 class="price">${food.price}</h4>
        </div>
        <div class="menu-text">${food.desc}</div>
      </div>
    </div>  
  `
    return html;
}

const listAllFoods = () => {
        let allFoods = "";

        menu.map(item => {
            allFoods += createFoods(item)
        })
        menuSection.innerHTML = allFoods;
    }
    //Show All Foods on Homepage
document.addEventListener("DOMContentLoaded", listAllFoods);

const listGermanFoods = () => {
    let germanFoods = "";
    menu.map(item => {
        if (item.category === "German") {
            germanFoods += createFoods(item)
        }
    })
    menuSection.innerHTML = germanFoods;
}
document.querySelector("#german").addEventListener("click", listGermanFoods);

const listItalianFoods = () => {
    let italianFoods = "";
    menu.map(item => {
        if (item.category === "Italian") {
            italianFoods += createFoods(item)
        }
    })
    menuSection.innerHTML = italianFoods;
}
document.querySelector("#italian").addEventListener("click", listItalianFoods);

const listTurkishFoods = () => {
    let turkishFoods = "";
    menu.map(item => {
        if (item.category === "Turkish") {
            turkishFoods += createFoods(item)
        }
    })
    menuSection.innerHTML = turkishFoods;
}
document.querySelector("#turkish").addEventListener("click", listTurkishFoods);

document.querySelector("#all").addEventListener("click", listAllFoods);