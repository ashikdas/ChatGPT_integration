// Initialize the OpenAI API client
const openai = require('openai');
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const client = new openai(apiKey);

// Function to send a message to ChatGPT and receive a response
async function sendMessage(message) {
    try {
        const response = await client.completions.create({
            engine: 'davinci',
            prompt: message,
            maxTokens: 150,
            n: 1,
            stop: '\n',
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.log(error);
    }
}

// Function to handle sending a message from the input field
function handleSendMessage() {
    // Get the input field and current message
    const inputField = document.getElementById('input-field');
    const message = inputField.value;

    // Send the message to ChatGPT and receive a response
    sendMessage(message)
        .then((responseText) => {
            // Clear the input field and add the response to the chat output
            inputField.value = '';
            const chatOutput = document.getElementById('chat-output');
            const responseHtml = `
                <div class="my-3">
                    <strong>You:</strong> ${message}
                </div>
                <div class="text-right">
                    <strong>ChatGPT:</strong> ${responseText}
                </div>
                <hr>
            `;
            chatOutput.innerHTML += responseHtml;
        })
        .catch((error) => console.log(error));
}

// Add a click event listener to the send button
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', handleSendMessage);
