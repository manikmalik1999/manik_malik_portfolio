This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Steps

## 0. Project Setup

1. in your terminal, run `npx create-next-app@latest` as it says in https://nextjs.org/
2. run `npm run dev`
3. delete `favicon.ico` in the `app` folder
4. clear the styles in `app\globals.css`
5. set the metadata in `app\layout.tsx`
6. in `app\page.tsx`, delete everything with the `return` of this page, and instead set some basic markup & Tailwind CSS classes
7. install `Tailwind CSS IntelliSense` & `ES7+`
8. customize your Tailwing CSS config by reffering your Figma design https://resource.jsmastery.pro/minimal-portfolio
9. in `tailwind.config.ts`, add your first custom color by extending your actual theme
10. go back to `app\page.tsx` & refer to that customized color

## 1. Hero Section

Build a top title, a primary title, a subtitle & the call to action button to show your work

1. in the root of your directory, create a new folder called `components`
2. within this folder, create a new file called `Hero.tsx`
3. in this file, type `rafce` to quickly create a `Home()` component function (feature from `ES7+ React/Redux/React-Native snippets`)
4. in `app\page.tsx`, output the `<Hero />` component imported from `components\Hero.tsx`
5. back to `components\Hero.tsx`, set some classes to the `<div>`
6. inside that `<div>` create another `<div>` acting as a wrapper for your first components coming from Aceternity to add the spotlight effects available in your Figma design in desktop version
7. here are examples on how to use a nice search feature to find exactly what you're looking for quickly:
   1. Aceternity:
   - go to https://ui.aceternity.com/ & press `Ctrl + K` to open up a search no matter where on the page you are
   - search for `spotlight` & press `Enter`
   - you'll get redirected to https://ui.aceternity.com/components/spotlight
   2. NextJS:
   - go to https://nextjs.org/docs & press `Ctlr + K`
   - search for `server actions` & press `Enter`
   - there you are https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#convention
   - then press `Ctrl + F` & search for `use server`
8. so, back to Aceternity, look for `spotlight` to reach out to https://ui.aceternity.com/components/spotlight
   1. below "Install dependencies", copy `npm i framer-motion clsx tailwind-merge`
   - in your terminal, run `npm i framer-motion clsx tailwind-merge`
   2. below "Add util file", copy the code for `utils/cn.ts`
   - in the root of your project, add a new `utils` folder & add a new `cn.ts` file & in there paste the code you copied before
   3. below "Copy the source code", copy the code for `components/ui/Spotlight.tsx`
   - inside of the `components` folder, create a new `ui` folder, inside of which you create a new file called `Spotlight.tsx` & paste what you just copied
   4. below "Copy the highlighted `spotlight` animation into `tailwind.config.js` file", copy the code
   - in `tailwind.config.js`, paste the code you just copied to override the content
   5. press `Ctrl + K` & search for `Add utilities`, you'll see that you have to add this `flattenColorPalette` in `tailwind.config.js` by overriding the code in your `tailwind.config.js`
9. since you will be continuing overriding some files, use the provided code in the open source GitHub repository
   1. `tailwind.config.ts`
   - go to https://github.com/adrianhajdin/portfolio?tab=readme-ov-file#snippets
   - then copy the code below `tailwind.config.ts`
   - override the content of your `tailwind.config.js` file with the code you just copied
   2. do the same thing for `app\globals.css`
10. install all the dependencies required in the updated `tailwind.config.ts` file, so in your terminal, run:
    - `npm install mini-svg-data-uri`
    - `npm install tailwindcss-animate`
