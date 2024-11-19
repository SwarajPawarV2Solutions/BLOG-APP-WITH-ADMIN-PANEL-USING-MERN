import React from "react";

const Header = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="text-4xl flex flex-col w-full items-start">
        <h1 className="font-bold">Hey I am the Coder</h1>
        <h2>Discover new blogs of technology and trends</h2>
      </div>

      <div className="my-8 flex items-center justify-between gap-8">
        <div className="w-1/2">
          <img src="./temp.jpeg" alt="temp" className="rounded w-full h-[50vh] object-cover"/>
        </div>
        <div className="w-1/2">
            <h1 className="text-3xl font-bold">Lorem ipsum </h1>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis quas cupiditate corrupti sed cum id, voluptatibus minima recusandae esse commodi voluptatum laudantium tempore, ab at nam dignissimos sapiente placeat!</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
