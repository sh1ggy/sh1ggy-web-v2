<script>
  let counter = 0;
  function handleClick() {
    counter++;
  }
</script>
<div>{counter}</div>
<button on:click={handleClick}>click</button>
