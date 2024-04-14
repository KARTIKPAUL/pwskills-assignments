function validateLinkedInURL(url) {
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    if (pattern.test(url)) {
        console.log(`The LinkedIn profile URL "${url}" is valid.`);
    } else {
        console.log(`The LinkedIn profile URL "${url}" is not valid.`);
    }
}

validateLinkedInURL("https://www.linkedin.com/in/asdfgh");
validateLinkedInURL("https://www.linked.com/in/asd!@#$");