11. use the `<Spotlight />` component within `components\Hero.tsx` inside the previously added `<div>`
12. pass some native Tailwind CSS classes to this `<Spotlight>` component & `fill="white"`
13. duplicate this component 2 more times & change their styles
14. right below the `<div>` that contains this spotlight, create another `<div>` that will act as a UI grid
    - for that, you'll use a component called "Grid and Dot Backgrounds" from https://ui.aceternity.com/components/grid-and-dot-backgrounds
    - click on `Code` to switch over the code & copy the 2 `<div>`s with the `<p>` tag in between & paste it there
    - modify a couple of classes of this code
    - use a theme provider which is a package called `next-themes` available in https://www.npmjs.com/package/next-themes to switch the background to dark
      - in your terminal, run `npm i next-themes`
      - google "next themes" & click on "Next.js - shadcn/ui" to go to https://ui.shadcn.com/docs/dark-mode/next & follow this setup
        1. like we did above, you have to "Install next-themes" by running `npm install next-themes` in your terminal
        2. Create a theme provider
        - copy the provided code
        - go to `app` & create a new file called `provider.tsx`
        - in there, paste the code you just copied
        3. Wrap your root layout
        - copy the `<ThemeProvider>` layout
        - go to `app\layout.tsx` & wrap your `{children}` with it & import `{ ThemeProvider }` from `./provider`
        - set the `defaultTheme` to `"dark"`
15. go back to `components\Hero.tsx`
    - add a new `<div>` that will wrap your heading below the `<div>` containing your grid & give it some CSS classes
    - inside of it, add an inner `<div>` with some CSS classes
    - and in it, render an `<h2>` that would say "Dynamic Web Magic with Next.js"
    - make this `<h2>` text appear over the grid by setting the grid to a position of `absolute` & less noticable by giving a background color of `dark:bg-grid-white/[0.05]`
16. below this `<h2>`, render your primary text & give it its animation
    - go back to Aceternity UI & search for `Text Generate Effect`
    - you will be redirected to https://ui.aceternity.com/components/text-generate-effect
    - Copy the source code for `components/ui/text-generate-effect.tsx`
    - inside `components\ui`, add a new file called `TextGenerateEffect.tsx` & paste in there the code you just copied
    - go back to `components\Hero.tsx` & use this `<TextGenerateEffect />` & pass to it 2 props `className` & `words`
17. below this `<TextGenerateEffect />` output a `<p>` tag to add the subtitle
18. go back to `components\ui\TextGenerateEffect.tsx`, modify some of the content
    - make the `motion.span` CSS class dynamic to turn the "Experiences" word into purple
    - a bit down, replace `mt-4` with `my-4`
    - remove the `text-2xl` CSS class to make the text in the `words` bigger
19. like in the Figma design, implement the "Show my Work" button
    1. go back to Aceternity & finc `Tailwind CSS buttons`
    2. you'll reach https://ui.aceternity.com/components/tailwindcss-buttons
    3. in there, copy the "Border Magic" button
    4. within the `ui` folder, create a new component called `MagicButton.tsx` & create a new React component with help of the `rafce` shortcut
    5. paste the code you just copied in there
    6. go to `components\Hero.tsx` & render the `<MagicButton />` component in there
    7. in `components\ui\MagicButton.tsx`, make the button more dynamic with help of props to render some dynamic content & updated some of the CSS classes
    8. go to `components\Hero.tsx` & render some props to `<MagicButton>`
       1. `title`
       2. `icon`
          - use React Icons https://react-icons.github.io/react-icons/ to render some icons by installing `react-icons` https://www.npmjs.com/package/react-icons by running `npm i react-icons` in your terminal
          - use it by setting some `FaLocationArrow` imported from `react-icons/fa6` to the `icon` prop
       3. `position` set to `right`
20. add the navigation bar
    1. go to Aceternity & find "Floating Navbar"
    2. you'll be redirected to https://ui.aceternity.com/components/floating-navbar
    3. copy the source code for `components/ui/floating-navbar.tsx`
    4. within the `ui` folder, create a new component called `FloatingNav.tsx`
    5. paste in there the code you just copied
    6. go to `app\page.tsx` & output the `<FloatingNav />` component & pass to it the `navItems` prop like it says in the docs under "Props"

