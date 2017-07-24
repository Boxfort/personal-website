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
				<div class="col-sm-2 col-xs-12"><h3 class='page-title'><?php echo "{$project['project_name']}" ?></h3></div>
				<div class="col-sm-8 col-xs-12 main-text">
					<?php include 'lib/module/projectcarousel.php' ?>
					<?php echo "{$project['project_description']}" ?>
				</div>
				<div class="col-sm-2 col-xs-12">
					<h3> Technologies Used </h3>
					<ul>
						<li><i class="devicon-javascript-plain colored"></i> Javascript</li>
						<li><i class="devicon-php-plain colored"></i> PHP</li>
						<li><i class="devicon-html5-plain colored"></i> HTML</li>
						<li><i class="devicon-css3-plain colored"></i> CSS</li>
					</ul>
					<h3> Links </h3>
					<ul>
						<a href='<?php echo $project['github_url'] ?>'><li><i class="devicon-github-plain colored"></i> Project Repository</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<?php include 'lib/module/footer.php' ?>
</body>
</html>
