document.addEventListener("alpine:init", () => {
  Alpine.data("signupForm", () => ({
    username: "",
    password: "",
    passwordConfirm: "",
    belt: "",
    bio: "",
    newsletter: true,
    showPass: false,

    onSubmitForm() {
      console.log(
        this.username,
        this.password,
        this.belt,
        this.bio,
        this.newsletter,
      );
    },
  }));
});
