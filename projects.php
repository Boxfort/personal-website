<!DOCTYPE HTML>
<html>
	<head>
		<?php 
			include 'lib/module/head.php';
			include 'lib/core/dbconnection.php';
			include 'lib/core/functions/dbfunctions.php';
		?>
		<title>Jack Anderson - Projects</title>
	</head>
	<body>
		<?php include 'lib/module/smallheader.php' ?>
		<div class="container">
			<div class="content">
				<div class="row">
					<div class="col-sm-3 col-xs-12"><h3 class="page-title">PROJECTS.</h3></div>
					<div class="col-sm-7 col-xs-12">
						<?php
							$projects = get_projects();
							$count = 0;
							$close = false;

							foreach (array_chunk($projects, 2) as $projectChunk)
							{
								echo "<div class='row'";
								foreach ($projectChunk as $project)
								{
									echo "<div class='col-sm-6 col-xs-12'>{$project[project_name]}</div>";
								}
								echo "</div>";
							}
						?>
					</div>
					<div class="col-sm-2 col-xs-12 links">
						<?php include 'lib/module/nav.php' ?>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
