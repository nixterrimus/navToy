# Navigation Experiment

This repo exists to try out all of the React Native Navigation options with a two-screen app:

![App Preview](https://github.com/nixterrimus/navToy/raw/master/preview.png)

## The Screens

### The Badge list screen

```jsx
<BadgeList
  badgeList={this.state.badgeList}
  categories={this.state.categories}
  onNavigateToBadge={badgeName => {
    alert(`Visit ${badgeName}`);
  }}
/>
```

Displays a list of badges.

**Props:**
- `badgeList`: A list of badge in the format returned from the [Khan Academy badge API](http://api.khanacademy.org/api/v1/badges)
- `categories`: A list of categories in the format returned by the [Khan Academy Badge category API](http://api.khanacademy.org/api/v1/badges/categories)
- `onNavigateToBadge`: Called when one of the badges is tapped, sends along the badgeName (`.name` in the JSON)

## The Badge detail screen

```jsx
  <BadgeDetail
    badgeUrl="https://cdn.kastatic.org/images/badges/moon/fact-checker-512x512.png"
    title="Fact Checker"
    description="Have a video clarification officially accepted"
    onBack={() => {
      alert("Back");
    }}
  />
```

Displays detail about one badge

**Props:**
- `badgeUrl`: A string for the URL for the badge
- `title`: The name of the badge
- `description`: a human description of what the badge can be earned for
- `onBack`: Called when the back button is hit

## Navigator tested

I've tested out the major navigators available for React Native as of January 2018.

### No Navigator

Pull request: [No Navigator, just set state](https://github.com/nixterrimus/navToy/pull/1)

This is the most basic version of moving amonst the screens.  This serves as the control- all other navigators should feel better than this!

Pros:
- No dependencies
- Very simple

Cons:
- None of the expected navigator behavior

### Built in Navigator 

- Pull Request: [Built in iOS navigator](https://github.com/nixterrimus/navToy/pull/3)
- Docs: https://facebook.github.io/react-native/docs/navigatorios.html

The official Navigator built into React Native.

Pros:
- Uses system technology
- In the React Native core

Cons:
- Not maintained
- Slow for first push (something getting warmed up?)
- No Android version

### React Navigation

- Pull request: [React Navigation](https://github.com/nixterrimus/navToy/pull/2)
- Docs: [React Navigation](https://reactnavigation.org)
- Github: [React Navigation](https://github.com/react-navigation/react-navigation)

The commmunity supported, completely-JS navigation solution.

Pros:
- Install everywhere- because it's pure JS it can be installed in Expo apps, Expo snacks, or other constrained environments
- Theoretically can be used on the web (but according to React Native Radio interivew it's not currently used or maintained by anyone)
- Embraces the "everything is a component, nothing is special" react model

Cons:
- Pure JS means that gestures are never going to feel quite right
- For complex screen it takes a long time to push which can cause users to take more than once and more than one screeen to get pushed

### React Native Navigation (Wix v1 naivator)

Pull Request:  [React Native Navigation (wix navigator) v1](https://github.com/nixterrimus/navToy/pull/4)

After Facebook stopped maintaining the Navigator iOS, Wix started working on a native navigator to take it's place.  v1 is actively maintained.

Pros:
- Correct feeling navigation (uses system native code)

Cons:
- Requires native code changes to integrate
- Not as widely known/marketed as other solutions

### React Native Navigation (Wix v2 naivator)

Pull request: [React Native Navigation (wix navigator) v2](https://github.com/nixterrimus/navToy/pull/5)

The second generation of wix's navigator.  The navigator includes years of lessons and aims to make it easy to push screens from anywhere you might need to (including redux reducers).  It's not released, it's not stable, and I've not seen anyone advocating that it's ready to be used in production code.  It's included here as a peak at what's to come.

Pros:
- Everything good about v1 + easier integration into redux

Cons:
- Not released yet, all other cons should be evaluated when released

## Which Navigator should I use?

There are two good choices right now: React Native Navigation (Wix v1 naivator) and React Navigation.  Which you choose will depend on your needs.

The wix navigator v1 feels "right".  Both iOS and Android users will have navigation that feels correct to their platform.  On iOS this includes features like swiping back.  It' a mature library that's seen continuous improvement over a period of years.  It requires that you have the ability to make native code changes

React Navigation, because it's all JS, fits in everywhere.  It's really easy to get started with React Navigation but because it's Javascript it's never going to feel quite right.  If you're building a project that you'll host on Expo (or using Expo snack) or if you're in an environment where you can't make native code changes then this library is for you.

## General lessons learned

- Think about screen as a whole component: figure out what the exit paths are from that screen and make them available via standard callback handler (`onNavigateToBadge(badgeName) => void`)
- Build higher order components around those base screens that hook into the unique navigator- this makes it easier to choose different navigators: the wix v1/v2 versions of this code are very similar because this is a pattern that works well!
