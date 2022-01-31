create database if not exists pop-pet;

drop table if exists users;

create table users (
  id serial primary key,
  name text not null,
  username text not null unique,
  cpf text not null unique,
  email text not null unique,
  phone text not null,
  password text not null,
  address text not null
  );

 drop table if exists products;

create table products (
  id serial primary key,
  name text not null,
  price text not null,
  stock int not null,
  category text not null,
  description text
  );
 
insert into products ( name, category, price, stock, description )
values
 ( 'Smooth rubber ball', 'Toys', 1.90, 6, 'Small rubber ball, perfect for your pet!' ),
 ( 'Chewing bone', 'Toys', 5.00,  3, 'One tasty chewing bone for your dog!' ),
 ( 'Dog food Special Dog', 'Food', 2790, 12, 'Special Dog - Your dog healthy, always!' ),
 ( 'Collar', 'Utility', 22.90, 4, 'Perfect for a walk in the park with your pet!' ),
 ( 'Bed for dogs', 'Utility',  39.90, 1, 'Medium sized bed for dogs'),
 ( 'Bed for cats', 'Utility', 29.90, 1, 'Small sized bed, for cats' ),
 ( 'Scratcher for cats', 'Toys', 32.00, 2, 'The best scratcher in the market' ),
 ( 'Catnip', 'Utility', 15.00, 0, 'Let your cat have some fun with this awesome product!' ),
 ( 'Clover rubber ball', 'Toys', 10.00, 0, 'Rubber ball with spikes, making it a long lasting toy!' );

