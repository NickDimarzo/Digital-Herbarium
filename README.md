# Digital Herbarium

This project aims to provide a platform for users to upload images and document their findings after successfully identifying a plant in the field. 
The project is built using Next.js, a React framework, and Tailwind CSS, a utility-first CSS framework. 


## Features

- A unique user authentication system that allows users to create an account, log in, and log out.
- A comprehensive filter system that allows users to search for plants based on the plant's Family, Genus and Species.
- A user-friendly interface that allows users to upload images and document their findings.

## Installation

The project can be accessed here [Digital Herbarium](https://digital-herbarium.vercel.app/)


## Backend Services

This project leverages the following Google Firestore services for authentication, database, and storage:

- Authentication: Google Firestore Authentication is used for user authentication and authorization.

- Database: Google Firestore is used as the NoSQL database to store and manage user plant collection data.

- Storage: Google Firestore Storage is used to store and retrieve user-uploaded images.


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
