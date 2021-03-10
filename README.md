**Frontend Architecture:**

Creating a simple clean, and clear frontend architecture with the help of [CSS Modules](https://github.com/css-modules/css-modules) it is a build process, not a tool or language, It uses the javascript to locally scope the component styles and make unique class names so styles will not clash with other developer styles even a thousand developers are working on the same codebase. It is a well establish industry standard. **Google** and other tech industries are using same pattern. It will also make the task easier for the new developers because their styles will not break the old written styles.

With this approach, our web app is really scalable Because the styles are locally scoped to the component. This boilerplate heavily depends upon the custom styling option rather than [Next.js](https://nextjs.org/docs/basic-features/built-in-css-support) default way of writing styles.

Whenever you choose a custom option in [Next.js](https://nextjs.org/) for styling you have to do all stuff on your own.

What stuff?

 - Minify the stylesheet for the production.
 - Add browsers autoprefixer styles on your production stylesheet.

To overcome this problem we will use [PostCSS](https://postcss.org/) plugins.

What is PostCSS?
It is a tool for transforming CSS with JavaScript and this tool consist of many plugins that help us to minify our stylesheets and add vendor prefixes so webpage styles can run on all browsers.

We also want the taste of [scss](https://sass-lang.com/guide) in our stylesheets so we use [@zeit/next-sass](https://github.com/vercel/next-plugins/tree/master/packages/next-sass) with [node-sass](https://www.npmjs.com/package/node-sass) package.

**Our styles Supported browsers**

This architecture supports the  **latest, stable releases**  of all major browsers and platforms. On Windows,  **only support Internet Explorer 10-11 / Microsoft Edge**.

**Note:** *Alternative browsers that use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported.*

However, the styles should (in most cases) display and function correctly in these browsers as well. But don't worry on the production different browser vendors styles are automatically added.

Some third-party packages we are using.

- [cssnano](https://github.com/cssnano/cssnano) (minify our stylesheet in the production)
- [autoprefixer@9](https://www.npmjs.com/package/autoprefixer) (Autoprefixer version 9 is stable version and they are currently working on version 10 in which they are changing the principal and creating a new way to add browser vendor prefixes on the CSS. So stick with version 9 until version 10 becomes stable. ***What is does?*** This PostCSS plugin is to handle intended browser support via CSS prefixes)

### License
MIT
