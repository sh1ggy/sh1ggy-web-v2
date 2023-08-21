<script>
  let counter = 0;
  function handleClick() {
    counter++;
  }
  // Conditionally render either the bpm modes using astro
</script>
<div>{counter}</div>
<button on:click={handleClick}>click</button>
