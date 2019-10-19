<?php

    require_once ('Departments.php');
    require_once ('Towns.php');

    $opt = $_REQUEST['opt'];
    if ($opt==1) {
        echo loadDptos();
    }
    else {
        echo loadtowns();
    }

    function loadDptos(){

        $url = "./resources/files/departments.json";
        $file = fopen($url,"r");
        $content = fread($file,filesize($url));
        $dptos = json_decode($content,true);
        $arraydepartments = [];

        foreach ($dptos as $dpto) {
            $code = $dpto['code'];
            $name = $dpto['name'];
            $departamentos = new Departments($code,$name);
            array_push($arraydepartments,$departamentos);
        }
        
        return json_encode($arraydepartments);
    }
    function loadtowns(){
        $url = "./resources/files/towns.json";
        $file = fopen($url,"r");
        $content = fread($file,filesize($url));
        $towns = json_decode($content,true);

        $arrayTowns = [];
        foreach($towns as $town){
            $code = $town['code'];
            $department = $town['department'];
            $name = $town['name'];
            $ciudades = new Towns($code,$department,$name);
            array_push($arrayTowns,$ciudades);
        }

        return json_encode($arrayTowns);
    }
?>