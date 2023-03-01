function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // миллисекунды
    return Math.round(diff / 1000); // секунды
}

alert( getSecondsToday() );