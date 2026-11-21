const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// Set up the menu only if both the button and the link list exist.
if (button && list) {
    // Update the button's expanded state so CSS and assistive technology can read it.
    function setMenuOpen(isOpen) {
        button.setAttribute("aria-expanded", String(isOpen));
    }
    // Read the current state and switch to the opposite state.
    button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });
    // Listen for key presses on the Menu button and its navigation links.
    button.closest("nav").addEventListener("keydown", (event) => {
        const isOpen = button.getAttribute("aria-expanded") === "true";
        const isNarrow = window.matchMedia("(width < 32rem)").matches;
        // On Escape, close the open narrow menu and return focus to its button.
        if (event.key === "Escape" && isNarrow && isOpen) {
            setMenuOpen(false);
            button.focus();
        }
    });
    // Start closed and reveal the Menu button after the handlers are ready.
    setMenuOpen(false);
    button.hidden = false;
}
// Add a comment above every logical step explaining what it does and why it is needed.
