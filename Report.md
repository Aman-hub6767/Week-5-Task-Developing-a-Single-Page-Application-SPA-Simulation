# Project Report
## Week 5 Task: Developing a Single Page Application (SPA) Simulation

### 1. Introduction

This project focuses on simulating a Single Page Application (SPA) using HTML, CSS, and JavaScript. The project uses the existing ShopEase e-commerce website to demonstrate client-side navigation and dynamic content display without requiring a full page reload for every navigation action.

### 2. Objectives

- To understand the basic concept of a Single Page Application.
- To implement simple client-side routing using JavaScript.
- To dynamically show and hide webpage sections.
- To update the URL using browser history methods.
- To support browser Back and Forward navigation.
- To maintain the existing website design and functionality.

### 3. Technologies Used

- **HTML5:** Provides the structure of the ShopEase website.
- **CSS3:** Maintains the website's styling and layout.
- **JavaScript:** Handles routing, DOM manipulation, and navigation.
- **Browser History API:** Supports URL updates and browser navigation.

### 4. Project Structure

The project contains the following files:

```text
ShopEase/
├── index.html
├── style.css
├── script.js
└── report.md
```

### 5. Project Implementation

The existing ShopEase website was used as the base for the SPA simulation. The HTML structure and CSS styling were retained, while JavaScript routing functionality was added.

The application includes the following sections:

- Home
- Categories
- Products
- Reviews

When a user selects a navigation link, JavaScript identifies the requested section and displays the appropriate content. Other sections are hidden without reloading the entire webpage.

The `history.pushState()` method updates the browser URL, while the `popstate` event handles Back and Forward navigation. The application also checks the URL hash when the page initially loads to determine which section should be displayed.

### 6. Application Workflow

1. The user opens the ShopEase website.
2. JavaScript reads the current URL hash.
3. The corresponding section is displayed.
4. The user clicks a navigation link.
5. JavaScript updates the visible content.
6. The browser URL changes without a full page reload.
7. The Back and Forward buttons allow navigation between previously visited routes.

### 7. Challenges and Solutions

**Challenge 1: Dynamic content management**

Different sections needed to be displayed without reloading the complete webpage.

**Solution:** JavaScript was used to show and hide sections using their HTML IDs.

**Challenge 2: URL management**

The URL needed to reflect the currently selected section.

**Solution:** The History API and URL hash were used to support client-side navigation.

**Challenge 3: Browser navigation**

The application needed to respond to the browser's Back and Forward buttons.

**Solution:** The `popstate` event was added to restore the appropriate section.

**Challenge 4: Preserving the existing design**

The routing functionality needed to be introduced without unnecessarily changing the existing website.

**Solution:** The existing HTML structure, CSS classes, and visual design were retained.

### 8. Testing

The following checks should be performed to verify the application:

- Open the Home section.
- Navigate to Categories, Products, and Reviews.
- Confirm that navigation does not trigger a full page reload.
- Check that the URL hash changes correctly.
- Test the browser Back and Forward buttons.
- Open a section directly using its URL hash.
- Verify that the existing shopping cart and search functionality still work.

### 9. Learning Outcomes

This project provides practical experience with client-side routing, JavaScript DOM manipulation, event handling, URL management, and the browser History API. It also demonstrates how an existing multi-section webpage can be adapted to simulate SPA navigation without introducing a framework.

### 10. Future Improvements

Possible improvements include:

- Adding more routes and content sections.
- Implementing a dedicated 404 page for invalid routes.
- Improving accessibility during navigation.
- Adding route-specific transitions.
- Separating page content into reusable JavaScript components.
- Testing navigation and existing features across different browsers.

### 11. Conclusion

The ShopEase SPA simulation demonstrates how HTML, CSS, and JavaScript can work together to provide client-side navigation without requiring a full page reload for each section change. The implementation uses JavaScript to manage visible content and the browser History API to support URL updates and Back/Forward navigation. The project provides a foundation for understanding SPA architecture and can be extended with more advanced routing and state-management features.
