<?php
    session_start();

    function is_ajax() {
        return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    }

    if (isset($_POST['addItem']) && isset($_POST['addItem2']) && isset($_POST['addItem3']) && isset($_POST['removeItem3']) && is_ajax())// && isset($_SESSION["oi"]) && $_SESSION["oi"] == "oi")
    {
        $nome = $_POST['addItem'];
        $pontos = $_POST['addItem2'];
        $modo = $_POST['addItem3'];
        $vidas = $_POST['removeItem3'];

        if ($vidas == 0 && $pontos > 10 && strpos($nome, '>') !== false && strpos($nome, '}') !== false && strpos($nome, '\"') !== false)
        {
            $file = fopen("records.txt", "a") or die("Deu merda!");
            
            fwrite($file, "\r\n".$modo);
            fwrite($file, "\r\n".$pontos);
            fwrite($file, "\r\n".$nome);
            
            fclose($file);

            $_SESSION["oi"] = "tchau";
            
            echo json_encode(array($nome));
        }
        else
        {
            echo "Ou tá hackeando ou é ruim mesmo...";
        }
    }
    else
    {
    	echo "Achou que ia ser tão fácil assim?";
    }

?>