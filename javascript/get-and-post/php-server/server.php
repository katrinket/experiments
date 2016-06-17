<div>Might store this in some sort of db?? remember im run on server!</div>

<table>
<?php 


    foreach ($_REQUEST as $key => $value) {
        echo "<tr>";
        echo "<td>";
        echo $key;
        echo "</td>";
        echo "<td>";
        echo $value;
        echo "</td>";
        echo "</tr>";
    }


?>
</table>