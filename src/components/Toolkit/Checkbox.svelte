<script lang="ts">
    export let name = "checkbox";
    export let checked: boolean;

    // It is ok to bind twice basically its a way of passing reactivity from parent to child, see here for example:
    //https://github.com/skeletonlabs/skeleton/blob/dev/packages/skeleton/src/lib/components/SlideToggle/SlideToggle.svelte
</script>

<div class="form-control">
    <label class="label cursor-pointer">
        <!-- Potential to use slot here -->
        <span class="label-text">{name}</span>
        <input type="checkbox" bind:checked class="checkbox checkbox-accent" />
    </label>
</div>
