<?php
    session_start();

    function is_ajax() {
        return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    }

    if (isset($_POST['addItem']) && isset($_POST['addItem2']) && isset($_POST['removeItem3']) && is_ajax())// && isset($_SESSION["oi"]) && $_SESSION["oi"] == "oi")
    {
        $nome = $_POST['addItem'];
        $pontos = $_POST['addItem2'];
        $vidas = $_POST['removeItem3'];

        if ($vidas == 0 && $pontos >= 10)
        {
            $file = fopen("records.txt", "a") or die("Deu merda!");
            
            fwrite($file, "\r\n".$nome);
            fwrite($file, "\r\n".$pontos);
            
            fclose($file);
            $_SESSION["oi"] = "tchau";
            echo json_encode(array($nome));
        }
    }
    else
    {
    	echo "Achou que ia ser tão fácil assim?";
    }

?>