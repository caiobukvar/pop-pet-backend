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
  description text,
  image varchar(255)
  );
 
insert into products ( name, category, price, stock, description, image )
values
 ( 'Smooth rubber ball', 'Toys', 1.90, 6, 'Small rubber ball, perfect for your pet!', 'https://pop-pet.nyc3.digitaloceanspaces.com/bolinha-borracha.jpg'),
 ( 'Chewing bone', 'Toys', 5.00,  3, 'One tasty chewing bone for your dog!', 'https://pop-pet.nyc3.digitaloceanspaces.com/chewing-bone.jpg'),
 ( 'Dog food Special Dog', 'Food', 2790, 12, 'Special Dog - Your dog healthy, always!', 'https://pop-pet.nyc3.digitaloceanspaces.com/dog-food-special-dog.jpg'),
 ( 'Collar', 'Utility', 22.90, 4, 'Perfect for a walk in the park with your pet!', 'https://pop-pet.nyc3.digitaloceanspaces.com/collar.webp'),
 ( 'Bed for dogs', 'Utility',  39.90, 1, 'Medium sized bed for dogs', 'https://pop-pet.nyc3.digitaloceanspaces.com/dog-bed.jpg'),
 ( 'Bed for cats', 'Utility', 29.90, 1, 'Small sized bed, for cats', 'https://pop-pet.nyc3.digitaloceanspaces.com/cat-bed.jpg'),
 ( 'Scratcher for cats', 'Toys', 32.00, 2, 'The best scratcher in the market', 'https://pop-pet.nyc3.digitaloceanspaces.com/scratcher.jpg'),
 ( 'Catnip', 'Utility', 15.00, 0, 'Let your cat have some fun with this awesome product!', 'https://pop-pet.nyc3.digitaloceanspaces.com/catnip.jpg'),
 ( 'Clover rubber ball', 'Toys', 10.00, 0, 'Rubber ball with spikes, making it a long lasting toy!', 'https://pop-pet.nyc3.digitaloceanspaces.com/bolinha-cravo.jpg');