<script>

import getWeatherFrom from '../lib/weather.js';

   
</script>


{#await getWeatherFrom() then tiempo}
    <h1>{tiempo.conditionText}</h1>
{/await}

<h1>Lo que está renderizado</h1>

<style>
    h1 {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>
