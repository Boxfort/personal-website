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

?>
