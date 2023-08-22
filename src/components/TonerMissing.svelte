<script lang="ts">
    import Checkbox from "./Checkbox.svelte";

    /// Values from 0 to 255
    interface RGBAPixel {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    interface RGBPixel {
        r: number;
        g: number;
        b: number;
    }

    interface CMYKPixel {
        c: number;
        m: number;
        y: number;
        k: number;
    }

    let file: File | null = null;

    // Each of these are values from 0 to 1
    let C = true;
    let M = true;
    let Y = true;
    let K = true;
    let originalImageCanvas: HTMLCanvasElement;
    let resultCanvas: HTMLCanvasElement;

    let w = 0;
    let h = 0;
    let originalImage: CMYKPixel[] = [];

    // 0 to 255
    function RGBAtoRGB(rgba: RGBAPixel): RGBPixel {
        const a = rgba.a / 255;
        var r3 = Math.round((1 - a) * 255 + a * rgba.r);
        var g3 = Math.round((1 - a) * 255 + a * rgba.g);
        var b3 = Math.round((1 - a) * 255 + a * rgba.b);
        return { r: r3, g: g3, b: b3 };
    }

    // 0 to 1
    function rgb2cmyk(rgb: RGBPixel): CMYKPixel {
        let k = 0;
        //BLACK
        if (rgb.r == 0 && rgb.g == 0 && rgb.b == 0) {
            k = 1;
            return { c: 0, m: 0, y: 0, k };
        }
        let c = 1 - rgb.r / 255;
        let m = 1 - rgb.g / 255;
        let y = 1 - rgb.b / 255;

        let minCMY = Math.min(c, Math.min(m, y));

        c = (c - minCMY) / (1 - minCMY);
        m = (m - minCMY) / (1 - minCMY);
        y = (y - minCMY) / (1 - minCMY);
        k = minCMY;

        return { c, m, y, k };
    }

    // 0 to 255
    function cmyk2rgb(cmyk: CMYKPixel): RGBPixel {
        let r = 255 * (1 - cmyk.c) * (1 - cmyk.k);
        let g = 255 * (1 - cmyk.m) * (1 - cmyk.k);
        let b = 255 * (1 - cmyk.y) * (1 - cmyk.k);

        return { r, g, b };
    }

    function onSliderChange() {
        resultCanvas.width = w;
        resultCanvas.height = h;
        const ctx = resultCanvas.getContext("2d");
        debugger;

        var imageData = ctx.createImageData(w, h);
        let data = new Uint8ClampedArray(w * h * 4);

        // var data = imageData.data; /// view for the canvas buffer
        var len = data.length; /// length of buffer
        var i = 0; /// cursor for RGBA buffer
        var t = 0; /// cursor for RGB buffer

        for (; i < len; i += 4) {
            const cmyk = originalImage[t];
            let updatedcmyk = {
                // TODO: add a slider for each of these
                // c: cmyk.c * C,
                c: cmyk.c * (C ? 1 : 0),
                m: cmyk.m * (M ? 1 : 0),
                y: cmyk.y * (Y ? 1 : 0),
                k: cmyk.k * (K ? 1 : 0),
            };

            const rgb = cmyk2rgb(updatedcmyk);

            data[i] = rgb.r; /// copy RGB data to canvas from custom array
            data[i + 1] = rgb.g;
            data[i + 2] = rgb.b;
            data[i + 3] = 255; /// remember this one with createImageBuffer

            t += 1;
        }

        imageData.data.set(data);
        ctx.putImageData(imageData, 0, 0);
    }

    function handleFileChange(e: Event) {
        const target = e.target as HTMLInputElement;
        const files = target.files;
        if (files && files.length > 0) {
            file = files[0];
            console.log(file);
            const reader = new FileReader();

            reader.onload = (e) => {
                const img = new Image();
                if (!e.target) {
                    return;
                }
                console.log({ e });
                img.onload = (e) => {
                    console.log({ img });

                    w = img.width;
                    h = img.height;

                    originalImageCanvas.width = w;
                    originalImageCanvas.height = h;
                    const ctx = originalImageCanvas.getContext("2d");
                    ctx.drawImage(img, 0, 0);

                    const imageData = ctx.getImageData(
                        0,
                        0,
                        img.width,
                        img.height
                    );

                    debugger;
                    const data = imageData.data;
                    for (let i = 0; i < data.length; i += 4) {
                        const rgba = {
                            r: data[i],
                            g: data[i + 1],
                            b: data[i + 2],
                            a: data[i + 3],
                        };
                        const rgb = RGBAtoRGB(rgba);
                        const cmyk = rgb2cmyk(rgb);
                        // debugger;
                        originalImage.push(cmyk);
                    }

                    onSliderChange();
                };

                img.src = e.target.result as string;
            };
            reader.readAsDataURL(file);
        } else {
            let ctx = originalImageCanvas.getContext("2d");
            ctx.clearRect(
                0,
                0,
                originalImageCanvas.width,
                originalImageCanvas.height
            );
            ctx = resultCanvas.getContext("2d");

            ctx.clearRect(0, 0, resultCanvas.width, resultCanvas.height);
        }
    }
</script>

<div>
    <!-- <input type="range" step="0.01" min="0" max="1" class="range" bind:value={C} /> -->
    <Checkbox bind:checked={C} name="Cyan" />
    <Checkbox bind:checked={M} name="Magenta" />
    <Checkbox bind:checked={Y} name="Yellow" />
    <Checkbox bind:checked={K} name="Black" />

    <canvas id="originalImageCanvas" bind:this={originalImageCanvas} />
    <canvas id="resultCanvas" bind:this={resultCanvas} />

    <!-- {#if avatar}
        <img class="avatar" src={avatar} alt="d" />
    {:else}
        <img
            class="avatar"
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
            alt=""
        />
    {/if}
    <img
        class="upload"
        src="https://static.thenounproject.com/png/625182-200.png"
        alt=""
        on:click={() => {
            fileinput.click();
        }}
    />
    <div
        class="chan"
        on:click={() => {
            fileinput.click();
        }}
    >
        Choose Image
    </div>

    <input
        style="display:none"
        type="file"
        accept=".jpg, .jpeg, .png"
        on:change={(e) => onFileSelected(e)}
        bind:this={fileinput}
    /> -->

    <input type="file" id="file" name="file" on:change={handleFileChange} />
</div>

<style>
    /* https://svelte.dev/repl/b17c13d4f1bb40799ccf09e0841ddd90?version=4.2.0 */

    #app {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }

    .upload {
        display: flex;
        height: 50px;
        width: 50px;
        cursor: pointer;
    }
    .avatar {
        display: flex;
        height: 200px;
        width: 200px;
    }
</style>
