create table users (
  id serial primary key,
  name text,
  username text not null unique,
  cpf text unique,
  email text unique,
  phone text,
  genero text,
  password text not null,
  confirmPassword text not null,
  adress text,
  );

create table products (
  id serial primary key,
  name text not null,
  price text not null,
  stock int not null,
  category text not null,
  );


