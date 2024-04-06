<script>
    import UserButton from 'clerk-sveltekit/client/UserButton.svelte'
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'
    export let data;


    let filler = data.data

    function copyUsername(i) {
        var text = filler[i].username
        navigator.clipboard.writeText(text);

        // Alert the copied text
        alert("Copied the text: " + text);
    }
    function copyPassword(i) {
        var text = filler[i].password

        navigator.clipboard.writeText(text);

        // Alert the copied text
        alert("Copied the text: " + text);
    }
</script>

<div class = "profilePic"><UserButton afterSignOutUrl="/" className = "profilePic"/></div>
<a href="/addThing" class="plus">Add A Thing</a>
<div class = "allContainer">
    <div class="title">HERE'S YOUR STUFFZ</div>
    {#each filler as {ID, name, username, password}, i}
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
            <button on:click={async() => {
                const response = await fetch('/api/delete', {
                    method: 'DELETE',
                    body: JSON.stringify({ id: ID }),
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                filler = filler.filter(member => member.ID !== ID);

            }} class = "delete">delete thing</button>
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
        padding: 4vh;
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
    .profilePic{
        position:absolute;
        left: 1vw;
        top:1vh;
    }
    a:link, a:visited {
        position:absolute;
        left: 4.5vw;
        top: 1vh;
        background-color: white;
        color: black;
        border: 2px solid darksalmon;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 5px;
    }

    a:hover, a:active {
        background-color:darksalmon;
        color: white;
    }

    .delete{
        margin-top: 3vh;;
        background-color: white;
        color: black;
        border: 2px solid darksalmon;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 5px;
    }

    .delete:hover{
        background-color:darksalmon;
        color: white;
    }
</style>