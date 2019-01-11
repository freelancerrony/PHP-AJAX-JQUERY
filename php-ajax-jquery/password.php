<?php include 'inc/header.php'; ?>
<h2>Check:- Create a Show Password.</h2>
<div class="content">
	
	<form method="post" action="">
		<table>
			<tr>
				<td>User Name</td>
				<td>:</td>
				<td><input type="text"  placeholder="Please Enter Skill..."></td>
			</tr>
			<tr>
				<td>Password</td>
				<td>:</td>
				<td><input type="password" id="password" name="password"  placeholder="Please Enter Password..."></td>
			</tr>
			<tr>
				<td>Password</td>
				<td>:</td>
				<td>
				<button type="button" name="showpassword" id="showpassword" >Show Password</button>
				</td>
			</tr>
		</table>
		<div id="statuspass"></div>
	</form>
</div>
<?php include 'inc/footer.php'; ?>