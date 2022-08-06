import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Sazid Ahmed',
    email: 'nassirctg1234@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jewel ahmed',
    email: 'jewel@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Farooq Ahmed',
    email: 'Farooq123@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users