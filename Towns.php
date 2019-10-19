<?php
    class Towns{
        public $code;
        public $department;
        public $name;

        function __construct($code, $department, $name){
            $this->code = $code;
            $this->department = $department;
            $this->name = $name;
        }
        function getCode(){
            return $this->$code;
        }
        function getDepartment(){
            return $this->$department;
        }
        function getName(){
            return $this->$name;
        }
        function setCode($code){
            $this->$code = $code;
        }
        function setDepartment($department){
            $this->$department = $department;
        }
        function setName($name){
            $this->$name = $name;
        }
        function toString(){
            return "[code=$this->$code , department=$this->$department , name=$this->$name]";
        }
    }
?>