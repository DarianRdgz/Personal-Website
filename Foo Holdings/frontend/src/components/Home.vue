<template>
    <div class="top-home">
        <router-link to="/about" class="bttn-lnk">About the Company</router-link>
        <router-link to="/darian" class="bttn-lnk">About the Owner</router-link>
        <router-link to="/contact" class="bttn-lnk">Contact Us</router-link>
    </div>

    <div class="member-ad">
        <h2 class="question">
            Why register an account? The top 3 users for completed surveys will get a % of the website's profits!
        </h2>
        <div class="reward">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"/></svg>
            Access to Tokens
        </div>
        <div class="survey">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-80q-33 0-56.5-23.5T120-160v-182l110-125 57 57-80 90h546l-78-88 57-57 108 123v182q0 33-23.5 56.5T760-80H200Zm0-80h560v-80H200v80Zm225-225L284-526q-23-23-22.5-56.5T285-639l196-196q23-23 57-24t57 22l141 141q23 23 24 56t-22 56L538-384q-23 23-56.5 22.5T425-385Zm255-254L539-780 341-582l141 141 198-198ZM200-160v-80 80Z"/></svg>
            Access to Surveys
        </div>
        <div class="update">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m608-368 46-166-142-98-46 166 142 98ZM160-207l-33-16q-31-13-42-44.5t3-62.5l72-156v279Zm160 87q-33 0-56.5-24T240-201v-239l107 294q3 7 5 13.5t7 12.5h-39Zm206-5q-31 11-62-3t-42-45L245-662q-11-31 3-61.5t45-41.5l301-110q31-11 61.5 3t41.5 45l178 489q11 31-3 61.5T827-235L526-125Zm-28-75 302-110-179-490-301 110 178 490Zm62-300Z"/></svg>
            Access to Casino
        </div>
    </div>

    <div class="category">
        <h1 class="bttn-title">
            Categories
        </h1>

        <div class="bttn-ttl">
            <div class="ttl">
                <router-link to="/games">
                    <span class="vall-name">Games <span class="vall">(view all)</span></span>
                </router-link>
                <fieldset class="container">
                    <button class="lnk"><p>Coming Soon</p></button>
                    <button class="lnk"><p>Coming Soon</p></button>
                </fieldset>
            </div>
            <div class="ttl">
                <router-link to="/services">
                    <span class="vall-name">Services <span class="vall">(view all)</span></span>
                </router-link>
                <fieldset class="container">
                    <button class="lnk"><p>Coming Soon</p></button>
                    <button class="lnk"><p>Coming Soon</p></button>
                </fieldset>
            </div>
            <div class="ttl">
                <router-link to="/publications">
                    <span class="vall-name">Publications <span class="vall">(view all)</span></span>
                </router-link>
                <fieldset class="container">
                    <button class="lnk">
                        <p>Articles</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m608-368 46-166-142-98-46 166 142 98ZM160-207l-33-16q-31-13-42-44.5t3-62.5l72-156v279Zm160 87q-33 0-56.5-24T240-201v-239l107 294q3 7 5 13.5t7 12.5h-39Zm206-5q-31 11-62-3t-42-45L245-662q-11-31 3-61.5t45-41.5l301-110q31-11 61.5 3t41.5 45l178 489q11 31-3 61.5T827-235L526-125Zm-28-75 302-110-179-490-301 110 178 490Zm62-300Z"/></svg>
                    </button>
                    <button class="lnk">
                        <p>Videos</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m608-368 46-166-142-98-46 166 142 98ZM160-207l-33-16q-31-13-42-44.5t3-62.5l72-156v279Zm160 87q-33 0-56.5-24T240-201v-239l107 294q3 7 5 13.5t7 12.5h-39Zm206-5q-31 11-62-3t-42-45L245-662q-11-31 3-61.5t45-41.5l301-110q31-11 61.5 3t41.5 45l178 489q11 31-3 61.5T827-235L526-125Zm-28-75 302-110-179-490-301 110 178 490Zm62-300Z"/></svg>
                    </button>
                </fieldset>
            </div>
        </div>

        
    </div>

</template>

<script>
export default {
  name: 'HomePg'
}
</script>

<style>
@import "../assets/styles/homeStyle.css";
</style>