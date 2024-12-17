document.addEventListener("DOMContentLoaded", function () {
    const messagesContainer = document.querySelector(".chat-messages");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");

    const conversation = [
        { type: "user", text: "Hi, I'm feeling a bit overwhelmed today." },
        { type: "ai", text: "I'm really sorry to hear that. Do you want to talk about what's on your mind?" },
        { type: "user", text: "I have so much to do, and it feels like it's all piling up." },
        { type: "ai", text: "That sounds stressful. Can you tell me more about the tasks you're facing?" },
        { type: "user", text: "I have work, school assignments, and personal stuff I'm behind on. It feels like I can't keep up." },
        { type: "ai", text: "That sounds like a lot to juggle. How do you usually manage these kinds of things?" },
        { type: "user", text: "I try to stay organized, but it's hard when everything needs attention at once." },
        { type: "ai", text: "It's understandable. Sometimes, breaking things into smaller tasks can make it feel more manageable. Have you tried prioritizing what needs to be done first?" },
        { type: "user", text: "I haven't, but maybe that would help. It just feels like I'm failing at all of it." },
        { type: "ai", text: "It's really common to feel that way when you're under pressure. You're doing your best, and that's enough. What's one task you feel you can start with today?" },
        { type: "user", text: "I guess I can start with my work email. It's been bothering me for a while." },
        { type: "ai", text: "That sounds like a great place to start. Once you make a small step, it might help build momentum." }
    ];

    function addMessage(text, type) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", `${type}-message`);
        const iconHtml = `<div class="bg-dark rounded-circle p-1 me-2">
                <img src="/images/icons/${type === 'user' ? 'user' : 'elysia'}.png" 
                alt="${type}" style="height: 24px; width: 24px;" /></div>`;
        messageDiv.innerHTML = iconHtml + `<span>${text}</span>`;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement("div");
        typingDiv.classList.add("typing-indicator");
        typingDiv.innerHTML = `<div class="bg-dark rounded-circle p-1 me-2">
                <img src="/images/icons/elysia.png" alt="ai" style="height: 24px; width: 24px;" /></div>
                <span>Elysia is typing...</span>`;
        messagesContainer.appendChild(typingDiv);
        return typingDiv;
    }

    function simulateTyping(message, index) {
        if (index >= conversation.length) {
            messageInput.value = "";
            sendButton.classList.remove('active');
            return;
        }

        const currentMessage = conversation[index];

        if (currentMessage.type === "user") {
            messageInput.value = "";
            sendButton.classList.remove('active');
            let charIndex = 0;
            const typingInterval = setInterval(() => {
                if (charIndex < currentMessage.text.length) {
                    messageInput.value += currentMessage.text[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    sendButton.classList.add('active');

                    setTimeout(() => {
                        addMessage(currentMessage.text, "user");
                        messageInput.value = "";
                        sendButton.classList.remove('active');

                        const typingIndicator = showTypingIndicator();

                        setTimeout(() => {
                            typingIndicator.remove();
                            simulateTyping(message, index + 1);
                        }, 1500);
                    }, 1000);
                }
            }, 100);
        } else {
            addMessage(currentMessage.text, "ai");
            setTimeout(() => {
                simulateTyping(message, index + 1);
            }, 2000);
        }
    }

    setTimeout(() => {
        simulateTyping(conversation[0], 0);
    }, 1000);
});

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelector('.blur-overlay').style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
        document.querySelector('.blur-overlay').style.opacity = '0';
    });

    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});