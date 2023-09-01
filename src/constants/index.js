import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
     balsamicChicken,
     bananaWalnut,
     cookies,
     chickenCauliflower,
     chickenCauliflower2,
     blackenedChicken,
     oatmeal,
     blueberrySmootie,
     boostSmootie,
     brownBites,
     grilledJerkWild,
     grilledJerkFish,
     chickenTeriyaki,
     chickenTinga,
     chickenTinga2,
     chickenTinga3,
     blackBeanBurger,
     craneEnergyBite,
     freshBerryParfait,
     highVibeSmoothie,
     houseShrimp,
     jalepenoSmokedChicken,
     jalepenoSmokedChicken2,
     hickoryBurger,
     // steps
     order,
     cook,
     deliver,
     eat
} from "../assets";

const steps = [
     {
          id: 1,
          head: "place order",
          text: "Select from our wide variety of signature dishes, custom, or specialty meal options. Pick up in Baton Rouge or choose between in-store pickup or delivery in the New Orleans Metro Area",
          src: order,
     },
     {
          id: 2,
          head: "cook",
          text: "Our staff will carefully prepare, cook, and package all of your meals and have them fresh and ready to go!",
          src: cook,
          style: "font-size: 20rem; color: blue;",
     }, {
          id: 3,
          head: "pick up / deliver",
          text: "You choose whether to pick up your meals in our very own brick and mortar location or even choose a delivery method in case you are busy. We never want you to miss out",
          src: deliver,
     }, {
          id: 4,
          head: "heat it & eat it",
          text: "Our meal containers are both microwavable and oven sustainable. In just minutes you will be enjoying restaurant quality meals from the comfort of your own home.",
          src: eat,
     },
];
const menuItems = [
     {
          id: 1,
          src: balsamicChicken,
          title: "Balsamic Chicken Salad (16 oz)",
          text: "gluten free, dairy free, nut free",
          calQuan: 960,
          premium: "Premium"
     }, {
          id: 2,
          src: bananaWalnut,
          title: "Banana Walnut Pancake",
          text: "Protein Packed Pancakes served with Housemade Sausage Patty and Cinnamon Maple Syrup",
          calQuan: 440,
     }, {
          id: 3,
          src: cookies,
          title: "Barb's Boobie Milk Lactation Cookies (1/2 Dozen)",
          text: "Whole Wheat Oatmeal and Chocolate Chip Lactation Cookies. Highly effective in...",
          calQuan: 170,
     }, {
          id: 4,
          src: chickenCauliflower,
          title: "BBQ Chicken and Cauliflower Corn 'Grits'",
          text: "Smoked BBQ Chicken thighs over a bed of Cauliflower Corn 'Grits' served with Mixed...",
          calQuan: 460,
     }, {
          id: 5,
          src: chickenCauliflower2,
          title: "BBQ Chicken over Cauliflower Rice with Broccoli (GL)",
          text: " ",
          calQuan: 350,
     }, {
          id: 6,
          src: blackenedChicken,
          title: "Blackened Chicken with House Broccoli, Sweet Potato and BBQ Sauce(GL) ",
          text: "served with BBQ Sauce",
          calQuan: 480,
     }, {
          id: 7,
          src: oatmeal,
          title: "Blueberry and Almond Steel Cut Oatmeal",
          text: "Cinnamon and Maple Infused Steel Cut Oats with Blueberry Jam and Almonds",
          calQuan: 580,
     }, {
          id: 8,
          src: blueberrySmootie,
          title: "Blueberry Bliss Smoothie",
          text: "Ready to Blend Smoothie: Blueberry, Banana, Oats, Spinach, Cinnamon, Almond...",
          calQuan: 480,
          premium: "Premium"
     }, {
          id: 9,
          src: boostSmootie,
          title: "Boost Smoothie",
          text: "Ready to Blend Smoothie: Ginger, Banana, Pineapple, Metagenics Ultra Potent - C...",
          calQuan: 300,
          premium: "Premium"
     }, {
          id: 10,
          src: brownBites,
          title: "Brownie Bites (3 per container)",
          text: "Clean Ingredients Decadent Brownie Bite. Calorie information reflects one bite.",
          calQuan: 130,
     }, {
          id: 11,
          src: grilledJerkWild,
          title: "Caribbean Jerk Wild Caught Mahi",
          text: "served with Mango Salsa, Coconut Rice, Seasoned Wilted Spinach and Lime",
          calQuan: 370,
     }, {
          id: 12,
          src: grilledJerkFish,
          title: "Caribbean Jerk Wild Caught Mahi (Low Carb)",
          text: "Smoked Jerk Mahi served with Mango Salsa, coconut cauliflower rice, seasoned...",
          calQuan: 280,
     }, {
          id: 13,
          src: chickenTeriyaki,
          title: "Chicken Teriyaki with Brown Rice and House Broccoli (GL)",
          text: " ",
          calQuan: 430,
     }, {
          id: 14,
          src: chickenTinga,
          title: "Chicken Tinga Bowl",
          text: "Chicken Tinga, Mexican Rice, Cotija Cheese, Salsa Escabeche, Lime",
          calQuan: 540,
     }, {
          id: 15,
          src: chickenTinga2,
          title: "Chicken Tinga Bowl (Low Carb)",
          text: "Chicken Tinga, Mexican Cauliflower Rice, Cotija Cheese, Salsa Escabeche. Lime",
          calQuan: 490,
     }, {
          id: 16,
          src: chickenTinga3,
          title: "Chicken Tinga with Mexican Rice and Green Beans (GL)",
          text: "served with salsa escabeche",
          calQuan: 420,
     }, {
          id: 17,
          src: blackBeanBurger,
          title: "Chipotle Black Bean Burger (Vegan)",
          text: "Smoky and spicy black bean burger served with chopped romaine, Pickled Red Onion...",
          calQuan: 310,
     }, {
          id: 18,
          src: craneEnergyBite,
          title: "Cranberry Energy Bites (3 per container)",
          text: "An energy packed blend of oats, peanut butter, cranberry and honey",
          calQuan: 390,
     }, {
          id: 19,
          src: freshBerryParfait,
          title: "Fresh Berry Parfait",
          text: "Vanilla Yogurt with a side of Paleo Granola and Berries",
          calQuan: 340,
     }, {
          id: 20,
          src: highVibeSmoothie,
          title: "High Vibe Smoothie",
          text: "Ready to Blend Smoothie: Strawberry, Banana, Almond Butter, Dates, Metagenics Pea...",
          calQuan: 490,
     }, {
          id: 21,
          src: houseShrimp,
          title: "House Shrimp over Zucchini Noodles with Baby Spinach (GL)",
          text: " ",
          calQuan: 170,
     }, {
          id: 22,
          src: jalepenoSmokedChicken,
          title: "Jalapeno Smoked Chicken Burger",
          text: "served with Chopped Romaine, Srirancha Sauce and Mexican Fire Roasted Corn and Pickle...",
          calQuan: 310,
     }, {
          id: 23,
          src: jalepenoSmokedChicken2,
          title: "Jalapeno Smoked Chicken Burger (Low Carb)",
          text: "served with Chopped Romaine, Pickled Red Onion, Srirancha Sauce and House Mixed...",
          calQuan: 360,
     }, {
          id: 24,
          src: hickoryBurger,
          title: "Hickory Burger with Roasted Cauliflower, Sweet Potato and Honey Mustard (GL)",
          text: " ",
          calQuan: 420,
     },
];
const testimony = [
     {
          id: 1,
          text: "Healthy, clean, yummy, and in my case VEGAN meals (they offer meat ones too). It can be really hard to eat a meat-free diet down South and this has helped me immensely! The portion sizes are perfect. Fave dishes include coconut rice, masala, and artichoke caper pasta.",
          name: "~Alexis Sherman"
     }, {
          id: 2,
          text: "I have always been so impressed with everything we've ever had from here. Both quality and taste!!!",
          name: "~Emily Hoskins"
     }, {
          id: 3,
          text: "I can't say enough good things about this place, friendly and inviting staff that are happy to answer any questions you might have, grab and go meals that will leave you feeling great. Not to mention I spend less money here than at any fast food place.",
          name: " ~Nick Pierce"
     }, {
          id: 4,
          text: "Food is prepared perfectly. Makes meal prepping more convenient and saves time. Taste great. Highly recommend.",
          name: "~Monique Encala"
     }
];
const socialLinks = [
     {
          id: 1,
          src: "https://www.twitter.com/healthfirst",
          icon: <AiOutlineTwitter size={30} />
     }, {
          id: 2,
          src: "https://www.facebook.com/healthfirst",
          icon: <FaFacebookF size={30} />
     }, {
          id: 3,
          src: "https://www.instagram.com/healthfirst",
          icon: <FaInstagram size={30} />
     }
];
const footerLink = [
     {
          id: 1,
          src: "www.healthfirst.com/currrentmenu",
          text: "Current Menu",
     }, {
          id: 2,
          src: "www.healthfirst.com/contact",
          text: " Contact Us",
     }, {
          id: 3,
          src: "www.healthfirst.com/privacy",
          text: "Privacy Policy",
     }, {
          id: 4,
          src: "www.healthfirst.com/faq",
          text: " F.A.Q.",
     }, {
          id: 5,
          src: "www.healthfirst.com/pickup",
          text: "Pickup Locations",
     }, {
          id: 6,
          src: "www.healthfirst.com/grab&go",
          text: "Grab & Go",
     }, {
          id: 7,
          src: "www.healthfirst.com/blog",
          text: "Blog",
     },
];
const otherLink = [
     {
          id: 1,
          src: "www.healthfirst.com/meal",
          text: "Subscription Meal Selection",
     }, {
          id: 2,
          src: "www.healthfirst.com/mealbyunit",
          text: "À la Carte",
     }, {
          id: 3,
          src: "www.healthfirst.com/byingredient",
          text: "Proteins by the Pound",
     }, {
          id: 4,
          src: "www.healthfirst.com/extra",
          text: "Extras",
     }, {
          id: 5,
          src: "www.healthfirst.com/giftcard",
          text: "Gift Card",
     }
];

export { steps, menuItems, testimony, socialLinks, footerLink, otherLink };