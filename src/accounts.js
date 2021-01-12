import { v4 as uuidv4 } from "uuid";

const usersAccounts = [
  {
    name: "John Doe",
    accountPic: "https://source.unsplash.com/1600x900/?nature,water",
    lastConnect: `${Math.floor(Math.random() * 24)}:${Math.floor(
      Math.random() * 60
    )} `,
    lastMessage:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta id eveniet eaque fugit enim repudiandae dignissimos facere. Ipsum, odit?",
    accountType: "personal",
    chatStatus: false,
    id: uuidv4(),
  },
  {
    name: "Angelina Oconnor",
    accountPic: "https://source.unsplash.com/1600x900/?nature",
    lastConnect: `${Math.floor(Math.random() * 24)}:${Math.floor(
      Math.random() * 60
    )} `,

    lastMessage:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta id eveniet eaque fugit enim repudiandae dignissimos facere. Ipsum, odit?",
    accountType: "personal",
    chatStatus: false,
    id: uuidv4(),
  },
  {
    name: "Elize Mendoza",
    accountPic: "https://source.unsplash.com/1600x900/?face",
    lastConnect: `${Math.floor(Math.random() * 24)}:${Math.floor(
      Math.random() * 60
    )} `,

    lastMessage:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta id eveniet eaque fugit enim repudiandae dignissimos facere. Ipsum, odit?",
    accountType: "personal",
    chatStatus: false,
    id: uuidv4(),
  },
  {
    name: "Kade Morin",
    accountPic: "https://source.unsplash.com/1600x900/?letter",
    lastConnect: `${Math.floor(Math.random() * 24)}:${Math.floor(
      Math.random() * 60
    )} `,

    lastMessage:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta id eveniet eaque fugit enim repudiandae dignissimos facere. Ipsum, odit?",
    accountType: "personal",
    chatStatus: false,
    id: uuidv4(),
  },
  {
    name: "Anayah Tapia",
    accountPic: "https://source.unsplash.com/1600x900/?bird",
    lastConnect: `${Math.floor(Math.random() * 24)}:${Math.floor(
      Math.random() * 60
    )} `,

    lastMessage:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta id eveniet eaque fugit enim repudiandae dignissimos facere. Ipsum, odit?",
    accountType: "personal",
    chatStatus: false,
    id: uuidv4(),
  },
  {
    name: "Avani Whitley",
    accountPic: "https://source.unsplash.com/1600x900/?animal",
    lastConnect: `${Math.floor(Math.random() * 24)}:${Math.floor(
      Math.random() * 60
    )} `,

    lastMessage:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta id eveniet eaque fugit enim repudiandae dignissimos facere. Ipsum, odit?",
    accountType: "personal",
    chatStatus: false,
    id: uuidv4(),
  },
  {
    name: "The Art of Blogging",
    accountPic: "https://source.unsplash.com/1600x900/?pc",
    lastConnect: `${Math.floor(Math.random() * 24)}:${Math.floor(
      Math.random() * 60
    )}`,

    lastMessage:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta id eveniet eaque fugit enim repudiandae dignissimos facere. Ipsum, odit?",
    accountType: "channel",
    chatStatus: false,
    id: uuidv4(),
  },
  {
    name: "The B Word",
    accountPic: "https://source.unsplash.com/1600x900/?blog",
    lastConnect: `${Math.floor(Math.random() * 24)}:${Math.floor(
      Math.random() * 60
    )} `,
    messages: [
      {
        messageContent: null,
        messageSendDate: null,
      },
    ],
    lastMessage:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta id eveniet eaque fugit enim repudiandae dignissimos facere. Ipsum, odit?",
    accountType: "group",
    chatStatus: false,
    id: uuidv4(),
  },
];

export default usersAccounts;
