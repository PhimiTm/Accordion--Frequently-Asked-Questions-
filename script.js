document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            faqItems.forEach(i => i.classList.remove("active"));
            if (!item.classList.contains("active")) {
                item.classList.add("active");
            }
        });
    });
});