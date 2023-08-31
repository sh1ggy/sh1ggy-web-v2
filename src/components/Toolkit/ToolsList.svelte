<script lang="ts">
  import { AstroInstance } from "astro";
  export let tools: AstroInstance[];
</script>

<div>
  <ul class="list-disc ml-8">
    {#each tools as tool}
      <li>
        <a class="text-link" href={tool.url}>{tool.url}</a>
      </li>
    {/each}
  </ul>
</div>
