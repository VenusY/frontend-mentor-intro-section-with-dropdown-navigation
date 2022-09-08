# frontend-mentor-intro-section-with-dropdown-navigation

## The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

## What I learned

**Getting height of content using `Element.scrollHeight`**

You can get the height of an element's content with `Element.scrollHeight`. This works even when the element's height is set to 0.

I used `Element.scrollHeight` to get the content height of all `div.dropdown-menu` elements. These values are then used to set the height of these `div.dropdown-menu` elements when the user expands the dropdown menus by clicking on the respective buttons.
