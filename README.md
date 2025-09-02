# ABZ Agency — Test Assignment

## Live Demo
- [SITE](https://test-abz-agency-vichkar.vercel.app/)

## Tech Stack
- **React**
- **React Hook Form**
- **JavaScript**
- **SCSS Modules**
- **OpenAPI (API docs)**
- **Deployed on Vercel**

## Working with REST API (GET)
- [x] Implemented the “Working with a GET request” block according to the mockup and API docs.
- [x] Display 6 users per page.
- [x] Hide the **Show more** button on the last page of results.
- [x] Users are sorted by registration date (newest first).
- [x] Radio buttons for positions are populated via `GET /positions`.

## Working with REST API (POST)
- [x] Implemented the “Working with a POST request” (registration form).
- [x] Front-end validation follows mockups and API rules.
- [x] Business logic of the form implemented according to the spec.
- [x] After successful registration, the users list (GET block) is refreshed.
- [x] If **Show more** had been clicked before, the list collapses back to the first page so the new user appears first without a full page reload.

## Website Optimization (bonus)
- [x] **Google PageSpeed Insights**: green zone  
  - Mobile: **97**  
  - Desktop: **100**
- [x] **Chrome Lighthouse** (Navigation mode, Simulated throttling; Mobile & Desktop under 3G conditions): green zone  
  - **Mobile**  
    - Performance: **99**  
    - Accessibility: **92**  
    - Best Practices: **93**  
    - SEO: **91**  
  - **Desktop**  
    - Performance: **100**  
    - Accessibility: **92**  
    - Best Practices: **100**  
    - SEO: **91**
- [ ] **WebPageTest** (Site Performance on 3G Fast): results close to **A A A A A A**.
