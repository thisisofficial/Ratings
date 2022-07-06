import anne from '/src/images/image-anne.jpg';
import colton from '/src/images/image-colton.jpg';
import irene from '/src/images/image-irene.jpg';

export const WrittenReviews = [
    {
        name: "Colton Smith",
        title: 'Verified Buyer',
        image: colton,
        text: '“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”',
        position:"flex-start"
    },
    {
        name: "Irene Roberts",
        title: 'Verified Buyer',
        image: irene,
        text: '“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”',
        position: "center"
    },
    {
        name: "Colton Smith",
        title: 'Verified Buyer',
        image: anne,
        text: '“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”',
        position: "flex-end"
    },
]

export const StarReviews = [
    {
        text:"Rated 5 Stars in Reviews",
        position: "flex-start",
    },
    {
        text:"Rated 5 Stars in Report Guru",
        position: "center",
    },
    {
        text:"Rated 5 Stars in BestTech",
        position: "flex-end",  
    }
]