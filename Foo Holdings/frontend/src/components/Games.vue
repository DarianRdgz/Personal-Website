<template>
    <h1>Games</h1>
    <div class="filter-box">
        <label for="general">Sort By:
          <select id="general" name="general">
            <option value="1">Name</option>
            <option value="2">Price</option>
            <option value="3">Rating</option>
            <option value="4">Play Time</option>
          </select>
        </label>
        <button class="dir-tgl"></button>
    </div>
    <div class="game-table">
        <div class="table-container">
            <table class="waste-table">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GamePg'
}
</script>

<style>
@import "../assets/styles/gamesStyle.css";
</style>