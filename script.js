function showRose() {
    const roseContainer = document.getElementById('rose-container');
    roseContainer.classList.remove('hidden');
    // Trigger reflow to ensure the transition occurs
    void roseContainer.offsetWidth;
    roseContainer.classList.add('show');
    const message = document.getElementById('message');
    message.textContent = "I love you, Chorsel Rose Miano!";
}
