<template>
    <h1>Contact Us</h1>
    <form method="post" action=''>
      <fieldset>
        <label for="name">Enter Your Name: <input id="name" name="name" type="text" placeholder="Enter name here" required /></label>
        <label for="email">Enter Your Email: <input id="email" name="email" type="email" placeholder="Example@gmail.com" required /></label>
        <label for="bio">Comments:
          <textarea id="bio" name="bio" rows="6" cols="30" placeholder="Leave message for Darian here" maxlength="800" required></textarea>
        </label>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style>
@import "../assets/styles/contactUs.css";
</style>