export const catchErrors = (msg, user = true) => {
    if (user) alert(msg);
    console.error(msg);
}