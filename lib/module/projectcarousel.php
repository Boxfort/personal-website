<?php $images = get_project_images($project['project_id']); ?>

<div id="projectCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
	<li data-target='#projectCarousel' data-slide-to='0' class='active'></li>
	<?php 
		for($i = 1; $i < count($images); $i++)
		{
			echo "<li data-target='#projectCarousel' data-slide-to='{$i}'></li>";
		}
	?>
  </ol>

<!-- Wrapper for slides -->
<div class="carousel-inner">
	<div class="item active">
		<img src="img/<?php echo $images[0]['img_path'] ?>" alt="Image">
	</div>
	<?php
		for($i = 1; $i < count($images); $i++)
		{
			echo "
				<div class='item'>
					<img src='img/{$images[$i]['img_path']}' alt='image'>
				</div>
			";
		}
	?>
</div>

<!-- Left and right controls -->
<a class="left carousel-control" href="#projectCarousel" data-slide="prev">
	<span class="glyphicon glyphicon-chevron-left"></span>
	<span class="sr-only">Previous</span>
</a>
<a class="right carousel-control" href="#projectCarousel" data-slide="next">
	<span class="glyphicon glyphicon-chevron-right"></span>
	<span class="sr-only">Next</span>
</a>
</div>