## 2. Bento Grid

1. in the `components` folder, add a new `Grid.tsx` component
   1. in there, use the `rafce` shortcut
   2. in `app\page.tsx`, import that `<Grid />` component
2. use another Aceternity component called "Bento Grid"
   1. got to https://ui.aceternity.com/ & search for "Bento Grid"
   2. you'll get redirected to https://ui.aceternity.com/components/bento-grid
   3. copy the source code related to `components/ui/bento-grid.tsx`
   4. in the `ui` folder, creater a new component called `BentoGrid.tsx`
   5. in there, paste the code you just copied
   6. in `components\Grid.tsx`, import the 2 `<BentoGrid>` & `<BentoGridItem>` components available in `components\ui\BentoGrid.tsx`
   - inside `<BentoGrid>`, render an array in which you add an object with a `title` & a `description` & an `id` field
   - map this array & return in it the `<BentoGridItem>` component
   - add to this `<BentoGridItem>` the required couple of props according to the docs under "Props"
   7. to render the grid according to your design, modify the content of the `BentoGridItem` component in `components\ui\BentoGrid.tsx`
   - modify some CSS classes
   - accept the `id` prop
3. outsource the data in a different folder & component to render different grid items in a more optimized way
   1. within the root folder, create a new `data` folder & inside of it, create a new `index.ts` file
   2. in there, declare the array of grid item by cutting it from `components\Grid.tsx` & storing it in a `gridItems` constant
   3. back in `components\Grid.tsx`, import the `gridItems` constant & map it like you did before
4. since your project will contain a lot of data, so to save you some time
   1. go to the `README.md` of the original project https://github.com/adrianhajdin/portfolio/blob/main/README.md
   2. click on `Code to Copy` to reach out to this page https://github.com/adrianhajdin/portfolio/blob/main/README.md#snippets
   3. then go to `data/index.ts` & copy the code & paste in your `data\index.ts` file
   4. then, under `Assets`, click on `here` to download the `public` folder
   5. delete your `public` folder & replace it with the new downloaded one
