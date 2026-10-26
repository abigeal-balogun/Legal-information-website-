const whatsappNumber = "2349069363178";

function whatsappLink(message) {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Link each topic card to WhatsApp with its topic in the message
document.querySelectorAll(".cards-info").forEach((card) => {
    card.href = whatsappLink(`Hello, I have a question about ${card.dataset.topic}.`);
});

// General WhatsApp button (Ask a question)
document.querySelectorAll(".ask-button").forEach((button) => {
    button.href = whatsappLink("Hello, I have a legal question.");
});

// Contact section chat link
document.querySelectorAll(".chat-link").forEach((link) => {
    link.href = whatsappLink("Hello, I'd like to chat.");
});
