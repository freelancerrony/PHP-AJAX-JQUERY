<?php include 'inc/header.php'; ?>
<h2>Check:- Autocomplete textbox.</h2>
<div class="content">
	<style>
		.skill{background: #fba991; margin-left: 50px; padding:6px 30px; width:193px;}
		.skill ul{margin: 0;padding: 0;list-style:none;}

		.skill ul li{cursor: pointer;}
	</style>
	<form method="POST" action="">
		<table>
			<tr>
				<td>Skill</td>
				<td>:</td>
				<td><input type="text" name="skill" id="skill" placeholder="Please Enter Skill..."></td>
			</tr>
		</table>
		<div id="status"></div>
	</form>
</div>
<?php include 'inc/footer.php'; ?>