<?php
    session_start();

    function is_ajax() {
        return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    }

    if (isset($_POST['addItem']) && isset($_POST['addItem2']) && isset($_POST['addItem3']) && isset($_POST['removeItem3']))// && isset($_SESSION["oi"]) && $_SESSION["oi"] == "oi")
    {
        $nome = $_POST['addItem'];
        $pontos = $_POST['addItem2'];
        $modo = $_POST['addItem3'];
        $vidas = $_POST['removeItem3'];

        $naoPode = array('>', '}', '"', "<script");
        $nome = str_replace($naoPode, "", $nome);

        if ($vidas < 0 || ($modo != "Hardcore" && $modo != "Normal" && $modo != "Insano") || $pontos % 10 != 0)
        {
            $file = fopen("../hacker.txt", "a") or die("Deu merda!");
            fwrite($file, "\r\n".$_SERVER["REMOTE_ADDR"]);
        }
        else if ($vidas == 0)
            $file = fopen("../records.txt", "a") or die("Deu merda!");
        else
            $file = fopen("../desistiram.txt", "a") or die("Deu merda!");
        
        fwrite($file, "\r\n".$modo);
        fwrite($file, "\r\n".$pontos);
        fwrite($file, "\r\n".$nome);
        
        fclose($file);

        $_SESSION["oi"] = "tchau";
        
        echo $nome;
    }
    else
    {
    	echo "Achou que ia ser tão fácil assim?";
    }

?>