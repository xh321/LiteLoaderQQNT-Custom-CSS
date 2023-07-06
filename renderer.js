export function onLoad() {
    const element = document.createElement("style");
    document.head.appendChild(element);

    custom_css.updateStyle((event, message) => {
        element.textContent = message;
    });

    custom_css.rendererReady();
}