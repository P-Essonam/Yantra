import { salon,eat,space,food1,food2,food3,people1,people2,people3 } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/Menu", label: "Menu" },
    { href: "/Press", label: "Press" },
    { href: "/Reservations", label: "Reservations" },
    { href: "/TheGrandTruck", label: "The Grand Truck" },
    { href: "/e-Vouchers", label: "e-Vouchers" },
    { href: "/ContactUs", label: "Contact Us" },
    { href: "/Sweets", label: "Sweets" },
];


export const about = [
    { 
        title: "The Place",
        text: "Inspired by India in every aspect - from our silk wallpapers to our stately, fort-inspired door, celebrated designers Matthew and Paul of MSDO have artfully composed five uniquely Indian spaces within Yantra. Drawing on décor that wends masterfully through the depths of the subcontinent, each visit to Yantra promises a new adventure." ,
        slide: [
            {
                title: "Polo Room",
                text: "Adjacent to Jaipur, The Polo Room offers an airy private dining space, comfortably seating 6-8 guests, with an outdoor patio to enjoy pre-dinner aperitifs. Concealed entry to the bar also gives discreet access to their wide range of whiskies and cocktails. A private dining space where friendships are forged from across the table.",
                image: salon,
            },
            {
                title: "Wildflower Room",
                text: "rivate dining room that accommodates 6. Guests are seated around a marble-topped table featuring hand in-laid wildflowers.",
                image: eat,
            },
            {
                title: "Corbett",
                text: "A cosy bar that brings both jungle lodge and ultra modern luxury in equal measure. Adorned with leopard wallpaper, real photographs from safari camps in Botswana, and whisky lockers, Corbett Bar is where conversation and libation flow freely.",
                image: space,
            },
        ]
    },

    {
        title: "The Food",
        text: "Blending a culinary philosophy that pays tribute to India’s rich legacy, culinary historian Pritha Sen and Executive Chef Pinaki Ray create an extensive menu offering both vegetarian and non-vegetarian dishes. Featuring niche ingredients sourced across the Subcontinent and South East Asia, a poetic and irreverent experience awaits.", 
        slide: [
            {
                title: "",
                text: "",
                image: food1,
            },
            {
                title: "",
                text: "",
                image: food2,
            },
            {
                title: "",
                text: "",
                image: food3,
            },
        ]
    },

    { 
        title:"The People",
        text: "People passionate about Indian cuisine. A celebrated revivalist of rare and bygone recipes, Pritha Sen brings her love of Indian cuisine to Singapore with recipes that span the length and breadth of the Subcontinent. Alongside our ever-talented Executive Chef, Pinaki Ray, Sen is also joined by Head Chef, Prashant Dhanwariya. ", 
        slide: [
            {
                title: "",
                text: "",
                image: people1,
            },
            {
                title: "",
                text: "",
                image: people2,
            },
            {
                title: "",
                text: "",
                image: people3,
            },
        ]
    },
]