5. following the step 2, customize the bento grid items & make them as nice as the Figma design
   1. in `components\Grid.tsx`, add some more props to the `<BentoGridItem>`
   2. in `components\ui\BentoGrid.tsx`, accept those props nicely in the `BentoGridItem` component so that you can put them to use
   3. properly style this `BentoGridItem` according to those props so that the cards look nice
      1. add a new `style` attribute with some `background` color & `backgroundColor` gradient provided from https://github.com/adrianhajdin/portfolio/blob/main/README.md#snippets under `Linear Gradient`
      2. below it, create a new `<div>` & inside of it add
         - an inner `<div>` with some CSS classes & an `<img />` in it
         - another `<div>` for the secondary image
         - another `<div>` only for the sixth item to render an animation called `Background Gradient Animation` from Aceternity UI
           - go to https://ui.aceternity.com/ & search for "Gradient Animation"
           - you'll get redirected to https://ui.aceternity.com/components/background-gradient-animation
           - copy the source code for `components/ui/background-gradient-animation.tsx`
           - in the `ui` folder, add a new `GradientBg.tsx` file & paste the code you just copied in there
           - use this `<BackgroundGradientAnimation>` component in this inner `<div>`
           - and between this component, render a self closing `<div>` with some CSS classes
           - in `components\ui\GradientBg.tsx`, properly import `{cn}`
         - another `<div>` with some CSS classes & another `div` with some CSS classes & inside of it some `{description}`
         - right below it, render your `{title}` with some CSS classes
      3. all of those grid items have to have some unique design, so add these special elements for each one of the cards
         1. start with this `three-globe`, which would be another Aceternity component, for the second card
            - go to https://ui.aceternity.com/ & search for "GitHub Globe"
            - you will be redirected to https://ui.aceternity.com/components/github-globe
            - copy the source code for `components/ui/globe.tsx`
            - in the `ui` folder, create a new `Globe.tsx` file & paste in there the code you just copied
            - in your terminal, install all the required packages & files from this code
              1. add the `data/globe.json` file
                 - go to https://ui.aceternity.com/components/github-globe, under `Copy the globe json` & click on `Download the globe.json file from this URL`
                 - you'll be redirected to https://gist.github.com/manuarora700/4f03b7767a9431f2589c14c47377328a
                 - click on the little icon to "display the source blob"
                 - you'll be redirected to https://gist.github.com/manuarora700/4f03b7767a9431f2589c14c47377328a?short_path=7ed1be6
                 - from there, go to the "raw file" & copy the code
                 - in the `data` folder, create a new `globe.json` file & paste the code you just copied in there
              2. install Globe dependencies
                 - go to https://ui.aceternity.com/components/github-globe, under `Install Globe dependencies` & copy the command
                 - in your terminal, paste that command
            - go to `components\ui\BentoGrid.tsx`, below the `<div>` that wraps the `description` & the `title`
              1. use `<GridGlobe>` component imported `from './GridGlobe'` for the second grid item card
              2. check the requiered props in the docs in the "Props" section https://ui.aceternity.com/components/github-globe
              3. at the top of this page, click on `Code` to switch over the code & copy the code
              4. in the `ui` folder, add a new `GridGlobe.tsx` file which would be the representation of the `Globe` component within the grid
              5. in there, paste the code you just copied which contain the code for the `globeConfig` prop we need & import the `Globe` from `'./Globe'`
              6. go to `components\ui\GridGlobe.tsx`, in the `GridGlobe()` function component to customize it as we want it by cleaning it
              7. go back to `components\ui\BentoGrid.tsx`, fix the styles of the container to make the globe not jump out of the card which matters a lot for all these elements of each one of the cards
         2. focus on the fourth card, the `id 3`, which would be the Tech Stack list
            - in `components\ui\BentoGrid.tsx`, below where you rendered the second card, add a `<div>` with some CSS classes
            - inside of it, render the Tech text in another `<div>` with some CSS classes
            - inside of it, create an array of left side items & map over it & give it a key & some CSS classes & render each item in a `<span>`
            - below this left side maping, create another `<span>` with some CSS classes for the empty list item with a background color
            - duplicate the `<div>` containing this left list & paste it below it & change some of the tech & move the `<span>` for the empty list item above the mapped list
         3. customize the card with the `id 6`, which is the one with the gradient in which the user will be able to copy your email
            - below the content for the `id 3`, add some dynamic content & an outer & inner `<div>` with some CSS classes
            - inside this inner `<div>`, render a lottie animation
              - by installing the `react-lottie` package & also installing its types by running `npm i --save-dev @types/react-lottie`
              - in this inner `<div>`, output the `<Lottie />` component & give it some `options` prop which contains an object of
                - `loop` property, which is going to loop only when we copy the email, so create a `copied` state because you need to have access to the state of copied & set this field to `copied`
                - `autoplay` which also has a `copied` value
                - `animationData` with a value of `animationData` which would be another JSON object to add to your `data` folder
                  - so, in the `data` folder, create a new `confetti.json` file
                  - go to https://github.com/adrianhajdin/portfolio/blob/main/data/confetti.json & copy the code
                  - paste it in the newly added file
                - `rendererSettings` object, which you can add to it a special `preserveAspectRatio` with a value of `'xMidYMid slice'`
            - make it a `'use client'` component, because you used a `useState()`
            - below the Lottie animation, add a `<MagicButton>` to trigger the animation
              - pass some props to it & a `handleClick` prop which trigger a `handleCopy` function
              - declare the `handleCopy()` function
            - make the button work when clicking & set the gradient as a background
              - in `components\ui\MagicButton.tsx`, add a `onClick` prop that points at this `handleClick` function
              - back to `components\ui\GradientBg.tsx`, replace `h-screen w-screen relative` with `h-full w-full absolute`

