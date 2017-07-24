<!DOCTYPE html>
<html>
<head>
	<?php 
		include 'lib/module/head.php';
		include 'lib/core/dbconnection.php';
		include 'lib/core/functions/dbfunctions.php';

		$project = get_project($_GET['id']);
		if($project == false || empty($project))
		{
			header( 'Location: /projects.php' );
		}
	?>
</head>
<body>
	<?php include 'lib/module/smallheader.php' ?>
	<div class="container">
		<div class="content">
			<div class="row">
				<div class="col-sm-3 col-xs-12"><h3 class='page-title'><?php echo "{$project['project_name']}" ?></h3></div>
				<div class="col-sm-7 col-xs-12">Main text here</div>
				<div class="col-sm-2 col-xs-12">Technologies Used</div>
			</div>
		</div>
	</div>
</body>
</html>
