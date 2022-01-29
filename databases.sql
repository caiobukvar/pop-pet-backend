create table users (
  id serial primary key,
  name text not null,
  username text not null unique,
  cpf text not null unique,
  email text not null unique,
  phone text not null,
  password text not null,
  confirmPassword text not null,
  adress text not null,
  );

create table products (
  id serial primary key,
  name text not null,
  price text not null,
  stock int not null,
  category text not null,
  );


