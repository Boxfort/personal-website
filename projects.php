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
					<div class="col-sm-2 col-xs-12"><h3 class="page-title">PROJECTS.</h3></div>
					<div class="col-sm-8 col-xs-12 main-text">
						<?php
							$projects = get_projects();
							$middle = ceil(count($projects) / 2);

							echo "<div class='col-sm-6 col-xs-12'>";
							for($i = 0; $i < $middle; $i++)
							{
								$image = get_project_image($projects[$i]['project_id']);
								echo "
									<a href='project.php?id={$projects[$i]['project_id']}'>
									<div class='project-wrapper'>
										<img class='project-thumb' src='/img/{$image['img_path']}' alt='img'>
										<div class='project-title'>{$projects[$i]['project_name']}</div>
									</div>
									</a>
								";
							}
							echo "</div>";

							echo "<div class='col-sm-6 col-xs-12'>";
							for($i = $middle; $i < count($projects); $i++)
							{
								$image = get_project_image($projects[$i]['project_id']);
								echo "
									<a href='project.php?id={$projects[$i]['project_id']}'>
									<div class='project-wrapper'>
										<img class='project-thumb' src='/img/{$image['img_path']}' alt='img'>
										<div class='project-title'>{$projects[$i]['project_name']}</div>
									</div>
									</a>
								";
							}
							echo "</div>";

						?>
					</div>
					<div class="col-sm-2 col-xs-12 links">
						<?php include 'lib/module/nav.php' ?>
					</div>
				</div>
			</div>
		</div>
		<?php include 'lib/module/footer.php' ?>
	</body>
</html>
