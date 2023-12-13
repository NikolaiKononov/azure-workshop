import './app.css';

function main(): void {
    const button = document.querySelector("#testButton");
    const azureBtn = document.querySelector("#azureBtn");
    button?.addEventListener("click", testSubmitHandler);
    azureBtn?.addEventListener("click", testAzureFuncHandler);
}

function testSubmitHandler(e: Event): void {
    e.preventDefault();
    const outputElement = document.querySelector('#output');
    outputElement.textContent = 'Scripts work!';
}

async function testAzureFuncHandler(e: Event): Promise<void> {
    e.preventDefault();
    const apiResponse = await fetch('/api/myHttpTrigger')
    const apiResponseText = await apiResponse.text()
    const outputElement = document.querySelector('#azureParagraphOutput');
    outputElement.textContent = apiResponseText;
}

main();