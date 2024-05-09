import React from "react";
import { Book } from "../../models/Book";
// import BookProps from "./components/BookProps";
import '../../../src/layouts/general.css'


const List: React.FC = () =>
{
    const books: Book[] = [
        {
            id: 1,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/potter.jpg'
        },
        {
            id: 2,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/cry.jpg'
        }, {
            id: 3,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/holy.jpg'
        },
        {
            id: 2,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/cry.jpg'
        },
        {
            id: 2,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/cry.jpg'
        },
        {
            id: 2,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/cry.jpg'
        },
        {
            id: 2,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/cry.jpg'
        },
        {
            id: 2,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/cry.jpg'
        },
        {
            id: 2,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/cry.jpg'
        },
        {
            id: 2,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/cry.jpg'
        },
        {
            id: 2,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/cry.jpg'
        },
        {
            id: 2,
            title: "Sách Harry Potter",
            description: "Phép Thuật",
            originalPrice: 50000,
            price: 45600,
            imageUrl: '/images/book/cry.jpg'
        },
    ];
    return (
        <div className="container list-product">
            <div className="row mt-4">
                {/* {books.map((book) => (
                    <BookProps book={book} />
                ))} */}
            </div>
        </div>
    )
}

export default List;