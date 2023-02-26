let foodList = document.querySelector('.foodList');
let foodListContent = document.querySelector('.foodList .content');
let foodCard = document.querySelector('.foodCard');
let card = [
    {
        img:"photos/buregerCard.webp",
        title:"Burger",
        subtitle:"Lorem impsum dolor something writing and reading words with point",
        price:"$3.35",
        btn:"Buy Now"
    },
    {
        img:"photos/soupCard.jpeg",
        title:"Soup",
        subtitle:"Lorem impsum dolor something writing and reading words with point",
        price:"$2.30",
        btn:"Buy Now"
    },
    {
        img:"photos/pastaCard.webp",
        title:"Pasta",
        subtitle:"Lorem impsum dolor something writing and reading words with point",
        price:"$4.00",
        btn:"Buy Now"
    },
    {
        img:"photos/dessertCard.webp",
        title:"Dessert",
        subtitle:"Lorem impsum dolor something writing and reading words with point",
        price:"$3.75",
        btn:"Buy Now"
    },
    {
        img:"photos/chicken.jpeg",
        title:"Chicken",
        subtitle:"Lorem impsum dolor something writing and reading words with point",
        price:"$3.65",
        btn:"Buy Now"
    },
    {
        img:"photos/fish.jpeg",
        title:"Fish",
        subtitle:"Lorem impsum dolor something writing and reading words with point",
        price:"$3.35",
        btn:"Buy Now"
    },
    {
        img:"photos/pizza.jpeg",
        title:"Pizza",
        subtitle:"Lorem impsum dolor something writing and reading words with point",
        price:"$2.90",
        btn:"Buy Now"
    },
    {
        img:"photos/lavash.jpg",
        title:"Lavash",
        subtitle:"Lorem impsum dolor something writing and reading words with point",
        price:"$2.75",
        btn:"Buy Now"
    },

]
card.forEach(item => {
    let img = document.createElement('img');
    let title = document.createElement('h3');
    let subtitle = document.createElement('p');
    let price = document.createElement('button');
    let btn = document.createElement('button');
    let btnGroup = document.createElement('div')
    let foodItem = document.createElement('div')
    title.innerHTML = item.title
    subtitle.innerHTML = item.subtitle
    price.innerHTML = item.price
    btn.innerHTML = item.btn
    btnGroup.classList.add('btnGroup')
    foodItem.classList.add('foodItem')
    img.setAttribute("src", item.img)

    foodListContent.append(foodItem)
    foodItem.append(img)
    foodItem.append(title)
    foodItem.append(subtitle)
    foodItem.append(btnGroup)
    btnGroup.append(price)
    btnGroup.append(btn)
})
