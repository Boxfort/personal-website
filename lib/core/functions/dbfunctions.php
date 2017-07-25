<?php

function get_projects()
{
	$db = new DbConnection();
	$data = array();
	$stmt = $db->prepare("SELECT * FROM project");

	//Ensure the statement can be executed successfully
	$isOkay = $stmt->execute();
	if($isOkay)
	{
		//Returns an array index by column name.
		$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $data;
	}

	return false;
}

function get_project($id)
{
	$db = new DbConnection();
	$data = array();
	$stmt = $db->prepare("SELECT * FROM project WHERE project_id = :id");

	$stmt->bindParam(":id", $id, PDO::PARAM_INT);

	$isOkay = $stmt->execute();
	if($isOkay)
	{
		$data = $stmt->fetch(PDO::FETCH_ASSOC);
		return $data;
	}

	return false;
}

function get_project_image($id)
{
	$db = new DbConnection();
	$data = array();
	$stmt = $db->prepare("SELECT * FROM project_image WHERE project_id = :id");

	$stmt->bindParam(":id", $id, PDO::PARAM_INT);

	$isOkay = $stmt->execute();
	if($isOkay)
	{
		$data = $stmt->fetch(PDO::FETCH_ASSOC);
		return $data;
	}

	return false;
}

function get_project_images($id)
{
	$db = new DbConnection();
	$data = array();
	$stmt = $db->prepare("SELECT * FROM project_image WHERE project_id = :id");

	$stmt->bindParam(":id", $id, PDO::PARAM_INT);

	$isOkay = $stmt->execute();
	if($isOkay)
	{
		$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $data;
	}

	return false;
}

function get_project_tech($id)
{
	$db = new DbConnection();
	$data = array();
	$stmt = $db->prepare("SELECT tech.tech_html FROM tech INNER JOIN project_tech ON tech.tech_id = project_tech.tech_id WHERE project_tech.project_id = :id");

	$stmt->bindParam(":id", $id, PDO::PARAM_INT);

	$isOkay = $stmt->execute();
	if($isOkay)
	{
		$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $data;
	}

	return false;
}

?>
