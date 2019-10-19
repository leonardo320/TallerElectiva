<?php
    class Departments {
        public $code;
        public $name;

        function __construct($code, $name){
            $this->code = $code;
            $this->name = $name;
        }
        function getCode(){
            return $this->$code;
        }
        function getName(){
            return $this->$name;
        }
        function setCode($code){
            $this->$code = $code;
        }
        function setName($name){
            $this->$name = $name;
        }
        function toString(){
            return "[code=$this->$code , name=$this->$name]";
        }
    }
?>