# Remix Pop Punk Stack

![Pop Punk site image](https://github.com/AaronPowell96/remix-netlify-planet/assets/17838632/b1c32dc5-52c4-4114-8074-d2cba466334c)

Deployed Site: [pop-punk.netlify.app](https://pop-punk.netlify.app)

Learn more about [Remix Stacks](https://remix.run/stacks).

```
npx create-remix --template AaronPowell96/remix-netlify-planet
```

Click this button to create a new Github repo, new Netlify project and deploy this stack to a [CDN](https://jamstack.org/glossary/cdn/).

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AaronPowell96/remix-netlify-planet)

## What's in the stack

- [Netlify](https://netlify.com/) deployment + deploy previews and CI/CD
- [PlanetScale](https://planetscale.com/) database and authentication
- [Tailwind](https://tailwindcss.com/) for styling
- [Prettier](https://prettier.io) code formatting
- [ESLint](https://eslint.org) linting
- [TypeScript](https://typescriptlang.org) static typing

Not a fan of bits of the stack? Fork it, change it, and use `npx create-remix --template your/repo`! Make it your own.

---

## Development

- Install all dependencies & the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

  ```sh
  npm install
  npm install netlify-cli -g
  ```

- Create or connect to your Netlify project by running through the Netlify `init` script:

  ```sh
  netlify init
  ```

- Add your PlanetScale and session environment variables to a `.env` file like [`.env.sample`](./.env.sample) file or through the Netlify project dashboard at [https://app.netlify.com/](https://app.netlify.com/) Site settings/Build & deploy/Environment:

  ```
  DATABASE_HOST=
  DATABASE_USERNAME=
  DATABASE_PASSWORD=
  SESSION_SECRET=""
  ```

> There is more information about the PlanetScale variables [in the Database section below](#database). The initial `create-remix` command will create the `SESSION_SECRET` variable which is a random string of 16 characters, so feel free to just set a random 16 chars if not running `remix-create`.

  <details>
  <summary>Environment Variable list in project dashboard.</summary>

![screenshot of env vars in Netlify UI](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1649265873/CleanShot_2022-04-06_at_13.23.38_2x_sh3hoy.jpg)

  </details>

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

### Running Locally

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

```sh
npm run dev
```

The Netlify CLI builds a production version of your Remix App Server and splits it into Netlify Functions that run locally. This includes any custom Netlify functions you've developed. The Netlify CLI runs all of this in its development mode.

It will pull in all the [environment variables](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables) of your Netlify project. You can learn more about this project's PlanetScale environment variables in [the Database section below](#database).

To start the Netlify development environment:

```sh
netlify dev
```

With Netlify Dev you can also:

- test functions
- test redirects
- share a live session via url with `netlify dev --live`
- [and more](https://cli.netlify.com/netlify-dev/) :)

Note: When running the Netlify CLI, file changes will rebuild assets, but you will not see the changes to the page you are on unless you do a browser refresh of the page. Due to how the Netlify CLI builds the Remix App Server, it does not support hot module reloading.

### Relevant code:

This is a pretty simple note-taking app, but it's a good example of how you can build a full stack app with Remix and Supabase. The main functionality is creating users, logging in and out, and creating and deleting notes.

- creating users, and logging in and out [./app/models/user.server.ts](./app/models/user.server.ts)
- user sessions, and verifying them [./app/session.server.ts](./app/session.server.ts)
- creating, and deleting notes [./app/models/note.server.ts](./app/models/note.server.ts)

---

## Database

This project uses [PlanetScale](https://PlanetScale.com/) for data storage and user authentication.

### Environment Variables

You can add your environment variables to an `.env` file (like shown in the sample [`.env.sample`](./.env.sample)) which will not be committed publicly because it is added to the `.gitignore` file. Or you can add it to your Netlify project environment variables (Site settings/Build & deploy/Environment) as shown in the [Development section](#development) so that they can be [easily shared with teammates](https://www.netlify.com/blog/2021/12/09/use-access-and-share-environment-variables-on-netlify).

<details>
<summary>Database creation</summary>

- You can sign up with PlanetScale with your GitHub credentials

- Next you will need to name the database and makes sure to save the password you select.

</details>

---

## Deployment

This stack has the Netlify [configuration file (netlify.toml)](./netlify.toml).

Want to deploy immediately? Click this button

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AaronPowell96/remix-netlify-planet)

Clicking this button will start the setup for a new project and deployment.

### Deploy from the Command Line

Clone this repo with the `git clone` command. Then install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) tool and run `netlify init`.

```sh
git clone https://github.com/AaronPowell96/remix-netlify-planet

npm install netlify-cli -g # to install the Netlify CLI tool globally

netlify init # initialize a new Netlify project & deploy
```

### CI/CD

Using the 'Deploy to Netlify' button or the `init` process will also set up continuous deployment for your project so that a new build will be triggered & deployed when you push code to the repo (you can change this from your project dashboard: Site Settings/Build & deploy/Continuous Deployment).

You can also use `netlify deploy` or `netlify deploy --prod` to manually deploy then `netlify open` to open your project dashboard.

> 💡 If you don't use `--prod` on the deploy command you will deploy a preview of your application with a link to share with teammates to see the site deployed without deploying to production

---

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
