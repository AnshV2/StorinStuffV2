
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<script>
    import UserButton from 'clerk-sveltekit/client/UserButton.svelte'
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'
</script>


<div class = "title">
    STORE ALL YOUR STUFFZ HERE
</div>
<div class="titleTwo">YA KNOW YOUR USERNAMES AND PASSWORDS AND WHAT NOT</div>
<br>
<div class="rest">I rlly just needed a place to store my stuff I won't lie so I made this and anyone else can store there stuff too</div>
<div class="rest">have some fun storin your stuff idk free service if you'd like to use it enyoy</div>
<br>
<a class="buttonthing" href="/signin">SIGN IN TO THE SITE RN. THIS IS A BUTTON CLICK THIS BUTTON TO SIGN IN RIGHT NOW. DO IT NOW</a>



<style>
    :global(body) { /* this will apply to <body> */ margin: 0; padding: 0; background-color: hsl(209, 36%, 86%); overflow-x: hidden;}
    
	.title{
		margin-top: 30vh;
		display:flex;
		font-size: 35px;
		font-weight: bold;
		justify-content: center;
		align-items: center;
	}
	.titleTwo{
		display:flex;
		font-size: 35px;
		font-weight: bold;
		justify-content: center;
		align-items: center;
	}
	.rest{
		display:flex;
		font-size: 20px;
		justify-content: center;
		align-items: center;
	}
	.buttonthing{
		display:flex;
		font-size: 20px;
		justify-content: center;
		align-items: center;
	}
</style>