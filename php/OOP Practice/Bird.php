<?php

class Animal {
    public $eatMeat;
    public $numLegs;
    
    public function __construct($eatMeat, $numLegs) {
        $this->eatMeat = $eatMeat;
        $this->numLegs = $numLegs;
    }
    
    public function hunt () {
        $meatStatus = "";
        if ($this->eatMeat === TRUE) {
            $meatStatus = 'eat meat';
        }
        else {
            $meatStatus = 'do not eat meat';
        }
        return "I " . $meatStatus . " and I have " . $this->numLegs . " legs";
   }
}



