import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import './category.css';

import image from '../../assets/camylla-battani-UCctf6kvtLw-unsplash.jpg';
import fashion from '../../assets/jocund-woman-summer-skirt-posing-with-kissing-face-expression-indoor-portrait-relaxed-elegant-ginger-lady-enjoying-leisure-time-studio.jpg';
import homeDecor from '../../assets/scandinavian-living-room-interior-design-zoom-background.jpg';
import toys from '../../assets/cute-plush-toys-arrangement.jpg';
import books from '../../assets/old-books-arrangement-with-copy-space.jpg';

import beauty from '../../assets/collection-cosmetic-beauty-products-white-backdrop.jpg';


const Category = () => {
    const categories = [
        { name: 'Electronics', img: image, link: '/electronics' },
        { name: 'Fashion', img: fashion , link: '/fashion' },
        { name: 'Home Decor', img: homeDecor, link: '/home-decor' },
        { name: 'Toys', img: toys, link: '/toys' },
        { name: 'Books', img: books, link: '/books' },
        { name: 'Beauty Products', img: beauty, link: '/beauty-products' },
    ];

    return (
        <div className="max-w-5xl mx-auto py-8 px-4">
             {/* <Helmet>
                    <title>Shopfront | Category</title>
                  </Helmet> */}
            <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center text-center">
                            <a href={category.link} className="block w-40">
                                <img
                                    src={category.img}
                                    alt={category.name}
                                    className="w-full h-40 object-cover rounded-lg shadow-md"
                                />
                                <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Category;