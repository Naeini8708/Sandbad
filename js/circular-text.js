document.addEventListener('DOMContentLoaded', () => {
    const circularTextElement = document.getElementById('circularText');
    if (circularTextElement) {
        new CircleType(circularTextElement)
            .radius(130);
    }
});