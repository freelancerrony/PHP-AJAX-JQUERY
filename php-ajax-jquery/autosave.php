<?php include 'inc/header.php'; ?>
<h2>Check:- Ajax Auto Data Save.</h2>
<div class="content">
	
	<form method="POST" action="">
		<table>
			<tr>
				<td>Type Content</td>
				<td>:</td>
				<td>
					<textarea name="content" id="content"> </textarea>
				</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td>
					<input type="hidden" name="contentid" id="contentid">
				</td>
			</tr>
		</table>
		<style>#statussave{color:blue;}</style>
		<div id="statussave"></div>
	</form>
</div>
<?php include 'inc/footer.php'; ?>