## 3. Recent Projects

This section on your list will be what your portfolio is all about
which is displaying the recent projects you worked on
using this very engaging card that folds back and allows you to visit the live website that you're seeing on the screen
This is a very cool effect, so let's go ahead and implement it now

1. create a new section called "Recent Projects"
   1. under `components`, create a new `RecentProjects.tsx` file
   2. run `racfe` to create a `RecentProjects` component
   3. in `app\page.tsx`, output the `<RecentProjects />` component
2. in `data\index.ts`, customize the `projects` array to really make it your projects
3. customize `RecentProjects.tsx`
   1. set a `h1` heading
   2. render a list of your projects by adding `import { projects } from '@/data';` & mapping the `projects`
   3. output another Aceternity UI component `3D Animated Pin` which will pin on these project cards
      - go to https://ui.aceternity.com/ & search for "3D Pin"
      - you'll get redirected to https://ui.aceternity.com/components/3d-pin
      - under `Copy the source code` for `components/ui/3d-pin.tsx`, copy the code below
      - then in `components/ui`, add a new `3d-pin.tsx` file & paste the code you just copied in there
      - go back to `components\RecentProjects.tsx` & use this `<PinContainer>` component
      - go to `components\ui\3d-pin.tsx` to customize this `<PinContainer>`
      - back to `components\RecentProjects.tsx`, customize this `<PinContainer>` component by
        - passing some props to it
        - adding a children inside of it for the `title`, the `description` & the `bottom` of the cards
4. implement the links of the floating navbar so that the user can scroll down to the projects section
   1. go back to the original home page `app\page.tsx`
      - remove the array in the `<FloatingNav>` component
      - use the constant `{navItems}` coming `from '@/data'`
   2. go to `components\ui\FloatingNav.tsx`
      - remove the `Login` button
      - modify some CSS classes to customize the styles of the navbar
   3. in `components\RecentProjects.tsx`, make the `Projects` navbar link point to the "Projects" section by adding `id="projects"`

## 4. Sentry

With this many features completed on your developer portfolio, it's important to ensure a smooth user experience, optimized
performance and just in general showcasing that you're using all the best practices of developing applications.

- For that reason, let's use Sentry, an Enterprise level application Sentry monitoring software that allows you to fix your portfolio very quickly if it breaks.
- And specifically in this case, let's also enable your users to share when they experience something unexpected with the site.
  So, for that, you'll integrate a "Report a Bug" model that will allow them to provide you direct feedback.

So, let's get started with integrating Sentry

1.  go to https://sentry.io/welcome/
2.  create a new account with your GitHub account
3.  click `Install Sentry`
4.  choose `Next.js` as your framework
5.  click `Configure SDK`
6.  copy the command & paste it in your terminal to install the Sentry wizard
    - copy the provided `SENTRY_AUTH_TOKEN`
    - in your project root directory, create a new `.env.local` file & paste the provided token in there
7.  click `Connect to my central instance` or `View Issues` to get redirected to `https://<your-project>.sentry.io/issues/` & see the `Issues`
8.  in your project, a `sentry-example-page` folder with a `page.jsx` file are created
    - copy `sentry-example-page` & paste it to your site URL, like this http://localhost:3000/sentry-example-page
    - click `Throw Error`
9.  you should be able to see this error in your `Issues` dashboard in sentry.io
10. click on this `Error` to analyze it
11. you can use a lot features, like `Queries`, `Requests`, `Web Vitals`, and especially in this case, `User Feedback`
    - click `User Feedback`
    - click `Set Up Now`
    - if you haven't install the sentry wizard, copy the command & back to your terminal, paste this command
    - add the special integration called `Sentry.feedbackIntegration` in the `sentry.client.config.js` file within your code & set the `colorScheme` to `dark`
    - go back to http://localhost:3000/ & refresh the page to see the `Report a Bug` button

