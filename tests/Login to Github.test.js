// Navigate to github.com
I.goTo("https://github.com")

// Go to "Sign in" page
I.click("Sign in")

// Sign in
I.fill("Username", "johndoe")
I.fill("Password", "supersecretpassword")
I.click("Sign in")

// If user is logged in, expect to see "My repos"
// I.see("My repos")

// Check out our docs to learn more: https://docs.uilicious.com