<script>
    
</script>

<div class="container">
    <div class="title">ADD A THING </div>
    <a href = "/fun">SEE YOUR STUFFZ</a>
    <form method="POST">
        <label>
            Name
            <input name="Name" type="name">
        </label>
        <label>
            Username
            <input name="Username" type="username">
        </label>
        <label>
            Password
            <input name="Password" type="password">
        </label>
        <button class="buttonOne">Add Item</button>
    </form>
</div>


<style>
    :global(body) { /* this will apply to <body> */ margin: 0; padding: 0; background-color: hsl(209, 36%, 86%); overflow-x: hidden;}
    .container{
        height:80vh;
        width:100vw;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .title{
        font-size:30px;
        font-weight: bold;
        margin-bottom: 4vh;
    }
    input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    }
    .buttonOne {
        margin-top: 1vh;
        background-color: white;
        color: black;
        border: 2px solid darksalmon;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 5px;
        font-size:17px;
    }

    .buttonOne:hover {
        background-color:darksalmon;
        color: white;
    }
    a:link, a:visited {
        position:absolute;
        left: 1vw;
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
</style>