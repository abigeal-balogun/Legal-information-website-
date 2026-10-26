# LawMadeSimple

**Know Your Rights | Understand the Law**

## Description

LawMadeSimple is a one-page legal information website that explains Nigerian law in simple English. It addresses the legal knowledge gap by listing the areas of law it covers and letting visitors reach out on WhatsApp to get clarity on any topic, with no forms or sign-ups.

## Problem It Solves

Many people do not understand their legal rights because legal language is hard to follow and getting advice feels complicated. This website presents common legal topics clearly and gives visitors a quick, low-friction way to ask questions.

## Features

- Clear, mobile-friendly layout with a navigation bar linking to Home, Topics, About, and Contact.
- Six numbered key topics: Family Law, Tenancy Law, Employment Rights, Constitutional Law, Criminal Law, and Latin Maxims.
- Tapping a topic opens WhatsApp with a message about that topic already typed, so the visitor only has to press send.
- "Ask a question" button and "Let's chat here" link for general enquiries.
- Responsive design: three columns on desktop, two on tablets, one on phones.
- Legal disclaimer in the footer stating the site gives general information only, not legal advice.

## Technologies Used

- **HTML:** page structure and content, including the topic cards.
- **CSS:** layout, colours, and responsive design.
- **JavaScript:** builds the WhatsApp links for each topic card and button from a single phone number.

## How HTML, CSS, and JavaScript Work Together

- HTML holds the content and gives each topic card a `data-topic` attribute.
- CSS styles the layout, cards, and buttons.
- JavaScript reads each card's `data-topic` and sets its WhatsApp link with a pre-written message.

## Project Structure

```text
LawMadeSimple/
├── index.html
├── law.css
├── law.js
└── README.md
```

## How to Run

1. Download or clone the repository.
2. Keep `index.html`, `law.css`, and `law.js` in the same folder.
3. Open `index.html` in a web browser.

## How to Change the WhatsApp Number

Open `law.js` and edit the number at the top:

```js
const whatsappNumber = "234XXXXXXXXXX";
```

Use the country code followed by the number, with no `+` or spaces.

## Disclaimer

This website provides general information only and is not legal advice. For advice on a specific situation, speak to a qualified lawyer.

## Author

Balogun Abigeal Oluwakemi
