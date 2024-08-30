<?php header('Refresh: 5; URL=https://amerbroker.pl/portfel-antyinflacyjny/'); ?>
<?php
if (count($_POST))
{
    ////////// USTAWIENIA //////////
    $email = 'kontakt@amerbroker.pl'; // Adres e-mail adresata
    $subject = 'Kontakt z formularza amerbroker.pl - Portfel Antyinflacyjny'; // Temat emaila
    $success_message = 'Dziękujemy. Wysłano wiadomość. Skontaktujemy się wkrótce.'; // Komunikat po sukcesie
    $error_message = 'Wystąpił błąd podczas wysyłania wiadomości'; // Komunikat błędu
    $charset = 'UTF-8'; // Strona kodowa
    //////////////////////////////
    
    $head =
    "MIME-Version: 1.0\r\n" .
    "Content-Type: text/plain; charset=$charset\r\n" .
    "Content-Transfer-Encoding: 8bit";
    $body = '';
    foreach ($_POST as $name => $value)
    {
        if (is_array($value))
        {
            for ($i = 0; $i < count($value); $i++)
            {
                $body .= "$name=" . (get_magic_quotes_gpc() ? stripslashes($value[$i]) : $value[$i]) . "\r\n";
            }
        }
        else $body .= "$name=" . (get_magic_quotes_gpc() ? stripslashes($value) : $value) . "\r\n";
    }
    
    if (mail($email, "=?$charset?B?" . base64_encode($subject) . "?=", $body, $head)) {
        echo json_encode(['message' => $success_message]);
    } else {
        echo json_encode(['message' => $error_message]);
    }
}
else
{
?>
<form action="?" method="post">
</form>
<?php
}
?>