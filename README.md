https://plaid.com/docs/

# Personal-Finance-TS

<a name="Description"></a>

## Description

Personal Finance is your go-to personal finance app, making money management effortless. Track expenses, set budgets, and watch your savings grow. With bank-level security, Personal-Finance-TS is your key to financial success. 😄

| **Tabel of Contents**                           |
| ----------------------------------------------- |
| [Project Setup](#project-setup)                 |
| [Folder Structure](#folder-structure)           |
| [Database Architecture](#database-architecture) |
| [Client](#client)                               |
| [Server](#server)                               |
| [Testing](#testing)                             |
| [Contributions](#contributions)                 |
| [Additional Info](#additional-info)             |

<a name="Project Setup"></a>

## Project Setup

This application is built using Typescript, therefore `node.js` is required. You can install node.js [here](https://nodejs.org/en/).\
Aditionally you will need `git` installed. You can install git [here](https://git-scm.com/downloads).

Run `git clone <project URL>` in your terminal to add the project to your system.\
Once you have the project run `npm run package`.\
This will install the all server and client side dependencies.

You will need to create a `.env` file for each folder. Check below for details!

Finally to start the project simply run `npm run dev` and you'll have the development version of the application.

<a name="Folder Structure"></a>

## Folder Structure

```
/client
    /public
    /src
        /assests
        /components
        /App.vue
        /main.ts
        /style.css
/server
    /config
        /default.ts
        /custom-environment-variables.ts
        /test.ts
    /src
        /controllers
            /user.controller.ts
        /middleware
            /deserializedUser.ts
            /requireUser.ts
            /validateResource.ts
        /models
            /user.model.ts
            /session.model.ts
        /schemas
            /user.schema.ts
            /session.schema.ts
        /services
            /user.services.ts
            /session.services.ts
        /utils
            /connect.ts
            /jwt.utils.ts
            /logger.ts
            /server.ts
        /app.ts
        /routes.ts
    
```

<a name="Database Architecture"></a>

## Database Architecture

Coming soon 😉

## Client
<details>
<summary> View Client Details</summary>
<br>
Coming soon 😉
</details>

## Server
<details>
<summary> View Server Details</summary>
<br>
Coming soon 😉
</details>

## Testing

Coming soon 😉

<a name="Additional Info"></a>

| Contact           | GitHub                                       | Linkedin                                                  |
| ----------------- | -------------------------------------------- | --------------------------------------------------------- |
| Nathan Marcellous | [Link](https://github.com/TabuHana)          | [Link](https://www.linkedin.com/in/nathaniel-marcellous/) |
| Korey Luu         | [Link](https://github.com/Ahrionic)          | [Link](https://www.linkedin.com/in/korey-luu-b21640230/)  |
| Dan               | [Link](https://github.com/tsukidan/tsukidan) | Not Provided                                              |