<script>
    import UserButton from 'clerk-sveltekit/client/UserButton.svelte'
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'


    let filler = [{name: "first", username: "hellow", password: "wassup"}, {name: "second", username: "goodbtye", password: "univeasdfasdfrse"},
                  {name: "third", username: "john", password: "cena"}, {name: "Fourth", username: "aneeshyboneechyelectric", password: "hi"}]

    function copyUsername(i) {
        var text = filler[i].username
        navigator.clipboard.writeText(text);

        // Alert the copied text
        alert("Copied the text: " + text);
    }
    function copyPassword(i) {kkkkkkkkkkkk
        var text = filler[i].password

        navigator.clipboard.writeText(text);

        // Alert the copied text
        alert("Copied the text: " + text);
    }
</script>


<div class = "allContainer">
    <a href="/addThing">Add A Thing</a>
    <UserButton afterSignOutUrl="/" />
    <div class="title">HERE'S YOUR STUFFZ</div>
    {#each filler as {name, username, password}, i}
        <div class="contentContainer">
            <div class = "name">{name}</div>
            <div class="grid-container">
                <div class="item">Username: </div>
                <div class="itemTwo">{username}</div>
                <button class="itemThree" on:click={() => {copyUsername(i)}}>Copy</button>
                <div class="item">Password: </div>
                <div class="itemTwo">{password}</div>
                <button class="itemThree" on:click={() => {copyPassword(i)}}>Copy</button>
            </div>
        </div>
    {/each}
</div>



<style>
    :global(body) { /* this will apply to <body> */ margin: 0; padding: 0; background-color: hsl(209, 36%, 86%); overflow-x: hidden;}
    .title{
        margin-top: 3vh;;
        font-size: 4vh;
        font-weight: bold;
    }
    .allContainer{
        background-color: hsl(209, 36%, 86%);
        display:flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;;
        align-items: center;
    }
    .contentContainer{
        font-size: 2vh;
        color: black;
        padding: 5vh;
        border-bottom: 1px solid;
    }
    .name{
        font-weight:500;
        padding: 0.5vh;
        color: black;
        margin-bottom: 1.5vh;
        font-size: 2.5vh;
    }
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 10px;
    }

    .item {
        font-size: 2vh;
        padding: 0.5vh;
    }
    .itemTwo{
        font-size: 2vh;
        padding: 0.5vh;
        background-color: bisque;
        border-radius: 10%;;
    }
    .itemThree{
        font-size: 2vh;
        padding: 0.5vh;
        background-color: blanchedalmond;
        border-radius: 10%;
    }
</style>