## 5. Testimonials

1. under `components`, create a new `Clients.tsx` file & run `rafce` & add your customized content
   - `<h1>`
   - cards provided from Aceternity UI
     - go to https://ui.aceternity.com/ & search for `Infinite Moving Cards`
     - you'll get redirected to https://ui.aceternity.com/components/infinite-moving-cards
     - Copy the source code for `components/ui/infinite-moving-cards.tsx`
     - in `components/ui`, create a new `InfiniteMovingCards.tsx`
     - paste the code you just copied in there
     - at the top of this file, fix the path for the `{ cn }` import
     - in `components\Clients.tsx`, output the `<InfiniteMovingCards />` component & set to it all the required props
     - go to `components\ui\InfiniteMovingCards.tsx` & style those cards to your liking
     - go back to `components\Clients.tsx` & add a div to wrap the companies
2. go to `app\page.tsx` & output `<Clients />`

## 6. Work Experience

1. under `components`, create a new `Experience.tsx` file & in there
   - run `rafce`
   - add your customized content
     - `<h1>`
     - cards with a `<Button>` provided by Aceternity UI
       - go to https://ui.aceternity.com/ & search for `Moving Border`
       - you'll get redirected to https://ui.aceternity.com/components/moving-border
       - copy the source code for `components/ui/moving-border.tsx`
       - in `components/ui`, create a new `MovingBorders.tsx` file
       - paste the code you just copied in there
       - go back to `components\Experience.tsx` & use the `<Button>`component imported from
2. go to `components\ui\MovingBorders.tsx` & style the `Button()` component
3. go to `app\page.tsx` & output `<Experience />`

## 7. My Approach Section

1. under `components`, create a new `Approach.tsx` file
   - in there, run `rafce`
   - customize your content
     - go to https://ui.aceternity.com/ & search for `Canvas Reveal Effect`
     - you'll get redirected to https://ui.aceternity.com/components/canvas-reveal-effect
     - copy the source code for `components/ui/canvas-reveal-effect.tsx`
     - under `components/ui`, create a new `CanvasRevealEffect.tsx` file
     - in there, paste the code you just copied
     - go back to https://ui.aceternity.com/components/canvas-reveal-effect & click on `Code` & copy the code
2. go to `components\Approach.tsx`
   - paste the code you just copied
   - replace `CanvasRevealEffectDemo()` with `Approach`
   - update the path for the `{ CanvasRevealEffect }` import
   - modify the data & the look & feel of these cards
     - update the `AceternityIcon` function & return a Magic Button from Aceternity UI
     - update the `Card` function
3. go to `app\page.tsx` & output `<Approach />`

## 8. Footer

The next thing you can focus on is this minimalistic yet quite effective footer so let's do it next

1. in `components`, create a new `Footer.tsx` file
2. in `app\page.tsx`, output `<Footer />`

## 9. Fixing Bugs

1. in `app\page.tsx`, remove `overflow-hidden` so that the page is not cut off when scrolling back up after clicking the nav buttons
2. instead add `overflow-clip` to remove this extra horizontal scroll that appeared
3. in `components\Footer.tsx`, remove the `<div>` containing the grid image to avoing extra space at the bottom of the page
4. in `components\ui\FloatingNav.tsx`, fix the floating navbar for mobile view by removing `hidden`
5. in `components\Footer.tsx`, add more space to the footer for mobile view & reduce some extra space for desktop view

## 10. Deployment

1. in `next.config.mjs`, inside of `nextConfig`, set `output` to `'export'` & `typescript: {ignoreBuildErrors: true}`
2. remove the `app/sentry-example-page` & the `app/api` folders
3. in your terminal, run `npm run build`
4. right click the `out` folder & click `Reveal in File Explorer` & copy all the files in `out` & paste it in your hosted website folder
5. go to your cPanel & go to your new URL
