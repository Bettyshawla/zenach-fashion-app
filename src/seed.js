// testing
const items = [
  {
    id: 0,
    name: "Women's Top",
    image:
      "https://images.pexels.com/photos/2836485/pexels-photo-2836485.jpeg?cs=srgb&dl=pexels-ali-pazani-2836485.jpg&fm=jpg",
    description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
    category: [0],
    size: "small, medium, large",
    price: "25",
   
    action: "Add to cart",

  },
  {
    id: 1,
    name: "Women's Shoe ",
    image: "https://img.joomcdn.net/12633fbae8293e9ea01e6edf7e3281af8d32ce2e_original.jpeg",
    description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
    category: [3],
    price: "50"
  },
  {
    id: 2,
    name: "Women's Shoe ",
    image: "https://i.pinimg.com/originals/04/29/23/04292386db1e8b56ba8712b3c93b63bb.jpg",
    category: [3],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
    price: "50"

  },
  {
    id: 3,
    name: "wedding dress",
    image: "https://www.moonlightbridal.com/img/homepage-blocks/upcoming-trunkshows.jpg?version=20200309",

   description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
    category: [0],
    price: "70",
    action: "Add to cart"

  },
  {
    id: 4,
    name: "wedding guest",
    image: 'https://parade.com/.image/t_share/MTkzMTY1NjM0NDQ2NTY2OTky/velvet-wedding-guest-dress.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. ",
    category: [5],
    price: "100"
  },
 
  {
    id: 5,
    name: "Women's Pants",
    image: "https://cdn-images.farfetch-contents.com/18/53/23/57/18532357_42667586_800.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [0],
  price: "70",
  action: "Add to cart"

  
  },
  {
    id: 6,
    name: "Women's Pants",
    image:
      "https://callithelabel.com.au/pub/media/catalog/product/cache/acc2ec7b057d960fd9e4a69a56ecc374/c/a/ca03625-g_1.jpg",
    description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
    category: [0],
    price: "70",
    action: "Add to cart"
  },
  {
    id: 7,
    name: "Women's Dress",
    image: "https://i.pinimg.com/originals/01/35/a2/0135a2b811deae90df5a077c04e7c4a2.jpg",
  
    description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
    category: [0],
    price: "70",
    action: "Add to cart"
  },
  {
    id: 8,
    name: "Women's Pants",
    image:
      "https://cdn-images.farfetch-contents.com/17/52/21/34/17522134_36749577_300.jpg",
    description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
    category: [0],
    price: "70",
    action: "Add to cart"
  },
  {
    id: 9,
    name: "Women's Top",
    image: "https://m.media-amazon.com/images/I/71dgp1fOBhL._AC._SR360,460.jpg",
    description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
    category: [0],
    price: "25.99",
  },
  { id: 10,
 
    name: "Women's Pants",
    image:
      "https://i.pinimg.com/236x/dc/d8/19/dcd8195e9718bff2416ef98bafc35a20.jpg",
    description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
    category: [0],
    price: "70",
    action: "Add to cart"
  
  },
  { id: 11,
    name: "Women's",
    image:
      "https://m.media-amazon.com/images/I/51eNpgYmnYL._AC_SR175,263_QL70_.jpg",

  
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [0],
  price: "150",
  action: "Add to cart"
  },
  { id: 12,name: "Women's Dress",
  image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1635876276-floerns-women-s-boho-floral-print-off-shoulder-split-long-a-line-dress-1635876272.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [0],
  price: "150",
  action: "Add to cart"
  },
  { id: 13,name: "Women's Dress",
  image: "https://i.pinimg.com/originals/52/dc/72/52dc7241ab314e86748361035d19b8b9.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [0],
  price: "150",
  action: "Add to cart"
  },
  { id: 14,
  name: "Women's Dress",
  image: "https://i.pinimg.com/736x/e9/3c/33/e93c33320b8a4a289c3c871b83fffbe4.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [0],
  price: "150",
  action: "Add to cart"
  },
  { id: 15,
    name: "Women's Dress",
  image: "https://i.pinimg.com/474x/69/fb/a5/69fba503f449762fb7bb37467b16a0b1.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [0],
  price: "150",

  },
{
  id: 16,
  name: "Men's Top",
  image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "29.99"
}
,
{
  id: 17,
  name: "Men's Top",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSGA-01HtgyW2OrJSRbB-RzHzLjfS0bouIvX7ebdyfihL6E7wrKm39VqoijgsiWMf28M&usqp=CAU",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "29.99"
}
,
{
  id: 18,
  name: "Men's Top",
  image: "https://ae01.alicdn.com/kf/S5d6d92ab62c4402ab7888990e4128d2b1/Men-African-Clothing-Dashiki-Men-Top-Shirt-Bazin-Riche-African-Men-Clothes-100-Cotton-Print-Patchwork.jpg_Q90.jpg_.webp",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "29.99"
}
,{
  id: 19,
  name: "Men's Top",
  image: "https://ae01.alicdn.com/kf/Se1e023b0ed434917ae8ca1ca9a5e1139Z/Men-Short-Sleeve-Top-Tees-African-Clothes-Bazin-Riche-African-Design-Clothing-Casual-Mens-Print-Patchwork.jpg_Q90.jpg_.webp",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "29.99"
}
,{
  id: 20,
  name: "Men's Top",
  image: "https://i.pinimg.com/564x/d9/4f/cb/d94fcb8c6a3893d3829c7c3b16735f66.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "29.99"
}
,{
  id: 21,
  name: "Men's Top",
  image: "https://i.pinimg.com/474x/33/6d/cd/336dcdaca1de3d08080a558e39384903.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "29.99"
}
,{
  id: 22,
  name: "Men's Top",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLVS0ARMr7jOrkpcTmclnc3eCpOuu-_A8f6t4yTHMlZon_rCagmZeQAsiX_I8Hnyb4QQ&usqp=CAU",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "29.99"
}
,{
  id: 23,
  name: "Men's Pant",
  image: "https://i.pinimg.com/736x/53/82/a2/5382a20f2086436e46d9d9cbb4c75f58.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "49.99"
},{
  id: 24,
  name: "Men's Pant",
  image: "https://ae01.alicdn.com/kf/Hfa205c088736402eb7c2c3a2ba2eba89V/Men-Cargo-Pants-Black-Ribbons-Block-Multi-Pocket-Harem-Joggers-Harajuku-Sweatpant-Hip-Hop-Casual-Harem.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "49.99"
},{
  id: 25,
  name: "Men's Pant",
  image: "https://ae01.alicdn.com/kf/HTB1Hxuea0fvK1RjSszhq6AcGFXai/2022-Spring-Hot-Tactical-Mens-Cargo-Pants-Cotton-Casual-Multi-Pocket-Military-Men-Pants-Pantalon-Homme.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "49.99"
},{
  id: 26,
  name: "Men's Pant",
  image: "https://i.pinimg.com/736x/5b/1f/07/5b1f07adba10b0c0ef97b0f4c29333ac.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "49.99"
},{
  id: 27,
  name: "Men's Pant",
  image: "https://cdn.shopify.com/s/files/1/1874/2805/products/2s_ba0d5438-5476-4bbb-90d7-f78b9b8f4670_large.jpg?v=1552193105",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [1],
  price: "49.99"
},{
  id: 28,
  name: "Men's Shoe",
  image: "https://i.pinimg.com/originals/4b/18/be/4b18bec38586371c3d7f13bd342d31be.png",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: 2,
  price: "59.99"
},{
  id: 29,
  name: "Men's Shoe",
  image: "https://www.theknot.com/tk-media/images/feff8b4d-cb34-4220-b33f-deb26b177128~rs_768.h",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: 2,
  price: "59.99"
},{
  id: 30,
  name: "Women's Top",
  image:
    "https://www.damart.co.uk/media/catalog/product/cache/5642b44640ff3489827c59b020b8c7c9/7/3/73152-24403-F-1-HD-3.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [0],
  price: "25.99",
  action: "Add to cart",


},{
  id: 31,
  name: "Women's Shoe ",
  image: "https://canary.contestimg.wish.com/api/webimage/5cc691a267bc012bda4dbd37-large.jpg?cache_buster=c8a21ed55b3d431c6bd06dfa800d240d",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [3],
  price: "50"
},{
  id: 32,
  name: "Women's Shoe ",
  image: "https://ae01.alicdn.com/kf/Hbf06574b12b24c7aac965000b3ef7a8fK/Elegant-Silk-Women-Pumps-Leaves-Heel-High-Heels-Rhinestone-Flower-Wedding-Shoes-Brand-Design-Pointed-Toe.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [3],
  price: "50"
},{
  id: 33,
  name: "Women's Top",
  image:
    "https://assets.ajio.com/medias/sys_master/root/20211027/7Znh/61789fceaeb2690110abb955/znx_clothing_multicoloured_floral_print_wrap_top.jpg",
  description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis.ng elit. Nemo laboriosam distinctio reiciendis. ",
  category: [0],
  price: "25.99",
  action: "Add to cart",


}
];

export default items;

