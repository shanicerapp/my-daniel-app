"use client";

import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import type { Product } from "./ProductList";
import ProductFilter from "./ProductFilter";
import ShoeList, { initialShoes } from "./ShoeList";
import ShoeFilter from "./ShoeFilter";
import UserFilter from "./UserFilter";
import UserList from "./UserList";
import type { User } from "./UserList";

const initialProducts: Product[] = [
  { id: 1, name: "Apple iPhone 14", price: 799 },
  { id: 2, name: "Samsung Galaxy S23", price: 699 },
  { id: 3, name: "Google Pixel 7", price: 599 },
  { id: 4, name: "OnePlus 11", price: 649.99587 },
];

export default function Home() {
  const [productSearchTerm, setProductSearchTerm] = useState("");
  const [shoeSearchTerm, setShoeSearchTerm] = useState("");
  const [userSearchTerm, setUserSearchTerm] = useState("");

  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState<User[]>([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setUsers(d);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const filteredProducts = initialProducts.filter((product) => {
    return product.name.toLowerCase().includes(productSearchTerm.toLowerCase());
  });
  const excludedProducts = initialProducts.filter((product) => {
    return !filteredProducts.includes(product);
  });

  const filteredShoes = initialShoes.filter((shoe) => {
    return shoe.name.toLowerCase().includes(shoeSearchTerm.toLowerCase());
  });
  const excludedShoes = initialShoes.filter((shoe) => {
    return !filteredShoes.includes(shoe);
  });

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(userSearchTerm.toLowerCase());
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl">Daniel's Products:</h1>
        <ProductFilter
          productSearchTerm={productSearchTerm}
          onProductSearchChange={setProductSearchTerm}
        />
        <ProductList products={filteredProducts} />
        <p>Excluded Products:</p>
        <ProductList products={excludedProducts} />
        <hr className="my-5 h-0.5 w-100 border-t-2 border-neutral-300 dark:bg-blue/50" />
        <h2 className="text-2xl">Shanice's Shoes:</h2>
        <ShoeFilter
          searchTerm={shoeSearchTerm}
          onSearchChange={setShoeSearchTerm}
        />
        <ShoeList shoes={filteredShoes} />
        <p>Excluded Shoes:</p>
        <ShoeList shoes={excludedShoes} />
        <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
        <UserFilter
          userSearchTerm={userSearchTerm}
          onUserSearchChange={setUserSearchTerm}
        />
        <UserList users={filteredUsers} />
      </main>
    </div>
  );
}
